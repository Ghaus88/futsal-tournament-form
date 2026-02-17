import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Futbol Exclusive",
  description:
    "Futbol Exclusive showcases futsal tournaments, referees, and projects with a clean, classy design."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
