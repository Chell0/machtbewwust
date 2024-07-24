"use client";

import { useEffect, useState } from "react";
import Section from "@/components/Section/Section";
import ShowMoreButton from "@/components/ShowMoreButton/ShowMoreButton";
import { client } from "@/app/lib/sanityClient";
import { MaterialCategory } from "@/app/lib/interface";

// Fetch All Categories
async function fetchCategories() {
    const query = `
    *[_type == "category"] | order(title asc) {
        title,
        "materials": *[_type == "material" && references(^._id)]{
            title,
            "titleImage": titleImage.asset->url,
            smallDescription,
            links
        }
    }`;

    const categories = await client.fetch(query);
    return categories;
}

export default function Category() {
    const [categories, setCategories] = useState<MaterialCategory[]>([]);

    useEffect(() => {
        async function getData() {
            const data = await fetchCategories();
            setCategories(data);
        }

        getData();
    }, []);

    return (
        <>
            {categories.map((category) => (
                <div key={category.title}>
                    <div className="w-full flex items-center justify-center mt-28 sm:px-2">
                        <div className="bg-white shadow-lg rounded-xl max-w-md sm:px-4">
                            <h2 className="text-orange-500 py-2 px-4 text-xl lg:text-2xl md:text-md sm:text-sm font-bold text-center">
                                {category.title}
                            </h2>
                        </div>
                    </div>
                    <Section materials={category.materials.slice(0, 6)} />
                    <ShowMoreButton href={`/${category.title.toLowerCase().replace(/\s+/g, "-")}`} label={"Mehr"} />
                </div>
            ))}
        </>
    );
}
