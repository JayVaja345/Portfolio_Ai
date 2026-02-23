import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { sendMessage } from "../services/api";
import { Trash2 } from "lucide-react";

interface Message {
  role: "user" | "ai";
  content: string;
}

export default function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  // Auto scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { role: "user", content: input };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const reply = await sendMessage(userMsg.content);
      const aiMsg: Message = { role: "ai", content: reply };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
    setShowClearConfirm(false);
  };

  return (
    <div id="chat" className="min-h-screen flex flex-col bg-gray-950 pt-24">
      {/* Chat Header with Clear Button - Always Visible */}
      <div className="border-b border-gray-800 p-4 bg-gray-950/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h2 className="text-xl font-semibold">Chat with AI Assistant</h2>

          {/* Clear button - always visible, disabled when no messages */}
          <button
            onClick={() => messages.length > 0 && setShowClearConfirm(true)}
            disabled={messages.length === 0}
            className={`
              flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition
              ${
                messages.length > 0
                  ? "text-gray-400 hover:text-white hover:bg-gray-800 cursor-pointer"
                  : "text-gray-600 cursor-not-allowed opacity-50"
              }
            `}
            title={
              messages.length === 0 ? "No messages to clear" : "Clear chat"
            }
          >
            <Trash2 className="w-4 h-4" />
            Clear Chat
          </button>
        </div>
      </div>

      {/* Messages Section */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6 max-w-4xl mx-auto w-full">
        {messages.length === 0 && (
          <div className="text-center text-gray-500 mt-20">
            <p className="text-lg mb-2">💬 Ask me anything about Jay's work!</p>
            <p className="text-sm">
              Skills, projects, experience, or certifications
            </p>

            {/* Suggested Questions */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto">
              {[
                "What are Jay's technical skills?",
                "Tell me about PromptVerse project",
                "What is Jay's education background?",
                "Which certifications does Jay have?",
              ].map((question, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setInput(question);
                    // Optional: Auto-send after a short delay
                    setTimeout(() => handleSend(), 100);
                  }}
                  className="p-3 text-sm text-left text-gray-400 bg-gray-800/50 hover:bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`
                max-w-[75%]
                px-4 py-3
                rounded-2xl
                text-sm
                leading-relaxed
                shadow-md
                ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white rounded-br-md"
                    : "bg-gray-800 text-gray-200 rounded-bl-md"
                }
              `}
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {msg.content}
              </ReactMarkdown>
            </div>
          </div>
        ))}

        {/* Loading Indicator */}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-800 px-4 py-3 rounded-2xl rounded-bl-md text-gray-400 text-sm animate-pulse">
              Thinking...
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input Section */}
      <div className="border-t border-gray-800 p-4 bg-gray-950">
        <div className="max-w-4xl mx-auto flex gap-3">
          <input
            className="flex-1 bg-gray-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            placeholder="Ask about Jay's skills, projects, experience..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-500 transition font-medium"
          >
            Send
          </button>
        </div>
      </div>

      {/* Clear Chat Confirmation Modal */}
      {showClearConfirm && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowClearConfirm(false)}
        >
          <div
            className="bg-gray-900 rounded-xl p-6 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-semibold mb-4">Clear Chat History?</h3>
            <p className="text-gray-400 mb-6">
              This will delete all messages in the current conversation. This
              action cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowClearConfirm(false)}
                className="px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition"
              >
                Cancel
              </button>
              <button
                onClick={clearChat}
                className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-500 transition"
              >
                Clear Chat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
