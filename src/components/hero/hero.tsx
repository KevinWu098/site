"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export function Hero() {
    return (
        <div className="w-full space-y-4">
            <div className="relative inline-block">
                <h1
                    className={cn(
                        "relative font-playfair-display text-6xl font-medium italic text-custom-primary"
                    )}
                >
                    {"Kevin Wu"}
                </h1>
            </div>

            <div className="z-50 space-y-2">
                <p className="text-pretty md:text-lg">
                    {"I'm a fullstack developer building products, "}
                    <Link
                        href="https://www.devpost.com/kevinwu098"
                        target="_blank"
                        referrerPolicy="no-referrer"
                    >
                        competing at hackathons
                    </Link>
                    , and playing pickleball.
                </p>
                <p className="text-pretty md:text-lg">
                    Currently studying Computer Science at UCI. Previously at
                    Stripe engineering on{" "}
                    <Link
                        href="https://link.com/"
                        target="_blank"
                        referrerPolicy="no-referrer"
                    >
                        Link
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
}
