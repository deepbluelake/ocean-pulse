import os
from functools import lru_cache

from dotenv import load_dotenv
from pydantic import BaseModel, Field


load_dotenv()


class Settings(BaseModel):
    app_name: str = "OceanPulse Backend"
    app_env: str = "development"
    debug: bool = False
    cors_origins: list[str] = Field(
        default_factory=lambda: ["http://localhost:3000", "http://localhost:5173"]
    )


@lru_cache
def get_settings() -> Settings:
    cors_origins = os.getenv("CORS_ORIGINS")

    return Settings(
        app_name=os.getenv("APP_NAME", "OceanPulse Backend"),
        app_env=os.getenv("APP_ENV", "development"),
        debug=os.getenv("DEBUG", "false").lower() in {"1", "true", "yes", "on"},
        cors_origins=(
            [origin.strip() for origin in cors_origins.split(",") if origin.strip()]
            if cors_origins
            else ["http://localhost:3000", "http://localhost:5173"]
        ),
    )


settings = get_settings()
