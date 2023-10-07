import { useEffect, useRef, useState } from "react";
import "./App.css";
import { usePrompt } from "./llm-utils/prompt";
import { init } from "./llm-utils/llm";

function App() {
  const [code, setCode] = useState("");
  const [answer, setAnswer] = useState("");
  const quiz = useRef<(prompt: string) => Promise<string>>();
  const { data: prompt, isLoading, error } = usePrompt(code);
  useEffect(() => {
    const i = async () => {
      const question = await init({});
      quiz.current = question;
      console.log("loaded");
    };
    i();
  }, []);
  return (
    <div className="App">
      <textarea
        className="textarea"
        defaultValue={code}
        onBlur={(e) => setCode(e.target.value)}
      />
      <button
        onClick={async () => {
          if (!quiz.current) {
            console.log("not yet loaded");
            return;
          }
          const aw = await quiz.current(prompt);
          setAnswer(aw);
        }}
      >
        Ask!
      </button>
      {isLoading ? (
        "Loading..."
      ) : (
        <div className="outputs">{answer || error}</div>
      )}
    </div>
  );
}

export default App;
