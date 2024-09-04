"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(prev => !prev);

    return (
        <nav className="md:bg-transparent">
            <div className={`flex justify-between items-center p-4 ${isOpen ? 'bg-orange-500' : ''}`}>
                {/* Title */}
                <Link
                    className={`uppercase text-2xl xl:text-4xl lg:text-xl md:text-lg sm:text-md font-extrabold drop-shadow-xl ${isOpen ? 'text-white' : 'text-orange-600'}`}
                    href="/"
                >
                    MachtBewusst<br />Hamburg
                </Link>

                {/* Navigation links (desktop) */}
                <div className={`hidden md:flex space-x-4 px-3 py-1 rounded-xl ${isOpen ? 'bg-orange-500 text-white' : 'bg-orange-500 text-white'}`}>
                    <Link className="hover:text-gray-600" href="/themen">Themen</Link>
                    <Link className="hover:text-gray-600" href="/material">Material</Link>
                    <Link className="hover:text-gray-600" href="/datenbank">Datenbank</Link>
                    <Link className="hover:text-gray-600" href="/kalender">Kalender</Link>
                </div>

                {/* Logo */}
                <div className="hidden md:block">
                    <Link href="https://www.ossara.de" target="_blank" rel="noopener noreferrer">
                        <Image src="/ossara-logo.png" alt="Ossara Logo" className="object-contain" width={200} height={200} />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className={`md:hidden ${isOpen ? 'text-white' : 'text-orange-500'}`} onClick={toggleMenu}>
                    {isOpen ? <XIcon className="h-8 w-8" /> : <MenuIcon className="h-8 w-8" />}
                </button>
            </div>

            {/* Mobile Navigation Links */}
            {isOpen && (
                <div className="md:hidden bg-orange-500 p-4 space-y-2">
                    <Link className="block text-white hover:text-gray-600" href="/themen">Themen</Link>
                    <Link className="block text-white hover:text-gray-600" href="/material">Material</Link>
                    <Link className="block text-white hover:text-gray-600" href="/datenbank">Datenbank</Link>
                    <Link className="block text-white hover:text-gray-600" href="/kalender">Kalender</Link>
                </div>
            )}
        </nav>
    );
}
