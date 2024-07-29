import Image from 'next/image';
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export default function Page() {
    return (
        <div className="relative bg-cover bg-no-repeat max-h-full max-w-[1440px]">
            <Image
                src="/homepage-bg.png"
                alt="Homepage Background"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority={true}
                className="z-0"
            />
            <main className="p-6 relative z-10">
                <NavBar />
                <div className="bg-white rounded-xl shadow-xl p-5 mt-20">
                    <h1>Coming Soon ...</h1>
                </div>
                <Footer />
            </main>
        </div>
    );
}
