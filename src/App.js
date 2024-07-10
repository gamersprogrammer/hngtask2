import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BillingDetails from './components/pages/BillingDetails';
import Cart from './components/pages/Cart';
import Home from './components/pages/Home';
import Header from './components/Reused components/Header';
import Footer from './components/Reused components/Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/billing-details' element={<BillingDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
