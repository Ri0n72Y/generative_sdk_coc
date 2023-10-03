# from fastapi import FastAPI
from src.prompts.compiler_function import nlp_full

# app = FastAPI()

def hello():
    return nlp_full("""
def main():
    ai = AI()
    
    user = 用户()
    
    ai.print(首先模拟场景，欢迎用户使用该工具，引导用户输入下一步内容+表情)
""", function=True, useClasses=True)
