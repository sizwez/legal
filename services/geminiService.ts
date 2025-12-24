
import { GoogleGenAI, GenerateContentResponse, Modality } from "@google/genai";
import { APP_SYSTEM_INSTRUCTION } from "../constants";

export async function* streamLegalAssistant(prompt: string, history: {role: 'user'|'model', text: string}[] = []) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    
    const responseStream = await ai.models.generateContentStream({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(h => ({ role: h.role, parts: [{ text: h.text }] })),
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: APP_SYSTEM_INSTRUCTION,
        tools: [{ googleSearch: {} }],
      },
    });

    for await (const chunk of responseStream) {
      yield {
        text: chunk.text || "",
        links: chunk.candidates?.[0]?.groundingMetadata?.groundingChunks
          ?.filter(c => c.web)
          .map(c => ({ title: c.web?.title || "Reference", uri: c.web?.uri || "" })) || []
      };
    }
  } catch (error) {
    console.error("Streaming Error:", error);
    yield { text: "I encountered an error connecting to the legal database.", links: [] };
  }
}

export async function findGovernmentOffices(query: string, lat?: number, lng?: number) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Find the nearest ${query} in South Africa.`,
      config: {
        tools: [{ googleMaps: {} }],
        toolConfig: {
          retrievalConfig: {
            latLng: lat && lng ? { latitude: lat, longitude: lng } : undefined
          }
        }
      },
    });

    const text = response.text || "";
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    const offices = chunks
      .filter(c => c.maps)
      .map(c => ({
        name: c.maps?.title || "Government Office",
        uri: c.maps?.uri || "#",
        address: "" // Usually contained in text or title
      }));

    return { text, offices };
  } catch (error) {
    console.error("Maps Error:", error);
    return { text: "Could not locate offices at this time.", offices: [] };
  }
}
