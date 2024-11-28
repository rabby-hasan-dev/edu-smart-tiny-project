import type { Metadata } from "next";
import "./globals.css";

import { Lora } from 'next/font/google'
import ReduxWrapper from "@/lib/Providers/StoreProvider";



const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})


export const metadata: Metadata = {
  title: "Edu Smart",
  description: "Generated by Edu Smart",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={lora.className}
      >
        <ReduxWrapper >
          {children}
        </ReduxWrapper>
      </body>
    </html>
  );
}
