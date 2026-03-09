import { useState } from 'react';
import {
  TrendingUp,
  Shield,
  Users,
  CheckCircle2,
  BarChart3,
  MessageCircle,
  Crown,
  Menu,
  X,
  Target,
  Award,
  Lock,
  ArrowRight,
  Mail,
  MapPin,
  Calendar,
  DollarSign,
  Briefcase,
  Video,
  Sparkles,
  Zap
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    instagram: '',
    age: '',
    experience: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const experienceLabels: Record<string, string> = {
      "sin-experiencia": "Sin experiencia",
      "menos-6-meses": "Menos de 6 meses",
      "6-12-meses": "6-12 meses",
      "mas-1-año": "Más de 1 año",
    };

    const subject = `Nueva Solicitud de ${formData.name}`;

    let body = `Hola,

Me gustaría ponerme en contacto con ustedes. A continuación mis datos:

Nombre: ${formData.name}
Email: ${formData.email}`;

    if (formData.phone) {
      body += `\nTeléfono: ${formData.phone}`;
    }

    if (formData.instagram) {
      body += `\nInstagram / Redes: ${formData.instagram}`;
    }

    body += `\nEdad: ${formData.age} años`;
    body += `\nExperiencia en OnlyFans: ${experienceLabels[formData.experience] || formData.experience}`;

    if (formData.message) {
      body += `\n\nMensaje adicional:\n${formData.message}`;
    }

    body += `\n\nGracias por su atención.

Saludos,
${formData.name}`;

    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=agenciaonlyfxns@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink, '_blank');

    setFormData({ name: '', email: '', phone: '', instagram: '', age: '', experience: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
                <Crown className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <div>
                <span className="text-xl font-bold text-slate-900">myonlyfxns</span>
                <span className="block text-[10px] text-slate-500 font-medium -mt-0.5 tracking-wider">TALENT MANAGEMENT</span>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              <a href="#inicio" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">Inicio</a>
              <a href="#servicios" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">Servicios</a>
              <a href="#proceso" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">Proceso</a>
              <a href="#contacto" className="px-6 py-2.5 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors text-sm">
                Contactar
              </a>
            </div>

            <button
              className="lg:hidden text-slate-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100">
            <div className="px-6 py-6 space-y-4">
              <a href="#inicio" className="block text-slate-600 hover:text-slate-900 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Inicio</a>
              <a href="#servicios" className="block text-slate-600 hover:text-slate-900 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Servicios</a>
              <a href="#proceso" className="block text-slate-600 hover:text-slate-900 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Proceso</a>
              <a href="#contacto" className="block px-6 py-3 bg-slate-900 text-white rounded-lg font-medium text-center" onClick={() => setIsMenuOpen(false)}>
                Contactar
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-8 px-4 py-1.5 bg-slate-50 rounded-full border border-slate-200">
              <span className="text-slate-700 text-sm font-medium">Agencia Premium de Gestión OnlyFans</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight">
              Maximiza tus ingresos con gestión profesional
            </h1>

            <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto">
              Agencia especializada en gestión integral de creadoras OnlyFans. Multiplicamos tus ingresos con estrategias profesionales, equipo dedicado 24/7 y resultados comprobados.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href="#contacto"
                className="px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Solicitar Evaluación</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#servicios"
                className="px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-50 transition-colors border border-slate-200"
              >
                Ver Servicios
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-slate-100">
              <div>
                <div className="text-3xl font-bold text-slate-900 mb-1">+500%</div>
                <div className="text-sm text-slate-600">Incremento promedio</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900 mb-1">24/7</div>
                <div className="text-sm text-slate-600">Soporte dedicado</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900 mb-1">100%</div>
                <div className="text-sm text-slate-600">Confidencial</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section className="py-20 px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Agencia profesional de gestión
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Equipo experto especializado en maximizar ingresos de creadoras OnlyFans mediante estrategias profesionales y gestión integral.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Experiencia Comprobada</h3>
              <p className="text-slate-600 leading-relaxed">
                Años de experiencia con resultados medibles y creadoras satisfechas.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Equipo Dedicado</h3>
              <p className="text-slate-600 leading-relaxed">
                Profesionales en marketing, gestión y atención al cliente disponibles 24/7.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Resultados Reales</h3>
              <p className="text-slate-600 leading-relaxed">
                Metodología que multiplica ingresos de forma sostenible y escalable.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Confidencialidad Total</h3>
              <p className="text-slate-600 leading-relaxed">
                Protección absoluta de tu privacidad con acuerdos de confidencialidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Servicios de gestión integral
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Todo lo necesario para maximizar tu éxito en OnlyFans
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-50 p-10 rounded-xl border border-slate-200">
              <div className="w-14 h-14 bg-slate-900 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Estrategia de Marketing</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Plan personalizado de crecimiento y posicionamiento en redes sociales para maximizar tu visibilidad.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Plan de contenido estratégico</span>
                </li>
                <li className="flex items-start space-x-3 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Campañas publicitarias optimizadas</span>
                </li>
                <li className="flex items-start space-x-3 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Análisis de tendencias</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-10 rounded-xl border border-slate-200">
              <div className="w-14 h-14 bg-slate-900 rounded-lg flex items-center justify-center mb-6">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Gestión de Comunidad</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Equipo profesional gestionando tu comunidad las 24 horas del día para maximizar engagement.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Chatters profesionales 24/7</span>
                </li>
                <li className="flex items-start space-x-3 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Técnicas de fidelización</span>
                </li>
                <li className="flex items-start space-x-3 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Maximización de ingresos</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-10 rounded-xl border border-slate-200">
              <div className="w-14 h-14 bg-slate-900 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Análisis y Optimización</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Análisis de datos en tiempo real y optimización continua para garantizar máximo rendimiento.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Dashboard de métricas</span>
                </li>
                <li className="flex items-start space-x-3 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Reportes detallados</span>
                </li>
                <li className="flex items-start space-x-3 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Optimización continua</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <div className="flex items-center space-x-3 mb-3">
                <Shield className="w-6 h-6 text-slate-900" />
                <h4 className="text-lg font-bold text-slate-900">Protección Legal</h4>
              </div>
              <p className="text-slate-600 text-sm">Asesoramiento legal y gestión DMCA profesional</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <div className="flex items-center space-x-3 mb-3">
                <Video className="w-6 h-6 text-slate-900" />
                <h4 className="text-lg font-bold text-slate-900">Producción de Contenido</h4>
              </div>
              <p className="text-slate-600 text-sm">Asesoría en creación y optimización de contenido</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <div className="flex items-center space-x-3 mb-3">
                <Sparkles className="w-6 h-6 text-slate-900" />
                <h4 className="text-lg font-bold text-slate-900">Branding Personal</h4>
              </div>
              <p className="text-slate-600 text-sm">Construcción de marca personal única</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              ¿Por qué trabajar con nosotros?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Compromiso con resultados tangibles y tu crecimiento profesional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Comisiones Competitivas</h3>
              <p className="text-slate-600 leading-relaxed">
                Estructura de comisiones transparente y justa. Tu éxito es nuestro éxito.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Experiencia Demostrable</h3>
              <p className="text-slate-600 leading-relaxed">
                Casos de éxito documentados y creadoras satisfechas que respaldan nuestro trabajo.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Transparencia Total</h3>
              <p className="text-slate-600 leading-relaxed">
                Acceso completo a métricas y reportes detallados de tu rendimiento.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Confidencialidad Garantizada</h3>
              <p className="text-slate-600 leading-relaxed">
                Acuerdos de confidencialidad estrictos y protección total de tu privacidad.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Contratos Flexibles</h3>
              <p className="text-slate-600 leading-relaxed">
                Acuerdos adaptados a tus necesidades sin cláusulas abusivas.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Formación Continua</h3>
              <p className="text-slate-600 leading-relaxed">
                Acceso a recursos educativos y asesoramiento personalizado constante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section id="proceso" className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Proceso simple y transparente
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Cuatro pasos para comenzar tu transformación profesional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center text-white font-bold text-2xl mb-6 mx-auto">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Solicitud</h3>
              <p className="text-slate-600 text-sm">
                Completa el formulario con tu información
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center text-white font-bold text-2xl mb-6 mx-auto">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Evaluación</h3>
              <p className="text-slate-600 text-sm">
                Analizamos tu perfil en 24-48h
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center text-white font-bold text-2xl mb-6 mx-auto">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Entrevista</h3>
              <p className="text-slate-600 text-sm">
                Conversación personal para conocerte
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center text-white font-bold text-2xl mb-6 mx-auto">
                4
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Inicio</h3>
              <p className="text-slate-600 text-sm">
                Onboarding y estrategia personalizada
              </p>
            </div>
          </div>

          <div className="mt-16 bg-slate-50 rounded-xl p-8 border border-slate-200">
            <div className="flex items-start space-x-4">
              <Shield className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Proceso Confidencial</h3>
                <p className="text-slate-600 leading-relaxed">
                  Toda tu información es tratada con absoluta confidencialidad. Acuerdos de no divulgación y protección total de datos personales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section id="contacto" className="py-20 px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Solicita información
              </h2>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                Completa el formulario y te contactaremos en 24-48 horas para una evaluación personalizada y confidencial.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Respuesta Rápida</h3>
                    <p className="text-slate-600">Contacto en menos de 48 horas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Confidencialidad Total</h3>
                    <p className="text-slate-600">Información protegida y discreta</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Sin Compromiso</h3>
                    <p className="text-slate-600">Consulta inicial gratuita</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Contacto</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-slate-600">
                    <Mail className="w-5 h-5 text-slate-900" />
                    <span>agenciaonlyfxns@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-600">
                    <MapPin className="w-5 h-5 text-slate-900" />
                    <span>España</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 border border-slate-200">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                      placeholder="+34 600 000 000"
                    />
                  </div>

                  <div>
                    <label htmlFor="instagram" className="block text-sm font-semibold text-slate-900 mb-2">
                      Instagram / Redes
                    </label>
                    <input
                      type="text"
                      id="instagram"
                      value={formData.instagram}
                      onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                      placeholder="@usuario"
                    />
                  </div>

                  <div>
                    <label htmlFor="age" className="block text-sm font-semibold text-slate-900 mb-2">
                      Edad *
                    </label>
                    <input
                      type="number"
                      id="age"
                      required
                      min="18"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                      placeholder="18+"
                    />
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-semibold text-slate-900 mb-2">
                      Experiencia en OnlyFans *
                    </label>
                    <select
                      id="experience"
                      required
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="sin-experiencia">Sin experiencia</option>
                      <option value="menos-6-meses">Menos de 6 meses</option>
                      <option value="6-12-meses">6-12 meses</option>
                      <option value="mas-1-año">Más de 1 año</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent resize-none"
                      placeholder="Cuéntanos sobre tus objetivos..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors inline-flex items-center justify-center space-x-2"
                  >
                    <span>Enviar Solicitud</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    Al enviar confirmas ser mayor de 18 años. Información tratada confidencialmente.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <Crown className="w-6 h-6 text-slate-900" />
                </div>
                <div>
                  <span className="text-xl font-bold text-white">myonlyfxns</span>
                  <span className="block text-[10px] text-slate-400 font-medium -mt-0.5 tracking-wider">TALENT MANAGEMENT</span>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed max-w-md mb-6">
                Agencia profesional especializada en gestión integral de creadoras OnlyFans. Maximizamos ingresos con estrategias profesionales.
              </p>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Navegación</h3>
              <div className="space-y-3">
                <a href="#inicio" className="block text-slate-400 hover:text-white transition-colors text-sm">Inicio</a>
                <a href="#servicios" className="block text-slate-400 hover:text-white transition-colors text-sm">Servicios</a>
                <a href="#proceso" className="block text-slate-400 hover:text-white transition-colors text-sm">Proceso</a>
                <a href="#contacto" className="block text-slate-400 hover:text-white transition-colors text-sm">Contacto</a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Legal</h3>
              <div className="space-y-3">
                <a href="/privacy" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/privacy'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="block text-slate-400 hover:text-white transition-colors text-sm">Privacidad</a>
                <a href="/terms" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/terms'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="block text-slate-400 hover:text-white transition-colors text-sm">Términos</a>
                <a href="/legal" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/legal'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="block text-slate-400 hover:text-white transition-colors text-sm">Aviso Legal</a>
                <a href="/cookies" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/cookies'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="block text-slate-400 hover:text-white transition-colors text-sm">Cookies</a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © 2026 myonlyfxns.es - Todos los derechos reservados
            </p>
            <a href="mailto:agenciaonlyfxns@gmail.com" className="text-slate-400 hover:text-white transition-colors text-sm">
              agenciaonlyfxns@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
