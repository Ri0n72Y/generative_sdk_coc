import * as webllm from "@mlc-ai/web-llm";

let chat: webllm.ChatModule;

export async function init({
  onReady,
  onGenerated,
}: {
  onReady?: (report: webllm.InitProgressReport) => void;
  onGenerated?: (step: number, message: string) => void;
}) {
  // create a ChatModule,
  chat = new webllm.ChatModule();
  // This callback allows us to report initialization progress
  onReady && chat.setInitProgressCallback(onReady);
  // You can also try out "RedPajama-INCITE-Chat-3B-v1-q4f32_0"
  // await chat.reload("Llama-2-7b-chat-hf-q4f32_1");
  await chat.reload("vicuna-v1-7b-q4f32_0");

  return async (prompt: string) => await chat.generate(prompt, onGenerated);
}
