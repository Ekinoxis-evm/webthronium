"use client";

import { useState } from "react";

type FormState = {
  nombre: string;
  email: string;
  telefono: string;
  servicio: string;
  cedula: string;
  mensaje: string;
  acepta: boolean;
};

const initialState: FormState = {
  nombre: "",
  email: "",
  telefono: "",
  servicio: "",
  cedula: "",
  mensaje: "",
  acepta: false,
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="bg-white border border-gray-100 rounded-sm p-12 text-center"
        style={{ minHeight: "400px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ background: "#D1FAE5" }}
        >
          <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
          </svg>
        </div>
        <h3
          className="text-2xl font-bold mb-3"
          style={{ fontFamily: "'Playfair Display', serif", color: "var(--charcoal)" }}
        >
          ¡Consulta recibida!
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
          Gracias, <strong>{form.nombre}</strong>. Un abogado de Thronium Legal revisará tu caso y se comunicará contigo en menos de 24 horas hábiles.
        </p>
        <p className="text-xs text-gray-400 mt-4">Revisa tu correo: {form.email}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-100 rounded-sm p-8 sm:p-10"
    >
      <h2
        className="text-2xl font-bold mb-2"
        style={{ fontFamily: "'Playfair Display', serif", color: "var(--charcoal)" }}
      >
        Solicitar consulta gratuita
      </h2>
      <p className="text-sm text-gray-400 mb-8">
        Todos los campos marcados con * son requeridos para procesar tu solicitud.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        {/* Nombre */}
        <div>
          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-widest mb-2">
            Nombre completo *
          </label>
          <input
            required
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Ej. Juan Carlos Pérez"
            className="w-full bg-gray-50 border border-gray-200 rounded-sm px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-navy-DEFAULT focus:ring-2 focus:ring-blue-50 transition-colors"
            style={{ focusBorderColor: "var(--navy)" } as React.CSSProperties}
          />
        </div>

        {/* Teléfono */}
        <div>
          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-widest mb-2">
            Teléfono / WhatsApp *
          </label>
          <input
            required
            type="tel"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            placeholder="Ej. 3001234567"
            className="w-full bg-gray-50 border border-gray-200 rounded-sm px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-50 transition-colors"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-widest mb-2">
            Correo electrónico *
          </label>
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="tu@correo.com"
            className="w-full bg-gray-50 border border-gray-200 rounded-sm px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-50 transition-colors"
          />
        </div>

        {/* Cédula */}
        <div>
          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-widest mb-2">
            <span className="flex items-center gap-1.5">
              Número de cédula *
              <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
              </svg>
            </span>
          </label>
          <input
            required
            type="text"
            name="cedula"
            value={form.cedula}
            onChange={handleChange}
            placeholder="Ej. 1234567890"
            className="w-full bg-gray-50 border border-gray-200 rounded-sm px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-50 transition-colors"
          />
          <p className="text-[11px] text-gray-400 mt-1">Necesaria para validar tu caso ante las entidades.</p>
        </div>
      </div>

      {/* Servicio */}
      <div className="mb-5">
        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-widest mb-2">
          Tipo de servicio *
        </label>
        <select
          required
          name="servicio"
          value={form.servicio}
          onChange={handleChange}
          className="w-full bg-gray-50 border border-gray-200 rounded-sm px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-50 transition-colors appearance-none"
        >
          <option value="">Selecciona el servicio que necesitas</option>
          <option value="multas">Eliminación de Multas</option>
          <option value="credito">Recuperación Crediticia (Datacrédito)</option>
          <option value="recursos">Recursos Jurídicos (Reposición / Apelación)</option>
          <option value="administrativo">Derecho Administrativo General</option>
          <option value="otro">Otro / No estoy seguro</option>
        </select>
      </div>

      {/* Mensaje */}
      <div className="mb-6">
        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-widest mb-2">
          Describe tu situación *
        </label>
        <textarea
          required
          name="mensaje"
          value={form.mensaje}
          onChange={handleChange}
          rows={4}
          placeholder="Cuéntanos brevemente tu caso: ¿qué pasó?, ¿cuándo?, ¿qué entidad está involucrada?..."
          className="w-full bg-gray-50 border border-gray-200 rounded-sm px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-50 transition-colors resize-none"
        />
      </div>

      {/* Aceptación de datos */}
      <div className="mb-8 p-4 rounded-sm" style={{ background: "rgba(13,43,94,0.04)", border: "1px solid rgba(13,43,94,0.1)" }}>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            required
            type="checkbox"
            name="acepta"
            checked={form.acepta}
            onChange={handleChange}
            className="mt-0.5 w-4 h-4 accent-[#0D2B5E] flex-shrink-0"
          />
          <span className="text-xs text-gray-600 leading-relaxed">
            Acepto que Thronium Legal trate mis datos personales para gestionar mi consulta, de conformidad con la{" "}
            <strong>Ley 1581 de 2012</strong> de Protección de Datos Personales. Entiendo que mis datos son confidenciales y solo serán usados para este fin.
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={loading || !form.acepta}
        className="w-full flex items-center justify-center gap-2 font-semibold text-sm py-4 rounded-sm text-white transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
        style={{ background: "var(--crimson)" }}
      >
        {loading ? (
          <>
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
            </svg>
            Enviando consulta...
          </>
        ) : (
          <>
            Enviar consulta gratuita
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </>
        )}
      </button>

      <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1.5">
        <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
        </svg>
        Información protegida — Ley 1581 de 2012
      </p>
    </form>
  );
}
