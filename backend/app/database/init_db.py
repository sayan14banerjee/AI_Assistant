from app.database.database import engine
from app.database.base import Base

def init_db():
    # Import all models so SQLAlchemy knows about them
    from app.models import Conversation, Message

    Base.metadata.create_all(bind=engine)