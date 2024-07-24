"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { client } from "@/app/lib/sanityClient";
import { Venue } from "@/app/lib/interface";


export default function Datenbank() {
    const [venues, setVenues] = useState<Venue[]>([]);
    const [filteredVenues, setFilteredVenues] = useState<Venue[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("");

    useEffect(() => {
        const fetchVenues = async () => {
            const query = `*[_type == "datenbank"] { name, kontakt, angebote, kategorien, website }`;
            const result = await client.fetch(query);

            // Sort the venues alphabetically by name
            result.sort((a: Venue, b: Venue) => a.name.localeCompare(b.name));
            setVenues(result);
            setFilteredVenues(result);
            setLoading(false);

            // Extract unique categories
            const uniqueCategories = Array.from(
                new Set(result.flatMap((venue: Venue) => venue.kategorien))
            ) as string[];
            setCategories(uniqueCategories);
        };
        fetchVenues();
    }, []);

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const category = event.target.value;
        setSelectedCategory(category);

        if (category === "") {
            setFilteredVenues(venues);
        } else {
            setFilteredVenues(venues.filter((venue) => venue.kategorien.includes(category)));
        }
    };

    return (
        <>
            <div className="container mx-auto mt-20">
                <div className="bg-white p-5 m-1 rounded-xl shadow-lg items-center justify-center mt-10">
                    <h1 className="text-orange-500 text-3xl font-bold p-3">
                        Datenbank
                    </h1>
                    <p className="text-gray-600 text-left text-md p-3">
                        Hier habt ihr die Möglichkeit, in unserer umfassenden Datenbank nach
                        Akteur:innen und Institutionen zu suchen, die sich aktiv mit den
                        Themen um (Post-) Kolonialismus und Dekolonisierung
                        auseinandersetzen. Zudem könnt ihr hier Speaker:innen und
                        Bildungsreferent:innen aus Hamburg finden, die sich mit großer
                        Expertise und Leidenschaft mit diesen wichtigen Themen beschäftigen.
                        Diese Datenbank wird regelmäßig aktualisiert, um euch stets aktuelle
                        Informationen zu liefern.
                        <br />
                        Wenn auch ihr als Institution oder Einzelperson in dieser Datenbank
                        genannt werden möchtet, könnt ihr das entsprechende{" "}
                        <Link
                            href={`https://cloud.hamburg.global/index.php/apps/forms/s/XT2M4r4gyyGEryCTpiW6PNb7`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-500 font-semibold"
                        >
                            Formular
                        </Link>{" "}
                        ausfüllen. Ossara e.V. übernimmt keine Verantwortung für den
                        vermittelten Inhalt der Speaker:innen, noch stellen die Menschen in
                        irgendeiner Weise die offizielle Position von Ossara e.V. dar.
                    </p>
                </div>

                {/* Search Box */}
                <div className="flex justify-center mt-10">
                    <select className="bg-white p-2 border border-orange-300 text-xs rounded-lg" value={selectedCategory} onChange={handleCategoryChange}>
                        <option value="">Alle Kategorien</option>
                        {categories.map((category, index) => (
                            <>
                                <option className="text-orange-500 text-xs py-5 bg-white" key={index} value={category}># {category}</option>
                            </>
                        ))}
                    </select>
                </div>

                {/* Table Head Section */}
                <div className="overflow-x-auto shadow-xl rounded-xl mt-20">
                    <table className="min-w-full divide-y divide-gray-600 bg-white">
                        <thead className="bg-gray-200">
                            <tr>
                                <th
                                    scope="col"
                                    className="bg-orange-500 p-3 text-center text-sm font-bold text-white uppercase tracking-wider"
                                >
                                    Name
                                </th>
                                <th
                                    scope="col"
                                    className="bg-orange-500 p-3 text-center text-sm font-bold text-white uppercase tracking-wider border-l border-gray-300"
                                >
                                    Kontakt
                                </th>
                                <th
                                    scope="col"
                                    className="bg-orange-500 p-3 text-center text-sm font-bold text-white uppercase tracking-wider border-l border-gray-300"
                                >
                                    Angebote
                                </th>
                                <th
                                    scope="col"
                                    className="bg-orange-500 p-3 text-center text-sm font-bold text-white uppercase tracking-wider border-l border-gray-300"
                                >
                                    Website
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-300">
                            {loading ? (
                                <tr>
                                    <td
                                        colSpan={5}
                                        className="px-6 py-4 text-center text-gray-600"
                                    >
                                        Loading...
                                    </td>
                                </tr>
                            ) : (
                                filteredVenues.map((venue, index) => (
                                    <tr key={index}>
                                        <td className="px-5 py-4 text-wrap md:text-balance text-xs font-medium text-gray-900">
                                            {venue.name}
                                        </td>
                                        <td className="px-5 py-4 text-wrap md:text-balance text-xs text-gray-600 border-l border-gray-300">
                                            {venue.kontakt}
                                        </td>
                                        <td className="px-5 py-4 text-wrap md:text-balance text-xs text-gray-600 border-l border-gray-300">
                                            {venue.angebote}
                                        </td>
                                        <td className="px-5 py-4 text-wrap md:text-balance text-xs text-gray-600 border-l border-gray-300">
                                            <Link
                                                href={venue.website}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-orange-500 hover:text-gray-600"
                                            >
                                                {venue.website}
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
