import S from "@sanity/desk-tool/structure-builder"

export default () =>
    S.list()
        .title("Content")
        .items([
            ...S.documentTypeListItems().filter(
                (listItem) => !["about"].includes(listItem.getId())
            ),
            S.listItem()
                .title("About")
                .child(
                    S.editor()
                        .title("About")
                        .schemaType("about")
                        .documentId("about")
                ),
        ])
