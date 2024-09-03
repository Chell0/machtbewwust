import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import ThemenAbout from "@/components/ThemenAbout/ThemenAbout";


export default function BlogPage() {

    return (
        <div className="relative bg-cover bg-no-repeat bg-local" style={{ backgroundImage: `url("/themen-bg.png")` }}>
            <main className="p-6">
                <NavBar />
                <ThemenAbout />
                <Footer />
            </main>
        </div>
    );
}
