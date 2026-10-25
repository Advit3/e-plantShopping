import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, updateQuantity } from './CartSlice.jsx';
import Navbar from './Navbar.jsx';

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const [notice, setNotice] = useState(false);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const checkout = () => { setNotice(true); window.setTimeout(() => setNotice(false), 2600); };
  return (
    <div className="cart-container"><Navbar /><main className="page-shell cart-page">
      <div className="cart-heading"><div className="eyebrow"><ShoppingBag size={15}/> Your collection</div><h1>Shopping cart</h1><p>{count} {count === 1 ? 'plant' : 'plants'} ready to make themselves at home.</p></div>
      {items.length === 0 ? <section className="empty-cart"><ShoppingBag size={29}/><h2>Your cart is taking a breather.</h2><p>Find a leafy friend to bring a little life home.</p><Link className="button" to="/plants"><ArrowLeft size={16}/> Explore plants</Link></section> :
        <div className="cart-layout">
          <section className="cart-list" aria-label="Items in your shopping cart">
            {items.map((item) => <article className="cart-row cart-item" key={item.id}>
              <div className="cart-thumb cart-item-image" role="img" aria-label={item.name} style={{ backgroundImage: `url("${item.image}")` }}/>
              <div className="cart-item-info"><h2>{item.name}</h2><p>${item.price.toFixed(2)} each</p></div>
              <div className="quantity-control quantity-controls" aria-label={`Quantity for ${item.name}`}><button type="button" aria-label={`Decrease ${item.name} quantity`} onClick={() => dispatch(updateQuantity({ id:item.id, quantity:item.quantity-1 }))}><Minus size={13}/></button><span>{item.quantity}</span><button type="button" aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(updateQuantity({ id:item.id, quantity:item.quantity+1 }))}><Plus size={13}/></button></div>
              <div className="line-price"><strong className="item-total">${(item.price * item.quantity).toFixed(2)}</strong><small>Item total</small></div>
              <button className="remove-button delete-button" type="button" aria-label={`Remove ${item.name}`} onClick={() => dispatch(removeItem(item.id))}><Trash2 size={17}/><span className="sr-only">Delete</span></button>
            </article>)}
            <Link className="continue-link continue-shopping-button" to="/plants"><ArrowLeft size={15}/> Continue shopping</Link>
          </section>
          <aside className="cart-summary"><h2>Order summary</h2><div className="summary-line"><span>Plants ({count} items)</span><span>${total.toFixed(2)}</span></div><div className="summary-line"><span>Delivery</span><span>Calculated later</span></div><div className="summary-line summary-total"><span>Total</span><span>${total.toFixed(2)}</span></div><button className="checkout-button" type="button" onClick={checkout}>Continue to checkout</button><p className="summary-line" style={{justifyContent:'center',fontSize:11}}>Checkout is coming soon</p></aside>
        </div>}
      {notice && <div className="toast" role="status">Checkout is coming soon. Thanks for growing with us!</div>}
    </main></div>
  );
}
