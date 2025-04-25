import { GoogleGenAI } from "@google/genai";

export function fetch_Response(text, setText) {
  if (text != "") {
    const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_KEY });

    async function fetch_AI() {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: text,
      });
      setText(response.text);
    }
    fetch_AI();
  }
}
