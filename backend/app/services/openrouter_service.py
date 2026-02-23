import requests
from fastapi import HTTPException
from ..config import settings
from ..resume_context import RESUME_CONTEXT

def ask_ai(question: str):
    try:
        response = requests.post(
    "https://openrouter.ai/api/v1/chat/completions",
    headers={
        "Authorization": f"Bearer {settings.OPENROUTER_API_KEY}",
        "Content-Type": "application/json",
        "HTTP-Referer": "https://portfolio-ai-m6w2.onrender.com",
        "X-Title": "AI Portfolio",
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

    except requests.exceptions.RequestException as e:
        print("🔥 OpenRouter Error:", e)
        raise HTTPException(status_code=500, detail=str(e))