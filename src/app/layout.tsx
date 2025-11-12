import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bocconi - AI Voice Assistant",
  description: "Experience intelligent voice conversations powered by Bocconi AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://unpkg.com/@elevenlabs/convai-widget-embed"
          async
          type="text/javascript"
        ></script>
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
