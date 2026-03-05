import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { message, history } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.sealion_api;

    if (!apiKey) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    // Format messages for the API
    // Sealion requires alternating user/assistant roles (no system role)
    const conversationHistory = (history || []).filter(
      (msg: any) => msg.role === "user" || msg.role === "assistant"
    );

    // Ensure proper alternation: must start with user and alternate
    const validatedHistory: any[] = [];
    let lastRole = "assistant"; // Start expecting 'user'
    
    for (const msg of conversationHistory) {
      if (msg.role !== lastRole) {
        validatedHistory.push(msg);
        lastRole = msg.role;
      }
    }

    // Add context to the first message if this is the start of conversation
    const userMessage = validatedHistory.length === 0
      ? `Context: You are a helpful AI assistant for Taspol Sawasdee's portfolio. Answer questions about his experience, skills, projects, and achievements. Be friendly, professional, and concise.\n\nQuestion: ${message}`
      : message;

    const messages = [
      ...validatedHistory,
      {
        role: "user",
        content: userMessage,
      },
    ];

    // Call Sealion API
    const response = await fetch("https://api.sea-lion.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Accept": "text/plain",
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "aisingapore/Gemma-SEA-LION-v4-27B-IT",
        messages: messages,
        max_completion_tokens: 512,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Sealion API error:", errorData);
      return NextResponse.json(
        { error: "Failed to get response from AI" },
        { status: response.status }
      );
    }

    const data = await response.json();
    const aiResponse = data.choices?.[0]?.message?.content || "Sorry, I couldn't generate a response.";

    return NextResponse.json({ response: aiResponse });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
