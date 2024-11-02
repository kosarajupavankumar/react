import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  // use the lazy loading for the pages
  const HomePage = React.lazy(() => import('./pages/HomePage'));
  const AboutPage = React.lazy(() => import('./pages/AboutPage'));
  const ContactPage = React.lazy(() => import('./pages/ContactPage'));
  const SumPage = React.lazy(() => import('./pages/SumPage'));
  const ItemsPage = React.lazy(() => import('./pages/ItemsPage'));

  // use the suspense for the lazy loading
  return (
    <BrowserRouter>
      <Navbar />
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/items" element={<ItemsPage />} />
          <Route path="/sum" element={<SumPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );



  // code splitting using dynamic import
  // const [HomePage, setHomePage] = useState(null);
  // const [AboutPage, setAboutPage] = useState(null);
  // const [ContactPage, setContactPage] = useState(null);

  // useEffect(() => {
  //   import('./pages/HomePage').then((module) => setHomePage(() => module.default));
  // }, []);

  // const loadAboutPage = () => {
  //   import('./pages/AboutPage').then((module) => setAboutPage(() => module.default));
  // }

  // const loadContactPage = () => {
  //   import('./pages/ContactPage').then((module) => setContactPage(() => module.default));
  // }

  // return (
  //   <BrowserRouter>
  //     <Navbar loadAboutPage={loadAboutPage} loadContactPage={loadContactPage} />
  //     <Routes>
  //       <Route path="/" element={HomePage ? <HomePage /> : <div>Loading...</div>} />
  //       <Route path="/about" element={AboutPage ? <AboutPage /> : <div>Loading...</div>} />
  //       <Route path="/contact" element={ContactPage ? <ContactPage /> : <div>Loading...</div>} />
  //     </Routes>
  //   </BrowserRouter>
  // );
}

export default App;
