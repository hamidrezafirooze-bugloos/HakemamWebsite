import { useNavigate } from 'react-router-dom';

export const PATHS = {
  home: '/',
  hokm: '/hokm',
  hokmRules: '/hokm/rules',
  shelemGame: '/shelem',
  shelemRules: '/shelem/rules',
  bebe: '/bebe',
  bebeRules: '/bebe/rules',
  about: '/about',
  support: '/support',
  download: '/download',
  terms: '/terms',
  contact: '/contact',
};

export function useGo() {
  const navigate = useNavigate();
  const go = {};
  for (const [key, path] of Object.entries(PATHS)) {
    go[key] = (e) => {
      if (e && e.preventDefault) e.preventDefault();
      navigate(path);
      if (typeof window !== 'undefined') window.scrollTo(0, 0);
    };
  }
  return go;
}
