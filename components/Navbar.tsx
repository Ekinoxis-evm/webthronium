"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Inicio" },
  {
    href: "#",
    label: "Servicios",
    children: [
      { href: "/servicios/multas", label: "Eliminación de Multas" },
      { href: "/servicios/credito", label: "Recuperación Crediticia" },
      { href: "/servicios/recursos", label: "Recursos Jurídicos" },
    ],
  },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servOpen, setServOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      {/* Top bar */}
      <div className="bg-[#091D3E] text-xs text-gray-300 py-1.5 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span>📍 Calle 2 Oeste, Belisario Caicedo — Cali, Colombia</span>
          <span className="hidden sm:block">
            🔒 Datos protegidos bajo Ley 1581 de 2012
          </span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-sm flex items-center justify-center" style={{ background: "var(--navy)" }}>
              <span className="text-lg font-bold" style={{ color: "var(--gold)", fontFamily: "'Playfair Display', serif" }}>T</span>
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="font-bold text-lg tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)" }}
              >
                Thronium
              </span>
              <span className="text-[10px] font-medium tracking-[0.15em] uppercase" style={{ color: "var(--gold)" }}>
                Legal
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <button
                    className={`px-4 py-2 rounded text-sm font-medium transition-colors flex items-center gap-1 ${
                      pathname.startsWith("/servicios")
                        ? "text-[#0D2B5E]"
                        : "text-gray-600 hover:text-[#0D2B5E]"
                    }`}
                  >
                    {link.label}
                    <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-100 rounded shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#F8F6F1] hover:text-[#0D2B5E] border-b border-gray-50 last:border-0 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-[#0D2B5E] font-semibold"
                      : "text-gray-600 hover:text-[#0D2B5E]"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contacto"
              className="text-sm font-semibold text-white px-5 py-2.5 rounded-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              style={{ background: "var(--crimson)" }}
            >
              Consulta Gratis
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded text-gray-600"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-5 h-0.5 bg-current mb-1.5 transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`w-5 h-0.5 bg-current mb-1.5 transition-all ${mobileOpen ? "opacity-0" : ""}`} />
            <div className={`w-5 h-0.5 bg-current transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-1">
            <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:text-[#0D2B5E]" onClick={() => setMobileOpen(false)}>Inicio</Link>
            <button
              className="w-full text-left px-4 py-2 text-sm text-gray-700 flex items-center justify-between"
              onClick={() => setServOpen(!servOpen)}
            >
              Servicios
              <svg className={`w-3 h-3 transition-transform ${servOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servOpen && (
              <div className="pl-6 space-y-1">
                <Link href="/servicios/multas" className="block py-2 text-sm text-gray-600 hover:text-[#0D2B5E]" onClick={() => setMobileOpen(false)}>Eliminación de Multas</Link>
                <Link href="/servicios/credito" className="block py-2 text-sm text-gray-600 hover:text-[#0D2B5E]" onClick={() => setMobileOpen(false)}>Recuperación Crediticia</Link>
                <Link href="/servicios/recursos" className="block py-2 text-sm text-gray-600 hover:text-[#0D2B5E]" onClick={() => setMobileOpen(false)}>Recursos Jurídicos</Link>
              </div>
            )}
            <Link href="/nosotros" className="block px-4 py-2 text-sm text-gray-700 hover:text-[#0D2B5E]" onClick={() => setMobileOpen(false)}>Nosotros</Link>
            <Link href="/contacto" className="block px-4 py-2 text-sm text-gray-700 hover:text-[#0D2B5E]" onClick={() => setMobileOpen(false)}>Contacto</Link>
            <div className="px-4 pt-2">
              <Link
                href="/contacto"
                className="block text-center text-sm font-semibold text-white px-5 py-3 rounded-sm"
                style={{ background: "var(--crimson)" }}
                onClick={() => setMobileOpen(false)}
              >
                Consulta Gratis
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
