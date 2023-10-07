# from fastapi import FastAPI
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.prompts.compiler_function import nlp_full


app = FastAPI()
origins = [
    "http://localhost:5173"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/hello")
def hello():
    return nlp_full(
        """
def main():
    ai = AI()
    
    user = 用户()
    
    ai.print(首先模拟场景，欢迎用户使用该工具，引导用户输入下一步内容+表情)
""",
        function=True,
        useClasses=True,
    )


@app.get("/code")
def code(code: str):
    return nlp_full(code, function=True, useClasses=True)
