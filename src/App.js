import { Routes, Route, Link } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import Projects from './pages/project';
import Skills from './pages/Skills';
import Avis from './pages/Avis';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import CookieConsent from 'react-cookie-consent';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
        <main className="flex-grow">        
          <Routes>
            <Route path='*' element={<ErrorPage />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/' element={<Projects />} />
            <Route path='/connaissance' element={<Skills />} />
            <Route path='/avis' element={<Avis />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          </Routes>
          <CookieConsent
            location="bottom"
            buttonText="J'accepte"
            declineButtonText="Je refuse"
            cookieName="myAwesomeCookieName2"
            style={{ background: "#2B373B" }}
            buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
            declineButtonStyle={{ color: "#fff", background: "#f44336", fontSize: "13px" }}
            expires={150}
            >
            Ce site utilise des cookies pour améliorer l'expérience utilisateur.{" "}
            <Link to="/cookie-policy" style={{ color: "#ffd700" }}>En savoir plus</Link>
          </CookieConsent>
        </main>
      <Footer />
    </div>
    
  );
}

export default App;
