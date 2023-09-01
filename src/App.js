import './App.css';
import { useLocation, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about/about'
import Contact from './pages/contact/contact'
import { Navbar } from './components/navbar/navbar';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Toaster position='top-right' toastOptions={{
        style: {
          width:"250px",
          height:'100px'
        },
      }} />
    </>
  );
}

export default App;
