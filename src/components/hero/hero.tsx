import Link from "next/link";
import { cn } from "@/lib/utils";

export function Hero() {
    return (
        <div className="w-full space-y-4">
            <h1
                className={cn(
                    "font-playfair-display text-5xl font-medium italic text-custom-primary"
                )}
            >
                Kevin Wu
            </h1>

            <div className="space-y-2">
                <p className="text-pretty md:text-lg">
                    {"I'm a fullstack developer building products, "}
                    <Link
                        href={"https://www.devpost.com/kevinwu098"}
                        target="_blank"
                        referrerPolicy="no-referrer"
                    >
                        competing at hackathons
                    </Link>
                    , and playing pickleball. Currently studying Computer
                    Science at the University of California, Irvine.
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
                    on the Creative Products team.
                </p>
            </div>
        </div>
    );
}
