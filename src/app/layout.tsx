import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/navigationBar/NavigationBar";

const inter = Poppins({ subsets: ["latin"], weight: ['500', '600', '700', '800']});

export const metadata: Metadata = {
  title: "Travelindo"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[var(--white-primary)] text-[var(--black-primary)]`}>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
