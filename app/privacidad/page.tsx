import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad y Tratamiento de Datos | Thronium Legal",
  description:
    "Política de tratamiento de datos personales de Thronium Legal, en cumplimiento de la Ley 1581 de 2012. Cali, Colombia.",
};

const sections = [
  {
    title: "1. Responsable del Tratamiento",
    content: [
      "**Thronium Legal S.A.S.** es el Responsable del Tratamiento de los datos personales recolectados a través de este sitio web y en el desarrollo de sus servicios jurídicos.",
      "Sede: Calle 2 Oeste, Barrio Belisario Caicedo, Cali, Valle del Cauca, Colombia.",
      "Correo electrónico: info@throniumlegal.com",
    ],
  },
  {
    title: "2. Marco Legal",
    content: [
      "El tratamiento de datos personales por parte de Thronium Legal se rige por la Ley Estatutaria 1581 de 2012 (Ley de Protección de Datos Personales) y su Decreto Reglamentario 1377 de 2013, así como demás normas concordantes vigentes en la República de Colombia.",
    ],
  },
  {
    title: "3. Datos Personales Recolectados",
    content: [
      "Para la prestación de nuestros servicios, podemos recolectar los siguientes datos:",
      "• Datos de identificación: nombres, apellidos, tipo y número de documento de identidad, lugar de expedición.",
      "• Datos de contacto: dirección de residencia, ciudad, departamento, correo electrónico y número de celular.",
      "• Datos adicionales según el servicio: placa del vehículo (opcional), organismo de tránsito, estado de cobro coactivo, información crediticia.",
      "Estos datos son **vitales para la formalidad del trámite** y para que las entidades públicas y privadas respondan directamente al domicilio del interesado. Sin ellos, el Derecho de Petición o recurso podría ser rechazado por falta de legitimidad.",
    ],
  },
  {
    title: "4. Finalidades del Tratamiento",
    content: [
      "Sus datos personales serán utilizados exclusivamente para:",
      "• Diagnóstico de viabilidad jurídica para prescripción o impugnación de multas de tránsito y sanciones administrativas.",
      "• Análisis del historial crediticio y ejecución del proceso de recuperación de puntaje.",
      "• Elaboración y radicación de Derechos de Petición, recursos de reposición, apelación y queja ante entidades públicas.",
      "• Notificaciones sobre el estado del trámite contratado.",
      "• Cumplimiento de obligaciones legales y contractuales derivadas de la relación con el cliente.",
    ],
  },
  {
    title: "5. Derechos del Titular",
    content: [
      "En calidad de titular de sus datos personales, usted tiene derecho a:",
      "• **Conocer** los datos personales que Thronium Legal trata sobre usted.",
      "• **Actualizar** sus datos cuando sean inexactos o incompletos.",
      "• **Rectificar** errores en su información personal.",
      "• **Suprimir** sus datos cuando no sean necesarios para las finalidades autorizadas o cuando haya vencido el período de tratamiento.",
      "• **Revocar** la autorización de tratamiento en cualquier momento, siempre que no exista una obligación legal o contractual que impida hacerlo.",
      "• **Presentar quejas** ante la Superintendencia de Industria y Comercio (SIC) por infracciones a la normativa vigente.",
    ],
  },
  {
    title: "6. Para Ejercer sus Derechos",
    content: [
      "Para ejercer cualquiera de los derechos anteriores, el titular deberá enviar una comunicación escrita a **info@throniumlegal.com** indicando: nombre completo, número de documento de identidad, descripción del derecho que desea ejercer y número de contacto.",
      "Thronium Legal dará respuesta dentro de los términos establecidos por la Ley 1581 de 2012 (15 días hábiles para consultas, 15 días hábiles para reclamos, prorrogables según la ley).",
    ],
  },
  {
    title: "7. Seguridad de la Información",
    content: [
      "Thronium Legal implementa las medidas técnicas, humanas y administrativas necesarias para proteger los datos personales contra pérdida, uso indebido, acceso no autorizado, divulgación, alteración o destrucción.",
      "Toda la información es tratada con estricta confidencialidad. El personal que tiene acceso a los datos está obligado a mantener la reserva profesional.",
    ],
  },
  {
    title: "8. Transferencia y Transmisión de Datos",
    content: [
      "Los datos personales del titular podrán ser transmitidos a entidades públicas o privadas estrictamente necesarias para la prestación del servicio contratado (organismos de tránsito, centrales de riesgo, entidades financieras, despachos judiciales o administrativos).",
      "Esta transmisión tiene como único propósito gestionar el trámite jurídico solicitado por el titular y se realiza bajo los principios de necesidad y proporcionalidad.",
    ],
  },
  {
    title: "9. Vigencia de la Política",
    content: [
      "Esta Política de Tratamiento de Datos Personales rige a partir de su publicación y permanecerá vigente mientras Thronium Legal desarrolle sus actividades.",
      "Cualquier cambio sustancial será notificado a los titulares de datos mediante el correo electrónico registrado o a través de este sitio web con una antelación mínima de 10 días hábiles.",
    ],
  },
];

