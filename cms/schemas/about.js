export default {
    name: "about",
    type: "document",
    title: "About",
    __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
    fields: [
        {
            name: "bio",
            title: "Bio",
            type: "text",
        },
        {
            name: "instagramImages",
            type: "array",
            title: "Instagram Images",
            options: {
                layout: "grid",
            },
            of: [{ type: "image", title: "Image", hotspot: true }],
        },
    ],
}
