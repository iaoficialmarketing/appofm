import { ArrowLeft } from 'lucide-react';

export default function Cookies() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center h-20">
            <a href="/" className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Volver al inicio</span>
            </a>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
            Política de Cookies
          </h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 mb-8">
              Última actualización: 9 de marzo de 2026
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. ¿Qué son las Cookies?</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo cuando los visitas. Se utilizan ampliamente para hacer que los sitios web funcionen de manera más eficiente y proporcionen información a los propietarios del sitio.
              </p>
              <p className="text-slate-600 leading-relaxed">
                En myonlyfxns.es utilizamos cookies para mejorar tu experiencia de navegación, analizar el uso del sitio y personalizar el contenido.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Tipos de Cookies que Utilizamos</h2>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3">2.1. Cookies Técnicas (Necesarias)</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Son esenciales para el funcionamiento del sitio web. Permiten la navegación y el uso de las diferentes funcionalidades.
                </p>
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <p className="text-slate-700 mb-2"><strong>Finalidad:</strong> Funcionamiento básico del sitio web</p>
                  <p className="text-slate-700 mb-2"><strong>Duración:</strong> Sesión</p>
                  <p className="text-slate-700"><strong>¿Se pueden rechazar?</strong> No, son necesarias para el funcionamiento</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3">2.2. Cookies de Preferencias</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Permiten recordar tus preferencias, como idioma, configuración regional o personalización de la interfaz.
                </p>
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <p className="text-slate-700 mb-2"><strong>Finalidad:</strong> Recordar preferencias del usuario</p>
                  <p className="text-slate-700 mb-2"><strong>Duración:</strong> Hasta 1 año</p>
                  <p className="text-slate-700"><strong>¿Se pueden rechazar?</strong> Sí</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3">2.3. Cookies Analíticas</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Recopilan información sobre cómo los usuarios utilizan el sitio web, qué páginas visitan con más frecuencia y si reciben mensajes de error.
                </p>
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <p className="text-slate-700 mb-2"><strong>Finalidad:</strong> Análisis estadístico del uso del sitio</p>
                  <p className="text-slate-700 mb-2"><strong>Duración:</strong> Hasta 2 años</p>
                  <p className="text-slate-700 mb-2"><strong>Proveedor:</strong> Google Analytics (si aplica)</p>
                  <p className="text-slate-700"><strong>¿Se pueden rechazar?</strong> Sí</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3">2.4. Cookies de Marketing</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Se utilizan para rastrear a los visitantes en los sitios web con la intención de mostrar anuncios relevantes y atractivos para cada usuario.
                </p>
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <p className="text-slate-700 mb-2"><strong>Finalidad:</strong> Publicidad personalizada</p>
                  <p className="text-slate-700 mb-2"><strong>Duración:</strong> Hasta 2 años</p>
                  <p className="text-slate-700"><strong>¿Se pueden rechazar?</strong> Sí</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Cookies de Terceros</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Algunos servicios externos utilizados en nuestro sitio web pueden establecer sus propias cookies:
              </p>
              <ul className="space-y-3 text-slate-600 mb-4">
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Google Analytics:</strong> Para análisis de tráfico web (si se implementa)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Servicios de redes sociales:</strong> Si compartes contenido en redes sociales</span>
                </li>
              </ul>
              <p className="text-slate-600 leading-relaxed">
                Estas cookies de terceros están sujetas a las políticas de privacidad de sus respectivos proveedores.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Base Legal para el Uso de Cookies</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                El uso de cookies se basa en:
              </p>
              <ul className="space-y-3 text-slate-600 mb-4">
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Cookies técnicas:</strong> Interés legítimo para el funcionamiento del sitio web</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Otras cookies:</strong> Tu consentimiento explícito mediante el banner de cookies</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Cómo Gestionar las Cookies</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Puedes gestionar y controlar las cookies de varias maneras:
              </p>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-900 mb-3">A través de nuestro banner de cookies</h3>
                <p className="text-slate-600 leading-relaxed mb-3">
                  En tu primera visita, aparecerá un banner donde podrás aceptar o rechazar cookies no esenciales. Puedes cambiar tus preferencias en cualquier momento.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-900 mb-3">A través de tu navegador</h3>
                <p className="text-slate-600 leading-relaxed mb-3">
                  Todos los navegadores permiten gestionar las cookies a través de su configuración:
                </p>
                <ul className="space-y-2 text-slate-600 text-sm mb-4">
                  <li className="flex items-start space-x-3">
                    <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Safari:</strong> Preferencias → Privacidad → Cookies</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Edge:</strong> Configuración → Privacidad → Cookies</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <p className="text-slate-700">
                  <strong>Importante:</strong> Si bloqueas o eliminas las cookies, algunas funcionalidades del sitio web pueden no funcionar correctamente.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Cookies en Dispositivos Móviles</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Los dispositivos móviles también permiten gestionar cookies a través de la configuración del navegador o del sistema operativo. Consulta la documentación de tu dispositivo para más información.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Actualizaciones de esta Política</h2>
              <p className="text-slate-600 leading-relaxed">
                Podemos actualizar esta Política de Cookies periódicamente para reflejar cambios en las cookies que utilizamos o por razones legales, regulatorias u operativas. Te recomendamos revisar esta página regularmente.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Más Información</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Para más información sobre el tratamiento de tus datos personales, consulta nuestra <a href="/privacy" className="text-slate-900 font-semibold hover:underline">Política de Privacidad</a>.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Contacto</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Si tienes preguntas sobre nuestra Política de Cookies, contáctanos:
              </p>
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <p className="text-slate-700 mb-2"><strong>Email:</strong> agenciaonlyfxns@gmail.com</p>
                <p className="text-slate-700"><strong>Agencia:</strong> Myonlyfxns</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
