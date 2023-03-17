import { defineType, defineField } from "sanity";

export default defineType({
    name: "section",
    title: "Section",
    type: "document",
    fields: [
        defineField({
            name: "id",
            title: "ID",
            type: "string",
        }),
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),
        defineField({
            name: "imageSrc",
            title: "Image Source",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "text",
            title: "Text",
            type: "array",
            of: [
                {
                    title: "Block",
                    type: "block",
                    styles: [{ title: "Normal", value: "normal" }],
                    lists: [],
                },
            ],
        }),
        defineField({
            name: "buttonText",
            title: "Button Text",
            type: "string",
        }),
        defineField({
            name: "order",
            title: "Order",
            type: "number",
        })
    ],
    preview: {
        select: {
            title: "title",
            media: "imageSrc",
        },
    },
});
