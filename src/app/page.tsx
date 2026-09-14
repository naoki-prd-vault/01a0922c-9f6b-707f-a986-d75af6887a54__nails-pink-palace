"use client";

import Image from "next/image";

const services = [
  { name: "Rubber Base", duration: 90, price: 10000, image: "/service-rubber-base.jpg" },
  { name: "Polygel", duration: 180, price: 18000, image: "/service-polygel.jpg" },
  { name: "Pedicure Spa", duration: 180, price: 20000, image: "/service-pedicure-spa.jpg" },
  { name: "Pedicure Ruso", duration: 180, price: 10000, image: "/service-pedicure-ruso.jpg" },
  { name: "Gel X", duration: 90, price: 15000, image: "/service-gel-x.jpg" },
  { name: "Gel de calcio sobre uña natural", duration: 120, price: 12000, image: "/service-gel-calcio-natural.jpg" },
  { name: "Gel de calcio + extensión de uñas", duration: 120, price: 14000, image: "/service-gel-calcio-extension.jpg" },
  { name: "Exfoliación e hidratación en manos", duration: 120, price: 10000, image: "/service-exfoliacion-manos.jpg" },
  { name: "Esmaltado semipermanente sobre uña natural", duration: 60, price: 8000, image: "/service-esmaltado-semipermanente.jpg" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-primary text-text-primary">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-10 bg-primary shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-shelley-script text-accent">Nails Pink Palace</div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-accent font-montserrat">Inicio</a>
            <a href="#about" className="hover:text-accent font-montserrat">Sobre nosotras</a>
            <a href="#services" className="hover:text-accent font-montserrat">Servicios</a>
          </div>
          <button className="bg-accent text-white px-6 py-2 rounded-full font-montserrat hover:bg-pink-700 transition-colors" onClick={() => window.location.href = '/book'}>
            Reservar cita
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/hero-nails.jpg" // Placeholder for hero image
          alt="Manos y uñas elegantes"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
        <div className="relative z-10 text-center text-white p-8 bg-black bg-opacity-50 rounded-lg">
          <h1 className="text-5xl md:text-7xl font-gilda-display leading-tight">
            Tu estilo, <span className="italic font-shelley-script text-accent">nuestra pasión</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-montserrat">
            Servicio profesional en manicura y pedicura.
          </p>
          <button className="mt-8 bg-accent text-white px-8 py-3 rounded-full text-lg font-montserrat hover:bg-pink-700 transition-colors" onClick={() => window.location.href = '/book'}>
            Reservar cita
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-4xl font-gilda-display text-center mb-12">Sobre Nails Pink Palace</h2>
        <div className="max-w-3xl mx-auto text-lg text-center font-montserrat leading-relaxed">
          <p>
            Servicio profesional en manicura y pedicura. Trabajamos todas las técnicas de uñas de salón (excepto acrílico), diseños personalizados, esmaltado semipermanente sobre uña natural, pedicure Spa + remoción de callos, limpieza e hidratación.
          </p>
          <p className="mt-4">
            Operado por la estilista Valentina Cobaleda Pallares, nos dedicamos a realzar la belleza de tus manos y pies con un toque de elegancia y profesionalismo.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 py-16 md:py-24 bg-secondary">
        <h2 className="text-4xl font-gilda-display text-center mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.name} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={service.image || "/service-placeholder.jpg"} // Placeholder for service image
                alt={service.name}
                width={400}
                height={250}
                objectFit="cover"
                className="w-full h-48"
              />
              <div className="p-6">
                <h3 className="text-xl font-gilda-display mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4 font-montserrat text-sm">{service.duration} min</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-accent font-montserrat">₡{service.price.toLocaleString('es-CR')}</span>
                  <button className="bg-accent text-white px-4 py-2 rounded-full text-sm font-montserrat hover:bg-pink-700 transition-colors" onClick={() => window.location.href = '/book?service=' + service.name}>
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Placeholder for Location Section */}
      <section id="location" className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-4xl font-gilda-display text-center mb-12">Nuestra Ubicación</h2>
        <div className="max-w-3xl mx-auto text-lg text-center font-montserrat">
          <p>Encuéntranos en:</p>
          <a
            href="https://maps.app.goo.gl/BqSg3E39qPKYh9vS6?g_st=ic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline mt-2 inline-block"
          >
            Ver en Google Maps
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-text-primary text-white py-8">
        <div className="container mx-auto px-4 text-center font-montserrat">
          <p>&copy; {new Date().getFullYear()} Nails Pink Palace. Todos los derechos reservados.</p>
          <p className="mt-2">Contacto: <a href="https://wa.me/YOUR_WHATSAPP_NUMBER" className="text-accent hover:underline">WhatsApp</a></p>
        </div>
      </footer>
    </div>
  );
}
