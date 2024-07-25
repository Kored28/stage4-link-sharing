import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Devlinks",
  description: "link sharing app",
  icons: "/assets/logo-tab.svg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script src="https://kit.fontawesome.com/fc149c31cb.js" crossOrigin="anonymous"></script>
      </body>
    </html>
  );
}
