// components/Button.tsx
import Link from "next/link";

const buttonVariant = {
    default: "bg-(--color-rose) text-(--color-highlight-high) hover:bg-(--color-love)",
    bold: "bg-(--color-love) text-(--color-highlight-high) hover:bg-(--color-rose)",
    disabled: "bg-(--color-muted) text-(--color-subtle) hover:bg-(--color-subtle) hover:text-(--color-muted)",
} as const;

type ButtonProps = {
    text: string;
    /** Use href for navigation, type="submit" for form submission */
    href?: string;
    type?: "button" | "submit";
    variant?: keyof typeof buttonVariant;
    onClick?: () => void;
    disabled?: boolean;
};

export default function Button({
                                   text,
                                   href,
                                   type = "button",
                                   variant = "default",
                                   onClick,
                                   disabled = false,
                               }: ButtonProps) {
    const classNames = `inline-block rounded-lg px-6 py-3 font-medium text-(--color-highlight-low) transition-all duration-300 ${buttonVariant[variant]} hover:-translate-y-0.5 hover:shadow-lg`;

    return (
        <div className="mt-4 text-center">
            {href !== undefined ? (
                // Navigation link
                <Link
                    href={href}
                    className={classNames}>
                    {text}
                </Link>
            ) : (
                // Form button
                <button
                    type={type}
                    onClick={onClick}
                    disabled={disabled}
                    className={`${classNames} ${
                        disabled
                            ? "cursor-not-allowed opacity-50"
                            : "cursor-pointer"
                    }`}>
                    {text}
                </button>
            )}
        </div>
    );
}