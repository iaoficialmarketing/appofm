import { ArrowLeft } from 'lucide-react';

export default function Terms() {
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
            Términos y Condiciones
          </h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 mb-8">
              Última actualización: 9 de marzo de 2026
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Aceptación de los Términos</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Al acceder y utilizar el sitio web de Agencia Myonlyfxns, aceptas estar sujeto a estos Términos y Condiciones. Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestros servicios.
              </p>
              <p className="text-slate-600 leading-relaxed">
                El uso de nuestros servicios está destinado exclusivamente a personas mayores de 18 años. Al utilizar este sitio, confirmas que tienes al menos 18 años de edad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Descripción de Servicios</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Agencia Myonlyfxns ofrece servicios de gestión integral para creadoras de contenido en la plataforma OnlyFans, incluyendo:
              </p>
              <ul className="space-y-3 text-slate-600 mb-4">
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Estrategia de marketing digital</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Gestión de comunidad y atención al cliente 24/7</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Análisis y optimización de rendimiento</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Asesoramiento profesional y legal</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Desarrollo de marca personal</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Proceso de Contratación</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                El proceso de contratación incluye:
              </p>
              <ul className="space-y-3 text-slate-600 mb-4">
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Solicitud:</strong> Envío del formulario de contacto con información personal</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Evaluación:</strong> Revisión de tu perfil por nuestro equipo en 24-48 horas</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Entrevista:</strong> Reunión personal para discutir objetivos y expectativas</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Contrato:</strong> Formalización de acuerdo con términos específicos por escrito</span>
                </li>
              </ul>
              <p className="text-slate-600 leading-relaxed">
                El envío del formulario no constituye un compromiso contractual por ninguna de las partes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Obligaciones del Cliente</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Al contratar nuestros servicios, te comprometes a:
              </p>
              <ul className="space-y-3 text-slate-600 mb-4">
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Proporcionar información veraz y actualizada</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Ser mayor de 18 años y tener capacidad legal para contratar</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Colaborar activamente con nuestro equipo</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Cumplir con las políticas y términos de servicio de OnlyFans</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Mantener la confidencialidad de información sensible compartida</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Respetar los acuerdos de exclusividad si aplican</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Obligaciones de la Agencia</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Nos comprometemos a:
              </p>
              <ul className="space-y-3 text-slate-600 mb-4">
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Prestar servicios profesionales de gestión OnlyFans</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Mantener confidencialidad absoluta sobre tu información personal</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Proporcionar soporte 24/7 según lo acordado</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Actuar con transparencia en todas nuestras acciones</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Proteger tus datos según normativa RGPD</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Comisiones y Pagos</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Los términos específicos de comisiones y pagos se establecerán en el contrato individual de servicios. Generalmente:
              </p>
              <ul className="space-y-3 text-slate-600 mb-4">
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>La agencia recibe un porcentaje de las ganancias generadas</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Los porcentajes y condiciones se negocian individualmente</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Los pagos se realizan según calendario establecido en contrato</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Se proporcionan reportes detallados de ingresos y comisiones</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Confidencialidad</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Ambas partes se comprometen a:
              </p>
              <ul className="space-y-3 text-slate-600 mb-4">
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Mantener estricta confidencialidad sobre información sensible</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>No divulgar datos personales, financieros o profesionales sin consentimiento</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Proteger la identidad del cliente si así lo desea</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Firmar acuerdos de confidencialidad (NDA) cuando sea necesario</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Duración y Terminación</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Los contratos de servicio especificarán:
              </p>
              <ul className="space-y-3 text-slate-600 mb-4">
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Duración del acuerdo (renovable o determinado)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Condiciones y plazos de preaviso para terminación</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Obligaciones posteriores a la terminación</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Consecuencias del incumplimiento contractual</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Limitación de Responsabilidad</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Agencia Myonlyfxns no se hace responsable de:
              </p>
              <ul className="space-y-3 text-slate-600 mb-4">
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Suspensiones o bajas de cuenta en OnlyFans por violación de sus políticas</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Cambios en políticas o términos de servicio de terceros</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Resultados específicos no garantizados expresamente por escrito</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Acciones de terceros ajenas a nuestro control</span>
                </li>
              </ul>
              <p className="text-slate-600 leading-relaxed">
                Trabajamos con máxima diligencia, pero no garantizamos resultados específicos de ingresos.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Propiedad Intelectual</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                El contenido creado por el cliente permanece propiedad del cliente. Los materiales de marketing, estrategias y know-how desarrollados por la agencia son propiedad de Agencia Myonlyfxns.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Cualquier uso de marca, logo o contenido de la otra parte requiere autorización expresa.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Modificaciones</h2>
              <p className="text-slate-600 leading-relaxed">
                Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigor tras su publicación en este sitio web. Es responsabilidad del usuario revisar periódicamente estos términos.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Ley Aplicable y Jurisdicción</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Estos Términos y Condiciones se rigen por la legislación española. Para cualquier controversia derivada de estos términos, las partes se someten a los juzgados y tribunales de España.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Contacto</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Para cualquier consulta sobre estos Términos y Condiciones:
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
