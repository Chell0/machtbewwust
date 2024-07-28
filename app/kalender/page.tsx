import Footer from "@/components/Footer/Footer";
import Kalender from "@/components/Kalender/Kalender";
import NavBar from "@/components/NavBar/NavBar";

export default function Page() {

    return (
        <>
            <div
                className={`relative bg-cover bg-no-repeat bg-local`}
                style={{ backgroundImage: `url("/kalender-bg.jpg")` }}
            >
                <main className="p-6">
                    <NavBar />
                    <Kalender />
                    <Footer />
                </main>
            </div >
        </>
    );
}
