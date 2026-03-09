import { ArrowLeft } from 'lucide-react';

export default function Legal() {
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
            Aviso Legal
          </h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 mb-8">
              Última actualización: 9 de marzo de 2026
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Datos Identificativos</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se informa:
              </p>
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mb-4">
                <p className="text-slate-700 mb-2"><strong>Denominación Social:</strong> Agencia Myonlyfxns</p>
                <p className="text-slate-700 mb-2"><strong>Nombre Comercial:</strong> myonlyfxns</p>
                <p className="text-slate-700 mb-2"><strong>Email de contacto:</strong> agenciaonlyfxns@gmail.com</p>
                <p className="text-slate-700 mb-2"><strong>Domicilio:</strong> España</p>
                <p className="text-slate-700"><strong>Sitio Web:</strong> myonlyfxns.es</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Objeto</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                El presente Aviso Legal regula el uso del sitio web myonlyfxns.es (en adelante, "el Sitio Web"), del cual es titular Agencia Myonlyfxns.
              </p>
              <p className="text-slate-600 leading-relaxed">
                La navegación por el Sitio Web atribuye la condición de usuario e implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Condiciones de Acceso y Uso</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                El acceso al Sitio Web es gratuito salvo en lo relativo al coste de conexión a través de la red de telecomunicaciones suministrada por el proveedor de acceso contratado por el usuario.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                El acceso a determinados servicios puede estar condicionado a:
              </p>
              <ul className="space-y-3 text-slate-600 mb-4">
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Ser mayor de 18 años</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Proporcionar información veraz y actualizada</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Aceptar términos y condiciones específicos</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Uso Correcto del Sitio Web</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                El usuario se compromete a utilizar el Sitio Web de conformidad con la ley, el presente Aviso Legal y cualquier otro aviso o instrucciones puesto en su conocimiento.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                El usuario se obliga a NO utilizar el Sitio Web para:
              </p>
              <ul className="space-y-3 text-slate-600 mb-4">
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Realizar actividades ilícitas, ilegales o contrarias a la buena fe y al orden público</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico ilegal, de apología del terrorismo o atentatorio contra los derechos humanos</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Provocar daños en los sistemas físicos y lógicos del Sitio Web, de sus proveedores o de terceros</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Introducir virus informáticos, macros, datos defectuosos o cualquier otro dispositivo electrónico o físico que cause daños</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Intentar acceder a áreas restringidas sin autorización</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Propiedad Intelectual e Industrial</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Todos los contenidos del Sitio Web, incluyendo textos, fotografías, gráficos, imágenes, tecnología, software, links y demás contenidos audiovisuales o sonoros, así como su diseño gráfico y códigos fuente, son propiedad de Agencia Myonlyfxns o de terceros, y están protegidos por los derechos de Propiedad Intelectual e Industrial.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Queda expresamente prohibida la reproducción, distribución, comunicación pública, transformación y cualquier otro acto de explotación sin autorización expresa y por escrito de Agencia Myonlyfxns.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Enlaces Externos</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                El Sitio Web puede contener enlaces a sitios web de terceros. Agencia Myonlyfxns no controla ni se hace responsable del contenido de dichos sitios web, por lo que no asume ninguna responsabilidad sobre los mismos.
              </p>
              <p className="text-slate-600 leading-relaxed">
                La inclusión de enlaces no implica aprobación, recomendación o respaldo del contenido enlazado.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Exclusión de Garantías y Responsabilidad</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Agencia Myonlyfxns no se hace responsable de:
              </p>
              <ul className="space-y-3 text-slate-600 mb-4">
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Interrupciones, errores, omisiones, virus informáticos, averías telefónicas o desconexiones en el funcionamiento operativo del sistema electrónico</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Retrasos o bloqueos en el uso del sistema electrónico causados por deficiencias de líneas telefónicas o sobrecargas en el sistema</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Daños causados por terceros mediante intromisiones ilegítimas fuera del control de la empresa</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Falta de disponibilidad, mantenimiento y efectivo funcionamiento del Sitio Web o de sus servicios y contenidos</span>
                </li>
              </ul>
              <p className="text-slate-600 leading-relaxed">
                No obstante, Agencia Myonlyfxns se compromete a hacer sus mejores esfuerzos para mantener el Sitio Web operativo y libre de errores.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Protección de Datos</h2>
              <p className="text-slate-600 leading-relaxed">
                El tratamiento de datos personales se rige por lo establecido en nuestra <a href="/privacy" className="text-slate-900 font-semibold hover:underline">Política de Privacidad</a>, en cumplimiento del Reglamento General de Protección de Datos (RGPD) UE 2016/679 y la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Cookies</h2>
              <p className="text-slate-600 leading-relaxed">
                Este Sitio Web utiliza cookies. Para más información, consulta nuestra <a href="/cookies" className="text-slate-900 font-semibold hover:underline">Política de Cookies</a>.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Modificaciones</h2>
              <p className="text-slate-600 leading-relaxed">
                Agencia Myonlyfxns se reserva el derecho de efectuar las modificaciones que considere oportunas en el presente Aviso Legal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través del mismo como la forma en la que éstos aparezcan presentados o localizados.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Legislación Aplicable y Jurisdicción</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                La relación entre Agencia Myonlyfxns y el usuario se regirá por la normativa española vigente.
              </p>
              <p className="text-slate-600 leading-relaxed">
                En caso de controversia o desacuerdo que se derive del acceso o uso del Sitio Web, las partes acuerdan someterse, con renuncia expresa a cualquier otro fuero, a los juzgados y tribunales españoles.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Contacto</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Para cualquier consulta o reclamación sobre este Aviso Legal, puedes contactarnos:
              </p>
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <p className="text-slate-700 mb-2"><strong>Email:</strong> agenciaonlyfxns@gmail.com</p>
                <p className="text-slate-700"><strong>Agencia:</strong> Myonlyfxns</p>
                <p className="text-slate-700"><strong>Sitio Web:</strong> myonlyfxns.es</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
