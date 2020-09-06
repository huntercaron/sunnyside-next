import Head from "next/head"
import { getAllPostsForHome } from "../lib/api"
import { Item, Layout } from "../components"

export default function Home({ allPosts, preview }) {
    return (
        <Layout preview={preview}>
            <Head>
                <title>Sunnyside</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>Sunnyside</h1>
            <p>A nextjs boilerplate using Sanity as a CMS.</p>

            {allPosts.map((post) => {
                return <Item key={post.slug} project={post} />
            })}
        </Layout>
    )
}

export async function getStaticProps({ preview = false }) {
    const allPosts = await getAllPostsForHome(preview)
    return {
        props: { allPosts, preview },
    }
}
