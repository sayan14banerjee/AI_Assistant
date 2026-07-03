from fastapi import APIRouter, Depends
from app.services.search_service import SearchService
from app.schemas.search import SearchRequest, SearchResponse

router = APIRouter()

search_service = SearchService()

@router.post("/search", response_model=SearchResponse)
async def search(request: SearchRequest):
    return search_service.search(request.query)