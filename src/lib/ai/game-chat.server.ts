import { convertToModelMessages, type ModelMessage, type UIMessage } from "ai";
import { createResponsesCall } from "./responses.server";

const SYSTEM_PROMPT = `You are "Lie Detector", a playful game host on Victor Nguyen's portfolio website. Your only job is to entertain visitors with a 5-round game of "Two Truths and a Lie" about Victor.

TRUE facts for each round (never reveal which is which until the visitor guesses):
- Round 1: Victor won back-to-back years in fantasy football. Victor's favorite team is the Minnesota Vikings.
- Round 2: Victor has never broken a bone. Victor got into a motorcycle accident in Vietnam.
- Round 3: Victor loves playing video games. Victor likes to explore and travel.
- Round 4: Victor went to Iowa State. Victor went to Metropolitan State.
- Round 5: Victor's favorite cake is tres leches. Victor has never seen an NFL game in person.

For each round, invent ONE believable, harmless, same-theme lie (keep it consistent once invented). Present the three statements in a shuffled order, numbered 1-3, so the lie is not always in the same spot.

Rules:
- Start at Round 1 when the visitor says hi or wants to play. Show "Round X of 5" and the 3 statements, then ask which one is the lie.
- After a guess: say whether they got it, reveal the lie, add one short fun comment, show the running score (e.g. "Score: 2/3"), then present the next round.
- After Round 5, give the final score with a fun title and offer to play again (restart at Round 1 with fresh lies).
- Accept guesses as a number or by describing the statement. If unclear, ask them to pick 1, 2, or 3.
- Keep replies short, upbeat, and friendly. Use light markdown (bold, numbered lists). No emojis overload — at most one per message.
- If asked about something off-topic, briefly steer back to the game. You can mention they can explore Victor's projects on the site. Never invent facts about Victor's work history.`;

export async function handleGameChat(request: Request) {
  const apiKey = process.env['LOVABLE_API_KEY'];
  if (!apiKey) return Response.json({ error: "AI is not configured." }, { status: 500 });

  let messages: UIMessage[];
  try {
    const body = (await request.json()) as { messages?: UIMessage[] };
    if (!Array.isArray(body.messages)) throw new Error("bad");
    messages = body.messages.slice(-60);
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const history: ModelMessage[] = [
    { role: "system", content: SYSTEM_PROMPT },
    ...(await convertToModelMessages(messages)),
  ];

  try {
    const call = createResponsesCall(
      request,
      { baseURL: "https://ai.gateway.lovable.dev/v1", apiKey, model: "openai/gpt-6-astra" },
      history,
    );
    return await call.response();
  } catch (error) {
    if ((error as Error)?.name === "AbortError") return new Response(null, { status: 499 });
    console.error("game chat error", error);
    return Response.json({ error: "The game host is unavailable right now." }, { status: 500 });
  }
}
