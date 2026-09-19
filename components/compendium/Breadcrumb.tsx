import Link from "next/link";

interface BreadcrumbProps {
    slug: string[];  // e.g. ['linux', 'guidetolinux']
    title?: string;  // optional article title for last segment
}

export function Breadcrumb({ slug, title }: BreadcrumbProps) {

    const breadcrumbs = [
        { label: "ItsMaxine.eu", href: "/", isLast: false },
        { label: "Compendium", href: "/compendium", isLast: false },
    ];

    // If no slugs are given (is done explicitly by the landing page)
    if (slug.length === 0) {
        return (
            <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex flex-wrap items-center gap-2 text-sm">
                    <li>
                        <Link href="/" className="text-(--color-text) hover:text-(--color-rose) transition-colors">
                            ItsMaxine.eu
                        </Link>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-(--color-text)/50">/</span>
                        <span className="text-(--color-rose) font-medium">Compendium</span>
                    </li>
                </ol>
            </nav>
        );
    }

    // Build cumulative paths for each segment
    slug.forEach((segment, index) => {
        const href = `/compendium/${slug.slice(0, index + 1).join("/")}`;
        const label = segment
            .split("-")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

        breadcrumbs.push({
            label,
            href,
            isLast: index === slug.length - 1,
        });
    });

    // Override last label with article title if provided
    if (title && slug.length > 0) {
        breadcrumbs[breadcrumbs.length - 1].label = title;
    }

    return (
        <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm">
                {breadcrumbs.map((crumb, index) => (
                    <li key={crumb.href} className="flex items-center gap-2">
                        {index > 0 && (
                            <span className="text-(--color-text)/50">/</span>
                        )}
                        {crumb.isLast ? (
                            <span className="text-(--color-rose) font-medium">
                                {crumb.label}
                            </span>
                        ) : (
                            <Link
                                href={crumb.href}
                                className="text-(--color-text) hover:text-(--color-rose) transition-colors"
                            >
                                {crumb.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}