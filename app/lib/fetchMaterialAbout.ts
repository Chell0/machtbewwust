import { client } from "./sanityClient";


export async function fetchMaterialAbout() {
    const query = `*[_type == "material_about"][0]{
        title,
        body
    }`;

    try {
        return await client.fetch(query);
    } catch (error) {
        console.error("Failed to fetch material about:", error);
        return null;
    }
}