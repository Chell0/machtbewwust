import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { PortableText } from "@portabletext/react";
import { FaUserCircle } from "react-icons/fa";
import { client } from "@/app/lib/sanityClient";
import { ThemenPost } from "@/app/lib/interface";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export const revalidate = 30; // Revalidate at most every 30 seconds

// Fetch the blog post data from Sanity
const fetchPostData = async (slug: string) => {
    const query = `
        *[_type == "blog" && slug.current == '${slug}'] {
            "currentSlug": slug.current,
            date,
            title,
            titleImage {
                asset -> {
                    _id,
                    url
                },
                alt,
                description,
                source
            },
            content,
            "tags": tags[]->title,
            authors[]->{
                name,
                specialty
            }
        }[0]
    `;
    return client.fetch(query);
};

export default async function ThemenArticle({ params }: { params: { slug: string } }) {
    const data: ThemenPost = await fetchPostData(params.slug);

    // Ensure tags is an array
    const tagsArray = Array.isArray(data.tags) ? data.tags : [];
    const formattedDate = format(new Date(data.date), "EEE, MMMM dd yyyy");

    return (
        <div className="relative bg-cover bg-no-repeat bg-local" style={{ backgroundImage: `url("/themen-bg.png")` }}>
            <main className="p-6">
                <NavBar />
                <div className="container max-w-screen-lg mx-auto mt-20 bg-white p-10 rounded-lg shadow-2xl">

                    {/* Blog Title */}
                    <h1 className="mb-10 text-center text-orange-500 text-3xl font-bold uppercase leading-8 tracking-wide">
                        {data.title}
                    </h1>

                    {/* Blog Date and Author */}
                    <div className="text-center text-gray-500 mb-5">
                        <p>{formattedDate}</p>
                        {data.authors?.length > 0 && (
                            <div className="flex flex-wrap items-center justify-center mt-5">
                                {data.authors.map((author, index) => (
                                    <div key={index} className="flex items-center m-2">
                                        <FaUserCircle className="text-orange-500 mr-2" size={24} />
                                        <div className="flex flex-col items-start">
                                            <p className="text-xs">By {author.name}</p>
                                            <p className="text-xs text-gray-500">{author.specialty}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Blog Image */}
                    <div className="flex items-center justify-center mt-10 mb-5 max-w-screen-xl">
                        <Image
                            src={data.titleImage.asset.url}
                            alt={data.titleImage.alt}
                            width={1080}
                            height={872}
                            priority
                            className="object-cover object-center rounded shadow-xl"
                            quality={100}
                            style={{ maxHeight: `480px` }}
                        />
                    </div>

                    {/* Blog Image Description */}
                    {data.titleImage.description && (
                        <div className="text-center text-xs italic text-gray-500 mb-5">
                            <p>{data.titleImage.description}</p>
                        </div>
                    )}

                    {/* Blog Image Source */}
                    {data.titleImage.source && (
                        <div className="text-center text-gray-500 text-xs mb-5">
                            <p>
                                Source:{" "}
                                <Link className="text-orange-500" href={data.titleImage.source} rel="noopener noreferrer" target="_blank">
                                    {data.titleImage.source}
                                </Link>
                            </p>
                        </div>
                    )}

                    {/* Blog Content */}
                    <div className="max-w-screen-lg mx-auto mt-20 prose prose-sm prose-stone prose-headings:text-2xl prose-headings:text-orange-500 prose-headings:font-semibold prose-a:text-orange-500 prose-a:target:_blank prose-a:rel:noreferrer">
                        <PortableText value={data.content} />
                    </div>

                    {/* Tags */}
                    <div className="mt-10 flex flex-wrap justify-center gap-2">
                        {tagsArray.map((tag, index) => (
                            <span key={index} className="text-xs italic px-2 py-1 bg-orange-500 text-white rounded-md shadow-xl">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
                <Footer />
            </main>
        </div>
    );
}
