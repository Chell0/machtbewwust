import Image from 'next/image';
import Footer from "@/components/Footer/Footer";
import Kalender from "@/components/Kalender/Kalender";
import NavBar from "@/components/NavBar/NavBar";

export default function Page() {
    return (
        <div className="relative bg-cover bg-no-repeat bg-local max-h-full max-w-[1440px]">
            <Image
                src="/kalender-bg.jpg"
                alt="Kalender Background"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority={true}
                className="z-0"
            />
            <main className="p-6 relative z-10">
                <NavBar />
                <Kalender />
                <Footer />
            </main>
        </div>
    );
}
