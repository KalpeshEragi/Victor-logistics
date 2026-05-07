"use client";

import { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";
import { MessageCircle, X, Send, Phone, MessageSquare } from "lucide-react";

const ROBOT_LOTTIE_URL = "/lottie/chatbot.json"; // Local Robot animation

interface Message {
  role: "user" | "bot";
  content: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "Hi! I'm Victor, your logistics assistant. How can I help you today?" },
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    // Fetch lottie JSON from URL
    fetch(ROBOT_LOTTIE_URL)
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Lottie load failed:", err));
    
    // Show inviting bubble after 3 seconds
    const timer = setTimeout(() => setShowBubble(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, { role: "user", content: userMsg }] }),
      });

      const data = await res.json();
      if (data.content) {
        setMessages((prev) => [...prev, { role: "bot", content: data.content }]);
      } else {
        throw new Error("Failed to get response");
      }
    } catch (error) {
      setMessages((prev) => [...prev, { role: "bot", content: "Sorry, I'm having trouble connecting. Please try again later." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      {/* ── Chat Window ─────────────────────────────────────────── */}
      {isOpen && (
        <div className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-green-600 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                🤖
              </div>
              <div>
                <p className="font-bold text-sm">Victor AI</p>
                <p className="text-[10px] text-green-100 uppercase tracking-widest">Online Assistant</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-lg transition">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm shadow-sm ${
                    m.role === "user"
                      ? "bg-green-600 text-white rounded-tr-none"
                      : "bg-white text-gray-800 border border-gray-100 rounded-tl-none"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 p-3 rounded-2xl rounded-tl-none shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" />
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask anything about our logistics..."
              className="flex-1 bg-gray-100 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-green-500 outline-none"
            />
            <button
              onClick={handleSend}
              disabled={loading || !input.trim()}
              className="w-10 h-10 bg-green-600 text-white rounded-xl flex items-center justify-center hover:bg-green-700 transition disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* ── Floating Bot Character ──────────────────────────────── */}
      {!isOpen && (
        <div 
          onClick={() => {
            setIsOpen(true);
            setShowBubble(false);
          }}
          className="absolute bottom-[-40px] right-14 w-32 h-32 md:w-48 md:h-48 cursor-pointer animate-bounce-slow group hover:scale-110 transition-transform duration-300"
        >
          {animationData && (
            <Lottie 
              animationData={animationData}
              loop={true}
              style={{ width: '100%', height: '100%' }}
            />
          )}
          {/* Small Speech Bubble for the Bot */}
          {showBubble && (
            <div className="absolute -top-10 right-10 bg-white px-4 py-2 rounded-2xl rounded-br-none shadow-xl border border-green-100 animate-in fade-in zoom-in duration-500 w-48">
              <p className="text-[10px] font-bold text-gray-800 leading-tight">
                Hey! Need help with shipping or cabins? Ask me! 🤖
              </p>
            </div>
          )}
        </div>
      )}

      {/* ── Action Button Stack ──────────────────────────────────── */}
      <div className="flex flex-col gap-3 items-center">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/918108834666"
          target="_blank"
          className="w-12 h-12 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform active:scale-95 overflow-hidden"
          title="WhatsApp Us"
        >
          <img 
            src="/icons/whatsapp.png" 
            alt="WhatsApp" 
            className="w-full h-full object-cover"
          />
        </a>

        {/* Phone Button */}
        <a
          href="tel:+918108834666"
          className="w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform active:scale-95"
          title="Call Us"
        >
          <Phone size={22} />
        </a>

        {/* Chat Toggle Button */}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowBubble(false);
          }}
          className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 ${
            isOpen ? "bg-red-500 text-white rotate-90" : "bg-green-600 text-white"
          }`}
        >
          {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
          
          {/* Pulse Indicator for Chat */}
          {!isOpen && (
            <span className="absolute top-0 right-0 w-4 h-4 bg-green-400 border-2 border-white rounded-full animate-pulse" />
          )}
        </button>
      </div>
    </div>
  );
}
