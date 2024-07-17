"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <nav className={`md:bg-transparent`}>
                <div className={`flex justify-between items-center ${isOpen ? 'bg-orange-500 p-4' : ''}`}>
                    {/* Title */}
                    <div className={`${isOpen ? 'text-white' : 'text-orange-600'}`}>
                        <Link className={`uppercase text-2xl xl:text-4xl lg:text-xl md:text-lg sm:text-md font-extrabold drop-shadow-xl`} href={`/`}>MachtBewwust<br />Hamburg</Link>
                    </div>

                    {/* Navigation links */}
                    <div className={`hidden text-sm md:flex bg-orange-500 rounded-lg px-3 py-2 space-x-4 text-white`}>
                        <Link className={`hover:text-gray-500`} href={`/themen`}>Themen</Link>
                        <Link className={`hover:text-gray-500`} href={`/material`}>Material</Link>
                        <Link className={`hover:text-gray-500`} href={`/datenbank`}>Datenbank</Link>
                        <Link className={`hover:text-gray-500`} href={`/kalender`}>Kalender</Link>
                    </div>

                    {/* Logo */}
                    <div className={`hidden md:block`}>
                        <Link href={`https://www.ossara.de`} target="_blank" rel="noopener noreferrer">
                            <Image src={`/ossara-logo.png`} alt={`Ossara Logo`} className={`object-contain`} width={200} height={200} />
                        </Link>
                    </div>
                    <div className={`md:hidden`}>
                        <button className={`${isOpen ? 'text-white' : 'text-orange-500'}`}>
                            {isOpen ? <XIcon className={`h-8 w-8`} /> : <MenuIcon className={`h-8 w-8`} />}
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className={`md:hidden bg-orange-500 p-4 space-y-2`}>
                        <Link className={`block no-underline text-white hover:text-gray-300`} href={`/themen`}>Themen</Link>
                        <Link className={`block no-underline text-white hover:text-gray-300`} href={`/material`}>Material</Link>
                        <Link className={`block no-underline text-white hover:text-gray-300`} href={`/datenbank`}>Datenbank</Link>
                        <Link className={`block no-underline text-white hover:text-gray-300`} href={`/kalender`}>Kalender</Link>
                    </div>
                )}
            </nav>
        </>
    );
}
