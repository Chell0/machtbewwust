import Image from "next/image";
import Link from "next/link";

import { MaterialCard } from "@/app/lib/interface";
import { urlFor } from "@/app/lib/sanityClient";


export default function MaterialCards({ card }: { card: MaterialCard }) {

    const { title, titleImage, smallDescription, links } = card;

    return (
        <>
            <div className="bg-amber-50 h-[450px] max-w-screen-lg rounded-lg shadow-lg overflow-hidden">
                <div className="bg-white flex justify-center items-center relative w-full h-56">
                    <Image
                        src={urlFor(titleImage).url()}
                        alt={title}
                        height={150}
                        width={150}
                        style={{ maxHeight: `240px` }}
                        quality={100}
                        className={`rounded-t-lg object-cover overflow-hidden`}
                    />
                </div>
                <div className="bg-amber-50 p-5">
                    <h3 className="text-orange-500 text-lg font-semibold mb-3 cursor-pointer hover:underline line-clamp-4">
                        <Link href={links} target="_blank" rel="noopener noreferrer">{title}</Link>
                    </h3>
                    <p className="text-gray-600 text-xs mb-2 line-clamp-4">{smallDescription}</p>
                </div>
            </div >
        </>
    );
}
