import { ExperienceWrapper } from "@/components/experience/experience-wrapper";
import { Hero } from "@/components/hero/hero";
import { Links } from "@/components/links/links";

export default function Home() {
    return (
        <div className="mx-auto flex w-full flex-col space-y-8 pt-8 md:pt-16">
            <Hero />

            <Links />

            <ExperienceWrapper />
        </div>
    );
}
