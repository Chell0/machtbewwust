"use client";

import Link from "next/link";
import {useEffect, useState} from "react";
import {PortableText} from "@portabletext/react";
import {client} from "@/app/lib/sanityClient";
import {allTags, ThemenCard} from "@/app/lib/interface";
import {fetchThemenAbout} from "@/app/lib/fetchThemenAbout";
import BlogCard from "@/components/BlogCard/BlogCard";
import Pagination from "@/components/Pagination/Pagination";
import Tags from "@/components/Tags/Tags";


export const revalidate = 30; // Revalidate at most every 30 seconds

// Fetch Data Functions
const fetchTagsData = async () => client.fetch(`*[_type == 'tag'] { title }`);
const fetchBlogsData = async () => client.fetch(`*[_type == 'blog'] | order(date desc) {
    title,
    "currentSlug": slug.current,
    titleImage,
    smallDescription,
    "tags": tags[]->title
}`);

export default function ThemenAbout() {
    const [tagsData, setTagsData] = useState<allTags[]>([]);
    const [blogsData, setBlogsData] = useState<ThemenCard[]>([]);
    const [filteredBlogs, setFilteredBlogs] = useState<ThemenCard[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [themenAbout, setThemenAbout] = useState<{ title: string; body: any[] }>({title: "", body: []});

    useEffect(() => {
        (async () => {
            try {
                const [tags, blogs] = await Promise.all([fetchTagsData(), fetchBlogsData()]);
                setTagsData(tags);
                setBlogsData(blogs);
                setFilteredBlogs(blogs);
            } catch (error) {
                console.error("Error fetching data:", error);
            }

            const aboutData = await fetchThemenAbout();
            if (aboutData) {
                setThemenAbout(aboutData);
            }
        })();
    }, []);

    const handleTagSelect = (tag: string | null) => {
        const updatedBlogs = tag ? blogsData.filter(blog => blog.tags.includes(tag)) : blogsData;
        setFilteredBlogs(updatedBlogs);
        setCurrentPage(1);
    };

    const handlePageChange = (page: number) => setCurrentPage(page);

    const ITEMS_PER_PAGE = 12;
    const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);
    const currentBlogs = filteredBlogs.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    return (
        <>
            {/* About Section*/}
            <section className="bg-white p-5 m-1 rounded-xl shadow-lg mt-10 mb-10">
                <h1 className="text-orange-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold p-3">{themenAbout?.title}</h1>
                <PortableText
                    value={themenAbout.body}
                    components={{
                        marks: {
                            link: ({children, value}) => (
                                <Link href={value.href} target="_blank" rel="noopener noreferrer"
                                      className="text-orange-500 font-semibold">{children}</Link>
                            ),
                        },
                    }}
                />
            </section>

            {/* Tags */}
            <Tags onTagSelect={handleTagSelect} tags={tagsData}/>

            {/* Blogs */}
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {currentBlogs.map(card => (
                        <BlogCard key={card.currentSlug} card={card}/>
                    ))}
                </div>
            </div>

            {/* Pages */}
            {totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            )}
        </>
    );
}
