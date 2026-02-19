import type { CreateItemProps } from "@/components/create/create-item";

export const CREATE_DATA: CreateItemProps[] = [
    {
        title: "meme-vault",
        category: "projects",
        link: "https://github.com/kevinwu098/meme-vault",
        date: "November 2025",
    },
].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
});
