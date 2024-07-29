import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: "production",
	apiVersion: "2023-07-08",
	token: process.env.SANITY_API_TOKEN,
	useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);
