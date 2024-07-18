import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import NavBar from "@/components/NavBar/NavBar";
import NewsLetter from "@/components/Newsletter/Newsletter";


export default function Home() {
  return (
    <>
      <div className="relative bg-cover bg-no-repeat bg-local" style={{ backgroundImage: `url("/homepage-bg.png")` }}>
        <main className={`p-6`}>
          {/* Navigation Section */}
          <NavBar />

          {/* Banner Section */}
          <div className={`flex items-center justify-center mt-20`}>
            <Banner />
          </div>

          {/* About Section */}
          <div className={`flex items-center justify-center p-4 mt-20`}>
            <About />
          </div>

          {/* Newsletter Section */}
          <div className={` flex flex-row justify-center mt-10`}>
            <NewsLetter />
          </div>
        </main>
      </div>
    </>
  );
}
