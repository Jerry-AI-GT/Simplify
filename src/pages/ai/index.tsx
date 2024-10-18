// // pages/index.tsx
// import { generateContent } from "@/utils/geminiApi";
// import { useState } from "react";

// const Home: React.FC = () => {
//   const [inputText, setInputText] = useState("");
//   const [responseText, setResponseText] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleGenerate = async () => {
//     setLoading(true);
//     try {
//       const result = await generateContent(inputText);
//       console.log(result);
//       setResponseText(
//         result.candidates[0].content.parts[0]?.text || "No content generated."
//       );
//     } catch (error) {
//       setResponseText("Error generating content.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Gemini Content Generator</h1>
//       <textarea
//         value={inputText}
//         onChange={(e) => setInputText(e.target.value)}
//         placeholder="Enter text"
//       />
//       <button onClick={handleGenerate} disabled={loading}>
//         {loading ? "Generating..." : "Generate Content"}
//       </button>

//       {responseText && (
//         <div>
//           <h2>Generated Content:</h2>
//           <p>{responseText}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;
// AnotherPage.tsx
import { apiResult } from "@/components/Workspace/Playground/Playground";
import React from "react";
// Adjust the import path according to your project structure

const AnotherPage = () => {
  let content = "No content generated.";

  // Check if apiResult is a string and parse it, or if it's an object, use it directly
  try {
    const parsedResult =
      typeof apiResult === "string" ? JSON.parse(apiResult) : apiResult;
    content =
      parsedResult?.candidates?.[0]?.content?.parts?.[0]?.text || content;
  } catch (error) {
    console.error("Error parsing apiResult:", error);
  }

  return (
    <div>
      <h1>API Result</h1>
      <pre>{content}</pre>
    </div>
  );
};

export default AnotherPage;
