import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
	apiVersion: "2024-07-22",
	dataset: "production",
	projectId: "1nk8nqzj",
	useCdn: true,
	token:
		"skr76XE99ZuXGa0m9S2aRl2WKrazqTcS1gBKUTcDnDP9OhxCLcwiOSSsHGVrffGGToUo7kYy3rXe9cMsBnCzEwO0rSQgvQaBJTIz9VQRd868b3xXLlXlii9LtA1w6YdDqzFgH5eL95BIBwHDmrwidgEkFf109XnEnJrfLn0q7k9KzE02WVSd",
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
	return builder.image(source);
}
