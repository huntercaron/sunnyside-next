import Link from "next/link"

export function Item({ project }) {
    const { slug, title } = project
    return (
        <div>
            <Link as={`/projects/${slug}`} href="/projects/[slug]">
                <a>{title}</a>
            </Link>
        </div>
    )
}
