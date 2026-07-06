from fastapi import APIRouter
from fastapi.responses import StreamingResponse

from app.schemas.chat import ChatRequest
from app.services.llm_service import LLMService

router = APIRouter()

llm_service = LLMService()

@router.post("/stream")
async def stream_chat(request: ChatRequest):
    messages =[
        {
            "role": "user",
            "content": request.message
        }
    ]

    return StreamingResponse(
        llm_service.generate_stream(messages),
        media_type="text/plain"
    )
