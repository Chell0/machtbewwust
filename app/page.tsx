import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import NavBar from "@/components/NavBar/NavBar";


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
        </main>
      </div>
    </>
  );
}
