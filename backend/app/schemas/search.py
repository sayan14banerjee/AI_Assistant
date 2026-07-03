from pydantic import BaseModel

class SearchRequest(BaseModel):
    query: str

class Source(BaseModel):
    title: str
    url: str

class SearchResponse(BaseModel):
    answer: str
    sources: list[Source]