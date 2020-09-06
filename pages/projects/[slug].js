import { useRouter } from "next/router"
import ErrorPage from "next/error"
import Head from "next/head"
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api"

export default function Post({ post, morePosts, preview }) {
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }
    return (
        <div>
            {router.isFallback ? (
                <h2>Loading…</h2>
            ) : (
                <>
                    <article>
                        <Head>
                            <title>
                                {post.title} | Next.js Blog Example with{" "}
                            </title>
                            {/* <meta property="og:image" content={post.ogImage.url} /> */}
                        </Head>

                        <h2>{post.title}</h2>
                    </article>
                </>
            )}
        </div>
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
