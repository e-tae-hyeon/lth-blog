import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/common/styles/globals.css";
import Header from "@/features/core/modules/Header";

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "lth.XD",
  description: "Lee Tae-Hyeon blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${pretendard.className}`}>
        <Header />
        {children}
      </body>
      <div id="portal" />
    </html>
  );
}
