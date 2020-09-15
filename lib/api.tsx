import client, { previewClient } from "./sanity"

const getUniqueProjects = (projects) => {
    const slugs = new Set()
    return projects.filter((project) => {
        if (slugs.has(project.slug)) {
            return false
        } else {
            slugs.add(project.slug)
            return true
        }
    })
}

export interface Project {
    name: string
    title: string
    description: string
    images: string[]
    slug: string
}

const projectFields = `
  name,
  title,
  description,
  "images": images[].asset->url,
  'slug': slug.current,
`

const getClient = (preview) => (preview ? previewClient : client)

export async function getPreviewProjectBySlug(slug) {
    const data = await getClient(true).fetch(
        `*[_type == "project" && slug.current == $slug] | order(date desc){
      ${projectFields}
      content
    }`,
        { slug }
    )
    return data[0]
}

export async function getAllProjectsWithSlug() {
    const data = await client.fetch(
        `*[_type == "project"]{ 'slug': slug.current }`
    )
    return data
}

export async function getAllProjectsForHome(preview) {
    const results = await getClient(preview)
        .fetch(`*[_type == "project"] | order(title desc, _updatedAt desc){
      ${projectFields}
    }`)
    return getUniqueProjects(results)
}

export async function getProjectAndMoreProjects(
    slug,
    preview
): Promise<{ project: Project; moreProjects: Project[] }> {
    const curClient = getClient(preview)
    const [project, moreProjects] = await Promise.all([
        curClient
            .fetch(
                `*[_type == "project" && slug.current == $slug] | order(_updatedAt desc) {
        ${projectFields}
        content,
      }`,
                { slug }
            )
            .then((res) => res?.[0]),
        curClient.fetch(
            `*[_type == "project" && slug.current != $slug] | order(date desc, _updatedAt desc){
        ${projectFields}
        content,
      }[0...1]`,
            { slug }
        ),
    ])
    return { project, moreProjects: [] }
}
