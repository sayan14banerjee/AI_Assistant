from groq import Groq
from app.core.config import GROQ_API_KEY

grock_client = Groq(api_key=GROQ_API_KEY)

class LLMService():
    def __init__(self):
        self.client = grock_client


    def _create_completion(self, messages: list, stream: bool = False):
        return self.client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=messages,
            stream=stream
        )

    def generate_response(self, messages: list) -> str:
        response = self._create_completion(messages)

        return response.choices[0].message.content

    def generate_stream(self, messages: list):
        stream = self._create_completion(
            messages,
            stream=True
        )

        for chunk in stream:

            content = chunk.choices[0].delta.content
            if content:
                yield content