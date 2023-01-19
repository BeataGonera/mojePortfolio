import './App.css';
import {Routes, Route} from 'react-router-dom';
import { LandingPage } from './components/LandingPage/LandingPage';
import { CertificatesPage } from './components/CertificatesPage/CertificatesPage';
import { ContactPage } from './components/ContactPage/ContactPage';
import { ContactPageMobile } from './components/ContactPage/ContactPageMobile';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';


function App() {

  const navigate = useNavigate();

  useEffect(() => {
    navigate('/')
  },[])

  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/certificates' element={<CertificatesPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/contact-mobile' element={<ContactPageMobile/>}/>
      </Routes>
    </div>
  );
}

export default App;
