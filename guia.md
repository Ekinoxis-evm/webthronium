
Aquí tienes una propuesta de estructura en **Markdown** diseñada específicamente para que una IA de desarrollo web pueda construir el sitio de **Thronium Legal**. Este documento organiza la información técnica, los procesos de negocio y los requisitos legales extraídos de las fuentes.

---

# Especificaciones para el Sitio Web: Thronium Legal

## 1. HOME (Página de Inicio)
*   **Título:** Thronium Legal – Expertos en Derecho Administrativo y Recuperación Crediticia.
*   **Propuesta de Valor:** Recuperamos tu tranquilidad financiera y legal mediante el uso de inteligencia artificial especializada en la derogación de multas y el aumento de puntaje crediticio.
*   **Llamados a la Acción (CTA):**
    *   "Consulta tu historial crediticio ahora"
    *   "Revisa si tus multas de tránsito han prescrito (¡Gratis!)".

---

## 2. ABOUT US (Nosotros)
*   **Perfil:** Somos un equipo experto en **Derecho Administrativo y Recuperación Crediticia**.
*   **Misión:** Facilitar la gestión de trámites legales complejos mediante procesos automatizados y precisos, asegurando la legitimidad de cada Derecho de Petición para evitar rechazos.
*   **Ubicación:** Calle 2 oeste, Belisario Caicedo, Cali, Colombia.

---

## 3. SERVICES (Servicios)

### A. Recuperación de Puntaje Crediticio
Servicio enfocado en la eliminación de reportes negativos y la "Inyección de Puntaje" para mejorar el perfil financiero.

*   **Proceso y Costos:**
    1.  **Paso 1: Diagnóstico (10% - $70.000 COP):** Análisis detallado de centrales de riesgo, score actual y capacidad de endeudamiento.
    2.  **Paso 2: Inicio de Proceso (40% - $280.000 COP):** Formalización de la prescripción e inyección de historial positivo real o sintético.
    3.  **Paso 3: Éxito (50% - $350.000 COP):** Registro de créditos por $5M - $10M para impacto inmediato en el score y entrega de capacidad de endeudamiento actualizada.
*   **Datos requeridos para el usuario:** Nombres, apellidos, tipo y número de documento, lugar de expedición, dirección, ciudad, departamento, correo y celular.

### B. Multas de Tránsito
Gestión de prescripción de comparendos basada en el cumplimiento de los términos legales (3 años con o sin cobro coactivo).

*   **Estructura de Cobro:**
    *   **Revisión Inicial:** ¡Gratis!.
    *   **Honorarios:** 30% del valor total ahorrado (multa + intereses).
*   **Etapas del proceso:**
    1.  **Diagnóstico:** Consulta de centrales y verificación de fechas de notificación para determinar viabilidad.
    2.  **Inicialización:** Pago del 50% de los honorarios pactados contra entrega del borrador del Derecho de Petición.
    3.  **Cierre:** Pago del 50% restante contra entrega del documento de Paz y Salvo.
*   **Datos requeridos:** Además de los datos personales básicos, se solicita placa del vehículo (opcional), organismo de tránsito y estado de cobro coactivo.

---

## 4. PRIVACIDAD Y POLÍTICA DE DATOS
Este apartado debe cumplir estrictamente con la **Ley 1581 de 2012** de protección de datos personales en Colombia.

*   **Finalidades del Tratamiento:**
    *   Diagnóstico de viabilidad jurídica para prescripción de multas.
    *   Análisis de historial crediticio y ejecución de aumento de puntaje.
    *   Elaboración y radicación de Derechos de Petición y recursos ante entidades.
    *   Notificaciones sobre el estado del trámite.
*   **Derechos del Titular:** Conocer, actualizar, rectificar y suprimir sus datos, así como revocar la autorización en cualquier momento.
*   **Responsable:** Thronium Legal.
*   **Cláusula de Aceptación:** El usuario debe marcar obligatoriamente una casilla de "He leído y acepto la Política de Tratamiento de Datos Personales" antes de entregar cualquier información sensible.

---

## 5. NOTAS TÉCNICAS PARA LA IA DESARROLLADORA
*   **Interacción de la IA:** El flujo debe ser persuasivo. Al solicitar datos, debe explicar que son necesarios para que el Derecho de Petición no sea rechazado por falta de legitimidad.
*   **Cierres de Venta:** La IA solo debe generar borradores de documentos (Acuerdos de servicio o Derechos de Petición) una vez el usuario confirme el esquema de pago correspondiente.
*   **Lógica Interna:** Implementar filtros automáticos para multas (verificar si han pasado 3 años desde la notificación del comparendo o del mandamiento de pago).