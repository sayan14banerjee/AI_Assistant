from sqlalchemy import create_engine

from app.database.base import Base

Database_URL = "sqlite:///./NEXORA.db"  # Replace with your actual database URL

engine = create_engine(
    Database_URL,
    connect_args={"check_same_thread": False},  # Required for SQLite
    echo=True  # Enable SQL query logging for debugging
    )


