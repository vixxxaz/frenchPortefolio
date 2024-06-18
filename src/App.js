import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import Projects from './pages/project';
import Skills from './pages/Skills';
import Avis from './pages/Avis'


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
          </Routes>
        </main>
      <Footer />
    </div>
    
  );
}

export default App;
