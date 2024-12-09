"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

const LetsChat: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const chatPanelRef = useRef<HTMLDivElement | null>(null);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        chatPanelRef.current &&
        !chatPanelRef.current.contains(event.target as Node)
      ) {
        setIsChatOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Let's Chat Button */}
      <button
        style={{ fontFamily: "var(--font-forum)" }}
        onClick={toggleChat}
        className="fixed z-10 bottom-6 right-6 bg-secondary text-white p-4 px-6 sm:px-8 md:px-10 rounded-full shadow-lg flex items-center space-x-2 hover:bg-stone-900 transition-all duration-300"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden sm:inline text-lg">Let&apos;s Chat !</span>
      </button>

      {/* Chat Panel */}
      <div
        ref={chatPanelRef}
        className={`fixed bottom-6 z-20 right-5 w-full sm:w-96 md:w-96 bg-white shadow-2xl rounded-t-lg p-6 max-w-[90vw] sm:max-w-[400px] transition-transform dark:bg-slate-950 dark:text-gray-100`}
        style={{
          transform: isChatOpen
            ? "translateX(0)"
            : "translate(calc(100% + 25px))",
          transitionDuration: "300ms",
        }}
      >
        {/* Close button */}
        <button
          onClick={toggleChat}
          className="absolute top-2 right-2 text-gray-700 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-100"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Chat Panel Content */}
        <h3
          className="text-xl font-semibold mb-2"
          style={{ fontFamily: "var(--font-forum)" }}
        >
          Infinity Construction NYC
        </h3>
        <p className="text-sm text-gray-600 mb-4 dark:text-gray-400">
          We&apos;ll reply as soon as possible. Feel free to ask any questions!
        </p>
        <div className="space-y-4">
          {/* Chat Area */}
          <div className="space-y-2">
            <div
              className="text-md bg-gray-100 p-2 rounded-md dark:bg-gray-800 dark:text-gray-100"
              style={{ fontFamily: "var(--font-forum)" }}
            >
              <strong>Support:</strong> Hi, how can we assist you today?
            </div>
            <div
              className="text-md bg-gray-100 p-2 rounded-md dark:bg-gray-800 dark:text-gray-100"
              style={{ fontFamily: "var(--font-forum)" }}
            >
              <strong>You:</strong> I have a question about your services.
            </div>
          </div>

          {/* Input Area */}
          <textarea
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:focus:ring-orange-500"
            rows={4}
            placeholder="Type your message..."
          ></textarea>

          {/* Send Button */}
          <button
            className="bg-primary text-white px-6 py-2 hover:bg-orange-600 transition-all duration-300 dark:bg-primary dark:hover:bg-orange-600"
            onClick={() => alert("Message Sent!")}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default LetsChat;
