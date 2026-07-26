from fastapi import FastAPI

app = FastAPI()

@app.get('/api/hola')
def hola():
    return {'mensaje': 'Hola Ismael'}