import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recursos Jurídicos — Reposición y Apelación | Thronium Legal",
  description: "Interponemos recursos de reposición y apelación ante entidades del Estado en Colombia. Derecho administrativo especializado. Revisión gratuita en Cali.",
};

const steps = [
  {
    n: "01",
    title: "Revisión del acto",
    desc: "Analizamos el acto administrativo impugnado: vicios de procedimiento, motivación deficiente, incompetencia o violación de derechos.",
  },
  {
    n: "02",
    title: "Elaboración del recurso",
    desc: "Redactamos el recurso con argumentos legales sólidos, citando normas, jurisprudencia y principios del derecho administrativo colombiano.",
  },
  {
    n: "03",
    title: "Radicación y seguimiento",
    desc: "Radicamos el recurso dentro de los términos legales y hacemos seguimiento hasta obtener la respuesta de la entidad.",
  },
];

const resources = [
  {
    name: "Recurso de Reposición",
    who: "Misma entidad que expidió el acto",
    term: "10 días hábiles",
    desc: "Se presenta ante la misma autoridad que emitió la decisión. Es el primer mecanismo de impugnación en la vía gubernativa.",
  },
  {
    name: "Recurso de Apelación",
    who: "Superior jerárquico de la entidad",
    term: "5 días hábiles desde reposición",
    desc: "Se interpone ante el superior jerárquico cuando la reposición no es favorable o cuando la norma lo permite directamente.",
  },
  {
    name: "Recurso de Queja",
    who: "Superior cuando niegan apelación",
    term: "5 días hábiles",
    desc: "Procede cuando se deniega el recurso de apelación y permite acudir al superior jerárquico para revisión.",
  },
];

export default function RecursosPage() {
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
            <Link href="/#servicios" className="hover:text-blue-200 transition-colors">Servicios</Link>
            <span>/</span>
            <span className="text-blue-200">Recursos Jurídicos</span>
          </div>

          <div className="max-w-3xl">
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6"
              style={{ background: "rgba(184,134,11,0.15)", color: "var(--gold-light)", border: "1px solid rgba(184,134,11,0.4)" }}
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd"/>
              </svg>
              Alta efectividad comprobada
            </span>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Recursos jurídicos{" "}
              <span className="italic" style={{ color: "var(--gold)" }}>que funcionan</span>
            </h1>
            <p className="text-lg text-blue-100/70 leading-relaxed mb-10 max-w-2xl">
              Cuando el Estado emite una decisión desfavorable, tienes derecho a impugnarla. Interponemos recursos de reposición, apelación y queja ante cualquier entidad pública con argumentación técnica y jurídica de alto nivel.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 font-semibold text-sm px-8 py-4 rounded-sm transition-all hover:-translate-y-1 hover:shadow-xl text-white"
                style={{ background: "var(--crimson)" }}
              >
                Evaluar mi caso gratis
              </Link>
              <Link
                href="#recursos"
                className="inline-flex items-center justify-center gap-2 font-semibold text-sm px-8 py-4 rounded-sm border-2 transition-all text-white"
                style={{ borderColor: "rgba(255,255,255,0.25)" }}
              >
                Ver tipos de recursos
              </Link>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-12"
          style={{ background: "var(--cream)", clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
        />
      </section>

      {/* Tipos de recursos */}
      <section id="recursos" className="py-20" style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>Tipos de recursos</span>
            <h2 className="text-3xl font-bold mt-2" style={{ fontFamily: "'Playfair Display', serif", color: "var(--charcoal)" }}>
              La vía gubernativa explicada
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((r, i) => (
              <div key={r.name} className="bg-white border border-gray-100 rounded-sm p-8 relative">
                <div
                  className="absolute top-0 left-0 w-1 h-full rounded-l-sm"
                  style={{ background: i === 0 ? "var(--navy)" : i === 1 ? "var(--gold)" : "var(--crimson)" }}
                />
                <h3 className="font-bold text-lg mb-3" style={{ fontFamily: "'Playfair Display', serif", color: "var(--charcoal)" }}>
                  {r.name}
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex gap-2 text-xs">
                    <span className="text-gray-400 w-20 flex-shrink-0">Ante:</span>
                    <span className="text-gray-700 font-medium">{r.who}</span>
                  </div>
                  <div className="flex gap-2 text-xs">
                    <span className="text-gray-400 w-20 flex-shrink-0">Término:</span>
                    <span className="text-gray-700 font-medium">{r.term}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20" style={{ background: "#0D2B5E" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>Nuestro proceso</span>
            <h2 className="text-4xl font-bold text-white mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Cómo interponemos tu recurso
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

          <div className="text-center mt-14">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 font-semibold text-sm px-8 py-4 rounded-sm text-white"
              style={{ background: "var(--crimson)" }}
            >
              Evaluar mi recurso gratis →
            </Link>
          </div>
        </div>
      </section>

      {/* Entidades */}
      <section className="py-16" style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "var(--charcoal)" }}>
              Entidades ante las cuales actuamos
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Secretaría de Movilidad",
              "DIAN",
              "Ministerio de Transporte",
              "Superintendencia Financiera",
              "Alcaldías municipales",
              "INVIAS",
              "Secretarías de Hacienda",
              "Personerías",
              "Contraloría",
              "SIMIT",
            ].map((e) => (
              <span
                key={e}
                className="text-sm font-medium px-4 py-2 rounded-full"
                style={{ background: "white", color: "var(--navy)", border: "1px solid rgba(13,43,94,0.15)" }}
              >
                {e}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
