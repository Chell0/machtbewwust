import Category from "@/components/Category/Category";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export default function Page() {
    return (
        <>
            <div
                className="relative bg-cover bg-no-repeat max-h-full max-w-[1440px]"
                style={{ backgroundImage: `url("/material-bg.png")` }}
            >
                <main className="p-6">
                    <NavBar />
                    <div className="bg-white p-5 m-1 rounded-xl shadow-lg items-center justify-center mt-10">
                        <h1 className="text-orange-500 text-3xl font-bold p-3">
                            Material
                        </h1>
                        <p className="text-gray-600 text-left text-md p-3">
                            Auf der Seite Material bekommt ihr eine Vielzahl von
                            Materialsammlungen rund um das Thema (Post-) Kolonialismus und
                            Dekolonisierung. In den Rubriken Bildungsmaterial, Videos,
                            Literatur und Podcasts haben wir für euch zahlreiche verlinkte
                            Ressourcen zusammengestellt, um euch bei der weiteren
                            Auseinandersetzung mit dem Thema zu unterstützen. Die Auswahl an
                            Materialien wird stetig erweitert, sodass ihr regelmäßig neue
                            Entdeckungen machen könnt. Wenn ihr eigene Empfehlungen habt,
                            zögert nicht, sie mit uns zu teilen - wir nehmen gerne empfohlene
                            oder von euch erstellte Materialien in unsere Sammlung auf.
                        </p>

                    </div>

                    <Category />
                    <Footer />
                </main>
            </div>
        </>
    );
}
