"use client";

import Image from "next/image";
import Category from "@/components/MaterialSection/MaterialSection";
import Footer from "@/components/Footer/Footer";
import MaterialContent from "@/components/MaterialContent/MaterialContent";
import NavBar from "@/components/NavBar/NavBar";


export default function Page() {

    return (
        <div className="relative bg-no-repeat max-h-full max-w-[1440px]">
            <Image
                src="/material-bg.png"
                alt="Background"
                fill
                quality={100}
                priority
                className="z-0 bg-cover"
            />
            <main className="p-6 relative z-10">
                <NavBar />
                <MaterialContent />
                <Category />
                <Footer />
            </main>
        </div>
    );
}
