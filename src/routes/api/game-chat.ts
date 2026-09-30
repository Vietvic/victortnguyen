import { createFileRoute } from "@tanstack/react-router";
import { handleGameChat } from "@/lib/ai/game-chat.server";

export const Route = createFileRoute("/api/game-chat")({
  server: { handlers: { POST: ({ request }) => handleGameChat(request) } },
});
