import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros | Thronium Legal — Abogados en Cali",
  description: "Conoce al equipo de Thronium Legal. Abogados especializados en derecho administrativo, multas y recuperación crediticia. Sede en Cali, Colombia.",
};

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    title: "Transparencia total",
    desc: "Antes de iniciar cualquier proceso, te presentamos un diagnóstico honesto de las posibilidades de éxito y los costos involucrados.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    title: "Resultados concretos",
    desc: "No cobramos promesas vacías. Nuestro modelo se basa en resultados verificables y nuestros clientes son nuestra mejor referencia.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
      </svg>
    ),
    title: "Confidencialidad",
    desc: "Toda la información de nuestros clientes está protegida bajo la Ley 1581 de 2012. Tu privacidad es nuestra responsabilidad.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    title: "Cercanía humana",
    desc: "Somos un equipo local con sede física en Cali. Puedes visitarnos, llamarnos y recibir atención personalizada sin filas ni burocracia.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #091D3E 0%, #0D2B5E 100%)" }}
      >
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex items-center gap-2 text-xs text-blue-300/60 mb-8">
            <Link href="/" className="hover:text-blue-200 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-blue-200">Nosotros</span>
          </div>

          <div className="max-w-3xl">
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6"
              style={{ background: "rgba(184,134,11,0.15)", color: "var(--gold-light)", border: "1px solid rgba(184,134,11,0.4)" }}
            >
              Nuestro equipo
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Derecho al servicio{" "}
              <span className="italic" style={{ color: "var(--gold)" }}>del ciudadano</span>
            </h1>
            <p className="text-lg text-blue-100/70 leading-relaxed max-w-2xl">
              Thronium Legal nació en Cali con una misión clara: hacer accesible la justicia administrativa para personas naturales que enfrentan multas, bloqueos crediticios y sanciones del Estado.
            </p>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-12"
          style={{ background: "var(--cream)", clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
        />
      </section>

      {/* Misión */}
      <section className="py-24" style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>Nuestra historia</span>
              <h2 className="text-4xl font-bold mt-3 mb-6" style={{ fontFamily: "'Playfair Display', serif", color: "var(--charcoal)" }}>
                Fundados con propósito
              </h2>
              <span className="gold-line mb-8 block" />
              <p className="text-gray-600 leading-relaxed mb-5">
                Thronium Legal fue fundado por abogados egresados de las principales universidades de Colombia, con especialización en derecho administrativo y derecho comercial. La firma nació de la necesidad de ofrecer servicios jurídicos de alta calidad a precios accesibles para el ciudadano común.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Operamos desde Cali, en el corazón del Valle del Cauca, atendiendo casos en toda Colombia. Nuestra presencia física en la ciudad nos permite ofrecer atención personalizada y construir relaciones de confianza duraderas con nuestros clientes.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Hemos resuelto más de 500 casos exitosamente, con una tasa de resolución favorable superior al 98%. Cada caso es tratado con la misma rigurosidad y compromiso, sin importar su tamaño o complejidad.
              </p>
            </div>

            {/* Stats card */}
            <div
              className="rounded-sm p-10 text-white relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #091D3E, #1A4080)" }}
            >
              <div className="absolute inset-0 bg-grid opacity-20" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Thronium en números
                </h3>
                <div className="grid grid-cols-2 gap-4 sm:gap-8">
                  {[
                    { n: "+500", label: "Casos resueltos" },
                    { n: "98%", label: "Tasa de éxito" },
                    { n: "5+", label: "Años de experiencia" },
                    { n: "24h", label: "Respuesta inicial" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-4 rounded-sm" style={{ background: "rgba(255,255,255,0.06)" }}>
                      <div
                        className="text-4xl font-bold mb-1"
                        style={{ fontFamily: "'Playfair Display', serif", color: "var(--gold)" }}
                      >
                        {stat.n}
                      </div>
                      <div className="text-xs text-blue-200/60 uppercase tracking-widest">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ background: "white" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>Nuestros valores</span>
            <h2 className="text-4xl font-bold mt-2" style={{ fontFamily: "'Playfair Display', serif", color: "var(--charcoal)" }}>
              Lo que nos define
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val) => (
              <div key={val.title} className="p-7 rounded-sm" style={{ background: "var(--cream)", border: "1px solid #E9E6DF" }}>
                <div
                  className="w-12 h-12 rounded-sm flex items-center justify-center mb-5"
                  style={{ background: "#EFF6FF", color: "var(--navy)" }}
                >
                  {val.icon}
                </div>
                <h3 className="font-bold text-base mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "var(--charcoal)" }}>
                  {val.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20" style={{ background: "var(--charcoal)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase mb-3 block" style={{ color: "var(--gold)" }}>
                Sede física
              </span>
              <h2
                className="text-4xl font-bold text-white mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Encuéntranos en{" "}
                <span className="italic" style={{ color: "var(--gold)" }}>Cali</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "var(--gold)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <div>
                    <p className="font-medium text-white">Calle 2 Oeste, Barrio Belisario Caicedo</p>
                    <p className="text-sm text-gray-400">Cali, Valle del Cauca — Colombia</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 flex-shrink-0" style={{ color: "var(--gold)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span>info@throniumlegal.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 flex-shrink-0" style={{ color: "var(--gold)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>Lunes a Viernes — 8:00 AM a 6:00 PM</span>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-sm text-white transition-all hover:-translate-y-0.5"
                  style={{ background: "var(--crimson)" }}
                >
                  Agendar visita o llamada →
                </Link>
              </div>
            </div>

            {/* Map placeholder */}
            <div
              className="rounded-sm overflow-hidden flex items-center justify-center"
              style={{ background: "rgba(13,43,94,0.4)", border: "1px solid rgba(184,134,11,0.2)", minHeight: "280px" }}
            >
              <div className="text-center p-8">
                <svg className="w-16 h-16 mx-auto mb-4 opacity-40" style={{ color: "var(--gold)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                </svg>
                <p className="text-gray-400 text-sm">Calle 2 Oeste, Belisario Caicedo</p>
                <p className="text-gray-500 text-xs mt-1">Cali, Valle del Cauca</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center" style={{ background: "var(--cream)" }}>
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "var(--charcoal)" }}>
            ¿Tienes un caso que resolver?
          </h2>
          <p className="text-gray-500 mb-8 text-sm leading-relaxed">
            La revisión inicial es gratuita. Cuéntanos tu situación y te respondemos en menos de 24 horas.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 font-semibold text-sm px-8 py-4 rounded-sm text-white"
            style={{ background: "var(--navy)" }}
          >
            Contactar ahora →
          </Link>
        </div>
      </section>
    </>
  );
}
