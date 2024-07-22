"use client";

import { useState, useEffect } from "react";
import Link from "next/link";


export const revalidate = 30;

export default function Kalender() {
    const [events, setEvents] = useState<Event[]>([]);
    const [openEventIndex, setOpenEventIndex] = useState<number | null>(null);
    const [filter, setFilter] = useState<string>("");


    const toggleEvent = (index: number) => {
        setOpenEventIndex(openEventIndex === index ? null : index);
    };

    return (
        <>
            <div className="p-4">
                <div className="bg-white p-3 m-1 rounded-xl shadow-lg items-center justify-center mt-10">
                    <h1 className="text-orange-500 text-3xl font-bold p-3">
                        Veranstaltungskalender
                    </h1>
                    <p className="text-gray-600 text-left text-md p-3">
                        An dieser Stelle könnt ihr eine Vielzahl an aktuellen
                        Veranstaltungsterminen entdecken, die sich intensiv mit den Themen
                        um (Post-) Kolonialismus und Dekolonisierung befassen.{" "}
                        <Link
                            href={`https://cloud.hamburg.global/index.php/apps/forms/s/j7kFXRTtALSMM4DfEEJt6Faa`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-500 font-semibold"
                        >
                            Hier
                        </Link>{" "}
                        könnt ihr eure Veranstaltung teilen.
                    </p>
                </div>

                {/* Search bar */}
                <input
                    type="text"
                    placeholder="Filter events..."
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="mb-6 mt-20 p-2 border border-gray-300 rounded-lg w-full"
                />
                <div className="mb-4 bg-orange-500 text-white p-4 rounded-lg shadow-lg">
                    <div className="flex justify-between items-center">
                        <div>
                            <div className="text-xl font-bold">title</div>
                            <div className="text-sm text-gray-800">type</div>
                            <div className="text-sm">
                                date, time
                            </div>
                        </div>
                        <button></button>
                    </div>
                    <div
                        className={`transition-all duration-300 overflow-hidden`}>
                        <div className="mt-2 bg-white p-2 rounded">
                            <p className="text-gray-600 text-sm">description</p>
                            <Link
                                href={``}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 inline-flex items-center text-orange-500 hover:text-gray-600"
                            >
                                details
                                <span className="inline-block ml-2 transition-transform transform group-hover:translate-x-l">
                                    &rarr;
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
