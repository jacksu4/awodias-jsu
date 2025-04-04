
interface TogetherAiOptions {
  model: string;
  max_tokens: number;
  temperature: number;
  top_p?: number;
  top_k?: number;
  repetition_penalty?: number;
  stop?: string[];
}

interface TogetherAiResponse {
  id: string;
  choices: {
    index: number;
    text: string;
    finish_reason: string;
  }[];
  created: number;
}

export async function generateText(prompt: string, options: Partial<TogetherAiOptions> = {}): Promise<string> {
  try {
    // Using the API key from the user
    const API_KEY = "3669d4ffa6efbc1a7d2ad2da56b97d8cd0be343b66419194bbd386a329248335";
    
    const defaultOptions: TogetherAiOptions = {
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      max_tokens: 1024,
      temperature: 0.7,
      top_p: 0.95,
      repetition_penalty: 1.1,
      stop: ["<|im_end|>"]
    };
    
    const mergedOptions = { ...defaultOptions, ...options };
    
    const response = await fetch("https://api.together.xyz/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: mergedOptions.model,
        prompt,
        max_tokens: mergedOptions.max_tokens,
        temperature: mergedOptions.temperature,
        top_p: mergedOptions.top_p,
        top_k: mergedOptions.top_k,
        repetition_penalty: mergedOptions.repetition_penalty,
        stop: mergedOptions.stop
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Together.ai API error:", error);
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const data: TogetherAiResponse = await response.json();
    return data.choices[0].text;
  } catch (error) {
    console.error("Error generating text with Together.ai:", error);
    throw error;
  }
}
