import { ExperienceGrid } from "@/components/experience/experience-grid";
import { Hero } from "@/components/hero/hero";
import { Links } from "@/components/links/links";
import { Separator } from "@/components/ui/separator";

export default function Home() {
    return (
        <div className="mx-auto flex w-full flex-col space-y-8 pt-8 md:pt-16">
            <Hero />

            <Links />
            <Separator className="mx-auto h-[1px] bg-custom-muted/20" />

            <ExperienceGrid />
        </div>
    );
}
