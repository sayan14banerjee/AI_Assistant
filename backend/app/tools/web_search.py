from tavily import TavilyClient

from app.core.config import TAVILY_API_KEY

class WebSearchTool():
    def __init__(self):
        self.client = TavilyClient(api_key=TAVILY_API_KEY)

    def search(self, query: str):
        """
        Perform a web search using the Tavily API.

        Args:
            query (str): The search query.

        Returns:
            dict: The search results.
        """
        response = self.client.search(
            query = query,
            search_type = "web",
            search_engine = "google",
            search_depth = "advanced",
            max_results = 5
            )
        return response