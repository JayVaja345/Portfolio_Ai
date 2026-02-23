from fastapi import APIRouter, HTTPException
from datetime import datetime
from ..schemas import ChatRequest, ChatResponse
from ..services.openrouter_service import ask_ai
from ..database import chat_collection

router = APIRouter()

@router.post("/", response_model=ChatResponse)
async def chat(request: ChatRequest):
    try:
        answer = ask_ai(request.question)

        chat_document = {
            "question": request.question,
            "answer": answer,
            "created_at": datetime.utcnow()
        }

        await chat_collection.insert_one(chat_document)

        return {"answer": answer}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))