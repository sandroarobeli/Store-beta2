import { Orbitron } from "@next/font/google";
import "./globals.css";

// If loading VARIABLE font, no need to specify the font weight
export const orbitron = Orbitron({
  variable: "--font-orbitron",
});

// FROM HERE: START BUILDING ROOT LAYOUT PER STORE-BETA AND WARMUP

// Container sets this: sm (640px)	max-width: 640px;
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${orbitron.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  );
}
