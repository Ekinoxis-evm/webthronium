import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto — Consulta Jurídica Gratuita | Thronium Legal",
  description: "Solicita tu consulta jurídica gratuita con Thronium Legal. Eliminación de multas, recuperación crediticia y recursos jurídicos. Cali, Colombia.",
};

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #091D3E 0%, #0D2B5E 100%)" }}
      >
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="flex items-center gap-2 text-xs text-blue-300/60 mb-8 justify-center">
            <Link href="/" className="hover:text-blue-200 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-blue-200">Contacto</span>
          </div>

          <span
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6"
            style={{ background: "rgba(192,57,43,0.2)", color: "#F98B7D", border: "1px solid rgba(192,57,43,0.4)" }}
          >
            Revisión inicial 100% GRATUITA
          </span>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Cuéntanos tu{" "}
            <span className="italic" style={{ color: "var(--gold)" }}>caso</span>
          </h1>
          <p className="text-blue-100/70 max-w-xl mx-auto leading-relaxed">
            Un abogado especialista revisará tu situación y te contactará en menos de 24 horas con un diagnóstico honesto y sin compromiso.
          </p>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-12"
          style={{ background: "var(--cream)", clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
        />
      </section>

      {/* Form + info */}
      <section className="py-20" style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact info sidebar */}
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "var(--charcoal)" }}>
                  Información de contacto
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                      ),
                      label: "Dirección",
                      value: "Calle 2 Oeste, Belisario Caicedo\nCali, Valle del Cauca",
                    },
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                      ),
                      label: "Email",
                      value: "info@throniumlegal.com",
                    },
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      ),
                      label: "Horario",
                      value: "Lun – Vie: 8:00 AM – 6:00 PM",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-3">
                      <div
                        className="w-10 h-10 rounded-sm flex-shrink-0 flex items-center justify-center"
                        style={{ background: "white", color: "var(--navy)", border: "1px solid #E9E6DF" }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">{item.label}</p>
                        <p className="text-sm text-gray-700 whitespace-pre-line">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Servicios rápidos */}
              <div className="bg-white border border-gray-100 rounded-sm p-6">
                <h4 className="font-semibold text-sm text-gray-700 mb-4">Consulta rápida por servicio:</h4>
                <div className="space-y-2">
                  {[
                    { label: "Eliminar una multa", href: "/servicios/multas" },
                    { label: "Salir de Datacrédito", href: "/servicios/credito" },
                    { label: "Interponer un recurso", href: "/servicios/recursos" },
                  ].map((s) => (
                    <Link
                      key={s.label}
                      href={s.href}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#0D2B5E] transition-colors py-1"
                    >
                      <svg className="w-3.5 h-3.5" style={{ color: "var(--gold)" }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                      </svg>
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Data protection badge */}
              <div
                className="rounded-sm p-4 border"
                style={{ background: "rgba(13,43,94,0.04)", borderColor: "rgba(13,43,94,0.12)" }}
              >
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                  </svg>
                  <div>
                    <p className="text-xs font-semibold text-gray-700 mb-1">Protección de Datos</p>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Tu información es tratada con estricta confidencialidad bajo la Ley 1581 de 2012. Solo usamos tus datos para gestionar tu consulta.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
