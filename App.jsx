import { Leaf, ArrowRight } from 'lucide-react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AboutUs from './AboutUs.jsx';
import CartItem from './CartItem.jsx';
import Navbar from './Navbar.jsx';
import ProductList from './ProductList.jsx';

function LandingPage({ companyName, setShowProductList, showProductList }) {
  const navigate = useNavigate();
  const getStarted = () => {
    setShowProductList(true);
    navigate('/plants');
  };
  return (
    <main className="landing">
      <div className="landing-shade" />
      <Navbar overlay />
      <section className="landing-content" aria-labelledby="landing-title">
        <div className="eyebrow light-eyebrow"><Leaf size={16} /> A little more green, every day</div>
        <p className="landing-kicker">Welcome to</p>
        <h1 id="landing-title">{companyName}</h1>
        <p className="landing-copy">Thoughtfully grown plants for slower mornings, brighter corners, and happier homes.</p>
        <button className="get-started-button button button-light" type="button" data-shopping-started={showProductList} onClick={getStarted}>Get Started <ArrowRight size={17} /></button>
      </section>
      <div className="landing-note"><span>01 / 03</span><span>Find your kind of green</span></div>
    </main>
  );
}

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const companyName = 'Paradise Nursery';
  return (
    <Routes>
      <Route path="/" element={<LandingPage companyName={companyName} setShowProductList={setShowProductList} showProductList={showProductList} />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/about" element={<><Navbar /><AboutUs /></>} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
