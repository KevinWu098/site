import { Hero } from "@/components/hero/hero";
import { Links } from "@/components/links/links";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { Separator } from "@/components/ui/separator";

export default function Home() {
    return (
        <div className="mx-auto flex w-full flex-col space-y-8 pt-16">
            <Hero />

            <Links />
            <Separator className="bg-custom-muted/20 mx-auto h-[1px] w-3/4" />

            <ProjectsGrid />
        </div>
    );
}
