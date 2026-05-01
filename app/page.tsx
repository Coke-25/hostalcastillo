import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  featured?: boolean;
};

const services = [
  "Wifi",
  "Ascensor",
  "Guardaequipaje",
  "Habitaciones no fumadores",
  "Servicio diario de limpieza",
  "Información turística",
  "Atención al cliente en varios idiomas",
  "Estación de tren a 10 min.",
  "Adaptado a movilidad reducida",
  "Servicio de Taxi",
  "Parada de autobús",
  "No se admiten mascotas",
];

const galleryImages: GalleryImage[] = [
  {
    src: "/img/fe-3-hostal-castillo-la-rinconada.jpg",
    alt: "Fachada de Hostal Castillo en San José de la Rinconada",
    width: 1500,
    height: 1000,
    featured: true,
  },
  {
    src: "/img/fe-2-hostal-castillo-la-rinconada.jpg",
    alt: "Entrada principal de Hostal Castillo",
    width: 1500,
    height: 1000,
  },
  {
    src: "/img/hostal-castillo-la-rinconada.jpg",
    alt: "Habitación luminosa con cama doble",
    width: 1903,
    height: 937,
    featured: true,
  },
  {
    src: "/img/img_8180.jpg",
    alt: "Cama doble con decoración gris y malva",
    width: 1500,
    height: 1000,
  },
  {
    src: "/img/img_8084.jpg",
    alt: "Habitación doble con tonos cálidos",
    width: 1500,
    height: 1000,
  },
  {
    src: "/img/img_8231.jpg",
    alt: "Habitación doble con zona de descanso",
    width: 1500,
    height: 1000,
  },
  {
    src: "/img/img_8129.jpg",
    alt: "Sala privada con sofá y terraza exterior",
    width: 1500,
    height: 1000,
  },
  {
    src: "/img/zchc-4-hostal-castillo-la-rinconada.jpg",
    alt: "Patio interior y zona común del hostal",
    width: 1500,
    height: 1000,
    featured: true,
  },
  {
    src: "/img/zchc-1-hostal-castillo-la-rinconada.jpg",
    alt: "Pasillo interior renovado",
    width: 1500,
    height: 1000,
  },
  {
    src: "/img/zchc-5-hostal-castillo-la-rinconada.jpg",
    alt: "Detalle de patio y acceso a habitaciones",
    width: 1500,
    height: 1000,
  },
  {
    src: "/img/zchc-6-hostal-castillo-la-rinconada.jpg",
    alt: "Zona común con asientos",
    width: 1500,
    height: 1000,
  },
  {
    src: "/img/img_8088.jpg",
    alt: "Habitación amplia con cama preparada",
    width: 1500,
    height: 1000,
  },
  {
    src: "/img/img_8094.jpg",
    alt: "Detalle de habitación con cama y ventana",
    width: 1500,
    height: 1000,
  },
  {
    src: "/img/img_8111.jpg",
    alt: "Habitación doble con luz natural",
    width: 1500,
    height: 1000,
  },
  {
    src: "/img/img_8168.jpg",
    alt: "Dormitorio familiar con camas individuales",
    width: 1500,
    height: 1000,
  },
  {
    src: "/img/img_8176.jpg",
    alt: "Habitación renovada de Hostal Castillo",
    width: 1500,
    height: 1000,
  },
  {
    src: "/img/img_8186.jpg",
    alt: "Habitación con terraza y decoración sencilla",
    width: 1500,
    height: 1000,
  },
  {
    src: "/img/img_8209.jpg",
    alt: "Dormitorio con mobiliario claro",
    width: 1500,
    height: 1000,
  },
  {
    src: "/img/fe-1-hostal-castillo-la-rinconada.jpg",
    alt: "Detalle vertical de la fachada",
    width: 667,
    height: 1000,
  },
  {
    src: "/img/fe-4-hostal-castillo-la-rinconada.jpg",
    alt: "Acceso exterior del hostal",
    width: 667,
    height: 1000,
  },
  {
    src: "/img/fe-5-hostal-castillo-la-rinconada.jpg",
    alt: "Fachada de Hostal Castillo desde la avenida",
    width: 667,
    height: 1000,
  },
  {
    src: "/img/zchc-2-hostal-castillo-la-rinconada.jpg",
    alt: "Detalle vertical de zonas comunes",
    width: 667,
    height: 1000,
  },
  {
    src: "/img/zchc-3-hostal-castillo-la-rinconada.jpg",
    alt: "Escalera y detalles interiores",
    width: 667,
    height: 1000,
  },
  {
    src: "/img/img_8108.jpg",
    alt: "Detalle vertical de habitación",
    width: 667,
    height: 1000,
  },
  {
    src: "/img/hostal-castillo-la-rinconada-home.jpg",
    alt: "Collage de habitación, baño y zona de descanso",
    width: 590,
    height: 439,
  },
  {
    src: "/img/hostal-castillo-facilidades.jpg",
    alt: "Facilidades de Hostal Castillo",
    width: 284,
    height: 189,
  }
];

