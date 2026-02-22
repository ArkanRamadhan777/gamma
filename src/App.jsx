import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tentang from './pages/Tentang';
import Program from './pages/Program';
import Galeri from './pages/Galeri';
import Aspirasi from './pages/Aspirasi';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tentang" element={<Tentang />} />
            <Route path="/program" element={<Program />} />
            <Route path="/galeri" element={<Galeri />} />
            <Route path="/aspirasi" element={<Aspirasi />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
