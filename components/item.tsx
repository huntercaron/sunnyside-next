import Link from "next/link"

export const Item = ({ project }) => {
    const { slug, title } = project
    return (
        <div>
            <Link as={`/projects/${slug}`} href="/projects/[slug]">
                {title}
            </Link>
        </div>
    )
}
