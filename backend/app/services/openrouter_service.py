import requests
from ..config import settings
from ..resume_context import RESUME_CONTEXT

def ask_ai(question: str):

    response = requests.post(
        "https://openrouter.ai/api/v1/chat/completions",
        headers={
            "Authorization": f"Bearer {settings.OPENROUTER_API_KEY}",
            "Content-Type": "application/json",
        },
        json={
            "model": "mistralai/mistral-7b-instruct",
            "messages": [
                {"role": "system", "content": RESUME_CONTEXT},
                {"role": "user", "content": question}
            ]
        },
        timeout=30
    )

    response.raise_for_status()

    data = response.json()
    return data["choices"][0]["message"]["content"]