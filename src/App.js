import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import AboutUs from './components/aboutus';
import Features from './components/features';
import SecurityCompliance from './components/security&compliance';
import PricingAndPlans from './components/pricing&plans';
import Patners from './components/patners';
import Contactus from './components/contactus';
import WaitingList from './components/waitinglist';
import PrivacyPolicy from './components/privacy&policy';
import TermsAndConditions from './components/terms&conditions';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/ScrollTop';

// Wrapper component to use useLocation
function AppContent() {
  const location = useLocation();

  // Pages where Navbar and Footer should be hidden
  const hideNavAndFooter = location.pathname === '/waiting_list';

  return (
    <>
      {!hideNavAndFooter && <Navbar />}
      <ScrollToTop />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/aboutus' element={<AboutUs />} />
        <Route exact path='/features' element={<Features />} />
        <Route exact path='/security_and_compliance' element={<SecurityCompliance />} />
        <Route exact path='/pricing_and_plans' element={<PricingAndPlans />} />
        <Route exact path='/patners' element={<Patners />} />
        <Route exact path='/contact' element={<Contactus />} />
        <Route exact path='/waiting_list' element={<WaitingList />} />
        <Route exact path='/privacy_&_policy' element={<PrivacyPolicy />} />
        <Route exact path='/terms_&_conditions' element={<TermsAndConditions />} />
      </Routes>
      {!hideNavAndFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
