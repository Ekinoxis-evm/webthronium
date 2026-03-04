import Link from "next/link";

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
      </svg>
    ),
    title: "Eliminación de Multas",
    desc: "Hacemos desaparecer multas de tránsito y sanciones administrativas usando los recursos jurídicos correctos.",
    tag: "Revisión GRATIS",
    href: "/servicios/multas",
    color: "crimson",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
    title: "Recuperación Crediticia",
    desc: "Limpiamos tu historial en Datacrédito y entidades financieras para que vuelvas a acceder a créditos.",
    tag: "Resultados en 30 días",
    href: "/servicios/credito",
    color: "navy",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
      </svg>
    ),
    title: "Recursos Jurídicos",
    desc: "Interponemos recursos de reposición y apelación ante entidades del Estado con argumentación técnica y legal.",
    tag: "Alta efectividad",
    href: "/servicios/recursos",
    color: "gold",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
      </svg>
    ),
    title: "Derecho Administrativo",
    desc: "Asesoría integral en relaciones con el Estado: trámites, sanciones, contratos y cumplimiento normativo.",
    tag: "Asesoría integral",
    href: "/contacto",
    color: "charcoal",
  },
];

const steps = [
  { n: "01", title: "Diagnóstico Gratuito", desc: "Evaluamos tu situación jurídica sin costo. Analizamos multas, reportes crediticios o sanciones en menos de 24 horas." },
  { n: "02", title: "Inicio del Proceso", desc: "Preparamos y radicamos los documentos legales ante la entidad correspondiente con argumentación técnica y precisa." },
  { n: "03", title: "Resolución Exitosa", desc: "Hacemos seguimiento hasta obtener la resolución favorable. Te informamos en cada etapa del proceso." },
];

