export default {
    name: "project",
    type: "document",
    title: "Project",
    fields: [
        { name: "title", type: "string", title: "Title" },
        {
            name: "slug",
            type: "slug",
            title: "Slug",
            options: {
                source: "title",
                maxLength: 200, // will be ignored if slugify is set
                slugify: (input) =>
                    input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
            },
        },
        { name: "description", type: "text", title: "Description" },
        {
            name: "gallery",
            type: "array",

            options: {
                layout: "grid",
            },
            of: [{ type: "image", title: "Image", hotspot: true }],
        },
    ],
}
