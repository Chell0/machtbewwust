"use client";

import { useEffect, useState } from "react";
import { client } from "../lib/sanityClient";
import { MaterialCard } from "../lib/interface";
import Footer from "@/components/Footer/Footer";
import MaterialCards from "@/components/MaterialCards/MaterialCards";
import NavBar from "@/components/NavBar/NavBar";

// Fetch materials from sanity
async function fetchCategoryMaterials() {
    const query = `
  *[_type == "category" && title == "Arbeitsmaterial"] {
    title,
      "materials": *[_type == "material" && references(^._id)] {
        title,
        "titleImage": titleImage.asset->url,
        smallDescription,
        links
      }
  }`;

    const categories = await client.fetch(query);
    if (categories.length > 0) {
        return categories[0].materials;
    }
    return [];
}

export default function Page() {
    const [materials, setMaterials] = useState<MaterialCard[]>([]);

    useEffect(() => {
        async function getData() {
            const data = await fetchCategoryMaterials();
            setMaterials(data);
        }

        getData();
    }, []);

    return (
        <>
            <div
                className="relative bg-cover bg-no-repeat max-h-full max-w-[1440px]"
                style={{ backgroundImage: `url("/material-bg.png")` }}
            >
                <main className="p-6">
                    <NavBar />
                    <div className="w-full flex items-center justify-center mt-28 sm:px-2">
                        <div className="bg-white shadow-lg rounded-xl max-w-lg sm:px-4">
                            <h2 className="text-orange-500 py-2 px-4 lg:text-3xl md:text-md sm:text-sm font-bold text-center">
                                Arbeitsmaterial
                            </h2>
                        </div>
                    </div>
                    {/*Material Cards*/}
                    <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-6 mt-20 px-4">
                        {materials.map((material) => (
                            <MaterialCards key={material.title} card={material} />
                        ))}
                    </div>
                    <Footer />
                </main>
            </div>
        </>
    );
}
