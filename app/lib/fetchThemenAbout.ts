import { client } from "./sanityClient";


export async function fetchThemenAbout() {
    const query = `*[_type == "themen_about"][0] {
        title,
        body
    }`;

    try {
        return await client.fetch(query);
    } catch (error) {
        console.error("Failed to fetch themen about:", error);
        return null;
    }
}