"use client";

import React, {useEffect, useState} from "react";
import Section from "@/components/Section/Section";
import ShowMoreButton from "@/components/ShowMoreButton/ShowMoreButton";
import {client} from "@/app/lib/sanityClient";
import {MaterialCategory} from "@/app/lib/interface";

// Fetch All Material Sections
async function fetchMaterialSections() {
    const query = `
    *[_type == "material_section"] | order(title asc) {
        title,
        "materials": *[_type == "material" && references(^._id)] {
            title,
            "titleImage": titleImage.asset->url,
            smallDescription,
            links
        }
    }`;

    try {
        return await client.fetch(query);
    } catch (error) {
        console.error("Failed to fetch material sections:", error);
        return [];
    }
}

export default function MaterialSection() {
    const [materialSections, setMaterialSections] = useState<MaterialCategory[]>([]);

    useEffect(() => {
        (async () => {
            const data = await fetchMaterialSections();
            setMaterialSections(data);
        })();
    }, []);

    return (
        <>
            {materialSections.map((material_section) => (
                <div key={material_section.title} className="mb-8">
                    <div className="w-full flex items-center justify-center mt-28 sm:px-2">
                        <div className="bg-white shadow-lg rounded-xl max-w-md sm:px-4">
                            <h2 className="text-orange-500 py-2 px-4 text-xl lg:text-2xl md:text-md sm:text-sm font-bold text-center">
                                {material_section.title}
                            </h2>
                        </div>
                    </div>
                    <Section materials={material_section.materials.slice(0, 6)}/>
                    <ShowMoreButton
                        href={`/${material_section.title.toLowerCase().replace(/\s+/g, "-")}`}
                        label="Mehr"
                    />
                </div>
            ))}
        </>
    );
}
