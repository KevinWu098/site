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
    time: {
        start: string;
        end?: string;
    };
    imageClassName?: string;
};

export const PROJECT_DATA: Project[] = [
    {
        title: "Stripe",
        description: "Engineering on Link",
        image: "/work/stripe.webp",
        year: 2025,
        badges: {
            work: true,
        },
        href: "https://www.stripe.com/",
        time: {
            start: "June 2025",
            end: "Present",
        },
        imageClassName: "object-center",
    },
    {
        title: "Mercury",
        description: "Created sick frontend experiences",
        image: "/work/mercury.jpg",
        year: 2025,
        badges: {
            work: true,
        },
        href: "https://mercury.com/",
        time: {
            start: "January 2025",
            end: "June 2025",
        },
    },
    {
        title: "Stoke Space",
        description: "Amplified engineering productivity",
        image: "/work/fusion.jpeg",
        year: 2024,
        badges: {
            work: true,
        },
        href: "https://www.stokespace.com/",
        time: {
            start: "June 2024",
            end: "September 2024",
        },
    },
    {
        title: "Design and Partnership Lab",
        description: "Supporting student outcomes with ML + EdTech",
        image: "/work/daplab.png",
        year: 2024,
        href: "https://www.daplab.education.uci.edu/",
        time: {
            start: "April 2024",
            end: "Present",
        },
    },
    {
        title: "Dispatch AI",
        description: "Triage 911 calls, reduce critical wait times",
        image: "/work/dispatch.png",
        year: 2024,
        href: "https://devpost.com/software/dispatch-ai",
        time: {
            start: "2024",
            end: "2025",
        },
        badges: {
            hackathon: true,
        },
    },
    {
        title: "UCI Liquids Rocket Project",
        description: "Mission-critical control interfaces",
        image: "/work/rocket-project.png",
        year: 2024,
        href: "https://www.rocket.eng.uci.edu/liquids/",
        time: {
            start: "2024",
            end: "2025",
        },
    },
    {
        title: "Commit the Change",
        description: "Pro-bono software solutions for non-profits",
        image: "/work/ctc.png",
        year: 2024,
        href: "https://ctc-uci.com/",
        time: {
            start: "2023",
            end: "2025",
        },
    },
    {
        title: "AntAlmanac",
        description: "Course exploration and scheduling (10,000 users)",
        image: "/work/antalmanac.png",
        year: 2024,
        href: "https://www.antalmanac.com/",
        time: {
            start: "2023",
            end: "2025",
        },
    },
    {
        title: "GE-Z",
        description: "Find community college credits that transfer to UCs",
        image: "/work/ge-z.png",
        year: 2023,
        href: "https://ge-z.vercel.app/",
        time: {
            start: "2023",
        },
    },
];
