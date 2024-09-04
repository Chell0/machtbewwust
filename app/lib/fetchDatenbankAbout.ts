import { client } from "./sanityClient";


export async function fetchDatenbankAbout() {
    const query = `*[_type == "datenbank_about"][0] {
        title,
        body
    }`;

    try {
        return await client.fetch(query);
    } catch (error) {
        console.error("Failed to fetch datenbank about:", error);
        return null;
    }
}