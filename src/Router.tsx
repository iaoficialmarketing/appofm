import { useEffect, useState } from 'react';
import App from './App';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Legal from './pages/Legal';
import Cookies from './pages/Cookies';

export default function Router() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const routes: Record<string, JSX.Element> = {
    '/': <App />,
    '/privacy': <Privacy />,
    '/terms': <Terms />,
    '/legal': <Legal />,
    '/cookies': <Cookies />
  };

  return routes[currentPath] || <App />;
}
