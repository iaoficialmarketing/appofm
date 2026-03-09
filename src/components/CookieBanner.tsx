import { useState, useEffect } from 'react';
import { X, Cookie, Settings } from 'lucide-react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    setShowBanner(false);
  };

  const handleRejectNonEssential = () => {
    const essentialOnly = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(essentialOnly));
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    const savedPreferences = {
      ...preferences,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(savedPreferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  if (!showBanner) return null;

  return (
    <>
      <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 transition-opacity" />

      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl border border-slate-200">
          {!showSettings ? (
            <div className="p-6 md:p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                    Este sitio utiliza cookies
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Utilizamos cookies propias y de terceros para mejorar tu experiencia de navegación, analizar el tráfico del sitio y personalizar el contenido. Puedes aceptar todas las cookies, rechazar las no esenciales o personalizar tus preferencias.
                  </p>
                  <p className="text-sm text-slate-600">
                    Para más información, consulta nuestra <a href="/cookies" className="text-slate-900 font-semibold hover:underline">Política de Cookies</a> y <a href="/privacy" className="text-slate-900 font-semibold hover:underline">Política de Privacidad</a>.
                  </p>
                </div>
                <button
                  onClick={handleRejectNonEssential}
                  className="text-slate-400 hover:text-slate-600 transition-colors flex-shrink-0"
                  aria-label="Cerrar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
                >
                  Aceptar todas
                </button>
                <button
                  onClick={handleRejectNonEssential}
                  className="flex-1 px-6 py-3 bg-white text-slate-900 rounded-lg font-semibold border border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  Solo esenciales
                </button>
                <button
                  onClick={() => setShowSettings(true)}
                  className="flex items-center justify-center space-x-2 px-6 py-3 bg-white text-slate-900 rounded-lg font-semibold border border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  <Settings className="w-5 h-5" />
                  <span>Personalizar</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                  Configuración de Cookies
                </h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-slate-400 hover:text-slate-600 transition-colors"
                  aria-label="Volver"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex items-start justify-between p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex-1 pr-4">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                      Cookies Necesarias
                    </h4>
                    <p className="text-sm text-slate-600">
                      Esenciales para el funcionamiento del sitio web. No se pueden desactivar.
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-6 bg-slate-900 rounded-full flex items-center justify-end px-1">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start justify-between p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex-1 pr-4">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                      Cookies Funcionales
                    </h4>
                    <p className="text-sm text-slate-600">
                      Permiten recordar tus preferencias y personalizar tu experiencia.
                    </p>
                  </div>
                  <button
                    onClick={() => setPreferences({ ...preferences, functional: !preferences.functional })}
                    className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                      preferences.functional ? 'bg-slate-900 justify-end' : 'bg-slate-300 justify-start'
                    }`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </button>
                </div>

                <div className="flex items-start justify-between p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex-1 pr-4">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                      Cookies Analíticas
                    </h4>
                    <p className="text-sm text-slate-600">
                      Nos ayudan a entender cómo los visitantes interactúan con el sitio web.
                    </p>
                  </div>
                  <button
                    onClick={() => setPreferences({ ...preferences, analytics: !preferences.analytics })}
                    className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                      preferences.analytics ? 'bg-slate-900 justify-end' : 'bg-slate-300 justify-start'
                    }`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </button>
                </div>

                <div className="flex items-start justify-between p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex-1 pr-4">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                      Cookies de Marketing
                    </h4>
                    <p className="text-sm text-slate-600">
                      Se utilizan para mostrarte publicidad relevante y personalizada.
                    </p>
                  </div>
                  <button
                    onClick={() => setPreferences({ ...preferences, marketing: !preferences.marketing })}
                    className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                      preferences.marketing ? 'bg-slate-900 justify-end' : 'bg-slate-300 justify-start'
                    }`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleSavePreferences}
                  className="flex-1 px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
                >
                  Guardar preferencias
                </button>
                <button
                  onClick={() => setShowSettings(false)}
                  className="flex-1 px-6 py-3 bg-white text-slate-900 rounded-lg font-semibold border border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  Cancelar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
