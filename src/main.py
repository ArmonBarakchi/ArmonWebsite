import os

from fastapi import FastAPI                   # The main FastAPI import
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles

import uvicorn

BASE_DIR = os.path.dirname(os.path.dirname(__file__))

app = FastAPI()
app.mount("/static", StaticFiles(directory=os.path.join(BASE_DIR, "static")), name="static")

@app.get("/", response_class=HTMLResponse)
def get_mainpage() -> HTMLResponse:
    html_path = os.path.join(os.path.dirname(__file__), "pages", "index.html")
    with open(html_path, "r", encoding="utf-8") as html_file:
        return HTMLResponse(content=html_file.read())


if __name__ == "__main__":
     uvicorn.run(app, host="0.0.0.0", port=6543)