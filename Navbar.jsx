import { Leaf, ShoppingBag } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar({ overlay = false }) {
  const count = useSelector((state) => state.cart.items.reduce((sum, item) => sum + item.quantity, 0));
  return (
    <header className={`navbar ${overlay ? 'navbar-overlay' : ''}`}>
      <Link className="brand" to="/" aria-label="Paradise Nursery home"><span className="brand-mark"><Leaf /></span><span>Paradise Nursery<small>grow a happier home</small></span></Link>
      <nav className="nav-links" aria-label="Main navigation">
        <NavLink to="/">Home</NavLink><NavLink to="/plants">Plants</NavLink><NavLink to="/about">About</NavLink>
        <NavLink className="nav-cart" to="/cart" aria-label={`Cart, ${count} items`}><ShoppingBag size={18} /> Cart <span className="cart-badge">{count}</span></NavLink>
      </nav>
    </header>
  );
}
