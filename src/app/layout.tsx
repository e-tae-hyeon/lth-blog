import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/common/styles/globals.css";
import Sidebar from "@/features/core/modules/Sidebar";

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
        <div className="flex pl-[240px]">
          <Sidebar />
          <div>{children}</div>
        </div>
        <div id="portal" />
      </body>
    </html>
  );
}
