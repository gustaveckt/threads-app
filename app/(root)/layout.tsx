import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Topbar from "@/components/shared/Topbar";
import LeeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";
import BottomBar from "@/components/shared/Bottombar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Threads",
  description: "A Next.js 13 Meta Threads Application",
  og: {
    title: "Threads",
    description: "A Next.js 13 Meta Threads Application",
    type: "website",
    url: "https://threads-ckt.vercel.app",
    image: "https://threads-ckt.vercel.app/assets/logo.svg",
    locale: "en_US",
    site_name: "Threads",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Topbar />

          <main className="flex">
            <LeeftSidebar />

            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>

            <RightSidebar />
          </main>

          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  );
}
