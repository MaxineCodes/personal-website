// components/TableOfContents.tsx
"use client";

import { useEffect, useState } from "react";

interface TocItem {
    id: string;
    text: string;
    level: number;
}

interface TableOfContentsProps {
    htmlContent: string;
}

export function TableOfContents({ htmlContent }: TableOfContentsProps) {
    const [tocItems, setTocItems] = useState<TocItem[]>([]);
    const [activeId, setActiveId] = useState("");

    // Extract headings from HTML
    useEffect(() => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, "text/html");
        const headings = doc.querySelectorAll("h2, h3");

        const items: TocItem[] = Array.from(headings).map((heading, index) => {
            heading.id = heading.id || `heading-${index}`;
            return {
                id: heading.id,
                text: heading.textContent || "",
                level: heading.tagName === "H2" ? 2 : 3,
            };
        });

        setTocItems(items);
    }, [htmlContent]);

    // Scroll spy - highlight active section
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
        );

        tocItems.forEach((item) => {
            const el = document.getElementById(item.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [tocItems]);

    if (tocItems.length === 0) return null;

    return (
        <aside className="sticky top-6">
            <div className="card rounded-xl p-4 shadow-lg">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-(--color-text)/70 mb-3">
                    On This Page
                </h3>

                <nav aria-label="On this page">
                    <ul className="space-y-1">
                        {tocItems.map((item) => (
                            <li
                                key={item.id}
                                style={{ marginLeft: item.level === 3 ? "0.75rem" : "0" }}
                            >
                                <a
                                    href={`#${item.id}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById(item.id)?.scrollIntoView({ });
                                    }}
                                    className={`block rounded-md px-2 py-1 text-sm transition-colors ${
                                        activeId === item.id
                                            ? "bg-(--color-surface) text-(--color-rose) font-medium"
                                            : "text-(--color-text) hover:bg-(--color-surface)/50 hover:text-(--color-rose)"
                                    }`}
                                >
                                    {item.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </aside>
    );
}