import { ConsumeItemProps } from "@/components/consume/consume-item";

export const CONSUME_DATA: ConsumeItemProps[] = [
    {
        title: "There Is No Antimemetics Division",
        category: "readings",
        date: "12/29/2024",
        link: "https://qntm.org/scp",
    },
    {
        title: "Squid Game | Season Two",
        category: "shows",
        date: "12/28/2024",
        // link: "https://qntm.org/scp",
    },
].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
});