from motor.motor_asyncio import AsyncIOMotorClient
from .config import settings

client = AsyncIOMotorClient(settings.MONGO_URL)

database = client.get_default_database()

chat_collection = database.get_collection("chat-history")