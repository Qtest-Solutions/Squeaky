import Link from 'next/link';
import Header from './components/Header';

export default function Home() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="hero" style={{display:'flex', alignItems:'center', gap:'40px', padding:'80px 20px'}}>
        <div className="container lead" style={{flex:'0 0 50%'}}>
          <h1>Professional Facility Management Services You Can Trust</h1>
          <p>Squeaky FMS delivers reliable, efficient, and cost-effective facility management solutions for residential, commercial, and industrial clients.</p>
          <Link href="/contact" className="btn">Contact Us</Link>
        </div>
          <img src="/services-hero-image.webp" alt="Professional Facility Management" style={{flex:'0 0 50%', height:'500px', objectFit:'cover'}} />
      </section>

      {/* Trust Section */}
      <section style={{display:'flex', gap:'30px', padding:'60px 20px', backgroundColor:'#f5f5f5'}}>
        <div style={{flex:'0 0 40%', backgroundColor:'#6BA643', color:'white', padding:'40px', display:'flex', alignItems:'center'}}>
          <div>
            <h3 style={{marginBottom:'20px'}}>Quality, Safety, Reliability Every Time.</h3>
            <p>We maintain the highest standards in every service we provide.</p>
          </div>
        </div>
        <div style={{flex:'0 0 60%', paddingLeft:'40px'}}>
            <img src="/home-numbers-image.webp" alt="Quality Service" style={{width:'100%', height:'300px', objectFit:'cover'}} />
        </div>
      </section>

      {/* Services Section */}
      <section className="section container">
        <h2>What We Offer</h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'40px', marginTop:'40px'}}>
          <div style={{backgroundColor:'#E8F3E0', padding:'40px', borderRadius:'8px', textAlign:'center'}}>
            <div style={{fontSize:'40px', marginBottom:'20px'}}>✓</div>
            <h3>Cleaning & Janitorial Services</h3>
            <p style={{color:'#666', marginTop:'15px'}}>Daily cleaning, sanitization, and deep-clean schedules to keep spaces spotless.</p>
          </div>
          <div style={{backgroundColor:'#E8F3E0', padding:'40px', borderRadius:'8px', textAlign:'center'}}>
            <div style={{fontSize:'40px', marginBottom:'20px'}}>🔧</div>
            <h3>Maintenance & Repair</h3>
            <p style={{color:'#666', marginTop:'15px'}}>Planned and reactive maintenance for HVAC, electrical and plumbing systems.</p>
          </div>
          <div style={{backgroundColor:'#E8F3E0', padding:'40px', borderRadius:'8px', textAlign:'center'}}>
            <div style={{fontSize:'40px', marginBottom:'20px'}}>🏢</div>
            <h3>Hard Services HVAC, Electrical, Plumbing</h3>
            <p style={{color:'#666', marginTop:'15px'}}>Professional technical services for all your facility needs.</p>
          </div>
          <div style={{backgroundColor:'#E8F3E0', padding:'40px', borderRadius:'8px', textAlign:'center'}}>
            <div style={{fontSize:'40px', marginBottom:'20px'}}>🌿</div>
            <h3>Soft Services Landscaping, pest control</h3>
            <p style={{color:'#666', marginTop:'15px'}}>Exterior maintenance and specialized facility solutions.</p>
          </div>
          <div style={{backgroundColor:'#E8F3E0', padding:'40px', borderRadius:'8px', textAlign:'center'}}>
            <div style={{fontSize:'40px', marginBottom:'20px'}}>🔍</div>
            <h3>Maintenance & Repair</h3>
            <p style={{color:'#666', marginTop:'15px'}}>Comprehensive maintenance programs tailored to your needs.</p>
          </div>
          <div style={{backgroundColor:'#E8F3E0', padding:'40px', borderRadius:'8px', textAlign:'center'}}>
            <div style={{fontSize:'40px', marginBottom:'20px'}}>⚡</div>
            <h3>Hard Services HVAC, electrical, plumbing</h3>
            <p style={{color:'#666', marginTop:'15px'}}>Professional technical solutions for modern facilities.</p>
          </div>
        </div>
      </section>

      {/* Service Description Section */}
      <section style={{backgroundColor:'#FFF5E6', padding:'80px 20px', marginTop:'60px'}}>
        <div className="container" style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'60px', alignItems:'center'}}>
          <div>
            <h2 style={{marginBottom:'30px', color:'#2D5016'}}>We design service packages based on your time, Type, Budget, and operational needs.</h2>
            <p style={{color:'#666', fontSize:'16px', lineHeight:'1.8'}}>
              Our comprehensive approach ensures that every facility receives the exact level of service it needs, customized to your specific requirements and budget constraints.
            </p>
          </div>
            <img src="/services-image-2.webp" alt="Service Design" style={{width:'100%', height:'400px', objectFit:'cover', borderRadius:'8px'}} />
        </div>
      </section>

      {/* Our Works Section */}
      <section className="section container">
        <h2 style={{textAlign:'center', marginBottom:'40px'}}>Our Works</h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:'20px'}}>
            <img src="/gallery-image-2.webp" alt="Project 1" style={{width:'100%', height:'300px', objectFit:'cover', borderRadius:'8px'}} />
            <img src="/gallery-image-4.webp" alt="Project 2" style={{width:'100%', height:'300px', objectFit:'cover', borderRadius:'8px'}} />
            <img src="/gallery-image-5.webp" alt="Project 3" style={{width:'100%', height:'300px', objectFit:'cover', borderRadius:'8px'}} />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={{padding:'80px 20px', backgroundColor:'#f5f5f5', marginTop:'60px'}}>
        <div className="container">
          <h2 style={{textAlign:'center', marginBottom:'60px'}}>Why Choose Us</h2>
          <div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:'60px', marginBottom:'60px'}}>
            <div style={{textAlign:'center'}}>
              <h3 style={{marginBottom:'15px', color:'#2D5016'}}>Reliable and trained professionals</h3>
              <Link href="/contact" className="btn" style={{display:'inline-block', marginTop:'20px'}}>Learn More</Link>
            </div>
            <div style={{textAlign:'center'}}>
              <h3 style={{marginBottom:'15px', color:'#2D5016'}}>Modern equipment & eco-friendly solutions</h3>
              <Link href="/contact" className="btn" style={{display:'inline-block', marginTop:'20px'}}>Learn More</Link>
            </div>
            <div style={{textAlign:'center'}}>
              <h3 style={{marginBottom:'15px', color:'#2D5016'}}>Affordable and flexible contracts</h3>
              <Link href="/contact" className="btn" style={{display:'inline-block', marginTop:'20px'}}>Learn More</Link>
            </div>
            <div style={{textAlign:'center'}}>
              <h3 style={{marginBottom:'15px', color:'#2D5016'}}>Commitment to safety and compliance</h3>
              <Link href="/contact" className="btn" style={{display:'inline-block', marginTop:'20px'}}>Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Perfection Section */}
      <section style={{display:'flex', gap:'0', marginTop:'60px'}}>
        <div style={{flex:'0 0 45%', backgroundColor:'#1E262E', color:'white', padding:'60px 40px', display:'flex', flexDirection:'column', justifyContent:'center'}}>
          <h2 style={{marginBottom:'30px'}}>Perfection To Every Step We Take</h2>
          <p style={{color:'rgba(255,255,255,0.8)', lineHeight:'1.8', marginBottom:'20px'}}>
            Our trained professionals bring years of experience, commitment to excellence, and attention to detail in every project we undertake.
          </p>
          <p style={{color:'rgba(255,255,255,0.8)', lineHeight:'1.8'}}>
            We pride ourselves on consistent quality and customer satisfaction.
          </p>
          <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'30px', marginTop:'40px', textAlign:'center'}}>
            <div>
              <h3 style={{fontSize:'32px', color:'#6BA643', marginBottom:'10px'}}>5+</h3>
              <p style={{fontSize:'14px'}}>Years of Experience</p>
            </div>
            <div>
              <h3 style={{fontSize:'32px', color:'#6BA643', marginBottom:'10px'}}>20+</h3>
              <p style={{fontSize:'14px'}}>Professional Team</p>
            </div>
            <div>
              <h3 style={{fontSize:'32px', color:'#6BA643', marginBottom:'10px'}}>450+</h3>
              <p style={{fontSize:'14px'}}>Projects Completed</p>
            </div>
            <div>
              <h3 style={{fontSize:'32px', color:'#6BA643', marginBottom:'10px'}}>240+</h3>
              <p style={{fontSize:'14px'}}>Happy Clients</p>
            </div>
          </div>
        </div>
          <div style={{flex:'0 0 55%', backgroundImage:'url(/about-us-page-cta-image.webp)', backgroundSize:'cover', backgroundPosition:'center', minHeight:'600px'}} />
      </section>

      {/* CTA Section */}
      <section className="container cta" style={{marginTop:'60px', marginBottom:'60px'}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'40px', alignItems:'center'}}>
          <div>
            <h2 style={{marginBottom:'20px'}}>Contact Us</h2>
            <p style={{color:'#666', marginBottom:'20px'}}>Ready to transform your facility management? Our team is here to provide professional, reliable solutions tailored to your needs.</p>
            <Link href="/contact" className="btn">Get in Touch</Link>
          </div>
            <img src="/bruce-mars-8YG31Xn4dSw-unsplash.jpg" alt="Contact Us" style={{width:'100%', height:'300px', objectFit:'cover', borderRadius:'8px'}} />
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer" style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'40px', alignItems:'start', padding:'60px 20px'}}>
        <div className="container">
            <img src="/Logo-01.png" alt="SqueakyFMS" style={{height:'80px', marginBottom:'20px'}} />
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
    </main>
  );
}
