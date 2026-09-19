"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface SidebarProps {
    allArticles: { slug: string; title: string }[];
    currentSlug: string;
}

interface TreeNode {
    name: string;
    slug: string | null;  // null if no document exists for this node
    title?: string;       // Optional title from frontmatter
    children: TreeNode[];
}

export function Sidebar({ allArticles, currentSlug }: SidebarProps) {
    // Expand state persisted in localStorage
    const [expanded, setExpanded] = useState<Set<string>>(new Set());

    // Build hierarchical tree from flat article list
    const buildTree = (): TreeNode[] => {
        const root: TreeNode[] = [];

        // ✅ FIX: Filter BEFORE iterating (only once)
        const filteredArticles = allArticles.filter(article => article.slug !== "page");

        // First pass: Register all documents (including standalone docs like graphics.md)
        filteredArticles.forEach((article) => {
            const parts = article.slug.split("/");
            let currentLevel = root;

            parts.forEach((part, index) => {
                // Check if this node already exists
                let node = currentLevel.find(n => n.name === part);

                if (!node) {
                    // Create new node
                    const isLeaf = index === parts.length - 1;
                    node = {
                        name: part,
                        slug: null,  // Will be set below if this is a leaf
                        children: [],
                    };
                    currentLevel.push(node);
                }

                // If this is the leaf node (actual document), set its slug
                if (index === parts.length - 1) {
                    node.slug = article.slug;
                    node.title = article.title;
                }

                // Move to children level for next iteration
                currentLevel = node.children;
            });
        });

        // Second pass: Assign slugs to parent nodes that also have standalone documents
        const assignParentSlugs = (nodes: TreeNode[], pathPrefix: string = "") => {
            nodes.forEach(node => {
                const fullPath = pathPrefix ? `${pathPrefix}/${node.name}` : node.name;

                // Check if there's a standalone document for this path
                const standaloneDoc = filteredArticles.find(a => a.slug === fullPath);
                if (standaloneDoc && !node.slug) {
                    node.slug = standaloneDoc.slug;
                    node.title = standaloneDoc.title;
                }

                // Recurse into children
                assignParentSlugs(node.children, fullPath);
            });
        };

        assignParentSlugs(root);

        // Sort alphabetically
        return root.sort((a, b) => a.name.localeCompare(b.name));
    };

    const tree = buildTree();

    // Load saved expansion state on mount + auto-expand parent of current page
    useEffect(() => {
        const newExpanded = new Set<string>();

        // Load saved state
        try {
            const saved = localStorage.getItem("wiki-sidebar-expanded");
            if (saved) {
                JSON.parse(saved).forEach((path: string) => newExpanded.add(path));
            }
        } catch {}

        // Auto-expand parent folders of current page
        if (currentSlug) {
            const parents = getParents(currentSlug);
            parents.forEach(parent => newExpanded.add(parent));
        }

        setExpanded(newExpanded);
    }, [currentSlug]);

    // Save expansion state when it changes
    useEffect(() => {
        try {
            localStorage.setItem("wiki-sidebar-expanded", JSON.stringify([...expanded]));
        } catch {}
    }, [expanded]);

    // Get all parent paths for a given slug (e.g., "graphics/intro" → ["graphics", "graphics/intro"])
    const getParents = (slug: string): string[] => {
        const parts = slug.split("/");
        const parents: string[] = [];
        for (let i = 0; i < parts.length - 1; i++) {
            parents.push(parts.slice(0, i + 1).join("/"));
        }
        return parents;
    };

    // Toggle expand/collapse
    const toggleNode = (path: string) => {
        const newExpanded = new Set(expanded);
        if (newExpanded.has(path)) {
            newExpanded.delete(path);
        } else {
            newExpanded.add(path);
        }
        setExpanded(newExpanded);
    };

    // Check if any ancestor of this slug is currently active
    const isAncestorOfActive = (path: string): boolean => {
        if (!currentSlug) return false;
        return currentSlug.startsWith(path + "/");
    };

    // Render node recursively
    const renderNode = (node: TreeNode, depth: number = 0, path: string = "") => {
        const fullPath = path ? `${path}/${node.name}` : node.name;
        const isExpanded = expanded.has(fullPath);
        const hasChildren = node.children.length > 0;
        const isActive = currentSlug === node.slug;
        const isParentActive = isAncestorOfActive(fullPath);
        const displayName = node.title ??
            node.name.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

        return (
            <li key={fullPath}>
                <div className="flex items-center gap-1">
                    {/* Expand/Collapse chevron */}
                    {hasChildren ? (
                        <button
                            onClick={() => toggleNode(fullPath)}
                            className="p-1 rounded hover:bg-(--color-surface)/50 transition-colors flex-shrink-0"
                            aria-label={isExpanded ? "Collapse" : "Expand"}
                        >
                            <svg
                                className={`w-4 h-4 text-(--color-rose)/70 transition-transform ${isExpanded ? "rotate-90" : ""}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    ) : (
                        <span className="w-4 flex-shrink-0" />  // Placeholder for alignment
                    )}

                    {/* Node title/link - NOW ALWAYS CLICKABLE IF SLUG EXISTS */}
                    {node.slug ? (
                        <Link
                            href={`/compendium/${node.slug}`}
                            className={`flex-1 font-medium text-sm py-1 pr-2 rounded transition-colors ${
                                isActive
                                    ? "text-(--color-rose) bg-(--color-surface)"
                                    : "text-(--color-text) hover:text-(--color-rose) hover:bg-(--color-surface)/50"
                            }`}
                        >
                            {displayName}
                        </Link>
                    ) : (
                        <span className="flex-1 font-medium text-sm text-(--color-text)/80 py-1">
                            {displayName}
                        </span>
                    )}
                </div>

                {/* Nested children */}
                {hasChildren && isExpanded && (
                    <ul className="ml-2 mt-1 space-y-1 border-l-2 border-(--color-muted)/30 pl-3">
                        {node.children.map(child => renderNode(child, depth + 1, fullPath))}
                    </ul>
                )}
            </li>
        );
    };

    return (
        <nav className="sticky top-6">
            <div className="card rounded-xl p-4 shadow-lg">
                <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-(--color-text)/70">
                        Compendium Contents
                    </h3>

                    {/* Expand All / Collapse All buttons */}
                    <div className="flex gap-1">
                        <button
                            onClick={() => setExpanded(new Set(tree.map(t => t.name)))}
                            className="text-xs text-(--color-text)/60 hover:text-(--color-rose)"
                            title="Expand all"
                        >
                            ⌄
                        </button>
                        <button
                            onClick={() => setExpanded(new Set())}
                            className="text-xs text-(--color-text)/60 hover:text-(--color-rose)"
                            title="Collapse all"
                        >
                            ⌃
                        </button>
                    </div>
                </div>

                <ul className="space-y-1">
                    {tree.map(node => renderNode(node, 0))}
                </ul>
            </div>
        </nav>
    );
}