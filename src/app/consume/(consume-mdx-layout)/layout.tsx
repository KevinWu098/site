import { Back } from "@/components/consume/mdx/back";
import { Meta } from "@/components/consume/mdx/meta";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div
            className={cn(
                "flex w-full max-w-full flex-col pt-16",
                "prose font-sans",
                "prose-headings:text-balance prose-headings:text-custom-heading",
                "prose-h1:font-playfair-display prose-h1:text-3xl prose-h1:font-semibold prose-h1:text-custom-primary",
                "prose-h2:mt-8 prose-h2:text-2xl prose-h2:font-semibold",
                "prose-a:font-normal prose-a:text-custom-muted",
                "prose-p:text-custom-muted",
                "[&_del]:text-custom-muted",
                "[&_sub]:text-custom-muted"
            )}
        >
            <Back />
            <Meta />
            {children}
        </div>
    );
}
