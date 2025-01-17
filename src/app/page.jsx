import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Subject from "@/components/Subject";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white-100">
      <header>
        <Navbar />
      </header>

      <main className="flex-1 flex flex-col items-center justify-center">
        {/* Imagen */}
        <div className="mt-5 mb-10 relative w-4/5 max-w-5xl h-80 rounded-md overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-45"></div>
          <div className="bg-[url('/images/Campus.jpg')] bg-cover bg-center bg-no-repeat h-full flex items-center justify-center">
            <div className="text-center">
              <p className="relative z-10 text-white text-5xl font-bold">
                EDUCANEG
              </p>
              <p className="relative z-10 text-white text-2xl pt-3">
                Más que educación, una experiencia de descubrimiento.
              </p>
            </div>
          </div>
        </div>

        {/* Cards que muestran las carreras*/}
        <div className="flex flex-wrap items-center justify-center mt-10 gap-10">
          <Subject
            imageSrc="/images/informatica.jpg"
            title="Ingeniería Informática"
            description='La Ingeniería Informática es la disciplina que se encarga del diseño, desarrollo, implementación y mantenimiento de sistemas informáticos. '
          />
          <Subject
            imageSrc="/images/ciencias-fiscales.jpg"
            title="Ciencias Fiscales"
            description="La Ingeniería Industrial se enfoca en la optimización de procesos y sistemas dentro de las organizaciones. "
          />
          <Subject
            imageSrc="/images/industrial.jpg"
            title="Ingeniería Industrial"
            description="Las Ciencias Fiscales estudian el sistema tributario y su impacto en la economía y la sociedad."
          />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
