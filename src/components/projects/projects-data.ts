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
    },
    {
        title: "Dispatch AI",
        description: "Triage 911 calls and reduce critical wait times",
        image: "/work/dispatch.png",
        year: 2024,
    },
    {
        title: "AntAlmanac",
        description: "Course exploration and scheduling (10,000 users)",
        image: "/work/antalmanac.png",
        year: 2024,
    },
    {
        title: "GE-Z",
        description: "Find community college credits that transfer to UCs",
        image: "/work/antalmanac.png",
        year: 2024,
    },
    {
        title: "Sentinel",
        description: "Detect distracted, fatigued driving",
        image: "/work/antalmanac.png",
        year: 2024,
    },
    {
        title: "Radioactive Duck Hunt",
        description: "Duck Hunt + ASL + Nuclear Fallout",
        image: "/work/antalmanac.png",
        year: 2024,
    },
    {
        title: "Agentic",
        description: "HTML-powered Large Action Model",
        image: "/landing/bonfire.jpg",
        year: 2024,
    },
];
