import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "nexa — SaaS",
  description: "Nexa unifies conversations, behavior, and revenue data so product teams know what customers need before the next planning meeting.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
