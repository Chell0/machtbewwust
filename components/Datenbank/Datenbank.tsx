"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { client } from "@/app/lib/sanityClient";
import { Venue } from "@/app/lib/interface";

// Fetch All Venues
async function fetchVenues(): Promise<Venue[]> {
    const query = `*[_type == "datenbank"] { name, kontakt, angebote, kategorien, website }`;
    try {
        return await client.fetch(query);
    } catch (error) {
        console.error("Failed to fetch venues:", error);
        return [];
    }
}

export default function Datenbank() {
    const [venues, setVenues] = useState<Venue[]>([]);
    const [filteredVenues, setFilteredVenues] = useState<Venue[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("");

    useEffect(() => {
        const getVenues = async () => {
            const data = await fetchVenues();
            data.sort((a, b) => a.name.localeCompare(b.name));
            setVenues(data);
            setFilteredVenues(data);

            const uniqueCategories = Array.from(new Set(data.flatMap(venue => venue.kategorien)));
            setCategories(uniqueCategories);
            setLoading(false);
        };
        getVenues();
    }, []);

    const handleCategoryChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
        const category = event.target.value;
        setSelectedCategory(category);

        setFilteredVenues(category === ""
            ? venues
            : venues.filter(venue => venue.kategorien.includes(category))
        );
    }, [venues]);

    return (
        <div className="container mx-auto mt-20">
            <div className="bg-white p-5 rounded-xl shadow-lg mt-10">
                <h1 className="text-orange-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold p-3">Datenbank</h1>
                <p className="text-gray-600 text-left text-md p-3">
                    Hier habt Ihr die Möglichkeit, in unserer umfassenden Datenbank nach Akteur:innen und Institutionen zu suchen, die sich aktiv mit den Themen um (Post-) Kolonialismus und Dekolonisierung auseinandersetzen. Zudem könnt Ihr hier Speaker:innen und Bildungsreferent:innen aus Hamburg finden, die sich mit großer Expertise und Leidenschaft mit diesen wichtigen Themen beschäftigen. Diese Datenbank wird regelmäßig aktualisiert, um euch stets aktuelle Informationen zu liefern.
                    Wenn auch Ihr als Institution oder Einzelperson in dieser Datenbank genannt werden möchtet, könnt Ihr das entsprechende{" "}
                    <Link
                        href="https://cloud.hamburg.global/index.php/apps/forms/s/XT2M4r4gyyGEryCTpiW6PNb7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-500 font-semibold"
                    >
                        Formular
                    </Link>{" "}
                    ausfüllen. Ossara e.V. übernimmt keine Verantwortung für den vermittelten Inhalt der Speaker:innen, noch stellen die Menschen in irgendeiner Weise die offizielle Position von Ossara e.V. dar.
                </p>
            </div>

            {/* Search Box */}
            <div className="flex justify-center mt-10">
                <select
                    className="bg-white p-2 border border-orange-300 text-xs rounded-lg"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                >
                    <option value="">Alle Kategorien</option>
                    {categories.map((category) => (
                        <option
                            className="text-orange-500 text-md font-semibold py-5 bg-white"
                            key={category}
                            value={category}
                        >
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto shadow-xl rounded-xl mt-20">
                <table className="min-w-full divide-y divide-gray-600 bg-white">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="bg-orange-500 p-3 text-center text-sm font-bold text-white uppercase tracking-wider">Name</th>
                            <th className="bg-orange-500 p-3 text-center text-sm font-bold text-white uppercase tracking-wider border-l border-gray-300">Kontakt</th>
                            <th className="bg-orange-500 p-3 text-center text-sm font-bold text-white uppercase tracking-wider border-l border-gray-300">Angebote</th>
                            <th className="bg-orange-500 p-3 text-center text-sm font-bold text-white uppercase tracking-wider border-l border-gray-300">Website</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-300">
                        {loading ? (
                            <tr>
                                <td colSpan={4} className="px-6 py-4 text-center text-gray-600">Loading...</td>
                            </tr>
                        ) : (
                            filteredVenues.map((venue) => (
                                <tr key={venue.name}>
                                    <td className="px-5 py-4 text-wrap text-xs font-medium text-gray-900">{venue.name}</td>
                                    <td className="px-5 py-4 text-wrap text-xs text-gray-600 border-l border-gray-300">{venue.kontakt}</td>
                                    <td className="px-5 py-4 text-wrap text-xs text-gray-600 border-l border-gray-300">{venue.angebote}</td>
                                    <td className="px-5 py-4 text-wrap text-xs text-gray-600 border-l border-gray-300">
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
    );
}
