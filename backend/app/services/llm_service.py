from groq import Groq
from app.core.config import GROQ_API_KEY

grock_client = Groq(api_key=GROQ_API_KEY)

class LLMService():
    def __init__(self):
        self.client = grock_client


    def generate_response(self, messages: list) -> str:
        response = self.client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=messages
        )

        return response.choices[0].message.content
