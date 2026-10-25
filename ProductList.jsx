import { Leaf, Plus, Check } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice.jsx';
import { categories, products } from './products.js';
import Navbar from './Navbar.jsx';

export default function ProductList() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const added = new Set(items.map((item) => item.id));
  return (
    <><Navbar /><main className="page-shell catalog-page">
      <section className="section-heading">
        <div><div className="eyebrow"><Leaf size={15} /> The plant edit</div><h1>Find your green.</h1><p>Good plants, ready to make themselves at home.</p></div>
      </section>
      <div className="catalog-tools"><span>18 plants</span><span>3 thoughtful collections</span><span className="catalog-cart-count" aria-live="polite">Cart: {cartCount} items</span></div>
      {categories.map((category) => {
        const plantsInCategory = products.filter((product) => product.category === category.id);
        return <section className="plant-category" key={category.id} aria-labelledby={`category-${category.id}`}>
          <div className="category-title"><h2 id={`category-${category.id}`}>{category.name}</h2><span>{category.note}</span><span>({plantsInCategory.length} plants)</span></div>
          <div className="plant-grid">{plantsInCategory.map((product) => {
            const isAdded = added.has(product.id);
            return <article className="plant-card" key={product.id}>
              <div className="plant-photo" role="img" aria-label={product.name} style={{ backgroundImage: `url("${product.image}")` }}><span className="plant-tag">{product.tag}</span></div>
              <div className="plant-info"><div className="plant-name-row"><h3>{product.name}</h3><span className="plant-price">${product.price.toFixed(2)}</span></div><p>{product.description}</p>
                <button className="add-button" type="button" disabled={isAdded} onClick={() => dispatch(addItem(product))}>{isAdded ? <><Check size={15}/> Added to cart</> : <><Plus size={15}/> Add to cart</>}</button>
              </div>
            </article>;
          })}</div>
        </section>;
      })}
    </main></>
  );
}
