import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eliminación de Multas de Tránsito | Thronium Legal",
  description: "Eliminamos multas de tránsito y sanciones administrativas en Colombia mediante recursos jurídicos. Revisión inicial gratuita. Abogados especializados en Cali.",
};

const steps = [
  {
    n: "01",
    title: "Envíanos tu multa",
    desc: "Comparte el comparendo o sanción. Analizamos si aplican causales de nulidad o procedimientos de impugnación.",
  },
  {
    n: "02",
    title: "Interponemos el recurso",
    desc: "Elaboramos y radicamos el recurso de reposición o apelación con argumentación técnica ante el organismo de tránsito.",
  },
  {
    n: "03",
    title: "Seguimiento hasta el éxito",
    desc: "Hacemos seguimiento del proceso y te notificamos la resolución. Si aplica, gestionamos la cancelación definitiva.",
  },
];

const faqs = [
  {
    q: "¿Qué tipos de multas pueden eliminarse?",
    a: "Comparendos de tránsito, infracciones de tránsito por cámaras, multas de organismos de control municipal, sanciones de la Secretaría de Movilidad, y sanciones en cobro coactivo.",
  },
  {
    q: "¿Cuánto tiempo toma el proceso?",
    a: "Depende de la entidad y el tipo de sanción. Los recursos de reposición tienen respuesta en 10 días hábiles. Los recursos de apelación pueden tomar hasta 30 días. Te informamos en cada etapa.",
  },
  {
    q: "¿Qué pasa si la multa ya está en cobro coactivo?",
    a: "Aún existen mecanismos legales para impugnar la sanción de base. Evaluamos la viabilidad y, de ser procedente, iniciamos el proceso de nulidad del cobro.",
  },
  {
    q: "¿Cuál es el costo del servicio?",
    a: "La revisión inicial es completamente gratuita. Los honorarios dependen de la complejidad del caso y los informamos antes de iniciar cualquier trámite — sin sorpresas.",
  },
];

