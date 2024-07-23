import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
	apiVersion: "2024-07-23",
	dataset: "production",
	projectId: "1nk8nqzj",
	useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
	return builder.image(source);
}
