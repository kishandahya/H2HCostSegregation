// lib/sanity.js

import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    projectId: "u0vwgg9q",
    dataset: "production",
    apiVersion: "2021-03-25",
    useCdn: process.env.NODE_ENV === "production",
});

export function urlFor(source) {
    const builder = imageUrlBuilder(client);
    return builder.image(source);
}