export default function MultasPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #091D3E 0%, #0D2B5E 100%)" }}
      >
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-blue-300/60 mb-8">
            <Link href="/" className="hover:text-blue-200 transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/#servicios" className="hover:text-blue-200 transition-colors">Servicios</Link>
            <span>/</span>
            <span className="text-blue-200">Eliminación de Multas</span>
          </div>

          <div className="max-w-3xl">
            {/* Category badge */}
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6"
              style={{ background: "rgba(192,57,43,0.2)", color: "#F98B7D", border: "1px solid rgba(192,57,43,0.4)" }}
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
              </svg>
              Urgente — Revisión Inicial GRATIS
            </span>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Eliminamos tus{" "}
              <span className="italic" style={{ color: "#F98B7D" }}>multas</span>{" "}
              de tránsito
            </h1>
            <p className="text-lg text-blue-100/70 leading-relaxed mb-10 max-w-2xl">
              Comparendos, infracciones captadas por cámaras, sanciones en cobro coactivo — analizamos tu caso y utilizamos los mecanismos legales disponibles para dejarlas sin efecto.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 font-semibold text-sm px-8 py-4 rounded-sm transition-all hover:-translate-y-1 hover:shadow-xl text-white"
                style={{ background: "var(--crimson)" }}
              >
                Revisar mi multa GRATIS
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </Link>
              <Link
                href="#proceso"
                className="inline-flex items-center justify-center gap-2 font-semibold text-sm px-8 py-4 rounded-sm border-2 transition-all text-white"
                style={{ borderColor: "rgba(255,255,255,0.25)" }}
              >
                Ver cómo funciona
              </Link>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-12"
          style={{ background: "var(--cream)", clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
        />
      </section>

      {/* Tipos de multas */}
      <section className="py-20" style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>Cobertura</span>
            <h2 className="text-3xl font-bold mt-2" style={{ fontFamily: "'Playfair Display', serif", color: "var(--charcoal)" }}>
              Tipos de multas que manejamos
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Comparendos de tránsito", desc: "Exceso de velocidad, semáforo en rojo, no portar documentos" },
              { title: "Infracciones por cámara", desc: "Fotomultas de radares y cámaras de la Secretaría de Movilidad" },
              { title: "Multas en cobro coactivo", desc: "Sanciones ejecutoriadas que aún pueden impugnarse jurídicamente" },
              { title: "Sanciones vehiculares", desc: "Inmovilizaciones, suspensión de licencia, restricciones de circulación" },
              { title: "Multas de organismos municipales", desc: "Sanciones emitidas por entidades distritales o municipales" },
              { title: "Infracciones de tránsito antiguas", desc: "Multas de años anteriores que no han sido cobradas formalmente" },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-sm p-6 flex gap-4">
                <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5" style={{ background: "#FEE2E2" }}>
                  <svg className="w-4 h-4" style={{ color: "var(--crimson)" }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="proceso" className="py-20" style={{ background: "#0D2B5E" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>Proceso</span>
            <h2 className="text-4xl font-bold text-white mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Así eliminamos tu multa
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.n} className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 border-2"
                  style={{ borderColor: "rgba(184,134,11,0.5)", background: "rgba(184,134,11,0.1)" }}
                >
                  <span className="font-bold text-xl" style={{ fontFamily: "'Playfair Display', serif", color: "var(--gold)" }}>
                    {step.n}
                  </span>
                </div>
                <h3 className="text-white font-bold text-lg mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{step.title}</h3>
                <p className="text-blue-200/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honorarios */}
      <section className="py-20" style={{ background: "var(--cream)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-12 text-center">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>Honorarios</span>
            <h2 className="text-3xl font-bold mt-2" style={{ fontFamily: "'Playfair Display', serif", color: "var(--charcoal)" }}>
              Transparencia total en costos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Gratis */}
            <div className="bg-white border-2 border-gray-100 rounded-sm p-7 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: "#D1FAE5" }}>
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">Revisión inicial</p>
              <p className="text-4xl font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif", color: "var(--charcoal)" }}>GRATIS</p>
              <p className="text-sm text-gray-500 leading-relaxed mt-3">Diagnóstico de viabilidad sin costo. Analizamos tu caso y te decimos si procede la prescripción o impugnación.</p>
            </div>

            {/* Honorarios */}
            <div
              className="rounded-sm p-7 flex flex-col items-center text-center border-2"
              style={{ background: "linear-gradient(135deg, #091D3E, #0D2B5E)", borderColor: "rgba(184,134,11,0.4)" }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: "rgba(184,134,11,0.15)", border: "1px solid rgba(184,134,11,0.4)" }}>
                <svg className="w-6 h-6" style={{ color: "var(--gold)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--gold-light)" }}>Honorarios de éxito</p>
              <p className="text-5xl font-bold mb-1 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>30%</p>
              <p className="text-sm mb-3" style={{ color: "var(--gold-light)" }}>del valor total ahorrado</p>
              <p className="text-xs text-blue-200/60 leading-relaxed">Calculado sobre la multa + intereses eliminados. Solo pagas si hay resultado.</p>
            </div>

            {/* Estructura de pago */}
            <div className="bg-white border-2 border-gray-100 rounded-sm p-7">
              <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">Estructura de pago</p>
              <div className="space-y-4">
                {[
                  { fase: "Inicialización", pct: "50%", desc: "Al entregar el borrador del Derecho de Petición" },
                  { fase: "Cierre", pct: "50%", desc: "Al entregar el documento de Paz y Salvo" },
                ].map((item) => (
                  <div key={item.fase} className="flex items-start gap-3">
                    <div
                      className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold text-white"
                      style={{ background: "var(--navy)" }}
                    >
                      {item.pct}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{item.fase}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: "var(--cream)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="mb-12 text-center">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>Preguntas frecuentes</span>
            <h2 className="text-3xl font-bold mt-2" style={{ fontFamily: "'Playfair Display', serif", color: "var(--charcoal)" }}>
              Resolvemos tus dudas
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white border border-gray-100 rounded-sm p-6">
                <h3 className="font-semibold text-gray-800 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{faq.q}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 font-semibold text-sm px-8 py-4 rounded-sm text-white transition-all hover:-translate-y-0.5"
              style={{ background: "var(--crimson)" }}
            >
              Consultar mi caso gratis
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
