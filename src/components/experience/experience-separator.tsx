"use client";

import { useState } from "react";
import { ProjectExperience } from "@/components/experience/experience-data";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";

interface ExperienceSeparatorProps {
    experience: ProjectExperience;
    setExperience: (value: ProjectExperience) => void;
}

export function ExperienceSeparator({
    experience,
    setExperience,
}: ExperienceSeparatorProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative mx-auto flex w-full items-center gap-4">
            <DropdownMenu
                modal={false}
                open={open}
                onOpenChange={setOpen}
            >
                <DropdownMenuTrigger asChild>
                    <span className="flex shrink-0 cursor-pointer items-center gap-1 text-lg">
                        <span className="capitalize">{experience}</span>
                        <ChevronDownIcon
                            className={cn("h-4 w-4", open && "rotate-180")}
                        />
                    </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    align="start"
                    className="min-w-[200px]"
                >
                    <DropdownMenuGroup>
                        <DropdownMenuRadioGroup
                            value={experience}
                            onValueChange={(value) =>
                                setExperience(value as ProjectExperience)
                            }
                        >
                            <DropdownMenuRadioItem value="experience">
                                Experience
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="organizations">
                                Organizations
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="projects">
                                Projects
                            </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>

            <Separator className="h-[1px] flex-1 bg-custom-muted/20" />
        </div>
    );
}
