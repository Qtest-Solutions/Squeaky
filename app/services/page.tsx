import Link from 'next/link';
import Header from '../components/Header';

export const metadata = {
  title: 'Services – SqueakyFMS',
  description: 'Explore our comprehensive facility management services',
};

const services = [
  {
    title: 'Cleaning & Janitorial',
    description: 'Daily cleaning, sanitization, and deep-clean schedules',
  },
  {
    title: 'Maintenance & Repair',
    description: 'Planned and reactive maintenance for all building systems',
  },
  {
    title: 'HVAC Services',
    description: 'Heating, ventilation, and air conditioning solutions',
  },
  {
    title: 'Electrical Services',
    description: 'Professional electrical installation and maintenance',
  },
  {
    title: 'Landscaping & Grounds',
    description: 'Exterior maintenance and landscaping solutions',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      <section className="hero">
        <div className="container lead">
          <h1>Our Services</h1>
          <p>We offer a comprehensive range of facility management services to meet all your needs.</p>
          <Link href="/contact" className="btn">Get a Quote</Link>
        </div>
      </section>

      <section className="section container">
        <div className="services-grid">
          {services.map((service, index) => (
            <article key={index} className="card">
              <h3>{service.title}</h3>
              <p className="muted">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section container">
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:40}}>
          <div>
            <h3>Quality Materials</h3>
            <p className="muted">We use only the highest quality materials from trusted suppliers to ensure your project stands the test of time.</p>
          </div>
          <div>
            <h3>Expert Team</h3>
            <p className="muted">Our team of experienced professionals brings decades of combined experience to every project.</p>
          </div>
          <div>
            <h3>Budget Friendly</h3>
            <p className="muted">We work within your budget to deliver exceptional results without compromising on quality.</p>
          </div>
        </div>
      </section>

      <section className="container cta">
        <div className="lead">
          <h3>Ready to Transform Your Facility?</h3>
          <p className="muted">Contact us today to discuss your project and get a free quote from our team of experts.</p>
          <div style={{marginTop:20}}>
            <Link href="/contact" className="btn">Contact Us</Link>
          </div>
        </div>
      </section>

      <footer className="site-footer" style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'40px', alignItems:'start', padding:'60px 20px'}}>
        <div className="container">
          <img src="/wp-content/uploads/2025/12/Logo-01.png" alt="SqueakyFMS" style={{height:'80px', marginBottom:'20px'}} />
        </div>
        
        <div style={{textAlign:'center', color:'var(--text-light)'}}>
          <p style={{marginBottom:'20px'}}>&copy; 2025 SqueakyFMS. All rights reserved.</p>
        </div>

        <div style={{color:'var(--text-light)'}}>
          <p style={{marginBottom:'12px'}}>
            <strong>Phone:</strong><br/>
            <strong>+91 0000000000</strong>
          </p>
          <p style={{marginBottom:'12px'}}>
            <strong>Physical address:</strong><br/>
            <strong>Kakkanchery, Near KINFRA, Malappuram</strong>
          </p>
          <p>
            <strong>Email address:</strong><br/>
            <strong>squeakyfms@gmail.com</strong>
          </p>
        </div>
      </footer>
    </>
  );
}
