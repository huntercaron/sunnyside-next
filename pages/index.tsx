import Head from "next/head"
import { getAllProjectsForHome } from "../lib/api"
import { urlFor } from "../lib/sanity"
import { Item, Layout } from "../components"
import type { Project } from "../lib/api"

interface HomeProps {
    allProjects: Project[]
    preview: boolean
}

export default function Home(props: HomeProps) {
    const { allProjects, preview } = props
    return (
        <Layout preview={preview}>
            <Head>
                <title>Sunnyside</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>Sunnyside</h1>
            <p>A nextjs boilerplate using Sanity as a CMS.</p>

            {allProjects.map((project) => {
                // should this move to static props? probably
                const thumbnail = urlFor(project.images[0])
                    .width(200)
                    .height(200)
                    .url()

                return (
                    <div key={project.slug}>
                        <img src={thumbnail} />
                        <Item key={project.slug} project={project} />
                    </div>
                )
            })}
        </Layout>
    )
}

export async function getStaticProps({ preview = false }) {
    const allProjects = await getAllProjectsForHome(preview)
    return {
        props: { allProjects, preview },
    }
}
