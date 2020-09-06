import { useRouter } from "next/router"
import ErrorPage from "next/error"
import Head from "next/head"
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api"
import { Layout } from "../../components"

export default function Project({ post, preview }) {
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }
    const { title, images, description } = post
    return (
        <Layout preview={preview}>
            {router.isFallback ? (
                <h2>Loading…</h2>
            ) : (
                <>
                    <article>
                        <Head>
                            <title>{title}</title>
                            {/* <meta property="og:image" content={post.ogImage.url} /> */}
                        </Head>

                        <h2>{title}</h2>
                        <p>{description}</p>
                        {images.map((image) => (
                            <img
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
    const data = await getPostAndMorePosts(params.slug, preview)
    return {
        props: {
            preview,
            post: data?.post || null,
            morePosts: data?.morePosts || null,
        },
    }
}

export async function getStaticPaths() {
    const allPosts = await getAllPostsWithSlug()
    return {
        paths:
            allPosts?.map((post) => ({
                params: {
                    slug: post.slug,
                },
            })) || [],
        fallback: true,
    }
}
