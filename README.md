# Thronium Legal — Sitio Web

Sitio web institucional para **Thronium Legal**, despacho de abogados especializado en derecho administrativo, eliminación de multas de tránsito y recuperación crediticia. Ubicado en Cali, Colombia.

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** React 19 + TypeScript
- **Estilos:** Tailwind CSS 3
- **Fuentes:** Playfair Display, DM Sans, Crimson Text (Google Fonts)

---

## Estructura del proyecto

```
thronium-site/
├── app/
│   ├── layout.tsx              # Layout raíz (Navbar + Footer + fuentes)
│   ├── globals.css             # Variables CSS, utilidades globales
│   ├── page.tsx                # Home (Hero, Servicios, Proceso, Testimonios)
│   ├── nosotros/
│   │   └── page.tsx            # Página Nosotros
│   ├── contacto/
│   │   └── page.tsx            # Página Contacto
│   ├── privacidad/
│   │   └── page.tsx            # Política de datos — Ley 1581 de 2012
│   └── servicios/
│       ├── multas/
│       │   └── page.tsx        # Servicio: Eliminación de Multas
│       ├── credito/
│       │   └── page.tsx        # Servicio: Recuperación Crediticia
│       └── recursos/
│           └── page.tsx        # Servicio: Recursos Jurídicos
├── components/
│   ├── Navbar.tsx              # Navegación sticky + menú móvil
│   ├── Footer.tsx              # Pie de página con enlaces y badges
│   └── ContactForm.tsx         # Formulario de consulta con acepta Ley 1581
├── public/                     # Activos estáticos
├── brandingstyle.md            # Guía de identidad visual
├── guia.md                     # Especificaciones de negocio y servicios
└── .gitignore
```

---

## Paleta de colores

| Variable       | Hex       | Uso                          |
|----------------|-----------|------------------------------|
| `--navy`       | `#0D2B5E` | Color principal, fondos hero |
| `--navy-dark`  | `#091D3E` | Degradados oscuros           |
| `--gold`       | `#B8860B` | Acentos, títulos destacados  |
| `--crimson`    | `#C0392B` | CTAs, urgencia               |
| `--cream`      | `#F8F6F1` | Fondo de secciones claras    |
| `--charcoal`   | `#1A1A2E` | Testimonios, footer          |

---

## Páginas

| Ruta                    | Descripción                                              |
|-------------------------|----------------------------------------------------------|
| `/`                     | Home — propuesta de valor, servicios, proceso, testimonios |
| `/nosotros`             | Historia, misión, valores y ubicación física             |
| `/contacto`             | Formulario de consulta gratuita + información de contacto |
| `/privacidad`           | Política de tratamiento de datos — Ley 1581 de 2012      |
| `/servicios/multas`     | Eliminación de multas de tránsito y comparendos          |
| `/servicios/credito`    | Recuperación de historial crediticio (Datacrédito)       |
| `/servicios/recursos`   | Recursos de reposición, apelación y queja                |

---

## Instalación y desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar en producción
npm start
```

El proyecto corre en [http://localhost:3000](http://localhost:3000).

---

## Cumplimiento legal

El sitio implementa los requisitos de la **Ley 1581 de 2012** (Protección de Datos Personales):

- Cláusula de aceptación obligatoria en el formulario de contacto
- Página dedicada de política de privacidad en `/privacidad`
- Sello visual "Protección de Datos" en formularios y footer
- Datos recolectados únicamente para las finalidades declaradas

---

## Información de negocio

**Thronium Legal S.A.S.**
Calle 2 Oeste, Barrio Belisario Caicedo
Cali, Valle del Cauca — Colombia
info@throniumlegal.com
