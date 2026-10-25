import { ArrowLeft, Leaf, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removeItem, updateQuantity } from './CartSlice.jsx';
import Navbar from './Navbar.jsx';

export default function CartItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart.items);
  const [notice, setNotice] = useState(false);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const checkout = () => { setNotice(true); window.setTimeout(() => setNotice(false), 2600); };
  return (
    <div className="cart-container">
      <header className="navbar" aria-label="Shopping cart navigation">
        <Link className="brand" to="/"><span className="brand-mark"><Leaf /></span><span>Paradise Nursery<small>grow a happier home</small></span></Link>
        <nav className="nav-links" aria-label="Main navigation"><Link to="/">Home</Link><Link to="/plants">Plants</Link><Link className="nav-cart" to="/cart">Cart <span className="cart-badge" aria-live="polite">{count}</span></Link></nav>
      </header>
      <main className="page-shell cart-page">
      <div className="cart-heading"><div className="eyebrow"><ShoppingBag size={15}/> Your collection</div><h1>Shopping cart</h1><p>{count} {count === 1 ? 'plant' : 'plants'} ready to make themselves at home.</p></div>
      {items.length === 0 ? <section className="empty-cart"><ShoppingBag size={29}/><h2>Your cart is taking a breather.</h2><p>Find a leafy friend to bring a little life home.</p><Link className="button" to="/plants"><ArrowLeft size={16}/> Explore plants</Link></section> :
        <div className="cart-layout">
          <section className="cart-list" aria-label="Items in your shopping cart">
            {items.map((item) => <article className="cart-row cart-item" key={item.id}>
              <img className="cart-thumb cart-item-image" src={item.image} alt={item.name} />
              <div className="cart-item-info"><h2>{item.name}</h2><p>Unit price: ${item.price.toFixed(2)} each</p></div>
              <div className="quantity-control quantity-controls" aria-label={`Quantity for ${item.name}`}><button type="button" aria-label={`Decrease ${item.name} quantity`} onClick={() => item.quantity === 1 ? dispatch(removeItem(item.id)) : dispatch(updateQuantity({ id:item.id, quantity:item.quantity-1 }))}><Minus size={13}/></button><span>{item.quantity}</span><button type="button" aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(updateQuantity({ id:item.id, quantity:item.quantity+1 }))}><Plus size={13}/></button></div>
              <div className="line-price"><strong className="item-total">${(item.price * item.quantity).toFixed(2)}</strong><small>Item total</small></div>
              <button className="remove-button delete-button" type="button" aria-label={`Remove ${item.name}`} onClick={() => dispatch(removeItem(item.id))}><Trash2 size={17}/><span>Delete</span></button>
            </article>)}
            <button className="continue-link continue-shopping-button" type="button" onClick={() => navigate('/plants')}><ArrowLeft size={15}/> Continue shopping</button>
          </section>
          <aside className="cart-summary"><h2>Order summary</h2><div className="summary-line"><span>Plants ({count} items)</span><span>${total.toFixed(2)}</span></div><div className="summary-line"><span>Delivery</span><span>Calculated later</span></div><div className="summary-line summary-total"><span>Total</span><span>${total.toFixed(2)}</span></div><button className="checkout-button" type="button" onClick={checkout}>Continue to checkout</button><p className="summary-line" style={{justifyContent:'center',fontSize:11}}>Checkout is coming soon</p></aside>
        </div>}
      {notice && <div className="toast" role="status">Checkout is coming soon. Thanks for growing with us!</div>}
    </main></div>
  );
}
