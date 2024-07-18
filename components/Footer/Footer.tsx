import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="p-6 mt-20 border-t-2 border-orange-600 my-4">
                <div
                    className="container mx-auto flex flex-col items-center md:flex-row md:justify-between text-center md:text-left">
                    <p className="text-sm text-orange-700 font-semibold">©{currentYear} Ossara</p>
                    <div
                        className="mt-4 md:mt-0 flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                        <Link href="/datenschutz" className="no-underline text-orange-700 font-semibold hover:text-gray-600">Datenschutz</Link>
                        <Link href="/impressum" className="no-underline text-orange-700 font-semibold hover:text-gray-600">Impressum</Link>
                        <Link href="https://www.instagram.com/ossaraev/" target="_blank" rel="noopener noreferrer" className="no-underline text-orange-700 font-semibold hover:text-gray-600">Instagram</Link>
                        <Link href="https://www.facebook.com/ossara.de/?ref=page_internal" target="_blank" rel="noopener noreferrer" className="no-underline text-orange-700 font-semibold hover:text-gray-600">Facebook</Link>
                        <Link href="https://www.youtube.com/channel/UCe7W9SFkK9y9AyAfknQYvIw" target="_blank" rel="noopener noreferrer" className="no-underline text-orange-700 font-semibold hover:text-gray-600">YouTube</Link>
                    </div>
                </div>
            </footer>
        </>
    )
}
