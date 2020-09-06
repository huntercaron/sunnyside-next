import Head from "next/head"
import { getAllPostsForHome } from "../lib/api"
import { Item, Layout } from "../components"

export default function Home({ allPosts, preview }) {
    return (
        <Layout preview={preview}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <p>Test</p>

            {allPosts.map((post) => {
                return <Item project={post} />
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
