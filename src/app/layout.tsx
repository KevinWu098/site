import type { Metadata } from "next";

import "./globals.css";

import { Playfair_Display } from "next/font/google";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export const metadata: Metadata = {
    title: "Kevin Wu",
    description:
        "Building products, competing at hackathons, and playing pickleball.",
    openGraph: {
        title: "Kevin Wu",
        description:
            "Building products, competing at hackathons, and playing pickleball.",
        url: "https://www.k3v.in",
        // images: [
        //     {
        //         url: "/ograph.png",
        //         width: 1728,
        //         height: 934,
        //     },
        // ],
        locale: "en_US",
        type: "website",
    },
};

const font = Playfair_Display({
    subsets: ["latin"],
    style: ["italic"],
    weight: ["500", "600"],
    display: "swap",
    variable: "--font-playfair-display",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    `${GeistSans.variable} ${GeistMono.variable} ${font.variable}`,
                    "antialiased",
                    "dark mx-auto max-w-screen-xl bg-custom-bg px-4 font-sans md:px-8"
                )}
            >
                <NuqsAdapter>
                    {children}
                    <Footer />
                </NuqsAdapter>
            </body>
        </html>
    );
}
