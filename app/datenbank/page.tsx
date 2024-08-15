import Image from 'next/image';
import Datenbank from "@/components/Datenbank/Datenbank";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export default function Page() {
    return (
        <div className="relative bg-no-repeat max-h-full max-w-[1440px]">
            <Image
                src="/datenbank-bg.png"
                alt="Background Image"
                fill
                quality={100}
                priority={true}
                className={"bg-cover"}
            />
            <main className="p-6 relative z-10">
                <NavBar />
                <Datenbank />
                <Footer />
            </main>
        </div>
    );
}
