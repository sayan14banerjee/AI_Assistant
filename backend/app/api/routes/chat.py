from fastapi import APIRouter

from app.schemas.chat import ChatRequest, ChatResponse
from app.services.llm_service import LLMService


router = APIRouter()
llm_service = LLMService()

@router.post("/")
async def chat(req: ChatRequest) -> ChatResponse:
    messages = [{"role": "user", "content": req.message}]
    response = llm_service.generate_response(messages)
    return ChatResponse(response=response)
