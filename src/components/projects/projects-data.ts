export type Badges = {
    work?: boolean;
    project?: boolean;
    hackathon?: boolean;
};

type Project = {
    title: string;
    description: string;
    image: string;
    year: number;
    className?: string;
    badges?: Badges;
    href?: string;
};

export const PROJECT_DATA: Project[] = [
    {
        title: "Stoke Space — Fusion",
        description: "Amplify engineering productivity",
        image: "/work/fusion.jpeg",
        year: 2024,
        badges: {
            work: true,
        },
        href: "https://www.stokespace.com/",
    },
    {
        title: "Dispatch AI",
        description: "Triage 911 calls and reduce critical wait times",
        image: "/work/dispatch.png",
        year: 2024,
        href: "https://devpost.com/software/dispatch-ai",
    },
    {
        title: "UCI Liquids Rocket Project",
        description: "Building mission-critical control interfaces",
        image: "/work/rocket-project.png",
        year: 2024,
        href: "https://www.rocket.eng.uci.edu/liquids/",
    },
    {
        title: "Design and Partnership Lab",
        description: "Supporting student outcomes with ML + EdTech",
        image: "/work/daplab.png",
        year: 2024,
        href: "https://www.daplab.education.uci.edu/",
    },
    {
        title: "Commit the Change",
        description: "Pro-bono software solutions for non-profits",
        image: "/work/ctc.png",
        year: 2024,
        href: "https://ctc-uci.com/",
    },
    {
        title: "AntAlmanac",
        description: "Course exploration and scheduling (10,000 users)",
        image: "/work/antalmanac.png",
        year: 2024,
        href: "https://www.antalmanac.com/",
    },
    {
        title: "GE-Z",
        description: "Find community college credits that transfer to UCs",
        image: "/work/ge-z.png",
        year: 2023,
        href: "https://ge-z.vercel.app/",
    },
];
