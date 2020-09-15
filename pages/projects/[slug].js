import { useRouter } from "next/router"
import ErrorPage from "next/error"
import Head from "next/head"
import {
    getAllProjectsWithSlug,
    getProjectAndMoreProjects,
} from "../../lib/api"
import { Layout } from "../../components"

export default function Project({ project = {}, preview }) {
    const router = useRouter()
    if (!router.isFallback && !project?.slug) {
        return <ErrorPage statusCode={404} />
    }
    const { title = "", images = [], description } = project
    return (
        <Layout preview={preview}>
            {router.isFallback ? (
                <h2>Loading…</h2>
            ) : (
                <>
                    <article>
                        <Head>
                            <title>{title}</title>
                            {/* <meta property="og:image" content={project.ogImage.url} /> */}
                        </Head>

                        <h2>{title}</h2>
                        {description && <p>{description}</p>}
                        {images.map((image) => (
                            <img
                                key={image}
                                style={{
                                    objectFit: "cover",
                                    width: 250,
                                    height: 250,
                                }}
                                src={image}
                            />
                        ))}
                    </article>
                </>
            )}
        </Layout>
    )
}

export async function getStaticProps({ params, preview = false }) {
    const data = await getProjectAndMoreProjects(params.slug, preview)
    return {
        props: {
            preview,
            project: data?.project || null,
            revalidate: 1,
        },
    }
}

export async function getStaticPaths() {
    const allProjects = await getAllProjectsWithSlug()
    return {
        paths:
            allProjects?.map((project) => ({
                params: {
                    slug: project.slug,
                },
            })) || [],
        fallback: true,
    }
}
