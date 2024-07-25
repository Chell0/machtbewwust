import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = sanityClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: "production",
	apiVersion: "2023-07-08",
	token: process.env.SANITY_API_TOKEN,
	useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);
