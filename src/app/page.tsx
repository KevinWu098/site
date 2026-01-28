import { ExperienceGrid } from "@/components/experience/experience-grid";
import { ExperienceSeparator } from "@/components/experience/experience-separator";
import { Hero } from "@/components/hero/hero";
import { Links } from "@/components/links/links";

export default function Home() {
    return (
        <div className="mx-auto flex w-full flex-col space-y-8 pt-8 md:pt-16">
            <Hero />

            <Links />

            <div className="flex flex-col gap-4">
                <ExperienceSeparator />
                <ExperienceGrid />
            </div>
        </div>
    );
}
