"use client";

import Giscus from "@giscus/react";

export default function Comments() {
    const repo = process.env.NEXT_PUBLIC_GISCUS_REPO;
    const repoId = process.env.NEXT_PUBLIC_GISCUS_REPO_ID;
    const category = process.env.NEXT_PUBLIC_GISCUS_CATEGORY;
    const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID;

    if (!repo || !repoId || !category || !categoryId) {
        return null;
    }

    return (
        <div className="mt-16 pt-16 border-t border-gray-200">
            <h2 className="text-2xl font-bold font-heading text-gray-900 mb-8">Diskusi</h2>
            <Giscus
                id="comments"
                repo={repo as `${string}/${string}`}
                repoId={repoId}
                category={category}
                categoryId={categoryId}
                mapping="pathname"
                strict="0"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                theme="light"
                lang="id"
                loading="lazy"
            />
        </div>
    );
}
