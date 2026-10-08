from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def root():
    return {
        "message": "MAN 2026 server is alive!"
    }
