import useSWR from "swr";

const url = "http://127.0.0.1:8000";

export const usePrompt = (code: string) =>
  useSWR(`/code?code=${code}`, () =>
    fetch(url + `/code?code=${code}`).then((res) => res.json())
  );
