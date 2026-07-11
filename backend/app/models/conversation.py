from datetime import datetime
from typing import List
from uuid import uuid4

from sqlalchemy import  DateTime, String
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.database.base import Base
# from app.models.message import Message

class Conversation(Base):
    __tablename__ = "conversations"

    id: Mapped[str] = mapped_column(
        String(36), 
        primary_key=True, 
        default=lambda: str(uuid4())
        )
    
    title: Mapped[str] = mapped_column(
        String(255), nullable=False,
        default = "New Chat"
        )
    
    created_at: Mapped[datetime] = mapped_column(
        DateTime, 
        default=datetime.utcnow
        )
    
    updated_at: Mapped[datetime] = mapped_column(
        DateTime, 
        default=datetime.utcnow, 
        onupdate=datetime.utcnow
        )

    # Relationship to messages
    messages: Mapped[List["Message"]] = relationship(
        "Message", 
        back_populates="conversation", 
        cascade="all, delete-orphan"
        )