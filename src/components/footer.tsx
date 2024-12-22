import { Playfair_Display } from "next/font/google";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const font = Playfair_Display({
    subsets: ["latin"],
    style: ["normal", "italic"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

export function Footer() {
    return (
        <div className="flex flex-col justify-center">
            <div className="flex flex-col-reverse justify-between py-4 md:flex-row md:items-center">
                <p className="text-pretty font-mono text-base font-light tracking-tighter">
                    Built with React, Tailwind, and &#128150;
                </p>

                <p
                    className={cn(
                        font.className,
                        "text-custom-primary text-pla min-w-fit whitespace-nowrap text-lg italic"
                    )}
                >
                    Kevin Wu
                </p>
            </div>
        </div>
    );
}
