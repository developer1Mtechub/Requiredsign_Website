import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import AboutUs from './components/aboutus';
import Features from './components/features';
import SecurityCompliance from './components/security&compliance';
// import Footer from './components/footer/Footer'
import ScrollToTop from './components/ScrollTop'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/aboutus' element={<AboutUs />} />
          <Route exact path='/features' element={<Features />} />
          <Route exact path='/security_and_compliance' element={<SecurityCompliance />} />
        </Routes>

        {/* <Footer /> */}

      </Router>
    </>
  );
}

export default App;