const testimonials = [
  {
    quote: "Me eliminaron tres multas de tránsito que llevaban dos años en cobro coactivo. El proceso fue rápido y transparente.",
    name: "Carlos M.",
    city: "Cali",
    service: "Eliminación de Multas",
  },
  {
    quote: "Gracias a Thronium pude salir de Datacrédito en 35 días. Ahora tengo acceso a crédito nuevamente. 100% recomendados.",
    name: "Adriana L.",
    city: "Cali",
    service: "Recuperación Crediticia",
  },
  {
    quote: "Interpusieron un recurso de apelación por una sanción de tránsito y ganamos. Excelente conocimiento del derecho administrativo.",
    name: "Mauricio T.",
    city: "Palmira",
    service: "Recursos Jurídicos",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #091D3E 0%, #0D2B5E 50%, #1A4080 100%)",
          minHeight: "88vh",
        }}
      >
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid opacity-30" />

        {/* Decorative circles */}
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-5"
          style={{ background: "var(--gold)" }}
        />
        <div
          className="absolute -bottom-48 -left-24 w-[400px] h-[400px] rounded-full opacity-10"
          style={{ background: "var(--navy-light)" }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-32">
          <div className="max-w-3xl">
            {/* Tag */}
            <div
              className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-8 px-4 py-2 rounded-full border"
              style={{ borderColor: "rgba(184,134,11,0.4)", color: "var(--gold-light)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--gold)" }} />
              Abogados Especializados en Cali
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Tu problema
              <br />
              jurídico tiene{" "}
              <span className="italic" style={{ color: "var(--gold)" }}>
                solución.
              </span>
            </h1>

            <p className="text-lg text-blue-100/80 leading-relaxed mb-10 max-w-2xl">
              Eliminamos multas, recuperamos historiales crediticios y te representamos ante el Estado.
              Con Thronium Legal, la justicia trabaja a tu favor.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-sm transition-all hover:-translate-y-1 hover:shadow-xl text-sm tracking-wide"
                style={{ background: "var(--crimson)" }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                Revisión Inicial GRATIS
              </Link>
              <Link
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-sm border-2 transition-all hover:-translate-y-1 text-sm tracking-wide"
                style={{ borderColor: "rgba(255,255,255,0.3)", color: "white" }}
              >
                Ver Servicios
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-white/10">
              {[
                { n: "+500", label: "Casos resueltos" },
                { n: "98%", label: "Tasa de éxito" },
                { n: "24h", label: "Primera respuesta" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-3xl font-bold mb-1"
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

        {/* Diagonal bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16"
          style={{ background: "var(--cream)", clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
        />
      </section>

      {/* ── GRATIS BANNER ── */}
      <section style={{ background: "var(--crimson)" }} className="py-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-white">
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
            </svg>
            <p className="text-sm font-medium">
              <span className="font-bold text-base">¿Tienes multas o estás en Datacrédito?</span>
              {" "}— La revisión inicial de tu caso es completamente <strong>GRATUITA</strong>.
            </p>
          </div>
          <Link
            href="/contacto"
            className="flex-shrink-0 bg-white font-semibold text-sm px-6 py-2.5 rounded-sm hover:-translate-y-0.5 transition-transform"
            style={{ color: "var(--crimson)" }}
          >
            Empezar ahora →
          </Link>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="servicios" className="py-24" style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Section header */}
          <div className="mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
              Nuestros Servicios
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold mt-3 mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: "var(--charcoal)" }}
            >
              Soluciones jurídicas{" "}
              <span className="italic" style={{ color: "var(--navy)" }}>a tu medida</span>
            </h2>
            <span className="gold-line" />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link key={s.title} href={s.href} className="service-card group block">
                <div className="bg-white border border-gray-100 rounded-sm p-7 h-full flex flex-col">
                  {/* Tag */}
                  <span
                    className="self-start text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full mb-5"
                    style={
                      s.color === "crimson"
                        ? { background: "#FEE2E2", color: "var(--crimson)" }
                        : s.color === "gold"
                        ? { background: "var(--gold-pale)", color: "#92671A" }
                        : { background: "#EFF6FF", color: "var(--navy)" }
                    }
                  >
                    {s.tag}
                  </span>

                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-sm flex items-center justify-center mb-5 transition-colors group-hover:scale-110"
                    style={
                      s.color === "crimson"
                        ? { background: "#FEF2F2", color: "var(--crimson)" }
                        : s.color === "gold"
                        ? { background: "var(--gold-pale)", color: "#92671A" }
                        : { background: "#EFF6FF", color: "var(--navy)" }
                    }
                  >
                    {s.icon}
                  </div>

                  <h3
                    className="font-bold text-lg mb-3 leading-snug"
                    style={{ fontFamily: "'Playfair Display', serif", color: "var(--charcoal)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">{s.desc}</p>

                  <div
                    className="mt-5 text-xs font-semibold flex items-center gap-1.5 transition-gap group-hover:gap-2.5"
                    style={{ color: "var(--navy)" }}
                  >
                    Saber más
                    <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24" style={{ background: "#0D2B5E" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
              ¿Cómo funciona?
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold mt-3 text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Tres pasos hacia{" "}
              <span className="italic" style={{ color: "var(--gold)" }}>la solución</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line (desktop) */}
            <div
              className="hidden md:block absolute top-12 left-1/3 right-1/3 h-0.5 opacity-20"
              style={{ background: "var(--gold)" }}
            />

            {steps.map((step, i) => (
              <div key={step.n} className="relative text-center">
                {/* Number circle */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border-2"
                  style={{ borderColor: "rgba(184,134,11,0.4)", background: "rgba(13,43,94,0.8)" }}
                >
                  <span
                    className="text-2xl font-bold"
                    style={{ fontFamily: "'Playfair Display', serif", color: "var(--gold)" }}
                  >
                    {step.n}
                  </span>
                </div>
                <h3 className="text-white font-bold text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {step.title}
                </h3>
                <p className="text-blue-200/70 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 font-semibold text-sm px-8 py-4 rounded-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              style={{ background: "var(--crimson)", color: "white" }}
            >
              Iniciar mi diagnóstico gratuito
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRUST / WHY US ── */}
      <section className="py-24" style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: visual */}
            <div className="relative">
              <div
                className="rounded-sm p-10 text-white relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #091D3E, #1A4080)" }}
              >
                <div className="absolute inset-0 bg-grid opacity-20" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div
                      className="w-12 h-12 rounded-sm flex items-center justify-center"
                      style={{ background: "rgba(184,134,11,0.15)", border: "1px solid rgba(184,134,11,0.4)" }}
                    >
                      <svg className="w-6 h-6" style={{ color: "var(--gold)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-blue-300 uppercase tracking-widest">Protección Total</p>
                      <p className="font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>Tus datos, seguros</p>
                    </div>
                  </div>

                  {[
                    "Abogados certificados en derecho administrativo",
                    "Proceso transparente paso a paso",
                    "Sin costos ocultos — todo queda por escrito",
                    "Cumplimiento total Ley 1581 de 2012",
                    "Sede física en Cali para mayor confianza",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 py-3 border-b border-white/10 last:border-0">
                      <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "var(--gold)" }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm text-blue-100/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-5 -right-5 bg-white rounded-sm shadow-xl p-4 border border-gray-100"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "#D1FAE5" }}>
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-800">Caso resuelto</p>
                    <p className="text-[10px] text-gray-400">hace 2 horas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: text */}
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
                ¿Por qué elegirnos?
              </span>
              <h2
                className="text-4xl sm:text-5xl font-bold mt-3 mb-6 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif", color: "var(--charcoal)" }}
              >
                Resultados reales,{" "}
                <span className="italic" style={{ color: "var(--navy)" }}>no promesas</span>
              </h2>
              <span className="gold-line mb-8 block" />

              <p className="text-gray-600 leading-relaxed mb-6">
                En Thronium Legal combinamos el rigor del derecho administrativo colombiano con un proceso ágil y transparente. No somos una oficina más — somos especialistas en obtener resultados donde otros fallan.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Cada caso es estudiado individualmente. Antes de iniciar cualquier trámite, te presentamos un diagnóstico honesto de tus posibilidades de éxito — sin compromiso y sin costo.
              </p>

              <Link
                href="/nosotros"
                className="inline-flex items-center gap-2 font-semibold text-sm"
                style={{ color: "var(--navy)" }}
              >
                Conocer al equipo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20" style={{ background: "var(--charcoal)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
              Testimonios
            </span>
            <h2
              className="text-4xl font-bold mt-3 text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Lo que dicen nuestros{" "}
              <span className="italic" style={{ color: "var(--gold)" }}>clientes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-sm p-7 border"
                style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" style={{ color: "var(--gold)" }} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-5 italic">"{t.quote}"</p>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{ background: "var(--navy-light)" }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.city} · {t.service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        className="py-20 text-center"
        style={{ background: "linear-gradient(135deg, #091D3E, #0D2B5E)" }}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 block" style={{ color: "var(--gold)" }}>
            Da el primer paso
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            ¿Listo para resolver{" "}
            <span className="italic" style={{ color: "var(--gold)" }}>tu caso?</span>
          </h2>
          <p className="text-blue-200/70 mb-10 leading-relaxed">
            La consulta inicial es 100% gratuita. Cuéntanos tu situación y un abogado especialista te contactará en menos de 24 horas.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 font-semibold text-base px-10 py-5 rounded-sm transition-all hover:-translate-y-1 hover:shadow-2xl"
            style={{ background: "var(--crimson)", color: "white" }}
          >
            Solicitar consulta gratuita
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
