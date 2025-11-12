"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically load the ElevenLabs widget
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);
  }, []);

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-[60px]">
      <div className="w-full max-w-2xl flex flex-col items-center justify-center gap-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6 animate-fade-in">
            Bocconi
          </h1>
          <p className="text-lg text-gray-600 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            AI Voice Assistant
          </p>
        </div>

        {/* Main Content */}
        <div className="text-center space-y-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-gray-700 text-base leading-relaxed">
            Ask questions and get instant answers. Interact with an intelligent voice assistant designed for real-time engagement.
          </p>
        </div>

        {/* ElevenLabs Widget Container - Inline */}
        <div
          ref={containerRef}
          className="w-full flex justify-center animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          {/* @ts-ignore */}
          <elevenlabs-convai
            agent-id="agent_1601k9vwd9szexab7bsvhrz3ft5b"
            embedded="true"
          ></elevenlabs-convai>
        </div>
      </div>
    </main>
  );
}
