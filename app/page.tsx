"use client";

import { useEffect, useState } from "react";
import { client } from "./lib/sanityClient";
import { ThemenCard } from "./lib/interface";

import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import BlogCard from "@/components/BlogCard/BlogCard";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import NewsLetter from "@/components/Newsletter/Newsletter";
import ShowMoreButton from "@/components/ShowMoreButton/ShowMoreButton";

// Fetch Blog Data
const fetchBlogsData = async (): Promise<ThemenCard[]> => {
  const query = `
    *[_type == 'blog'] | order(date desc)[0...6] {
      title,
      "currentSlug": slug.current,
      titleImage,
      smallDescription,
      "tags": tags[]->title
    }`;
  return client.fetch(query);
};

export default function Home() {
  const [blogsData, setBlogsData] = useState<ThemenCard[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const blogs = await fetchBlogsData();
        setBlogsData(blogs);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadBlogs();
  }, []);

  return (
    <div
      className="relative bg-cover bg-no-repeat bg-local"
      style={{ backgroundImage: `url("/homepage-bg.png")` }}
    >
      <main className="p-6">
        <NavBar />
        <div className="flex items-center justify-center mt-20">
          <Banner />
        </div>
        <div className="flex items-center justify-center p-4 mt-20">
          <About />
        </div>
        <div className="w-full flex items-center justify-center mt-28 sm:px-2">
          <div className="bg-white shadow-lg rounded-lg max-w-md sm:px-4">
            <h2 className="text-orange-500 text-xl py-2 px-4 sm:text-md md:text-xl lg:text-2xl font-semibold text-center">
              Aktuelle Blogeinträge
            </h2>
          </div>
        </div>
        {/* Latest Blogs Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 px-10">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            blogsData.map((blog) => (
              <BlogCard key={blog.currentSlug} card={blog} />
            ))
          )}
        </div>
        <div className="flex flex-row items-end justify-end md:-mr-36 sm:-mr-32 mt-10">
          <ShowMoreButton href="/themen" label="Mehr" />
        </div>
        <div className="flex flex-row justify-center mt-10">
          <NewsLetter />
        </div>
        <Footer />
      </main>
    </div>
  );
}
