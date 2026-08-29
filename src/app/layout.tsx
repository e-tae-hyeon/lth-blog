import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/common/styles/globals.css";
import Header from "@/features/core/modules/Header";
import Footer from "@/features/core/modules/Footer";

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "taehyeon lee",
  description: "이태현의 블로그",
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

      <body className={`${pretendard.className} tracking-[-0.01em]`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </div>
        <div id="portal" />
      </body>
    </html>
  );
}
