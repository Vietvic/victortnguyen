import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { MessageCircleQuestion, RotateCcw, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { Message, MessageContent, MessageResponse } from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
  type PromptInputMessage,
} from "@/components/ai-elements/prompt-input";
import { Shimmer } from "@/components/ai-elements/shimmer";

const STORAGE_KEY = "vn-two-truths-chat";

function ChatWindow({ initial, onClose, onReset }: { initial: UIMessage[]; onClose: () => void; onReset: () => void }) {
  const [error, setError] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { messages, sendMessage, status, stop } = useChat({
    id: "two-truths",
    messages: initial,
    transport: new DefaultChatTransport({ api: "/api/game-chat" }),
    onError: (e) => {
      const msg = e.message || "";
      setError(msg.includes("402") ? "The game is out of AI credits right now." : "The game host had a hiccup. Try again in a moment.");
    },
  });
  const busy = status === "submitted" || status === "streaming";

  useEffect(() => {
    if (status === "ready") localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages, status]);

  useEffect(() => {
    if (!busy) textareaRef.current?.focus();
  }, [busy]);

  const send = (text: string) => {
    if (!text.trim() || busy) return;
    setError(null);
    sendMessage({ text });
  };

  const handleSubmit = (msg: PromptInputMessage) => send(msg.text);

  return (
    <div className="flex h-[min(560px,calc(100vh-7rem))] w-[min(380px,calc(100vw-2rem))] flex-col overflow-hidden border border-border bg-card text-card-foreground shadow-2xl">
      <div className="flex items-center gap-3 bg-primary px-4 py-3 text-primary-foreground">
        <span className="flex h-8 w-8 items-center justify-center bg-signal font-display text-sm font-bold text-primary">2+1</span>
        <div className="min-w-0 flex-1">
          <p className="font-display text-sm">Two Truths &amp; a Lie</p>
          <p className="text-xs opacity-75">Guess the lie about Victor · 5 rounds</p>
        </div>
        <button type="button" onClick={onReset} aria-label="Restart game" className="p-1.5 opacity-80 hover:opacity-100">
          <RotateCcw size={16} />
        </button>
        <button type="button" onClick={onClose} aria-label="Close game" className="p-1.5 opacity-80 hover:opacity-100">
          <X size={18} />
        </button>
      </div>

      <Conversation className="flex-1">
        <ConversationContent className="gap-4 p-4">
          {messages.length === 0 ? (
            <ConversationEmptyState
              title="Can you spot the lie?"
              description="Each round has two true facts about Victor and one lie. Get as many right as you can."
            >
              <div className="flex flex-col items-center gap-3 text-center">
                <span className="flex h-12 w-12 items-center justify-center bg-signal font-display text-lg font-bold text-primary">2+1</span>
                <p className="font-display text-base">Can you spot the lie?</p>
                <p className="text-sm text-muted-foreground">Each round has two true facts about Victor and one lie.</p>
                <button type="button" onClick={() => send("Let's play!")} className="mt-1 bg-primary px-4 py-2 text-sm font-bold text-primary-foreground">
                  Start the game
                </button>
              </div>
            </ConversationEmptyState>
          ) : (
            messages.map((m) => (
              <Message key={m.id} from={m.role}>
                <MessageContent className={m.role === "user" ? "bg-primary text-primary-foreground" : "bg-transparent p-0 text-foreground"}>
                  {m.parts.map((part, i) =>
                    part.type === "text" ? (
                      m.role === "assistant" ? <MessageResponse key={i} className="[&_ol]:list-decimal [&_ol]:pl-5 [&_ul]:list-disc [&_ul]:pl-5">{part.text}</MessageResponse> : <span key={i}>{part.text}</span>
                    ) : null,
                  )}
                </MessageContent>
              </Message>
            ))
          )}
          {status === "submitted" && <Shimmer className="text-sm">Shuffling the statements…</Shimmer>}
          {error && <p className="border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">{error}</p>}
        </ConversationContent>
        <ConversationScrollButton />
      </Conversation>

      <div className="border-t border-border p-3">
        <PromptInput onSubmit={handleSubmit}>
          <PromptInputTextarea ref={textareaRef} placeholder="Type 1, 2, or 3…" className="min-h-10 text-sm" />
          <PromptInputFooter className="justify-end">
            <PromptInputSubmit status={status} onStop={stop} />
          </PromptInputFooter>
        </PromptInput>
      </div>
    </div>
  );
}

export function GameChat() {
  const [open, setOpen] = useState(false);
  const [initial, setInitial] = useState<UIMessage[] | null>(null);
  const [session, setSession] = useState(0);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      setInitial(saved ? (JSON.parse(saved) as UIMessage[]) : []);
    } catch {
      setInitial([]);
    }
  }, []);

  const reset = () => {
    localStorage.removeItem(STORAGE_KEY);
    setInitial([]);
    setSession((s) => s + 1);
  };

  return (
    <div className="fixed bottom-4 right-4 z-[110] flex flex-col items-end gap-3">
      {open && initial && <ChatWindow key={session} initial={initial} onClose={() => setOpen(false)} onReset={reset} />}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close two truths and a lie game" : "Play two truths and a lie"}
        className="flex items-center gap-2 border border-border bg-primary px-4 py-3 text-sm font-bold text-primary-foreground shadow-xl"
      >
        {open ? <X size={18} /> : <MessageCircleQuestion size={18} className="text-signal" />}
        <span>{open ? "Close" : "Play: spot the lie"}</span>
      </button>
    </div>
  );
}
