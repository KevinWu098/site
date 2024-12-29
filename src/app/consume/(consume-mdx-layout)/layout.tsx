export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="mx-auto flex w-full flex-col space-y-8 pt-16">
            {children}
        </div>
    );
}
