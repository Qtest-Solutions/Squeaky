"use client";
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight} from 'lucide-react';
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

      {/* Hero Section - Full Screen Background Image with Overlaid Content */}
      <section style={{ position: 'relative', height: '100vh', minHeight: '600px', backgroundImage: 'url(/hero.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'scroll', overflow: 'hidden' }}>
        {/* Dark overlay for text visibility */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.4)' }} />
        
        {/* Content overlay */}
        <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '40px 20px' }}>
          <div style={{ maxWidth: '600px', color: 'white' }}>
            <h1 style={{ fontSize: 'clamp(20px, 4vw, 48px)', fontWeight: '800', color: 'white', lineHeight: '1.2', margin: 0, marginBottom: '12px' }}>
              Professional Facility Management Services You Can Trust
            </h1>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.95)', lineHeight: '1.5', margin: '0 0 16px 0' }}>
              Squeaky FMS delivers reliable, efficient, and cost-effective facility management solutions for residential, commercial, and industrial clients.
            </p>
            <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#059669', color: 'white', padding: '10px 28px', borderRadius: '9999px', textDecoration: 'none', fontWeight: '600', fontSize: '12px', textTransform: 'uppercase', transition: 'all 0.3s', cursor: 'pointer', border: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#047857'; e.currentTarget.style.transform = 'scale(1.05)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#059669'; e.currentTarget.style.transform = 'scale(1)'; }}>
              Contact Us <ArrowRight style={{ width: '16px', height: '16px' }} />
            </a>
          </div>
        </div>

        {/* White wave overlay at bottom */}
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, right: 0, bottom: -2, height: '110px', zIndex: 20 }} xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C60,80 120,80 200,60 C280,40 360,20 440,40 C520,60 600,80 680,60 C760,40 840,20 920,40 C1000,60 1080,80 1160,60 C1240,40 1320,20 1440,40 L1440 120 L0 120 Z" fill="#ffffff" />
        </svg>
      </section>

      {/* Trust & Services Section */}
      <section style={{ padding: '60px 20px', backgroundColor: 'white' }}>
        <style>{`
          @media (max-width: 1000px) {
            .trust-desktop { display: none !important; }
            .trust-mobile { display: block !important; }
          }
          @media (min-width: 1001px) {
            .trust-mobile { display: none !important; }
          }
        `}</style>

        <div style={{ maxWidth: '90rem', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, textAlign: 'center', background: 'linear-gradient(135deg, #059669 0%, #10b981 50%, #34d399 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '16px', margin: '0 0 16px 0' }}>
            What We Offer
          </h2>

          <p style={{ textAlign: 'center', fontSize: '18px', color: '#4b5563', maxWidth: '600px', margin: '0 auto 60px auto' }}>
            Comprehensive facility management solutions designed for excellence
          </p>

          {/* Desktop Layout */}
          <div className="trust-desktop" style={{ position: 'relative', maxWidth: '1100px', margin: '0 auto', minHeight: '720px' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/home-numbers-image.webp)', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '32px', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.7), rgba(5,150,105,0.35))' }} />
            </div>

            <div style={{ position: 'absolute', top: '-40px', right: '-40px', background: 'linear-gradient(135deg,#059669,#10b981)', borderRadius: '16px', padding: '20px 24px', color: 'white', maxWidth: '300px', boxShadow: '0 20px 40px rgba(5,150,105,0.4)', zIndex: 30 }}>
              <h3 style={{ fontSize: '16px', fontWeight: 800, marginBottom: '6px', margin: '0 0 6px 0' }}>Quality, Safety, Reliability.</h3>
              <p style={{ fontSize: '13px', opacity: 0.9, margin: 0 }}>We maintain the highest standards in every service we provide</p>
            </div>

            <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', padding: '120px 48px 48px', zIndex: 20 }}>
              {['House Keeping', 'Mechanised Deep Cleaning', 'ACP and Glass Cleaning', 'GDA Service', 'Home Cleaning', 'Carpet Shampooing', 'Packers and Movers'].map((title, idx) => (
                <div key={idx} style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)', borderRadius: '18px', padding: '16px', color: 'white' }}>
                  <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '6px', margin: '0 0 6px 0' }}>{title}</h4>
                  <p style={{ fontSize: '13px', opacity: 0.85, margin: 0 }}>Professional facility service tailored for this category.</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="trust-mobile" style={{ marginTop: '40px' }}>
            <div style={{ position: 'relative', backgroundImage: 'url(/home-numbers-image.webp)', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '24px', padding: '24px', marginBottom: '24px', color: 'white', overflow: 'hidden' }}>
              {/* Dark overlay for mobile image */}
              <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.55)', borderRadius: '24px' }} />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h3 style={{ fontSize: '18px', fontWeight: 800, margin: '0 0 8px 0', color: 'white ' }}>Quality, Safety, Reliability.</h3>
                <p style={{ fontSize: '14px', opacity: 0.95, margin: 0, color: 'white' }}>We maintain the highest standards in every service we provide</p>
              </div>
            </div>

            <div style={{ display: 'grid', gap: '16px' }}>
              {['House Keeping', 'Mechanised Deep Cleaning', 'ACP and Glass Cleaning', 'GDA Service', 'Home Cleaning', 'Carpet Shampooing', 'Packers and Movers'].map((title, idx) => (
                <div key={idx} style={{ background: '#f9fafb', borderRadius: '16px', padding: '16px', boxShadow: '0 6px 16px rgba(0,0,0,0.08)' }}>
                  <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#065f46', margin: '0 0 6px 0' }}>{title}</h4>
                  <p style={{ fontSize: '13px', color: '#374151', margin: 0 }}>Professional facility service tailored for this category.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Description Section - Modern */}
      <section style={{ padding: '100px 20px', background: 'linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%)', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative elements */}
        <div style={{ position: 'absolute', top: '10%', right: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(5, 150, 105, 0.08) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(60px)' }} />
        
        <div style={{ maxWidth: '80rem', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '80px', alignItems: 'center' }}>
            <div style={{ order: 2 }}>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-24px', left: '-24px', width: '120px', height: '120px', background: 'rgba(5, 150, 105, 0.15)', borderRadius: '32px', zIndex: 1 }} />
                <img 
                  src="/services-image-2.webp" 
                  alt="Service Design" 
                  style={{ 
                    borderRadius: '32px', 
                    boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.25)', 
                    width: '100%', 
                    height: '500px', 
                    objectFit: 'cover',
                    border: '8px solid white',
                    position: 'relative',
                    zIndex: 2
                  }}
                />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', order: 1 }}>
     
              <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: '800', color: '#111827', lineHeight: '1.2', margin: 0, letterSpacing: '-0.02em' }}>
                We design service packages based on your time, Type, Budget, and operational needs.
              </h2>
              <p style={{ color: '#4b5563', fontSize: '18px', lineHeight: '1.8', margin: 0 }}>
                Our comprehensive approach ensures that every facility receives the exact level of service it needs, customized to your specific requirements and budget constraints.
              </p>
              {/* <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '12px' }}>
                <div style={{ padding: '28px', background: 'white', borderRadius: '20px', boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)', border: '1px solid #f0fdf4', transition: 'all 0.3s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 12px 32px rgba(5, 150, 105, 0.15)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.08)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                  <div style={{ fontSize: '36px', fontWeight: '800', background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '8px' }}>100%</div>
                  <div style={{ fontSize: '15px', color: '#6b7280', fontWeight: '600' }}>Customizable</div>
                </div>
                <div style={{ padding: '28px', background: 'white', borderRadius: '20px', boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)', border: '1px solid #f0fdf4', transition: 'all 0.3s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 12px 32px rgba(5, 150, 105, 0.15)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.08)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                  <div style={{ fontSize: '36px', fontWeight: '800', background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '8px' }}>24/7</div>
                  <div style={{ fontSize: '15px', color: '#6b7280', fontWeight: '600' }}>Support</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Our Works Section - Modern */}
      <section style={{ padding: '100px 20px', background: 'linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
     
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: '800', color: '#111827', marginBottom: '20px', margin: '0 0 20px 0', letterSpacing: '-0.02em' }}>Our Works</h2>
            <p style={{ fontSize: '19px', color: '#6b7280', maxWidth: '650px', margin: '0 auto', lineHeight: '1.6' }}>Showcasing our commitment to excellence across diverse projects</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '36px' }}>
            {['/gallery-image-2.webp', '/gallery-image-4.webp', '/gallery-image-5.webp'].map((img, idx) => (
              <div 
                key={idx} 
                style={{ 
                  position: 'relative', 
                  overflow: 'hidden', 
                  borderRadius: '28px', 
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  height: '420px',
                  border: '1px solid rgba(0, 0, 0, 0.04)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-16px)';
                  e.currentTarget.style.boxShadow = '0 32px 64px rgba(5, 150, 105, 0.2)';
                  const overlay = e.currentTarget.querySelector('.overlay') as HTMLElement | null;
                  if (overlay) overlay.style.opacity = '1';
                  const img = e.currentTarget.querySelector('img') as HTMLImageElement | null;
                  if (img) img.style.transform = 'scale(1.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.08)';
                  const overlay = e.currentTarget.querySelector('.overlay') as HTMLElement | null;
                  if (overlay) overlay.style.opacity = '0';
                  const img = e.currentTarget.querySelector('img') as HTMLImageElement | null;
                  if (img) img.style.transform = 'scale(1)';
                }}
              >
                <img 
                  src={img} 
                  alt={`Project ${idx + 1}`} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' }}
                />
                <div 
                  className="overlay"
                  style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(5, 150, 105, 0.95) 100%)', 
                    opacity: 0, 
                    transition: 'opacity 0.5s',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '40px'
                  }}
                >
                  <div>
                    <h3 style={{ color: 'white', fontSize: '26px', fontWeight: '800', marginBottom: '8px', margin: '0 0 8px 0', letterSpacing: '-0.01em' }}>Project {idx + 1}</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.95)', fontSize: '15px', margin: 0 }}>Professional facility management</p>
                  </div>
                </div>
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
      {/* Perfection Section - Modern */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', overflow: 'hidden' }}>
        <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: 'white', padding: '100px 80px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
          {/* Decorative elements */}
          <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(5, 150, 105, 0.15) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(60px)' }} />
          <div style={{ position: 'absolute', bottom: '-100px', left: '-100px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(80px)' }} />
          
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: '800', marginBottom: '28px', margin: '0 0 28px 0', letterSpacing: '-0.02em', lineHeight: '1.2' }}>Perfection To Every Step We Take</h2>
            <p style={{ color: '#cbd5e1', fontSize: '18px', lineHeight: '1.8', marginBottom: '24px', margin: '0 0 24px 0' }}>Our trained professionals bring years of experience, commitment to excellence, and attention to detail in every project we undertake.</p>
            <p style={{ color: '#94a3b8', fontSize: '17px', lineHeight: '1.7', marginBottom: '56px', margin: '0 0 56px 0' }}>We pride ourselves on consistent quality and customer satisfaction.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
              {[
                { target: 5, label: "Years of Experience" },
                { target: 20, label: "Professional Team" },
                { target: 450, label: "Projects Completed" },
                { target: 240, label: "Happy Clients" }
              ].map((stat, idx) => (
                <div key={idx} style={{ 
                  padding: '32px 24px', 
                  background: 'rgba(255, 255, 255, 0.05)', 
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(5, 150, 105, 0.15)';
                  e.currentTarget.style.border = '1px solid rgba(5, 150, 105, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                >
                  <h3 style={{ fontSize: '48px', fontWeight: '800', color: '#10b981', marginBottom: '12px', margin: '0 0 12px 0', letterSpacing: '-0.02em' }}><CountUp target={stat.target} />+</h3>
                  <p style={{ fontSize: '15px', color: '#94a3b8', margin: 0, fontWeight: '600' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ position: 'relative', minHeight: '700px' }}>
          <img 
            src="/about-us-page-cta-image.webp" 
            alt="Excellence" 
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(15, 23, 42, 0.4) 0%, transparent 60%)' }} />
        </div>
      </section>

      {/* CTA Section - Modern */}
      <section style={{ padding: '100px 20px', background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative elements */}
        <div style={{ position: 'absolute', top: '20%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(5, 150, 105, 0.1) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(80px)' }} />
        
        <div style={{ maxWidth: '80rem', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '80px', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      
              <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: '800', color: '#111827', margin: 0, letterSpacing: '-0.02em', lineHeight: '1.1' }}>
                Contact Us
              </h2>
              <p style={{ color: '#4b5563', fontSize: '19px', lineHeight: '1.8', margin: 0 }}>
                Ready to transform your facility management? Our team is here to provide professional, reliable solutions tailored to your needs.
              </p>
              <a 
                href="/contact" 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '12px', 
                  backgroundColor: '#059669', 
                  color: 'white', 
                  padding: '18px 44px', 
                  borderRadius: '9999px', 
                  textDecoration: 'none', 
                  fontWeight: '700', 
                  fontSize: '17px', 
                  transition: 'all 0.3s', 
                  cursor: 'pointer', 
                  border: 'none', 
                  width: 'fit-content',
                  boxShadow: '0 12px 28px rgba(5, 150, 105, 0.35)',
                  letterSpacing: '-0.01em'
                }} 
                onMouseEnter={(e) => { 
                  e.currentTarget.style.backgroundColor = '#047857'; 
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(5, 150, 105, 0.45)';
                }} 
                onMouseLeave={(e) => { 
                  e.currentTarget.style.backgroundColor = '#059669'; 
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(5, 150, 105, 0.35)';
                }}
              >
                Get in Touch <ArrowRight style={{ width: '22px', height: '22px' }} />
              </a>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-32px', right: '-32px', width: '140px', height: '140px', background: 'rgba(5, 150, 105, 0.2)', borderRadius: '50%', filter: 'blur(50px)' }} />
              <div style={{ position: 'absolute', bottom: '-32px', left: '-32px', width: '120px', height: '120px', background: 'rgba(16, 185, 129, 0.15)', borderRadius: '50%', filter: 'blur(40px)' }} />
              <img 
                src="/bruce-mars-8YG31Xn4dSw-unsplash.jpg" 
                alt="Contact Us" 
                style={{ 
                  borderRadius: '32px', 
                  boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.25)', 
                  width: '100%', 
                  height: '500px', 
                  objectFit: 'cover',
                  border: '8px solid white',
                  position: 'relative',
                  zIndex: 2
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}