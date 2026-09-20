import type { Metadata } from "next";
import "./globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Free Marriage Biodata Maker",
  description:
    "Create beautiful marriage biodata online for free. No login required.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}