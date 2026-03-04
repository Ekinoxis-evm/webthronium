import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--charcoal)" }} className="text-gray-300">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-sm flex items-center justify-center" style={{ background: "var(--navy)" }}>
                <span className="text-lg font-bold" style={{ color: "var(--gold)", fontFamily: "'Playfair Display', serif" }}>T</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-lg text-white tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>Thronium</span>
                <span className="text-[10px] font-medium tracking-[0.15em] uppercase" style={{ color: "var(--gold)" }}>Legal</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-xs">
              Soluciones jurídicas inteligentes para ciudadanos colombianos. Eliminamos multas, recuperamos créditos y te representamos ante el Estado.
            </p>
            {/* Trust badges */}
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 border border-gray-600 rounded-full px-3 py-1.5">
                <svg className="w-3.5 h-3.5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                </svg>
                Ley 1581 de 2012
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 border border-gray-600 rounded-full px-3 py-1.5">
                <svg className="w-3.5 h-3.5" style={{ color: "var(--gold)" }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd"/>
                </svg>
                Entidad Registrada
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5" style={{ color: "var(--gold)" }}>Servicios</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/servicios/multas" className="text-gray-400 hover:text-white transition-colors">Eliminación de Multas</Link></li>
              <li><Link href="/servicios/credito" className="text-gray-400 hover:text-white transition-colors">Recuperación Crediticia</Link></li>
              <li><Link href="/servicios/recursos" className="text-gray-400 hover:text-white transition-colors">Recursos Jurídicos</Link></li>
              <li><Link href="/servicios/multas" className="text-gray-400 hover:text-white transition-colors">Derecho Administrativo</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5" style={{ color: "var(--gold)" }}>Contacto</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>Calle 2 Oeste, Belisario Caicedo<br />Cali, Valle del Cauca</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span>info@throniumlegal.com</span>
              </li>
              <li>
                <Link href="/contacto" className="inline-flex items-center gap-1 text-xs font-medium text-white border border-white/20 rounded-sm px-3 py-2 mt-2 hover:bg-white/10 transition-colors">
                  Consulta Gratis →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} Thronium Legal S.A.S. Todos los derechos reservados.</span>
          <div className="flex gap-4">
            <Link href="/privacidad" className="hover:text-gray-300 transition-colors">Política de Privacidad</Link>
            <Link href="/privacidad" className="hover:text-gray-300 transition-colors">Términos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
