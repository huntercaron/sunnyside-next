export default {
    name: "project",
    type: "document",
    title: "Project",
    fields: [
        { name: "title", type: "string", title: "Title" },
        {
            name: "slug",
            type: "slug",
            title: "Slug (name for the URL)",
            options: {
                source: "title",
                maxLength: 200, // will be ignored if slugify is set
                slugify: (input) =>
                    input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
            },
        },
        { name: "description", type: "text", title: "Description" },
        {
            name: "images",
            type: "array",
            title: "Images",
            options: {
                layout: "grid",
            },
            of: [{ type: "image", title: "Image", hotspot: true }],
        },
    ],
}
