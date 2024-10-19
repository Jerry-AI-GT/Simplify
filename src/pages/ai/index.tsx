import React, { useEffect, useState } from "react";
import { apiResult } from "@/components/Workspace/Playground/Playground";

const formatApiResponse = (apiResponse: string): string => {
  let formattedResponse = apiResponse;

  formattedResponse = formattedResponse.replace(
    /\*\*(.*?)\*\*/g,
    `<strong class="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">$1</strong>`
  );

  formattedResponse = formattedResponse.replace(
    /(https?:\/\/[^\s]+)/g,
    `<a href="$1" target="_blank" class="text-blue-500 hover:text-orange-500">$1</a>`
  );

  formattedResponse = formattedResponse.replace(/\n/g, "<br>");

  return formattedResponse;
};

const AnotherPage: React.FC = () => {
  const [content, setContent] = useState<string>("Standing by for your code!");
  const [formattedContent, setFormattedContent] = useState<string>("");
  const [isTypingDone, setIsTypingDone] = useState<boolean>(false);

  useEffect(() => {
    if (apiResult) {
      try {
        const parsedResult =
          typeof apiResult === "string" ? JSON.parse(apiResult) : apiResult;
        const newContent =
          parsedResult?.candidates?.[0]?.content?.parts?.[0]?.text ||
          "No content received from API.";

        setContent(newContent);
        setFormattedContent("");
        setIsTypingDone(false);
      } catch (error) {
        console.error("Error parsing apiResult:", error);
        setContent("Error parsing API result.");
      }
    }
  }, [apiResult]);

  useEffect(() => {
    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex < content.length) {
        setFormattedContent((prev) =>
          formatApiResponse(content.substring(0, currentIndex + 1))
        );

        currentIndex++;
        setTimeout(typeText, 25); // Typing effect speed
      } else {
        setIsTypingDone(true); // Typing finished
      }
    };

    if (content && !isTypingDone) {
      setFormattedContent("");
      typeText();
    }
  }, [content, isTypingDone]);

  const clearContent = () => {
    setContent("");
    setFormattedContent("");
    setIsTypingDone(true);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="bg-gradient-to-r text-2xl from-orange-500 to-red-800 text-transparent bg-clip-text">
          JERRY AI
        </div>
        <button
          onClick={clearContent}
          className=" my-2 bg-gradient-to-r  from-orange-500 to-red-800 px-2 py-1 rounded text-white hover:from-orange-400 hover:to-orange-700 cursor-pointer transition-colors duration-300"
        >
          Clear Content
        </button>
      </div>
      <div className="p-4">
        <div>
          <div
            dangerouslySetInnerHTML={{ __html: formattedContent }}
            className="whitespace-pre-wrap"
          />
        </div>
      </div>
    </div>
  );
};

export default AnotherPage;
