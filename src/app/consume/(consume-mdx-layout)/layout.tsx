import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div
            className={cn(
                "flex w-full max-w-full flex-col pt-16",
                "prose text-custom-text font-sans",
                "prose-headings:text-custom-heading",
                "prose-h1:text-custom-primary prose-h1:font-semibold prose-h1:font-playfair-display prose-h1:text-3xl",
                "prose-a:text-custom-muted prose-a:font-normal",
                "prose-p:text-custom-muted"
            )}
        >
            {children}
        </div>
    );
}
