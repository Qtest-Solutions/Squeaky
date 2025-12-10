import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'About – SqueakyFMS',
  description: 'Learn more about SqueakyFMS and our team',
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <section className="hero" style={{display:'flex', alignItems:'center', gap:'30px'}}>
        <div className="container lead" style={{flex:'0 0 25%'}}>
          <h1>About SqueakyFMS</h1>
          <p>With over 5 years of experience in facility management, we've been helping clients maintain clean, safe, and efficient spaces across residential, commercial, and industrial sectors.</p>
          <Link href="/contact" className="btn">Get Started</Link>
        </div>
        <img src="/about-hero-image.webp" alt="About SqueakyFMS" style={{flex:'0 0 70%', height:'600px', objectFit:'contain'}} />
      </section>

      <section className="section container">
        <h2>Our Team</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:40}}>
          <div>
            <h3>Expert Professionals</h3>
            <p className="muted">Our trained team brings industry knowledge and dedication to every task.</p>
          </div>
          <div>
            <h3>Transparent Communication</h3>
            <p className="muted">We keep you informed at every step with regular updates and clear expectations.</p>
          </div>
          <div>
            <h3>On-Time Service</h3>
            <p className="muted">Reliability and punctuality are core to our commitment to you.</p>
          </div>
        </div>
      </section>

      <section className="container cta">
        <div className="lead">
          <h3>Why Choose SqueakyFMS?</h3>
          <p className="muted">We combine reliability, expertise, and affordability to deliver facility management solutions that exceed expectations.</p>
          <div style={{marginTop:20}}>
            <Link href="/contact" className="btn">Contact Us</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
