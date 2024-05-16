import { Inter } from "next/font/google";
import "./globals.css";

import NavbarDemo from "./components/Navbar";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <header>
          <NavbarDemo />
        </header>
        {children}
      </body>
    </html>
  );
}
