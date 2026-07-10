import Link from "next/link";

const buttonVariant = {
    default: "bg-(--color-rose) text-(--color-highlight-high) hover:bg-(--color-love)",
    bold: "bg-(--color-love) text-(--color-highlight-high) hover:bg-(--color-rose)",
    disabled: "bg-(--color-muted) text-(--color-subtle) hover:bg-(--color-subtle) hover:text-(--color-muted)",
} as const;

type ButtonData = {
    text: string;
    href: string;
    variant?: keyof typeof buttonVariant;
};


export default function Button({text, href, variant = "default",}: ButtonData)
{
    return(
        <div className="mt-4 text-center">
            <Link
                href={href}
                className={`inline-block rounded-lg px-6 py-3 font-medium text-(--color-highlight-low) transition-all duration-300 ${buttonVariant[variant]} hover:-translate-y-0.0 hover:shadow-lg`}>
                {text}
            </Link>
        </div>
    );
}
