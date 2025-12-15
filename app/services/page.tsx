'use client';
import React from 'react';
import { ArrowRight, ClipboardList, Zap, Sparkles, Wrench, Waves, Truck, Award, Users, DollarSign, Home } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const services = [
  {
    icon: <ClipboardList style={{ width: '48px', height: '48px', color: '#059669' }} />,
    title: 'House Keeping',
    description: 'Professional house keeping services to maintain a clean and organized home',
  },
  {
    icon: <Zap style={{ width: '48px', height: '48px', color: '#059669' }} />,
    title: 'Mechanised Deep Cleaning',
    description: 'Mechanised deep cleaning using modern equipment for thorough sanitization',
  },
  {
    icon: <Sparkles style={{ width: '48px', height: '48px', color: '#059669' }} />,
    title: 'ACP and Glass Cleaning',
    description: 'Professional cleaning and maintenance of ACP panels and glass surfaces',
  },
  {
    icon: <Wrench style={{ width: '48px', height: '48px', color: '#059669' }} />,
    title: 'GDA Service',
    description: 'Comprehensive GDA service solutions for facility maintenance and management',
  },
  {
    icon: <Home style={{ width: '48px', height: '48px', color: '#059669' }} />,
    title: 'Home Cleaning',
    description: 'Reliable home cleaning services for daily and periodic upkeep',
  },
  {
    icon: <Waves style={{ width: '48px', height: '48px', color: '#059669' }} />,
    title: 'Carpet Shampooing',
    description: 'Specialized carpet shampooing to remove stains and refresh fibers',
  },
  {
    icon: <Truck style={{ width: '48px', height: '48px', color: '#059669' }} />,
    title: 'Packers and Movers',
    description: 'Professional packing and moving services with safe and secure handling',
  },
];

export default function ServicesPage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <Header />

      {/* Hero Section */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #f0fdf4 100%)' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '60px 20px' }}>
          <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h1 style={{ fontSize: 'clamp(24px, 5vw, 56px)', fontWeight: 'bold', color: '#111827', lineHeight: '1.2', margin: 0 }}>
              Our Services
            </h1>
            <p style={{ fontSize: '18px', color: '#4b5563', lineHeight: '1.6', maxWidth: '44rem', margin: '0 auto' }}>
              We offer a comprehensive range of facility management services to meet all your needs.
            </p>
            <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#059669', color: 'white', padding: '12px 32px', borderRadius: '9999px', textDecoration: 'none', fontWeight: '500', fontSize: '14px', textTransform: 'uppercase', transition: 'all 0.3s', cursor: 'pointer', border: 'none', width: 'fit-content', margin: '0 auto' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#047857'; e.currentTarget.style.transform = 'scale(1.05)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#059669'; e.currentTarget.style.transform = 'scale(1)'; }}>
              Get a Quote <ArrowRight style={{ width: '16px', height: '16px' }} />
            </a>
          </div>
        </div>
        <div style={{ position: 'absolute', top: '80px', left: '40px', width: '128px', height: '128px', backgroundColor: '#86efac', borderRadius: '50%', filter: 'blur(48px)', opacity: 0.3 }} />
        <div style={{ position: 'absolute', bottom: '80px', right: '40px', width: '160px', height: '160px', backgroundColor: '#86efac', borderRadius: '50%', filter: 'blur(48px)', opacity: 0.3 }} />
      </section>

      {/* Services Grid */}
      <section style={{ padding: '60px 20px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {services.map((service, index) => (
              <article 
                key={index}
                style={{ backgroundColor: '#f0fdf4', borderRadius: '24px', padding: '40px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', border: '1px solid #d1fae5', transition: 'all 0.3s', cursor: 'pointer' }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.15)'; e.currentTarget.style.transform = 'translateY(-8px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ marginBottom: '24px', transition: 'transform 0.3s' }}>
                  {service.icon}
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827', marginBottom: '12px', margin: '0 0 12px 0' }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: '1.5', margin: 0 }}>
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '60px 20px', background: 'linear-gradient(180deg, #f9fafb 0%, #f0fdf4 100%)' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
            <div style={{ backgroundColor: 'white', borderRadius: '24px', padding: '40px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', transition: 'all 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.15)'; e.currentTarget.style.transform = 'translateY(-8px)'; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <div style={{ marginBottom: '24px' }}>
                <Award style={{ width: '48px', height: '48px', color: '#059669' }} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827', marginBottom: '16px', margin: '0 0 16px 0' }}>Quality Materials</h3>
              <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: '1.6', margin: 0 }}>
                We use only the highest quality materials from trusted suppliers to ensure your project stands the test of time.
              </p>
            </div>
            
            <div style={{ backgroundColor: 'white', borderRadius: '24px', padding: '40px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', transition: 'all 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.15)'; e.currentTarget.style.transform = 'translateY(-8px)'; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <div style={{ marginBottom: '24px' }}>
                <Users style={{ width: '48px', height: '48px', color: '#059669' }} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827', marginBottom: '16px', margin: '0 0 16px 0' }}>Expert Team</h3>
              <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: '1.6', margin: 0 }}>
                Our team of experienced professionals brings decades of combined experience to every project.
              </p>
            </div>
            
            <div style={{ backgroundColor: 'white', borderRadius: '24px', padding: '40px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', transition: 'all 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.15)'; e.currentTarget.style.transform = 'translateY(-8px)'; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <div style={{ marginBottom: '24px' }}>
                <DollarSign style={{ width: '48px', height: '48px', color: '#059669' }} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827', marginBottom: '16px', margin: '0 0 16px 0' }}>Budget Friendly</h3>
              <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: '1.6', margin: 0 }}>
                We work within your budget to deliver exceptional results without compromising on quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '60px 20px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)', borderRadius: '32px', padding: '60px 40px', textAlign: 'center', color: 'white', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, right: 0, width: '256px', height: '256px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '50%', filter: 'blur(48px)' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '192px', height: '192px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '50%', filter: 'blur(48px)' }} />
            
            <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <h3 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 'bold', lineHeight: '1.2', margin: 0 }}>
                Ready to Transform Your Facility?
              </h3>
              <p style={{ fontSize: '16px', color: '#d1fae5', lineHeight: '1.6', maxWidth: '44rem', margin: '0 auto' }}>
                Contact us today to discuss your project and get a free quote from our team of experts.
              </p>
              <a 
                href="/contact" 
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'white', color: '#059669', padding: '12px 32px', borderRadius: '9999px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px', transition: 'all 0.3s', cursor: 'pointer', border: 'none', width: 'fit-content', margin: '0 auto' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f0fdf4'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'white'; }}
              >
                Contact Us <ArrowRight style={{ width: '16px', height: '16px' }} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}