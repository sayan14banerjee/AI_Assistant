from app.services.llm_service import LLMService
from app.tools.web_search import WebSearchTool

class SearchService:

    def __init__(self):
        self.llm_service = LLMService()
        self.web_search_tool = WebSearchTool()

    def search(self, query: str) -> str:

        #step 1: Perform a web search using the Tavily API
        search_results = self.web_search_tool.search(query)

        #step 2: Build context 
        context =""

        for result in search_results["results"]:
            context += f""" 
            title: {result['title']}
            
            Content:
            {result['content']}

            URL:
            {result['url']}

            -----------------------------------

            """

            #step 3: Generate a response using the LLM with the context and the original query
            messages = [
            {
                "role": "system",
                "content": f"""
                You are an AI assistant.

                Answer the user's question ONLY using the web search results below.

                If the search results don't contain enough information,
                say you couldn't find sufficient information.

                Search Results:

                {context}
                """
            },
            {
                "role": "user",
                "content": query
            }
            ]
            
            #step 4: Ask LLm
            answer = self.llm_service.generate_response(messages)

            #step 5: Return the answer
            return {
                "answer": answer,
                "sources": [
                    {
                        "title": result['title'],
                        "url": result['url']
                    }
                    for result in search_results["results"]
                ]
            }