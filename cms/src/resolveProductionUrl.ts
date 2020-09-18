const previewSecret = process.env.SANITY_STUDIO_PREVIEW_SECRET
const projectUrl = "https://sunnyside.vercel.app"

export default function resolveProductionUrl(document) {
    return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${document.slug.current}`
}