export default function PrivacidadPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #091D3E 0%, #0D2B5E 100%)" }}
      >
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex items-center gap-2 text-xs text-blue-300/60 mb-8">
            <Link href="/" className="hover:text-blue-200 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-blue-200">Política de Privacidad</span>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(184,134,11,0.15)", border: "1px solid rgba(184,134,11,0.4)" }}
            >
              <svg className="w-5 h-5" style={{ color: "var(--gold)" }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
              </svg>
            </div>
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "var(--gold-light)" }}
            >
              Ley 1581 de 2012
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Política de Tratamiento{" "}
            <span className="italic" style={{ color: "var(--gold)" }}>de Datos Personales</span>
          </h1>
          <p className="text-blue-100/60 text-sm">
            Última actualización: marzo de 2025 · Vigencia: indefinida
          </p>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-12"
          style={{ background: "var(--cream)", clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
        />
      </section>

      {/* Content */}
      <section className="py-20" style={{ background: "var(--cream)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Intro card */}
          <div
            className="rounded-sm p-6 mb-12 border"
            style={{ background: "rgba(13,43,94,0.04)", borderColor: "rgba(13,43,94,0.12)" }}
          >
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
              </svg>
              <p className="text-sm text-gray-600 leading-relaxed">
                En Thronium Legal nos comprometemos a proteger su privacidad y tratar sus datos personales de forma responsable, transparente y conforme a la legislación colombiana vigente. Al utilizar nuestros servicios o proporcionar sus datos, usted autoriza el tratamiento descrito en esta política.
              </p>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title} className="bg-white border border-gray-100 rounded-sm p-8">
                <h2
                  className="text-xl font-bold mb-5"
                  style={{ fontFamily: "'Playfair Display', serif", color: "var(--charcoal)" }}
                >
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.content.map((para, i) => (
                    <p key={i} className="text-sm text-gray-600 leading-relaxed">
                      {para.split(/(\*\*[^*]+\*\*)/).map((part, j) =>
                        part.startsWith("**") && part.endsWith("**") ? (
                          <strong key={j} className="text-gray-800">{part.slice(2, -2)}</strong>
                        ) : (
                          part
                        )
                      )}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact for rights */}
          <div
            className="mt-12 rounded-sm p-8 text-center"
            style={{ background: "linear-gradient(135deg, #091D3E, #0D2B5E)" }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ background: "rgba(184,134,11,0.15)", border: "1px solid rgba(184,134,11,0.4)" }}
            >
              <svg className="w-6 h-6" style={{ color: "var(--gold)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3
              className="text-xl font-bold text-white mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              ¿Desea ejercer sus derechos?
            </h3>
            <p className="text-blue-200/70 text-sm mb-6">
              Escríbenos a <strong className="text-white">info@throniumlegal.com</strong> o visítanos en nuestra sede en Cali.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 font-semibold text-sm px-7 py-3 rounded-sm text-white transition-all hover:-translate-y-0.5"
              style={{ background: "var(--crimson)" }}
            >
              Contactar →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
