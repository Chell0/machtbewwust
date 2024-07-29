"use client";

import { useEffect, useState } from "react";
import { client } from "../lib/sanityClient";
import { MaterialCard } from "../lib/interface";
import Footer from "@/components/Footer/Footer";
import MaterialCards from "@/components/MaterialCards/MaterialCards";
import NavBar from "@/components/NavBar/NavBar";
import Image from 'next/image';

// Fetch materials from sanity
async function fetchCategoryMaterials() {
    const query = `
    *[_type == "category" && title == "Literatur"] {
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

function useCategoryMaterials() {
    const [materials, setMaterials] = useState<MaterialCard[]>([]);

    useEffect(() => {
        async function getData() {
            const data = await fetchCategoryMaterials();
            setMaterials(data);
        }

        getData();
    }, []);

    return materials;
}

export default function Page() {
    const materials = useCategoryMaterials();

    return (
        <div className="relative bg-cover bg-no-repeat max-h-full max-w-[1440px]">
            <Image
                src="/material-bg.png"
                alt="Background"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority={true}
                className="z-0"
            />
            <main className="p-6 relative z-10">
                <NavBar />
                <div className="w-full flex items-center justify-center mt-28 sm:px-2">
                    <div className="bg-white shadow-lg rounded-xl max-w-md sm:px-4">
                        <h2 className="text-orange-500 py-2 px-4 lg:text-3xl md:text-md sm:text-sm font-bold text-center">
                            Literatur
                        </h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-6 mt-20 px-4">
                    {materials.map((material) => (
                        <MaterialCards key={material.title} card={material} />
                    ))}
                </div>
                <Footer />
            </main>
        </div>
    );
}
