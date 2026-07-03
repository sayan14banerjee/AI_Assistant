from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from app.api.routes import chat
from web_search import searchWeb

from app.api.routes import search

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(
    chat.router,
    prefix="/chat",
    tags=["Chat"]   
    )

app.include_router(
    search.router,
    prefix="/chat/search",
    tags=["Search"]
)

class SearchRequest(BaseModel):
    query: str


@app.get("/")
async def root():
    return {"message": "AI Assistant API is running."}
