import Link from "next/link";


export default async function HomePage() {



  return (
    <section className="relative h-[calc(100vh-200px)] ">


      {/* Welcome Text Overlay */}
      <div className="relative text-primary z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center">
          Welcome to Our Edu Smart!
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-center max-w-xl">
          Discover new experiences, learn something new, and connect with others. Let's make it happen together.
        </p>

        <Link href="#" >

          <button className="btn-primary mt-6 px-6 py-3  rounded-lg text-xl font-semibold transition-all duration-300">
            Explore Now
          </button>
        </Link>

      </div>
    </section>
  );
}
