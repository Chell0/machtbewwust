import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <>
      <div
        className="relative bg-cover bg-no-repeat bg-local"
        style={{ backgroundImage: `url("/homepage-bg.png")` }}
      >
        <main className={`p-6`}>
          <NavBar />
        </main>
      </div>
    </>
  );
}
