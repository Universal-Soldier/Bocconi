"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Dynamically load the ElevenLabs widget
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-white to-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight">Bocconi</div>
          <div className="text-sm text-gray-600">AI Voice Assistant</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <div className="mb-12 space-y-8">
            <h1 className="text-6xl md:text-7xl font-semibold tracking-tight leading-tight animate-fade-in">
              Talk to
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Bocconi
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Experience an intelligent voice assistant designed for real-time audience engagement. Ask questions, get instant answers, and explore ideas together.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "🎙️",
                title: "Live Voice",
                description: "Natural conversations in real-time with crystal-clear audio quality",
              },
              {
                icon: "⚡",
                title: "Instant Responses",
                description: "Get answers immediately without delays or interruptions",
              },
              {
                icon: "🧠",
                title: "AI-Powered",
                description: "Powered by advanced AI to understand context and provide insights",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white/60 backdrop-blur border border-gray-200/50 hover:bg-white/80 transition-all duration-300 animate-slide-in-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Call-to-Action */}
          <div className="flex flex-col items-center gap-8 py-16">
            <div className="text-center space-y-4 animate-slide-in-up" style={{ animationDelay: "0.6s" }}>
              <h2 className="text-3xl font-semibold">Ready to Chat?</h2>
              <p className="text-gray-600">Click the voice icon below to start a conversation</p>
            </div>

            {/* Interactive Element */}
            <div className="relative animate-float" style={{ animationDelay: "0s" }}>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-2xl"></div>
              <div className="relative w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                <span className="text-4xl">🎤</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ElevenLabs Widget Container */}
      <div id="convai-widget-container" className="flex justify-center py-20">
        {/* @ts-ignore */}
        <elevenlabs-convai agent-id="agent_1601k9vwd9szexab7bsvhrz3ft5b"></elevenlabs-convai>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200/20 py-12 px-6 bg-white/40 backdrop-blur">
        <div className="max-w-6xl mx-auto text-center text-gray-600 text-sm">
          <p>Built for interactive presentations and live audience engagement</p>
          <p className="mt-2 text-xs">Powered by ElevenLabs ConvAI</p>
        </div>
      </footer>
    </main>
  );
}
