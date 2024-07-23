import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export default function Page() {

    return (
        <>
            <div
                className="relative bg-cover bg-no-repeat max-h-full max-w-[1440px]"
                style={{ backgroundImage: `url("/homepage-bg.png")` }}
            >
                <main className="p-6">
                    <NavBar />
                    <div className={`bg-white rounded-xl shadow-xl p-5 mt-20`}>
                        <h1>Coming Soon ...</h1>
                    </div>
                    <Footer />
                </main>
            </div>
        </>
    );
}
