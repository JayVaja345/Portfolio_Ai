from motor.motor_asyncio import AsyncIOMotorClient
from .config import settings

client = AsyncIOMotorClient(settings.MONGO_URL)

database = client[settings.DATABASE_NAME]

chat_collection = database.get_collection("chat-history")