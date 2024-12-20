import { Hero } from "@/components/hero/hero";
import { ProjectsGrid } from "@/components/projects/projects-grid";

export default function Home() {
    return (
        <div className="flex w-full flex-col items-center">
            <Hero />

            <div className="flex w-full max-w-screen-xl px-4 md:px-8">
                <ProjectsGrid />
            </div>
        </div>
    );
}
