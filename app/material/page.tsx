import Category from "@/components/Category/Category";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import Image from "next/image";

export default function Page() {
    return (
        <div className="relative bg-cover bg-no-repeat max-h-full max-w-[1440px]">
            <Image
                src="/material-bg.png"
                alt="Background"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority
                className="z-0"
            />
            <main className="p-6 relative z-10">
                <NavBar />
                <div className="bg-white p-5 m-1 rounded-xl shadow-lg items-center justify-center mt-10">
                    <h1 className="text-orange-500 text-3xl sm:text-lg font-bold p-3">
                        Material
                    </h1>
                    <p className="text-gray-600 text-left text-md p-3">
                        Auf der Seite Material bekommt Ihr eine Vielzahl von Materialsammlungen rund um das Thema (Post-) Kolonialismus und Dekolonisierung. In den Rubriken Bildungsmaterial, Videos, Literatur und Podcasts haben wir für Euch zahlreiche verlinkte Ressourcen zusammengestellt, um Euch bei der weiteren Auseinandersetzung mit dem Thema zu unterstützen. Die Auswahl an Materialien wird stetig erweitert, sodass Ihr regelmäßig neue Entdeckungen machen könnt. Wenn Ihr eigene Empfehlungen habt, zögert nicht, sie mit uns zu teilen - wir nehmen gerne empfohlene oder von Euch erstellte Materialien in unsere Sammlung auf.
                    </p>
                </div>
                <Category />
                <Footer />
            </main>
        </div>
    );
}
