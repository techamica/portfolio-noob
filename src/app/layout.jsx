import { JetBrains_Mono } from "next/font/google"
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransision from "@/components/StairTransision";
import Head from "next/head";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-JetBrainsMono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap"
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <body
        className={`${JetBrainsMono.variable} flex flex-col min-h-screen`}
      >
        <Header />
        <div className="flex-1 flex-col flex justify-center mt-40 mb-20">
          <StairTransision />
          <PageTransition>
            {children}
          </PageTransition>
        </div>
      </body>
    </html>
  );
}
