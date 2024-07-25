"use client";
import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { LoaderCircle, SendHorizontal } from "lucide-react";
import axios from "axios";

export default function Chat() {
  const url = process.env.NEXT_PUBLIC_SERVER_URL!;

  const [history, setHistory] = useState<Array<Array<string>>>([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");

  const chat = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // scroll to bottom of chat window each time chat is updated
    const chatWindow = chat.current;

    if (chatWindow) {
      const isScrolledToBottom =
        chatWindow.scrollHeight - chatWindow.clientHeight <=
        chatWindow.scrollTop + 1;

      if (!isScrolledToBottom) {
        chatWindow.scrollTop =
          chatWindow.scrollHeight - chatWindow.clientHeight;
      }
    }

    // keep focus on input after chat is updated
    input.current?.focus();
  }, [history]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const query = value;
    setValue("");
    setLoading(true);

    let answer = "";
    try {
      const response = await axios.post(url, { query: query });
      answer = response.data.answer;
    } catch (error) {
      answer = "Error - Could not connect to server!";
    }

    setLoading(false);
    setHistory((history) => [...history, [query, answer]]);
  }

  return (
    <div className="flex flex-col w-full h-full max-h-full sm:max-w-3xl">
      <div
        className="flex flex-col overflow-auto w-full h-full max-h-full"
        ref={chat}
      >
        {!history.length && (
          <div className="flex flex-col w-full h-full justify-center items-center">
            <h1 className="text-6xl">ChatDx</h1>
            <p className="text-3xl">Ask a question...</p>
          </div>
        )}
        {history.map((result, ix) => (
          <div key={ix}>
            <div className="p-2">
              <p className="font-bold">User:</p>
              <p>{result[0]}</p>
            </div>
            <div className="p-2">
              <p className="font-bold">ChatDx:</p>
              <p>{result[1]}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <form
          className="flex flex-row w-full gap-2 pt-3"
          onSubmit={handleSubmit}
        >
          <Input
            className="grow"
            placeholder="Ask a question..."
            value={value}
            onChange={handleChange}
            disabled={loading}
            ref={input}
          />
          <Button>
            {loading ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              <SendHorizontal />
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
