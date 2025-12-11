"use client";
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Home, Droplet, Sparkles, Wrench } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';

function CountUp({ target, duration = 2 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let isMounted = true;
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      if (isMounted) {
        setCount(Math.floor(target * progress));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      }
    };
    
    animate();
    return () => { isMounted = false; };
  }, [hasStarted, target, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <Header />

      {/* Hero Section */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #f0fdf4 100%)' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '60px 20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <h1 style={{ fontSize: 'clamp(24px, 5vw, 56px)', fontWeight: 'bold', color: '#111827', lineHeight: '1.2', margin: 0 }}>
                Professional Facility Management Services You Can Trust
              </h1>
              <p style={{ fontSize: '18px', color: '#4b5563', lineHeight: '1.6', margin: 0 }}>
                Squeaky FMS delivers reliable, efficient, and cost-effective facility management solutions for residential, commercial, and industrial clients.
              </p>
              <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#059669', color: 'white', padding: '12px 32px', borderRadius: '9999px', textDecoration: 'none', fontWeight: '500', fontSize: '14px', textTransform: 'uppercase', transition: 'all 0.3s', cursor: 'pointer', border: 'none', width: 'fit-content' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#047857'; e.currentTarget.style.transform = 'scale(1.05)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#059669'; e.currentTarget.style.transform = 'scale(1)'; }}>
                Contact Us <ArrowRight style={{ width: '16px', height: '16px' }} />
              </a>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)', borderRadius: '24px', opacity: 0.1, filter: 'blur(48px)' }} />
              <img 
                src="/services-hero-image.webp" 
                alt="Professional Facility Management" 
                style={{ position: 'relative', borderRadius: '24px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', width: '100%', height: '400px', objectFit: 'cover', transition: 'transform 0.5s' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section style={{ padding: '60px 20px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', alignItems: 'center' }}>
            <div style={{ background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)', borderRadius: '24px', padding: '48px', color: 'white', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}>
              <h3 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px', margin: '0 0 16px 0' }}>Quality, Safety, Reliability Every Time.</h3>
              <p style={{ color: '#d1fae5', fontSize: '16px', margin: 0 }}>We maintain the highest standards in every service we provide.</p>
            </div>
            <img 
              src="/home-numbers-image.webp" 
              alt="Quality Service" 
              style={{ borderRadius: '24px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', width: '100%', height: '300px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ padding: '60px 20px', background: 'linear-gradient(180deg, #ffffff 0%, #f0fdf4 100%)' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 48px)', fontWeight: 'bold', textAlign: 'center', color: '#111827', marginBottom: '48px', margin: '0 0 48px 0' }}>What We Offer</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {[
              { icon: <Home style={{ width: '48px', height: '48px', color: '#059669' }} />, title: "House Keeping", desc: "Professional house keeping services to maintain a clean and organized home." },
              { icon: <Droplet style={{ width: '48px', height: '48px', color: '#059669' }} />, title: "Deep Cleaning", desc: "Thorough deep cleaning services for every corner of your home or office." },
              { icon: <Sparkles style={{ width: '48px', height: '48px', color: '#059669' }} />, title: "ACP and Glass Cleaning", desc: "Professional cleaning and maintenance of ACP panels and glass surfaces." },
              { icon: <Wrench style={{ width: '48px', height: '48px', color: '#059669' }} />, title: "House Shifting and Repairs", desc: "Complete house shifting solutions with professional repairs and setup." }
            ].map((service, idx) => (
              <div key={idx} style={{ backgroundColor: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', border: '1px solid #e0f2fe', transition: 'all 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.15)'; e.currentTarget.style.transform = 'translateY(-8px)'; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div style={{ marginBottom: '16px' }}>{service.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', marginBottom: '8px', margin: '0 0 8px 0' }}>{service.title}</h3>
                <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: '1.5', margin: 0 }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Description Section */}
      <section style={{ padding: '60px 20px', background: 'linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%)' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <h2 style={{ fontSize: 'clamp(20px, 4vw, 36px)', fontWeight: 'bold', color: '#065f46', lineHeight: '1.2', margin: 0 }}>We design service packages based on your time, Type, Budget, and operational needs.</h2>
              <p style={{ color: '#374151', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>Our comprehensive approach ensures that every facility receives the exact level of service it needs, customized to your specific requirements and budget constraints.</p>
            </div>
            <img 
              src="/services-image-2.webp" 
              alt="Service Design" 
              style={{ borderRadius: '24px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', width: '100%', height: '350px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Our Works Section */}
      <section style={{ padding: '60px 20px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 48px)', fontWeight: 'bold', textAlign: 'center', color: '#111827', marginBottom: '48px', margin: '0 0 48px 0' }}>Our Works</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {['/gallery-image-2.webp', '/gallery-image-4.webp', '/gallery-image-5.webp'].map((img, idx) => (
              <div key={idx} style={{ position: 'relative', overflow: 'hidden', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
                <img 
                  src={img} 
                  alt={`Project ${idx + 1}`} 
                  style={{ width: '100%', height: '300px', objectFit: 'cover', transition: 'transform 0.5s' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 0%, rgba(15, 78, 51, 0.6) 100%)', opacity: 0, transition: 'opacity 0.3s' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={{ padding: '60px 20px', background: 'linear-gradient(180deg, #f9fafb 0%, #f0fdf4 100%)' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 48px)', fontWeight: 'bold', textAlign: 'center', color: '#111827', marginBottom: '48px', margin: '0 0 48px 0' }}>Why Choose Us</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {[
              "Reliable and trained professionals",
              "Modern equipment & eco-friendly solutions",
              "Affordable and flexible contracts",
              "Commitment to safety and compliance"
            ].map((reason, idx) => (
              <div key={idx} style={{ backgroundColor: 'white', borderRadius: '16px', padding: '40px', textAlign: 'center', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', border: '1px solid #e0f2fe', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.15)'; e.currentTarget.style.transform = 'translateY(-8px)'; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#065f46', marginBottom: '16px', margin: '0 0 16px 0' }}>{reason}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfection Section */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        <div style={{ background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)', color: 'white', padding: '60px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 'bold', marginBottom: '24px', margin: '0 0 24px 0' }}>Perfection To Every Step We Take</h2>
          <p style={{ color: '#d1d5db', fontSize: '16px', lineHeight: '1.6', marginBottom: '24px', margin: '0 0 24px 0' }}>Our trained professionals bring years of experience, commitment to excellence, and attention to detail in every project we undertake.</p>
          <p style={{ color: '#d1d5db', fontSize: '16px', lineHeight: '1.6', marginBottom: '32px', margin: '0 0 32px 0' }}>We pride ourselves on consistent quality and customer satisfaction.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '32px', textAlign: 'center' }}>
            {[
              { target: 5, label: "Years of Experience" },
              { target: 20, label: "Professional Team" },
              { target: 450, label: "Projects Completed" },
              { target: 240, label: "Happy Clients" }
            ].map((stat, idx) => (
              <div key={idx}>
                <h3 style={{ fontSize: '32px', fontWeight: 'bold', color: '#34d399', marginBottom: '8px', margin: '0 0 8px 0' }}><CountUp target={stat.target} />+</h3>
                <p style={{ fontSize: '12px', color: '#9ca3af', margin: 0 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: 'relative', minHeight: '600px' }}>
          <img 
            src="/about-us-page-cta-image.webp" 
            alt="Excellence" 
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '60px 20px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <h2 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 'bold', color: '#111827', margin: 0 }}>Contact Us</h2>
              <p style={{ color: '#4b5563', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>Ready to transform your facility management? Our team is here to provide professional, reliable solutions tailored to your needs.</p>
              <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#059669', color: 'white', padding: '12px 32px', borderRadius: '9999px', textDecoration: 'none', fontWeight: '500', fontSize: '14px', textTransform: 'uppercase', transition: 'all 0.3s', cursor: 'pointer', border: 'none', width: 'fit-content' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#047857'; e.currentTarget.style.transform = 'scale(1.05)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#059669'; e.currentTarget.style.transform = 'scale(1)'; }}>
                Get in Touch <ArrowRight style={{ width: '16px', height: '16px' }} />
              </a>
            </div>
            <img 
              src="/bruce-mars-8YG31Xn4dSw-unsplash.jpg" 
              alt="Contact Us" 
              style={{ borderRadius: '24px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', width: '100%', height: '350px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
