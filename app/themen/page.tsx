import NavBar from "@/components/NavBar/NavBar";

export default function Page() {

    return (
        <>
            <div
                className="relative bg-cover bg-no-repeat max-h-full max-w-[1440px]"
                style={{ backgroundImage: `url("/themen-bg.png")` }}
            >
                <main className="p-6">
                    <NavBar />
                    Themen
                </main>
            </div>
        </>
    );
}
