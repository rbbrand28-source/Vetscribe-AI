import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VetScribe AI",
  description:
    "AI-powered veterinary documentation assistant for modern clinics.",
  openGraph: {
    title: "VetScribe AI",
    description:
      "Reduce paperwork. Save hours. Focus on animals.",
    images: ["/og-image.png"]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#050816] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
