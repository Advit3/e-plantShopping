import { Leaf, Sun, HeartHandshake } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="about-us-container">
    <main className="page-shell about-page">
      <section className="about-hero">
        <div className="about-hero-copy">
          <div className="eyebrow"><Leaf size={16} /> Our story</div>
          <h1>Growing good<br /><em>things together.</em></h1>
          <p>We believe a plant can change the feeling of a room—and the rhythm of a day. Paradise Nursery makes it easy to find greenery that feels right for your home and your life.</p>
        </div>
        <div className="about-photo" role="img" aria-label="Sunlit collection of green houseplants" />
      </section>
      <section className="about-values" aria-label="Our values">
        <article><span className="value-icon"><Leaf /></span><h2>Plants with a purpose</h2><p>Every plant is selected for its character, quality, and ability to bring a little more life into your space.</p></article>
        <article><span className="value-icon"><Sun /></span><h2>Made for real homes</h2><p>From bright windowsills to cozy corners, we help you find a plant that fits your light and your routine.</p></article>
        <article><span className="value-icon"><HeartHandshake /></span><h2>Here as you grow</h2><p>New plant parent or longtime collector, you’re part of a community that loves learning one leaf at a time.</p></article>
      </section>
    </main>
    </div>
  );
}
