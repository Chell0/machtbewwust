"use client";

import { useEffect, useState } from "react";
import { client } from "@/app/lib/sanityClient";
import { allTags, ThemenCard } from "@/app/lib/interface";
import Tags from "@/components/Tags/Tags";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import Pagination from "@/components/Pagination/Pagination";
import BlogCard from "@/components/BlogCard/BlogCard";

// Fetch Data Functions
const fetchTagsData = async () => client.fetch(`*[_type == 'tag'] { title }`);
const fetchBlogsData = async () => client.fetch(`
    *[_type == 'blog'] | order(date desc) {
        title,
        "currentSlug": slug.current,
        titleImage,
        smallDescription,
        "tags": tags[]->title
    }
`);

export default function BlogPage() {
    const [tagsData, setTagsData] = useState<allTags[]>([]);
    const [blogsData, setBlogsData] = useState<ThemenCard[]>([]);
    const [filteredBlogs, setFilteredBlogs] = useState<ThemenCard[]>([]);
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [tags, blogs] = await Promise.all([fetchTagsData(), fetchBlogsData()]);
                setTagsData(tags);
                setBlogsData(blogs);
                setFilteredBlogs(blogs);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const handleTagSelect = (tag: string | null) => {
        setSelectedTag(tag);
        const updatedBlogs = tag ? blogsData.filter(blog => blog.tags.includes(tag)) : blogsData;
        setFilteredBlogs(updatedBlogs);
        setCurrentPage(1);
    };

    const handlePageChange = (page: number) => setCurrentPage(page);

    const ITEMS_PER_PAGE = 12;
    const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);
    const currentBlogs = filteredBlogs.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    return (
        <div className="relative bg-cover bg-no-repeat bg-local" style={{ backgroundImage: `url("/themen-bg.png")` }}>
            <main className="p-6">
                <NavBar />
                <section className="bg-white p-5 m-1 rounded-xl shadow-lg mt-10 mb-10">
                    <h1 className="text-orange-500 text-3xl font-bold p-3">Themen</h1>
                    <p className="text-gray-600 text-md p-3">
                        Die Themenseite befasst sich mit den aktuellen Geschehnissen und Entwicklungen rund um das Thema Dekolonisierung in Hamburg. Erfahrt hier mehr über die Bewegungen, Initiativen und Diskussionen, die darauf abzielen, Koloniale Kontinuitäten zu hinterfragen und neue dekoloniale Perspektiven aufzuzeigen. Bei Interesse an einem Beitrag schreibt uns gerne eine E-Mail an machtbewusst[at]ossara.de. Viel Spaß beim Lesen und Bewusstmachen!
                    </p>
                </section>

                <Tags onTagSelect={handleTagSelect} tags={tagsData} />

                <div className="container mx-auto p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                        {currentBlogs.map(card => (
                            <BlogCard key={card.currentSlug} card={card} />
                        ))}
                    </div>
                </div>

                {totalPages > 1 && (
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                )}

                <Footer />
            </main>
        </div>
    );
}
