# OceanPulse Backend

Production-ready FastAPI backend scaffold for OceanPulse.

## Requirements

- Python 3.12
- uv

## Setup

Create the virtual environment and install dependencies:

```powershell
uv venv --python 3.12
uv sync
```

Copy the example environment file:

```powershell
Copy-Item .env.example .env
```

Run the API locally:

```powershell
uv run uvicorn app.main:app --reload
```

The API will be available at `http://127.0.0.1:8000`.

## Endpoints

- `GET /health` returns `{"status":"ok"}`

## Project Structure

```text
app/
  core/
    config.py
  routes/
    health.py
  schemas/
    health.py
  services/
  main.py
```

Marine API integrations are intentionally not implemented yet.
