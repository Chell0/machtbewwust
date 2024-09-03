import Image from "next/image";
import Link from "next/link";

import { ThemenCard } from "@/app/lib/interface";
import { urlFor } from "@/app/lib/sanityClient";

export default function BlogCard({ card }: { card: ThemenCard }) {
    const { title, smallDescription, currentSlug, titleImage } = card;

    return (
        <div className="bg-white max-w-screen-lg rounded-lg shadow-xl overflow-hidden">
            <div className="relative w-full h-56">
                <Image
                    src={urlFor(titleImage).url()}
                    alt={title}
                    fill
                    className="object-cover rounded-t-lg"
                />
            </div>
            <div className="p-5">
                <h3 className="text-orange-500 text-lg sm:text-sm font-semibold mb-3 hover:underline">
                    <Link href={`/themen/${currentSlug}`}>{title}</Link>
                </h3>
                <p className="text-gray-600 text-xs mb-2 line-clamp-4">{smallDescription}</p>
            </div>
        </div>
    );
}
