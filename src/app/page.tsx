"use client";
import Chat from "@/components/chat";

export default function Home() {
  return (
    <main className="flex justify-center w-full h-full max-h-[calc(100%-3.5rem)] lg:max-h-full p-4">
      <Chat />
    </main>
  );
}
