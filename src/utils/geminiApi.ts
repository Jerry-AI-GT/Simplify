// utils/geminiApi.ts
import axios from "axios";

const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";

export const generateContent = async (text: string): Promise<any> => {
  try {
    const response = await axios.post(
      `${GEMINI_API_URL}?key=${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: text,
              },
            ],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error generating content:", error);
    throw error;
  }
};
