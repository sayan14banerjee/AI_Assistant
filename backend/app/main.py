from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from app.api.routes.chat import router as chat_router
from web_search import searchWeb


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(chat_router)


class SearchRequest(BaseModel):
    query: str


@app.get("/")
async def root():
    return {"message": "AI Assistant API is running."}


@app.post("/search")
async def web_search(req: SearchRequest):
    result = searchWeb(req.query)

    return {
        "results": result,
    }

