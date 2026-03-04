import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recuperación Crediticia — Limpieza Datacrédito | Thronium Legal",
  description: "Recuperamos tu historial crediticio en Datacrédito y centrales de riesgo. Proceso legal, resultados en 30-45 días. Abogados especializados en Cali.",
};

const steps = [
  {
    n: "01",
    title: "Análisis del reporte",
    desc: "Revisamos tu reporte en Datacrédito, TransUnion y demás centrales. Identificamos reportes incorrectos, vencidos o ilegítimos.",
  },
  {
    n: "02",
    title: "Solicitud de rectificación",
    desc: "Enviamos derechos de petición y solicitudes de rectificación a las entidades reportantes dentro de los plazos legales establecidos.",
  },
  {
    n: "03",
    title: "Limpieza certificada",
    desc: "Obtenemos la eliminación o corrección del reporte y te entregamos el historial crediticio actualizado.",
  },
];

export default function CreditoPage() {
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
            <span className="text-blue-200">Recuperación Crediticia</span>
          </div>

          <div className="max-w-3xl">
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6"
              style={{ background: "rgba(13,43,94,0.5)", color: "#93C5FD", border: "1px solid rgba(147,197,253,0.3)" }}
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
              </svg>
              Resultados en 30 a 45 días
            </span>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Recupera tu{" "}
              <span className="italic" style={{ color: "#93C5FD" }}>historial</span>{" "}
              crediticio
            </h1>
            <p className="text-lg text-blue-100/70 leading-relaxed mb-10 max-w-2xl">
              Un reporte negativo en Datacrédito o TransUnion puede bloquear tu acceso a créditos, arriendo o trabajo. Usamos los mecanismos legales para rectificar tu situación financiera.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 font-semibold text-sm px-8 py-4 rounded-sm transition-all hover:-translate-y-1 hover:shadow-xl text-white"
                style={{ background: "var(--crimson)" }}
              >
                Revisar mi reporte GRATIS
              </Link>
              <Link
                href="#proceso"
                className="inline-flex items-center justify-center gap-2 font-semibold text-sm px-8 py-4 rounded-sm border-2 transition-all text-white"
                style={{ borderColor: "rgba(255,255,255,0.25)" }}
              >
                Ver el proceso
              </Link>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-12"
          style={{ background: "var(--cream)", clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
        />
      </section>

      {/* Problemas que resolvemos */}
      <section className="py-20" style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>Cobertura</span>
            <h2 className="text-3xl font-bold mt-2" style={{ fontFamily: "'Playfair Display', serif", color: "var(--charcoal)" }}>
              Situaciones que resolvemos
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Reporte en Datacrédito", desc: "Reportes negativos por moras, créditos castigados o deudas antiguas pagadas" },
              { title: "Deuda prescrita reportada", desc: "Reportes que superaron el término legal de permanencia (4 años)" },
              { title: "Reporte incorrecto o falso", desc: "Información errónea que no corresponde a tu comportamiento crediticio real" },
              { title: "Reporte por deuda ajena", desc: "Reportes derivados de fraude o suplantación de identidad" },
              { title: "Eliminación post-pago", desc: "Deudas ya canceladas que permanecen reportadas ilegítimamente" },
              { title: "Acceso negado a créditos", desc: "Bloqueos en entidades bancarias o financieras por historial negativo" },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-sm p-6 flex gap-4">
                <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5" style={{ background: "#EFF6FF" }}>
                  <svg className="w-4 h-4" style={{ color: "var(--navy)" }} fill="currentColor" viewBox="0 0 20 20">
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
              Así limpiamos tu crédito
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

      {/* Costos */}
      <section className="py-20" style={{ background: "var(--cream)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-12 text-center">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>Inversión</span>
            <h2 className="text-3xl font-bold mt-2" style={{ fontFamily: "'Playfair Display', serif", color: "var(--charcoal)" }}>
              Costos del proceso
            </h2>
            <p className="text-sm text-gray-500 mt-3">Proceso en 3 etapas con pagos escalonados según avance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                step: "Paso 1",
                pct: "10%",
                price: "$70.000",
                title: "Diagnóstico",
                desc: "Análisis detallado de centrales de riesgo, score actual y capacidad de endeudamiento.",
                color: "navy",
              },
              {
                step: "Paso 2",
                pct: "40%",
                price: "$280.000",
                title: "Inicio del proceso",
                desc: "Formalización de la prescripción e inyección de historial positivo real.",
                color: "gold",
              },
              {
                step: "Paso 3",
                pct: "50%",
                price: "$350.000",
                title: "Éxito",
                desc: "Registro de créditos para impacto inmediato en el score. Entrega de capacidad de endeudamiento actualizada.",
                color: "crimson",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white border border-gray-100 rounded-sm p-7 relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{
                    background:
                      item.color === "gold"
                        ? "linear-gradient(90deg, var(--gold), var(--gold-light))"
                        : item.color === "crimson"
                        ? "var(--crimson)"
                        : "var(--navy)",
                  }}
                />
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-semibold tracking-widest uppercase text-gray-400">{item.step}</span>
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full"
                    style={
                      item.color === "gold"
                        ? { background: "var(--gold-pale)", color: "#92671A" }
                        : item.color === "crimson"
                        ? { background: "#FEE2E2", color: "var(--crimson)" }
                        : { background: "#EFF6FF", color: "var(--navy)" }
                    }
                  >
                    {item.pct}
                  </span>
                </div>
                <p
                  className="text-3xl font-bold mb-1"
                  style={{ fontFamily: "'Playfair Display', serif", color: "var(--charcoal)" }}
                >
                  {item.price}
                </p>
                <p className="text-sm font-semibold text-gray-700 mb-2">{item.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div
            className="mt-8 rounded-sm p-5 border flex items-start gap-3"
            style={{ background: "rgba(13,43,94,0.04)", borderColor: "rgba(13,43,94,0.12)" }}
          >
            <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "var(--navy)" }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
            </svg>
            <p className="text-sm text-gray-600 leading-relaxed">
              Los costos indicados son referenciales. El diagnóstico inicial es <strong>siempre gratuito</strong>. Los honorarios exactos se acuerdan por escrito antes de iniciar cualquier trámite — sin costos ocultos.
            </p>
          </div>
        </div>
      </section>

      {/* Data protection notice */}
      <section className="py-16" style={{ background: "var(--cream)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs mb-6"
            style={{ background: "rgba(13,43,94,0.08)", color: "var(--navy)", border: "1px solid rgba(13,43,94,0.15)" }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
            </svg>
            Protección de Datos — Ley 1581 de 2012
          </div>
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "var(--charcoal)" }}>
            Tus datos financieros, protegidos
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            Toda la información que compartes con Thronium Legal es tratada bajo estrictas políticas de confidencialidad y en cumplimiento de la Ley Estatutaria 1581 de 2012 de Protección de Datos Personales. Solo utilizamos tu información para gestionar tu caso.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 font-semibold text-sm px-8 py-4 rounded-sm text-white"
            style={{ background: "var(--navy)" }}
          >
            Solicitar revisión gratuita →
          </Link>
        </div>
      </section>
    </>
  );
}
