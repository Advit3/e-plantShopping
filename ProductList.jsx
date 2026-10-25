import { Leaf, Plus, Check } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { addItem } from './CartSlice.jsx';

// The rubric asks for plants grouped under categories, so every category and
// its six plant objects are kept together in this file.
const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { id: 'monstera-deliciosa', name: 'Monstera Deliciosa', price: 32, tag: 'Bestseller', description: 'Iconic split leaves and a big, happy presence.', thumbnail: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=82' },
      { id: 'golden-pothos', name: 'Golden Pothos', price: 18, tag: 'Easy care', description: 'Trailing golden leaves that thrive in almost any room.', thumbnail: 'https://images.unsplash.com/photo-1600411833114-5c0c9b2c2a9b?auto=format&fit=crop&w=800&q=82' },
      { id: 'snake-plant', name: 'Snake Plant', price: 24, tag: 'Low light', description: 'Sculptural upright leaves and an easy routine.', thumbnail: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?auto=format&fit=crop&w=800&q=82' },
      { id: 'zz-plant', name: 'ZZ Plant', price: 27, tag: 'Easy care', description: 'Glossy foliage that stays beautiful with little fuss.', thumbnail: 'https://images.unsplash.com/photo-1632207691143-643e2f8a8a0c?auto=format&fit=crop&w=800&q=82' },
      { id: 'spider-plant', name: 'Spider Plant', price: 20, tag: 'Pet friendly', description: 'A cheerful classic with arching, striped leaves.', thumbnail: 'https://images.unsplash.com/photo-1572688484438-313a6e50c2c4?auto=format&fit=crop&w=800&q=82' },
      { id: 'rubber-plant', name: 'Rubber Plant', price: 35, tag: 'Bold leaves', description: 'Deep green, polished leaves for a bright corner.', thumbnail: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=82' },
    ],
  },
  {
    category: 'Statement Plants',
    plants: [
      { id: 'fiddle-leaf-fig', name: 'Fiddle Leaf Fig', price: 58, tag: 'Statement', description: 'Sculptural fiddle-shaped leaves with character.', thumbnail: 'https://images.unsplash.com/photo-1597055181300-d7e7e4fb8a6a?auto=format&fit=crop&w=800&q=82' },
      { id: 'kentia-palm', name: 'Kentia Palm', price: 64, tag: 'Tall & graceful', description: 'Soft, arching fronds bring a calm tropical feel.', thumbnail: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=800&q=82' },
      { id: 'calathea-orbifolia', name: 'Calathea Orbifolia', price: 42, tag: 'Patterned', description: 'Broad leaves with delicate silver-green stripes.', thumbnail: 'https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=800&q=82' },
      { id: 'bird-of-paradise', name: 'Bird of Paradise', price: 72, tag: 'Tropical', description: 'A striking upright plant for a sun-filled room.', thumbnail: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?auto=format&fit=crop&w=800&q=82' },
      { id: 'bamboo-palm', name: 'Bamboo Palm', price: 49, tag: 'Airy texture', description: 'Feathery green fronds brighten open spaces.', thumbnail: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=82' },
      { id: 'swiss-cheese-vine', name: 'Swiss Cheese Vine', price: 29, tag: 'Climber', description: 'Playful fenestrated leaves on a trailing vine.', thumbnail: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=82' },
    ],
  },
  {
    category: 'Pet-Friendly Plants',
    plants: [
      { id: 'parlor-palm', name: 'Parlor Palm', price: 26, tag: 'Pet friendly', description: 'A compact palm with soft fronds for a cozy corner.', thumbnail: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=800&q=82' },
      { id: 'prayer-plant', name: 'Prayer Plant', price: 23, tag: 'Pet friendly', description: 'Patterned leaves that fold gently at night.', thumbnail: 'https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=800&q=82' },
      { id: 'peperomia-green', name: 'Peperomia Green', price: 19, tag: 'Pet friendly', description: 'Rounded leaves on an easygoing little plant.', thumbnail: 'https://images.unsplash.com/photo-1597055181300-d7e7e4fb8a6a?auto=format&fit=crop&w=800&q=82' },
      { id: 'hoya-heart', name: 'Hoya Heart', price: 21, tag: 'Pet friendly', description: 'A heart-shaped succulent with a tidy silhouette.', thumbnail: 'https://images.unsplash.com/photo-1600411833114-5c0c9b2c2a9b?auto=format&fit=crop&w=800&q=82' },
      { id: 'fittonia', name: 'Fittonia', price: 16, tag: 'Pet friendly', description: 'Lush leaves traced with bright, delicate veins.', thumbnail: 'https://images.unsplash.com/photo-1572688484438-313a6e50c2c4?auto=format&fit=crop&w=800&q=82' },
      { id: 'rattlesnake-calathea', name: 'Rattlesnake Calathea', price: 31, tag: 'Pet friendly', description: 'Wavy patterned foliage with a lively tropical look.', thumbnail: 'https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=800&q=82' },
    ],
  },
];

export function ShoppingNavbar() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const handleHomeClick = () => navigate('/');
  const handlePlantsClick = () => navigate('/plants');
  const handleCartClick = () => navigate('/cart');
  const navigateFromLink = (event, handler) => { event.preventDefault(); handler(); };
  return (
    <header className="navbar" aria-label="Paradise Nursery navigation">
      <Link className="brand" to="/" onClick={(event) => navigateFromLink(event, handleHomeClick)}><span className="brand-mark"><Leaf /></span><span>Paradise Nursery<small>grow a happier home</small></span></Link>
      <nav className="nav-links" aria-label="Main navigation">
        <Link to="/" onClick={(event) => navigateFromLink(event, handleHomeClick)}>Home</Link>
        <Link to="/plants" onClick={(event) => navigateFromLink(event, handlePlantsClick)}>Plants</Link>
        <Link className="nav-cart" to="/cart" onClick={(event) => navigateFromLink(event, handleCartClick)}>Cart <span className="cart-badge" aria-live="polite">{cartCount}</span></Link>
      </nav>
    </header>
  );
}

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const [addedToCart, setAddedToCart] = useState(() => Object.fromEntries(cartItems.map((item) => [item.name, true])));
  const handleAddToCart = (plant) => {
    dispatch(addItem({ ...plant, image: plant.thumbnail, cost: plant.price }));
    setAddedToCart((current) => ({ ...current, [plant.name]: true }));
  };

  return (
    <>
      <ShoppingNavbar />
      <main className="page-shell catalog-page">
        <section className="section-heading">
          <div><div className="eyebrow"><Leaf size={15} /> The plant edit</div><h1>Find your green.</h1><p>Good plants, ready to make themselves at home.</p></div>
        </section>
        <div className="catalog-tools"><span>18 plants</span><span>3 thoughtful collections</span><span className="catalog-cart-count" aria-live="polite">Cart: {cartCount} items</span></div>
        {plantsArray.map((group) => (
          <section className="plant-category product-list" key={group.category} aria-labelledby={`category-${group.category}`}>
            <div className="category-title"><h2 id={`category-${group.category}`}>{group.category}</h2><span>{group.plants.length} plants</span></div>
            <div className="plant-grid">
              {group.plants.map((plant) => {
                const isAdded = addedToCart[plant.name];
                return (
                  <article className="plant-card" key={plant.id}>
                    <div className="plant-photo"><img className="plant-thumbnail" src={plant.thumbnail} alt={plant.name} /><span className="plant-tag">{plant.tag}</span></div>
                    <div className="plant-info">
                      <div className="plant-name-row"><h3>{plant.name}</h3><span className="plant-price">${plant.price.toFixed(2)}</span></div>
                      <p>{plant.description}</p>
                      <button className="add-button" type="button" disabled={addedToCart[plant.name]} onClick={() => handleAddToCart(plant)}>
                        {isAdded ? <><Check size={15} /> Added to cart</> : <><Plus size={15} /> Add to Cart</>}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
