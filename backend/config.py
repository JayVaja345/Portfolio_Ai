import os
from dotenv import load_dotenv

load_dotenv()

class Settings:
    MONGO_URL: str = os.getenv("MONGO_URL")
    DATABASE_NAME: str = os.getenv("DATABASE_NAME")
    OPENROUTER_API_KEY: str = os.getenv("OPENROUTER_API_KEY")

settings = Settings()