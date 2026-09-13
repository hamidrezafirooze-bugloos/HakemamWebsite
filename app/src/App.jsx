import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

const HomeContent = lazy(() => import('./pages/generated/HomeContent.jsx'));
const HokmContent = lazy(() => import('./pages/generated/HokmContent.jsx'));
const HokmRulesContent = lazy(() => import('./pages/generated/HokmRulesContent.jsx'));
const ShelemGameContent = lazy(() => import('./pages/generated/ShelemGameContent.jsx'));
const ShelemRulesContent = lazy(() => import('./pages/generated/ShelemRulesContent.jsx'));
const BebeContent = lazy(() => import('./pages/generated/BebeContent.jsx'));
const BebeRulesContent = lazy(() => import('./pages/generated/BebeRulesContent.jsx'));
const AboutContent = lazy(() => import('./pages/generated/AboutContent.jsx'));
const SupportContent = lazy(() => import('./pages/generated/SupportContent.jsx'));
const DownloadContent = lazy(() => import('./pages/generated/DownloadContent.jsx'));
const TermsContent = lazy(() => import('./pages/generated/TermsContent.jsx'));
const ContactContent = lazy(() => import('./pages/generated/ContactContent.jsx'));

function Layout({ children }) {
  return (
    <div dir="rtl" style={{ minHeight: '100vh', color: '#e6d5b8', fontFamily: 'Vazirmatn, system-ui, sans-serif' }}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/hokm" element={<HokmContent />} />
          <Route path="/hokm/rules" element={<HokmRulesContent />} />
          <Route path="/shelem" element={<ShelemGameContent />} />
          <Route path="/shelem/rules" element={<ShelemRulesContent />} />
          <Route path="/bebe" element={<BebeContent />} />
          <Route path="/bebe/rules" element={<BebeRulesContent />} />
          <Route path="/about" element={<AboutContent />} />
          <Route path="/support" element={<SupportContent />} />
          <Route path="/download" element={<DownloadContent />} />
          <Route path="/terms" element={<TermsContent />} />
          <Route path="/contact" element={<ContactContent />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
