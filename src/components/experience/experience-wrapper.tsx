"use client";

import { useState } from "react";
import { ProjectExperience } from "@/components/experience/experience-data";
import { ExperienceGrid } from "@/components/experience/experience-grid";
import { ExperienceSeparator } from "@/components/experience/experience-separator";

export function ExperienceWrapper() {
    const [experience, setExperience] =
        useState<ProjectExperience>("experience");

    return (
        <div className="flex flex-col gap-4">
            <ExperienceSeparator
                experience={experience}
                setExperience={setExperience}
            />
            <ExperienceGrid experience={experience} />
        </div>
    );
}
