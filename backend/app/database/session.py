from sqlalchemy.orm import sessionmaker
from app.database.database import engine

SessionLocal = sessionmaker(
    autocommit=False, 
    autoflush=False, 
    bind=engine
    )

def get_db():
    """
    Dependency function to get a database session.
    This function can be used in FastAPI routes to provide a database session.
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()