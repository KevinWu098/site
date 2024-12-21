import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const font = Playfair_Display({
    subsets: ["latin"],
    style: ["normal", "italic"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

export function Hero() {
    return (
        <div className="w-full space-y-4">
            <h1
                className={cn(
                    font.className,
                    "text-custom-primary text-5xl font-medium italic"
                )}
            >
                Kevin Wu
            </h1>

            <div className="space-y-2">
                <p className="text-pretty text-lg">
                    I'm a fullstack developer building products,{" "}
                    <Link
                        href={"https://www.devpost.com/kevinwu098"}
                        className="underline underline-offset-2"
                        target="_blank"
                        referrerPolicy="no-referrer"
                    >
                        competing at hackathons
                    </Link>
                    , and playing pickleball.
                </p>
                <p className="text-pretty text-lg">
                    Studying Computer Science at the University of California,
                    Irvine. When not in lecture, I'm crafting software across
                    Aerospace, Education, and Open Source.
                </p>
                <p className="text-pretty text-lg">
                    Spending Winter at{" "}
                    <Link
                        href={"https://mercury.com/"}
                        className="underline underline-offset-2"
                        target="_blank"
                        referrerPolicy="no-referrer"
                    >
                        Mercury
                    </Link>{" "}
                    on the Creative Products team. Incoming at ______ (Summer
                    2025).
                </p>
            </div>

            {/* <div className="border-custom-text w-fit space-x-4 border-t text-base">
                <Link href={"https://www.linkedin.com/in/kevinwu098"}>
                    LinkedIn
                </Link>

                <Link href={"https://devpost.com/kevinwu098"}>Hackathons</Link>

                <Link href={"https://github.com/kevinwu098"}>Github</Link>
            </div> */}
        </div>
    );
}
