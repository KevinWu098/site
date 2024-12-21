import {
    IconType,
    SiDevpost,
    SiGithub,
    SiLinkedin,
} from "@icons-pack/react-simple-icons";

export type IconLink = {
    icon: IconType;
    href: string;
};

export const LINKS_DATA: IconLink[] = [
    {
        icon: SiGithub,
        href: "https://www.github.com/kevinwu098",
    },
    {
        icon: SiLinkedin,
        href: "https://www.linkedin.com/in/kevinwu098",
    },
    {
        icon: SiDevpost,
        href: "https://www.devpost.com/kevinwu098",
    },
];
