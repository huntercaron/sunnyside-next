const previewSecret = "preview_please"
const projectUrl = "https://sunnyside-next.vercel.app/"

export default function resolveProductionUrl(document) {
    return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${document.slug.current}`
}
