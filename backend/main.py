from fastapi import FastAPI
from pydantic import BaseModel
from groq import Groq
from dotenv import load_dotenv
import os
from fastapi.middleware.cors import CORSMiddleware
from web_search import searchWeb 


load_dotenv()

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

class CheckRequest(BaseModel):
    message: str
class SearchRequest(BaseModel):
    query: str

@app.post("/chat")
async def chat(req: CheckRequest):
    response = client.chat.completions.create(
        model = "llama-3.3-70b-versatile",
        messages = [
            {
                "role": "user",
                "content": req.message
            }
        ]
    )

    return {
        "response": response.choices[0].message.content
    }

@app.get("/")
async def root():
    return {"message": "AI Assistant API is running."}

@app.post("/search")
async def web_search(req: SearchRequest):
    result = searchWeb(req.query)
    
    return {
        "results": result
    }   


@app.post("/chat-with-search")
def chat_with_search(req: SearchRequest):

    search_results = searchWeb(req.query)

    context = ""

    for item in search_results["results"]:
        context += f"""
        Title: {item['title']}
        Content: {item['content']}
        URL: {item['url']}
        """

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "system",
                "content": f"""
                Use the following search results
                to answer the user.

                {context}
                """
            },
            {
                "role": "user",
                "content": req.query
            }
        ]
    )

    return {
        "answer": response.choices[0].message.content,
        "sources": [
            item["url"]
            for item in search_results["results"]
        ]
    }
