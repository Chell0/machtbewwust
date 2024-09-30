"use client";

import Link from "next/link";
import { useState, useEffect, useCallback, useMemo } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { differenceInDays, parseISO } from "date-fns";
import { client } from "@/app/lib/sanityClient";
import { Event } from "@/app/lib/interface";
import { fetchEventAbout } from "@/app/lib/fetchEventAbout";
import { PortableText } from "@portabletext/react";


export const revalidate = 30; // Revalidate at most every 30 seconds

export default function Kalender() {
    const [events, setEvents] = useState<Event[]>([]);
    const [openEventIndex, setOpenEventIndex] = useState<number | null>(null);
    const [filter, setFilter] = useState<string>("");
    const [eventAbout, setEventAbout] = useState<{ title: string; body: any[] }>({ title: "", body: [] });

    const fetchEvents = useCallback(async () => {
        try {
            const eventsData = await client.fetch(
                `*[_type == "event"] | order(date asc) { date, time, title, description, type, detailsLink }`
            );

            const currentDate = new Date();
            return eventsData.filter((event: Event) => {
                const eventDate = parseISO(event.date);
                return differenceInDays(eventDate, currentDate) >= 0;
            });
        } catch (error) {
            console.error("Failed to fetch events:", error);
            return [];
        }
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const [filteredEvents, about] = await Promise.all([
                fetchEvents(),
                fetchEventAbout(),
            ]);

            setEvents(filteredEvents);
            setEventAbout(about);
        };

        fetchData().then();
    }, [fetchEvents]);

    const handleToggleEvent = (index: number) => {
        setOpenEventIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const filteredEvents = useMemo(
        () => events.filter((event) =>
            event.title.toLowerCase().includes(filter.toLowerCase())
        ),
        [events, filter]
    );

    return (
        <div className="p-4">
            <div className="bg-white p-3 m-1 rounded-xl shadow-lg mt-10">
                <h1 className="text-orange-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold p-2">
                    {eventAbout?.title || "Loading..."}
                </h1>
                <div className="text-gray-600 text-left text-md p-3">
                    <PortableText
                        value={eventAbout.body}
                        components={{
                            marks: {
                                link: ({ children, value }) => (
                                    <Link
                                        href={value.href}
                                        target="_blank"
                                        rel="noopener no-referrer"
                                        className="text-orange-500 font-semibold"
                                    >
                                        {children}
                                    </Link>
                                ),
                            },
                        }}
                    />
                </div>
            </div>

            {/* Search bar */}
            <input
                type="text"
                placeholder="Filter events..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="mb-6 mt-20 p-2 border border-gray-300 rounded-lg w-full"
            />

            {/* Events list */}
            {filteredEvents.map((event, index) => (
                <div
                    key={index}
                    className="mb-4 bg-orange-500 text-white p-4 rounded-lg shadow-lg"
                >
                    <div className="flex justify-between items-center">
                        <div>
                            <div className="text-xl sm:text-md font-semibold">{event.title}</div>
                            <div className="text-sm text-gray-800">{event.type}</div>
                            <div className="text-sm">
                                {event.date}, {event.time}
                            </div>
                        </div>
                        <button onClick={() => handleToggleEvent(index)}>
                            {openEventIndex === index ? (
                                <ChevronUpIcon className="h-6 w-6 text-white" />
                            ) : (
                                <ChevronDownIcon className="h-6 w-6 text-white" />
                            )}
                        </button>
                    </div>
                    {openEventIndex === index && (
                        <div className="transition-all duration-300 overflow-hidden max-h-screen mt-2 bg-white p-2 rounded">
                            <p className="text-gray-600 text-sm">{event.description}</p>
                            <Link
                                href={event.detailsLink}
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
                    )}
                </div>
            ))}
        </div>
    );
}
