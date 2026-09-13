import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomeContent from './pages/generated/HomeContent.jsx';
import HokmContent from './pages/generated/HokmContent.jsx';
import HokmRulesContent from './pages/generated/HokmRulesContent.jsx';
import ShelemGameContent from './pages/generated/ShelemGameContent.jsx';
import ShelemRulesContent from './pages/generated/ShelemRulesContent.jsx';
import BebeContent from './pages/generated/BebeContent.jsx';
import BebeRulesContent from './pages/generated/BebeRulesContent.jsx';
import AboutContent from './pages/generated/AboutContent.jsx';
import SupportContent from './pages/generated/SupportContent.jsx';
import DownloadContent from './pages/generated/DownloadContent.jsx';
import TermsContent from './pages/generated/TermsContent.jsx';
import ContactContent from './pages/generated/ContactContent.jsx';

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
    </Layout>
  );
}
