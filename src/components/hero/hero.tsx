import Link from "next/link";
import { cn } from "@/lib/utils";

export function Hero() {
    return (
        <div className="w-full space-y-4">
            <h1
                className={cn(
                    "text-custom-primary font-playfair-display text-5xl font-medium italic"
                )}
            >
                Kevin Wu
            </h1>

            <div className="space-y-2">
                <p className="text-pretty md:text-lg">
                    I&apos;m a fullstack developer building products,{" "}
                    <Link
                        href={"https://www.devpost.com/kevinwu098"}
                        target="_blank"
                        referrerPolicy="no-referrer"
                    >
                        competing at hackathons
                    </Link>
                    , and playing pickleball.
                </p>
                <p className="text-pretty md:text-lg">
                    Studying Computer Science at the University of California,
                    Irvine. When not in lecture, I&apos;m crafting software
                    across Aerospace, Education, and Open Source.
                </p>
                <p className="text-pretty md:text-lg">
                    Spending Winter at{" "}
                    <Link
                        href={"https://mercury.com/"}
                        target="_blank"
                        referrerPolicy="no-referrer"
                    >
                        Mercury
                    </Link>{" "}
                    on the Creative Products team. Incoming at ______ (Summer
                    2025).
                </p>
            </div>
        </div>
    );
}
