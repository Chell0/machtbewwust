import Image from "next/image";
import Link from "next/link";



export default function BlogCard() {

    const { title, smallDescription, currentSlug, titleImage } = card;

    return (
        <>
            <div className="bg-white max-w-screen-lg rounded-lg shadow-xl overflow-hidden">
                <div className="relative w-full h-56">
                    <Image
                        src={titleImage}
                        alt={title}
                        fill={true}
                        className={`rounded-t-lg object-cover overflow-hidden`} />
                </div>
                <div className="bg-white p-5">
                    <h3 className="text-orange-500 text-lg font-semibold mb-3 cursor-pointer hover:underline">
                        <Link href={`/themen/${currentSlug}`}>{title}</Link>
                    </h3>
                    <p className="text-gray-600 text-xs mb-2 line-clamp-4">{smallDescription}</p>
                </div>
            </div>
        </>
    )
}
