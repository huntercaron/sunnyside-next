import Head from "next/head"
import { getAllPostsForHome } from "../lib/api"
import { Item } from "../components"

export default function Home({ allPosts, preview }) {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <p>Test</p>

            {allPosts.map((post) => {
                console.log(post)
                return <Item project={post} />
            })}
        </div>
    )
}

export async function getStaticProps({ preview = false }) {
    const allPosts = await getAllPostsForHome(preview)
    return {
        props: { allPosts, preview },
    }
}
