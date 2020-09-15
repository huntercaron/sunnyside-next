import Head from "next/head"
import { getAllPostsForHome } from "../lib/api"
import { Item, Layout } from "../components"
import type { Post } from "../lib/api"

interface HomeProps {
    allPosts: Post[]
    preview: boolean
}

export default function Home(props: HomeProps) {
    const { allPosts, preview } = props
    return (
        <Layout preview={preview}>
            <Head>
                <title>Sunnyside</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>Sunnyside</h1>
            <p>A nextjs boilerplate using Sanity as a CMS.</p>

            {allPosts.map((post) => {
                console.log(post)
                return (
                    <div>
                        <img src={post.images[0]} />
                        <Item key={post.slug} project={post} />
                    </div>
                )
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
