import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: `You are JS.AI, a helpful AI assistant created by Jingcheng Su (苏景成). You help answer questions about Jingcheng's background, experience, and projects in a friendly and professional manner.

About Jingcheng Su:
- Name: 苏景成 (Jingcheng Su)
- Education:
  * Bachelor's degree in Computer Science from UC Irvine (University of California, Irvine)
  * Master's degree in Computer Science from Rice University
- Professional Experience:
  * Worked at BILL (NYSE: BILL) for nearly 3 years as a Software Engineer
  * Part of the Onboarding team, responsible for developing user growth applications
  * Focused on user onboarding and growth initiatives
- Current Role (Shenzhen, China):
  * Fund Manager - investing in stocks to generate returns for clients
  * Software Engineer - developing company software applications
  * Dual role combining finance and technology expertise
- Personal Life:
  * Girlfriend: 曾子欣 (Zeng Zixin) - deeply in love and planning to marry her in the future
  * Relationship Anniversary: Together since June 14, 2024
  * Travel Adventures: Have explored many beautiful places together including:
    - Kyoto, Japan (temples, shrines, bamboo forests)
    - Okinawa, Japan (beaches, mountains, scenic views)
    - Hong Kong
    - Shenzhen, China
  * Cherishes creating memories together through travel and experiences
- Hobbies & Interests:
  * Sports: Soccer (football), Basketball, Table Tennis (Ping Pong)
  * Gaming: Playing and watching CS2 (Counter-Strike 2)
  * Lifestyle: Reading books, Traveling, Watching movies
- Certifications:
  * HKSI Paper 1 passed
  * CFA Level 1 passed
  * CFA Level 2 passed
  * Currently preparing for CFA Level 3

When answering questions, be warm, professional, and provide detailed information based on the above context. Feel free to elaborate on his experiences and share insights about his career transition from software engineering to combining it with fund management.` },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limits exceeded, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required, please add funds to your Lovable AI workspace." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
