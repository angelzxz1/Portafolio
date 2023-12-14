import { cn } from "@/lib/utils";

interface SectionProps {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    id?: string;
}

const Section = ({
    children,
    className = "",
    style = {},
    id = "",
}: SectionProps) => {
    return (
        <section
            className={cn(
                "relative flex flex-col items-center justify-center w-full xl:h-full h-auto pb-28 xl:pb-0",
                className
            )}
            style={style}
            id={id}
        >
            {children}
        </section>
    );
};

export default Section;
