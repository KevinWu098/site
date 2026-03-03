import type { CreateItemProps } from "@/components/create/create-item";

export const CREATE_DATA: CreateItemProps[] = [
    {
        title: "meme-vault",
        category: "projects",
        link: "https://github.com/kevinwu098/meme-vault",
        date: "November 2025",
    },
    {
        title: "Radioactive Duck Game",
        category: "projects",
        link: "https://github.com/laurelin60/radioactive-duck-game",
        date: "November 2025",
    },
    {
        title: "Agentic",
        category: "projects",
        link: "https://github.com/laurelin60/agentic",
        date: "January 2024",
    },
].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
});
