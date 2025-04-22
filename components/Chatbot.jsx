import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import { getGeminiResponse } from "@/lib/actions"; // adjust path if needed

const Chatbot = ({ setChatbotOpen }) => {
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const formatText = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Convert **bold** to <strong>
      .replace(/\n\n/g, "<br/><br/>") // Preserve double new lines
      .replace(/\n/g, "<br/>") // Preserve single new lines
      .replace(/\* (.*?)<br\/>/g, "<li>$1</li>") // Convert bullet points (* ) into list items
      .replace(/<li>/, "<ul><li>") // Wrap first <li> in <ul>
      .replace(/<\/li>(?!<li>)/g, "</li></ul>"); // Close </ul> properly
  };

  const CHAT_HISTORY_KEY = "chatbotHistory";

  useEffect(() => {
    const storedHistory = localStorage.getItem(CHAT_HISTORY_KEY);
    if (storedHistory) {
      setChatHistory(JSON.parse(storedHistory));
    }
  }, []);

  useEffect(() => {
    const hasWelcomed = localStorage.getItem("chatbotWelcomed");

    if (!hasWelcomed) {
      setTimeout(() => {
        const welcome1 = { user: false, text: "Welcome to Codimaths" };
        setChatHistory((prev) => {
          const updated = [...prev, welcome1];
          saveToLocalStorage(updated);
          return updated;
        });

        setTimeout(() => {
          const welcome2 = { user: false, text: "How can I help you?" };
          setChatHistory((prev) => {
            const updated = [...prev, welcome2];
            saveToLocalStorage(updated);
            return updated;
          });
        }, 1000);
      }, 1000);

      localStorage.setItem("chatbotWelcomed", "true");
    }
  }, []);

  useEffect(() => {
    const chatContainer = document.getElementById("chat-container");
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [chatHistory]);

  const saveToLocalStorage = (newHistory) => {
    localStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(newHistory));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    setLoading(true);

    const userMessage = { user: true, text: userInput };
    const updatedHistory = [...chatHistory, userMessage];
    setChatHistory(updatedHistory);
    saveToLocalStorage(updatedHistory);

    try {
      const aiText = await getGeminiResponse(
        userInput +
          "please write consize summary about the question as you have knowledge in Space and international space science olympiad write humanized answer, don't add any extra words like here is the summary or your asking.."
      );
      const aiMessage = { user: false, text: aiText };
      const newHistory = [...updatedHistory, aiMessage];
      setChatHistory(newHistory);
      saveToLocalStorage(newHistory);
    } catch (err) {
      console.error("Error generating AI response:", err);
    }

    setUserInput("");
    setLoading(false);
  };

  return (
    <div className="fixed bottom-5 md:bottom-10 z-30 pt-7 pb-2 px-3 shadow-md shadow-gray-500 border border-gray-400 rounded-xl right-5 md:right-10 h-[450px] w-[250px] sm:w-[300px] bg-gray-800 flex flex-col gap-2 text-[#E5E8EB]">
      <div
        className="absolute top-1 right-1 cursor-pointer"
        onClick={() => setChatbotOpen(false)}
      >
        <CloseIcon />
      </div>

      <div
        className="scrollbar-none flex flex-col gap-3 w-full pb-2 h-[95%] text-white overflow-y-scroll overflow-x-hidden [&::-webkit-scrollbar]:hidden"
        id="chat-container"
      >
        {chatHistory.map((message, index) => (
          <div
            key={`${message.text}-${index}`}
            className={`px-2 py-1 text-sm font-medium text-black w-fit max-w-[80%] ${
              message.user
                ? "bg-slate-400 rounded-md ml-auto"
                : "bg-green-300 rounded-md ml-0"
            }`}
          >
            <span
              className="flex-1 whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: formatText(message.text) }}
            ></span>
          </div>
        ))}

        {loading && (
          <div className="px-2 py-1 text-sm font-medium text-black w-fit max-w-[80%] bg-green-200 rounded-md ml-0 animate-pulse">
            Generating response...
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="search w-full flex items-center gap-1 text-sm">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Any query?"
            className="w-full bg-transparent outline-none border-[#E5E8EB] border-b pb-1"
          />
          <button
            type="submit"
            className="px-1 py-1.5 hover:bg-slate-900 rounded-full"
          >
            <SendIcon />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chatbot;
