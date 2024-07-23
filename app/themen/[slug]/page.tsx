import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { PortableText } from "@portabletext/react";
import { FaUserCircle } from "react-icons/fa";
import { client, urlFor } from "@/app/lib/sanityClient";
import { ThemenPost } from "@/app/lib/interface";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";


export const revalidate = 30; // revalidate at most 30seconds

async function getData(slug: string) {

    // Fetch the blog post with the given slug from Sanity
    const query = `
  *[_type == "blog" && slug.current == '${slug}']{
  "currentSlug": slug.current,
    date,
    title,
    titleImage{
      asset->{
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
  }[0]`;

    const data = await client.fetch(query);
    return data;
}

export default async function ThemenArticle({ params }: { params: { slug: string } }) {
    const data: ThemenPost = await getData(params.slug);

    // Ensure data.tags is an array
    const tagsArray = Array.isArray(data.tags) ? data.tags : [];

    // Format the date
    const formattedDate = format(new Date(data.date), "EEE, MMMM dd yyyy");

    return (
        <>
            <div
                className={`relative bg-cover bg-no-repeat bg-local`}
                style={{ backgroundImage: `url("/themen-bg.png")` }}
            >
                <main className={`p-6`}>
                    <NavBar />
                    <div className={`container max-w-screen-lg mx-auto mt-20 bg-white p-10 rounded-lg shadow-2xl`}>

                        {/* Blog Title */}
                        <h1 className="mb-10 block lg:text-3xl text-center text-orange-500 leading-8 font-bold tracking-wide uppercase">
                            {data.title}
                        </h1>

                        <div className={`text-center text-gray-500 mb-5`}>
                            {/* Blog Date */}
                            <p>{formattedDate}</p>

                            {/* Blog Author */}
                            {data.authors && data.authors.length > 0 && (
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
                                // src={urlFor(data.titleImage).url()}
                                src={data.titleImage.asset.url}
                                // alt={data.title}
                                alt={data.titleImage.alt}
                                width={1080}
                                height={872}
                                priority
                                className="object-cover object-center rounded m-0 mt-8 shadow-xl"
                                quality={100}
                                style={{ maxHeight: `480px` }}
                            />
                        </div>

                        {/* Blog Image Description */}
                        {data.titleImage.description && (
                            <div className={`text-center text-xs italic text-gray-500 mb-5`}><p>{data.titleImage.description}</p></div>
                        )}

                        {/* Blog Image Source */}
                        {data.titleImage.source && (
                            <div className={`text-center text-gray-500 text-xs mb-5`}>
                                <p>
                                    Source:{" "}
                                    <Link className={`text-orange-500`} href={data.titleImage.source} rel={`noopener noreferrer`} target={`_blank`}>
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
        </>
    );
}