const quickFacts = [
  "A 10 min. del centro de Sevilla por autopista",
  "A 15 min. del aeropuerto de Sevilla",
  "Tren cercano con conexión al metro y estaciones principales",
  "Autobús en la puerta del hostal",
];

export default function Home() {
  return (
    <main>
      <section className="relative min-h-[88svh] overflow-hidden bg-[#141414] text-white">
        <Image
          src="/img/fe-3-hostal-castillo-la-rinconada.jpg"
          alt="Habitación luminosa de Hostal Castillo"
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.78),rgba(10,10,10,0.36)_48%,rgba(10,10,10,0.1))]" />

        <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Inicio">
            <Image src="/img/logotipo-hostal-castillo.png" width={150} height={70} alt="Logo Hostal Castillo" />
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-white/86 md:flex">
            <a className="transition hover:text-white" href="#hostal">
              El hostal
            </a>
            <a className="transition hover:text-white" href="#prestaciones">
              Prestaciones
            </a>
            <a className="transition hover:text-white" href="#galeria">
              Galería
            </a>
            <a className="transition hover:text-white" href="#contacto">
              Contacto
            </a>
          </nav>
        </header>

        <div
          id="inicio"
          className="relative z-10 mx-auto flex min-h-[calc(88svh-88px)] w-full max-w-7xl items-end px-5 pb-12 pt-20 sm:px-8 lg:pb-16"
        >
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#f2c176]">
              San José de la Rinconada
            </p>
            <h1 className="text-5xl font-semibold leading-[0.96] sm:text-7xl lg:text-8xl">
              Hostal Castillo
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/88 sm:text-xl">
              Un hostal familiar, acogedor y renovado junto a Sevilla, en la
              entrada de San José de la Rinconada viniendo desde Sevilla por la
              carretera que va de Sevilla a Brenes.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+34954790227"
                className="inline-flex h-12 items-center justify-center bg-[#f2c176] px-6 text-sm font-bold uppercase tracking-[0.12em] text-[#1b1712] transition hover:bg-white"
              >
                954 79 02 27
              </a>
              <a
                href="tel:+34683367787"
                className="inline-flex h-12 items-center justify-center border border-white/65 px-6 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:border-white hover:bg-white hover:text-[#1b1712]"
              >
                683 367 787
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="hostal" className="bg-[#fbfaf7] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative min-h-[430px] overflow-hidden sm:min-h-[560px]">
            <Image
              src="/img/fe-5-hostal-castillo-la-rinconada.jpg"
              alt="Fachada de Hostal Castillo"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b75f2a]">
              Desde 1985
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight text-[#211c18] sm:text-5xl">
              Trato familiar, habitaciones luminosas y una ubicación muy cómoda.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-[#5c554c] sm:text-lg">
              <p>
                El H.Castillo es un acogedor establecimiento familiar, fundado
                en 1985 donde el trato personal y afable de nuestro personal es
                nuestra mejor seña de identidad.
              </p>
              <p>
                Nueva apertura en Marzo del 2019 tras una reforma completa para
                mejorar nuestras instalaciones, calidad y comodidad. Hemos
                conseguido que todas nuestras habitaciones sean amplias,
                luminosas con terrazas exteriores y con una sencilla y bonita
                decoración.
              </p>
              <p>
                Todo ello hace que nuestro establecimiento sea el sitio idóneo
                para disfrutar de unas vacaciones familiares, en pareja así como
                para viajes laborales.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-18 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
          {quickFacts.map((fact) => (
            <article
              key={fact}
              className="border-l-2 border-[#20969f] bg-[#f5fbfb] px-5 py-6"
            >
              <p className="text-base font-semibold leading-7 text-[#233235]">
                {fact}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="prestaciones"
        className="bg-[#211c18] px-5 py-20 text-white sm:px-8 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f2c176]">
              Prestaciones
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Lo esencial para descansar y moverse con facilidad.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service}
                className="flex min-h-16 items-center border border-white/12 bg-white/[0.06] px-5 py-4 text-base font-medium text-white/88"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f2c176] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#674016]">
              Ubicación
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#211c18] sm:text-5xl">
              A la entrada de San José de la Rinconada desde Sevilla.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#46311a]">
              Situado en San José de la Rinconada, a 10 minutos por autopista
              del centro de Sevilla y a 15 minutos del aeropuerto de la ciudad.
              Contamos con una estación de ferrocarril, a 10 minutos andando,
              que conecta con las principales estaciones de tren y metro de la
              ciudad. Otra opción de conexión con el
              centro de la ciudad es el autobús, situada la parada en la misma
              puerta del hostal.
            </p>
          </div>
          <div className="bg-[#211c18] p-6 text-white sm:p-8">
            <h3 className="text-2xl font-semibold">Hostal Castillo</h3>
            <address className="mt-5 not-italic leading-8 text-white/82">
              Avda. Malecón, 6
              <br />
              41300 - San José de la Rinconada
              <br />
              La Rinconada - Sevilla
            </address>
            <div className="mt-8 grid gap-3">
              <a
                href="tel:+34954790227"
                className="border border-white/18 px-5 py-4 text-lg font-semibold transition hover:bg-white hover:text-[#211c18]"
              >
                +34 954 79 02 27
              </a>
              <a
                href="tel:+34683367787"
                className="border border-white/18 px-5 py-4 text-lg font-semibold transition hover:bg-white hover:text-[#211c18]"
              >
                +34 683 367 787
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Avda.%20Malec%C3%B3n%206%2C%2041300%20San%20Jos%C3%A9%20de%20la%20Rinconada"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex h-12 items-center justify-center bg-white px-5 text-sm font-bold uppercase tracking-[0.12em] text-[#211c18] transition hover:bg-[#d7f1f2]"
              >
                Ver ubicación
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="galeria" className="bg-[#fbfaf7] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b75f2a]">
                Galería
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#211c18] sm:text-5xl">
                Habitaciones, zonas comunes y entorno.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[#5c554c]">
              Todas las imágenes se pueden abrir para verlas con más detalle.
            </p>
          </div>

          <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((image) => (
              <a
                key={image.src}
                href={image.src}
                target="_blank"
                rel="noreferrer"
                className={`group relative overflow-hidden bg-[#e7e0d7] ${
                  image.featured ? "sm:col-span-2 sm:row-span-2" : ""
                } ${image.height > image.width ? "row-span-2" : ""}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute inset-x-0 bottom-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.72),rgba(0,0,0,0))] px-4 pb-4 pt-12 text-sm font-medium text-white opacity-0 transition group-hover:opacity-100">
                  {image.alt}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer
        id="contacto"
        className="bg-[#141414] px-5 py-12 text-white sm:px-8"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-2xl font-semibold">Hostal Castillo</p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-white/66">
              Avda. Malecón, 6 · 41300 San José de la Rinconada · La Rinconada,
              Sevilla
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+34954790227"
              className="border border-white/18 px-5 py-3 font-semibold transition hover:bg-white hover:text-[#141414]"
            >
              +34 954 79 02 27
            </a>
            <a
              href="tel:+34683367787"
              className="border border-white/18 px-5 py-3 font-semibold transition hover:bg-white hover:text-[#141414]"
            >
              +34 683 367 787
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
