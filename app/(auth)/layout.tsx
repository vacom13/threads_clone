import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

import "../globals.css";
// We are doing SEO optimization here
export const metadata = {
  title: "Threads",
  description: "Meta Threads Application",
};

const inter = Inter({ subsets: ["latin"] });
console.log(inter);
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
