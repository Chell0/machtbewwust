import { client } from "./sanityClient";


export async function fetchEventAbout() {
    const query = `*[_type == "event_about"][0] {
        title,
        body
    }`;

    try {
        return await client.fetch(query);
    } catch (error) {
        console.error("Failed to fetch event_about:", error);
        return null;
    }
}