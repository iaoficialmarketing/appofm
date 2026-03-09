import { ArrowLeft } from 'lucide-react';

export default function Privacy() {
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
            Política de Privacidad
          </h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 mb-8">
              Última actualización: 9 de marzo de 2026
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Responsable del Tratamiento</h2>
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mb-4">
                <p className="text-slate-700 mb-2"><strong>Responsable:</strong> Agencia Myonlyfxns</p>
                <p className="text-slate-700 mb-2"><strong>Email de contacto:</strong> agenciaonlyfxns@gmail.com</p>
                <p className="text-slate-700"><strong>Domicilio:</strong> España</p>
              </div>
              <p className="text-slate-600 leading-relaxed">
                La Agencia Myonlyfxns es responsable del tratamiento de los datos personales que nos facilites a través de nuestro sitio web y servicios.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Datos que Recopilamos</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Recopilamos los siguientes tipos de datos personales:
              </p>
              <ul className="space-y-3 text-slate-600 mb-4">
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Datos de identificación:</strong> Nombre completo, edad</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Datos de contacto:</strong> Email, teléfono (opcional)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Datos profesionales:</strong> Experiencia en OnlyFans, perfiles de redes sociales</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Datos de navegación:</strong> Cookies, dirección IP, navegador utilizado</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Finalidad del Tratamiento</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Utilizamos tus datos personales para las siguientes finalidades:
              </p>
              <ul className="space-y-3 text-slate-600 mb-4">
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Gestionar tu solicitud de información y contacto</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Evaluar tu perfil para posible colaboración</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Comunicarnos contigo sobre nuestros servicios</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Cumplir con obligaciones legales y contractuales</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Mejorar nuestros servicios y experiencia de usuario</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Base Legal del Tratamiento</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                El tratamiento de tus datos se basa en:
              </p>
              <ul className="space-y-3 text-slate-600 mb-4">
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Consentimiento:</strong> Al enviar el formulario de contacto, consientes el tratamiento de tus datos</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Interés legítimo:</strong> Para mejorar nuestros servicios y comunicación</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Ejecución contractual:</strong> En caso de formalizar un acuerdo de colaboración</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Conservación de Datos</h2>
              <p className="text-slate-600 leading-relaxed">
                Conservaremos tus datos personales durante el tiempo necesario para cumplir con las finalidades para las que fueron recopilados. En caso de no establecer una relación contractual, eliminaremos tus datos tras 2 años desde el último contacto, salvo que la ley exija su conservación por un periodo superior.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Cesión de Datos</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                No cedemos tus datos personales a terceros, excepto:
              </p>
              <ul className="space-y-3 text-slate-600 mb-4">
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Cuando sea necesario para la prestación del servicio (proveedores tecnológicos)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Cuando exista obligación legal de hacerlo</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Cuando cuentes con tu consentimiento expreso</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Tus Derechos</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Tienes derecho a:
              </p>
              <ul className="space-y-3 text-slate-600 mb-4">
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Acceso:</strong> Conocer qué datos personales tenemos sobre ti</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Supresión:</strong> Solicitar la eliminación de tus datos</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Oposición:</strong> Oponerte al tratamiento de tus datos</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Limitación:</strong> Solicitar la limitación del tratamiento</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Portabilidad:</strong> Recibir tus datos en formato estructurado</span>
                </li>
              </ul>
              <p className="text-slate-600 leading-relaxed">
                Para ejercer estos derechos, contacta con nosotros en: <a href="mailto:agenciaonlyfxns@gmail.com" className="text-slate-900 font-semibold hover:underline">agenciaonlyfxns@gmail.com</a>
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Seguridad</h2>
              <p className="text-slate-600 leading-relaxed">
                Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos personales contra acceso no autorizado, pérdida, destrucción o alteración. Utilizamos protocolos de seguridad SSL/TLS y almacenamiento cifrado.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Cookies</h2>
              <p className="text-slate-600 leading-relaxed">
                Utilizamos cookies para mejorar tu experiencia de navegación. Para más información, consulta nuestra <a href="/cookies" className="text-slate-900 font-semibold hover:underline">Política de Cookies</a>.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Cambios en la Política</h2>
              <p className="text-slate-600 leading-relaxed">
                Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos de cualquier cambio significativo publicando la nueva política en esta página con una fecha de actualización modificada.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Contacto</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Si tienes preguntas sobre esta Política de Privacidad, contáctanos:
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
