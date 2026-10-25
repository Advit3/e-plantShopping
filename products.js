export const categories = [
  { id: 'easy-care', name: 'Easy-care favorites', note: 'A little green, made simple' },
  { id: 'statement', name: 'Statement makers', note: 'For corners that need a moment' },
  { id: 'pet-friendly', name: 'Pet-friendly picks', note: 'Lovely leaves for shared homes' },
];

const images = {
  monstera: 'photo-1614594975525-e45190c55d0b', pothos: 'photo-1600411833114-5c0c9b2c2a9b', snake: 'photo-1593482892290-f54927ae1bb6', zz: 'photo-1632207691143-643e2f8a8a0c',
  spider: 'photo-1572688484438-313a6e50c2c4', rubber: 'photo-1509423350716-97f9360b4e09', fiddle: 'photo-1597055181300-d7e7e4fb8a6a', palm: 'photo-1593691509543-c55fb32e5cee',
  calathea: 'photo-1604762524889-3e2fcc145683', fern: 'photo-1597055181449-5a6c9a4d9d3e', peperomia: 'photo-1593691509543-c55fb32e5cee', pilea: 'photo-1597055181300-d7e7e4fb8a6a',
  hoya: 'photo-1600411833114-5c0c9b2c2a9b', prayer: 'photo-1604762524889-3e2fcc145683', parlor: 'photo-1593691509543-c55fb32e5cee', bird: 'photo-1593482892290-f54927ae1bb6',
  bamboo: 'photo-1614594975525-e45190c55d0b', fittonia: 'photo-1572688484438-313a6e50c2c4',
};
const photo = (key) => `https://images.unsplash.com/${images[key]}?auto=format&fit=crop&w=800&q=82`;

export const products = [
  { id:'monstera-deliciosa',name:'Monstera Deliciosa',category:'easy-care',price:32,tag:'Bestseller',description:'Iconic split leaves and a big, happy presence.',image:photo('monstera') },
  { id:'golden-pothos',name:'Golden Pothos',category:'easy-care',price:18,tag:'Easy care',description:'Trailing golden leaves that thrive in almost any room.',image:photo('pothos') },
  { id:'snake-plant',name:'Snake Plant',category:'easy-care',price:24,tag:'Low light',description:'Sculptural, upright leaves and a wonderfully easy routine.',image:photo('snake') },
  { id:'zz-plant',name:'ZZ Plant',category:'easy-care',price:27,tag:'Easy care',description:'Glossy foliage that stays beautiful with little fuss.',image:photo('zz') },
  { id:'spider-plant',name:'Spider Plant',category:'easy-care',price:20,tag:'Pet friendly',description:'A cheerful classic with arching, striped leaves.',image:photo('spider') },
  { id:'rubber-plant',name:'Rubber Plant',category:'easy-care',price:35,tag:'Bold leaves',description:'Deep green, polished leaves for a bright corner.',image:photo('rubber') },
  { id:'fiddle-leaf-fig',name:'Fiddle Leaf Fig',category:'statement',price:58,tag:'Statement',description:'Sculptural fiddle-shaped leaves with a lot of character.',image:photo('fiddle') },
  { id:'kentia-palm',name:'Kentia Palm',category:'statement',price:64,tag:'Tall & graceful',description:'Soft, arching fronds bring a calm tropical feel.',image:photo('palm') },
  { id:'calathea-orbifolia',name:'Calathea Orbifolia',category:'statement',price:42,tag:'Patterned',description:'Broad round leaves with delicate silver-green stripes.',image:photo('calathea') },
  { id:'bird-of-paradise',name:'Bird of Paradise',category:'statement',price:72,tag:'Tropical',description:'A striking upright plant for a sun-filled room.',image:photo('bird') },
  { id:'bamboo-palm',name:'Bamboo Palm',category:'statement',price:49,tag:'Airy texture',description:'Feathery green fronds that brighten open spaces.',image:photo('bamboo') },
  { id:'monstera-adansonii',name:'Swiss Cheese Vine',category:'statement',price:29,tag:'Climber',description:'Playful fenestrated leaves on a graceful trailing vine.',image:photo('monstera') },
  { id:'parlor-palm',name:'Parlor Palm',category:'pet-friendly',price:26,tag:'Pet friendly',description:'A compact palm with soft fronds for a cozy corner.',image:photo('parlor') },
  { id:'prayer-plant',name:'Prayer Plant',category:'pet-friendly',price:23,tag:'Pet friendly',description:'Colorful patterned leaves that fold gently at night.',image:photo('prayer') },
  { id:'peperomia',name:'Peperomia Green',category:'pet-friendly',price:19,tag:'Pet friendly',description:'Charming, rounded leaves on an easygoing little plant.',image:photo('peperomia') },
  { id:'hoya-heart',name:'Hoya Heart',category:'pet-friendly',price:21,tag:'Pet friendly',description:'A sweet heart-shaped succulent with a tidy silhouette.',image:photo('hoya') },
  { id:'fittonia',name:'Fittonia',category:'pet-friendly',price:16,tag:'Pet friendly',description:'Small, lush leaves traced with bright delicate veins.',image:photo('fittonia') },
  { id:'rattlesnake-calathea',name:'Rattlesnake Calathea',category:'pet-friendly',price:31,tag:'Pet friendly',description:'Wavy patterned foliage with a lively tropical look.',image:photo('calathea') },
];
