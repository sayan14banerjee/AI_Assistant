from fastapi import APIRouter

from app.schemas.chat import ChatRequest, ChatResponse
from app.services.llm_service import get_chat_response


router = APIRouter()


@router.post("/chat")
async def chat(req: ChatRequest) -> ChatResponse:
    response = get_chat_response(req.message)
    return ChatResponse(response=response)
