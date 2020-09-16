import Link from "next/link"
import { urlFor } from "../lib/sanity"

export function Item({ project }) {
    const { slug, title, images } = project

    // should this move to static props? probably
    const thumbnail = urlFor(images[0]).width(100).height(100).url()
    
    return (
        <div style={{ marginTop: 20, display: "flex" }}>
            <Link as={`/projects/${slug}`} href="/projects/[slug]">
                <a>
                    <div key={project.slug}>
                        <img src={thumbnail} />
                        <h4>{title}</h4>
                    </div>
                </a>
            </Link>
        </div>
    )
}
