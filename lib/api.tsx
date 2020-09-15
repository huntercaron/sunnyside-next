import client, { previewClient } from "./sanity"

const getUniquePosts = (posts) => {
    const slugs = new Set()
    return posts.filter((post) => {
        if (slugs.has(post.slug)) {
            return false
        } else {
            slugs.add(post.slug)
            return true
        }
    })
}

export interface Post {
    name: string
    title: string
    description: string
    images: string[]
    slug: string
}

const postFields = `
  name,
  title,
  description,
  "images": images[].asset->url,
  'slug': slug.current,
`

const getClient = (preview) => (preview ? previewClient : client)

export async function getPreviewPostBySlug(slug) {
    const data = await getClient(true).fetch(
        `*[_type == "project" && slug.current == $slug] | order(date desc){
      ${postFields}
      content
    }`,
        { slug }
    )
    return data[0]
}

export async function getAllPostsWithSlug() {
    const data = await client.fetch(
        `*[_type == "project"]{ 'slug': slug.current }`
    )
    return data
}

export async function getAllPostsForHome(preview) {
    const results = await getClient(preview)
        .fetch(`*[_type == "project"] | order(title desc, _updatedAt desc){
      ${postFields}
    }`)
    return getUniquePosts(results)
}

export async function getPostAndMorePosts(
    slug,
    preview
): Promise<{ post: Post; morePosts: Post[] }> {
    const curClient = getClient(preview)
    const [post, morePosts] = await Promise.all([
        curClient
            .fetch(
                `*[_type == "project" && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        content,
      }`,
                { slug }
            )
            .then((res) => res?.[0]),
        curClient.fetch(
            `*[_type == "project" && slug.current != $slug] | order(date desc, _updatedAt desc){
        ${postFields}
        content,
      }[0...1]`,
            { slug }
        ),
    ])
    return { post, morePosts: [] }
}
