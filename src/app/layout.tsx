import type { Metadata } from "next";

import "./globals.css";

import { Playfair_Display } from "next/font/google";
import { Footer } from "@/components/footer";
import { ReactLenis } from "@/lib/lenis";
import { cn } from "@/lib/utils";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
    title: "Kevin Wu",
    description:
        "Building products, competing at hackathons, and playing pickleball.",
    openGraph: {
        title: "Kevin Wu",
        description:
            "Building products, competing at hackathons, and playing pickleball.",
        url: "https://www.kevinwu.co",
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
    style: ["normal", "italic"],
    weight: ["400", "500", "600", "700"],
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
                    "mx-auto max-w-screen-xl bg-neutral-950 px-4 font-sans md:px-8"
                )}
            >
                <ReactLenis root>
                    {children}
                    <Footer />
                </ReactLenis>
            </body>
        </html>
    );
}
