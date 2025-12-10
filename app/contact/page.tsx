'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch('https://formsubmit.co/squeakyfms@gmail.com', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setSubmitted(false), 5000); // Hide message after 5 seconds
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Header />

      <section className="hero" style={{display:'flex', alignItems:'center', gap:'30px'}}>
        <div className="container lead" style={{flex:'0 0 30%'}}>
          <h1>Get in Touch</h1>
          <p>Have questions about our facility management services? We're here to help. Reach out using the form below or contact us directly.</p>
        </div>
        <img src="/bruce-mars-8YG31Xn4dSw-unsplash.jpg" alt="Contact SqueakyFMS" style={{flex:'0 0 60%', height:'500px', objectFit:'contain'}} />
      </section>

      <section style={{
        backgroundColor: 'var(--color-dark)',
        color: 'white',
        padding: '60px 20px',
        marginBottom: '60px'
      }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '50px'
        }}>
          <div>
            <div style={{
              width: '40px',
              height: '40px',
              backgroundColor: 'var(--color-accent)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px',
              color: 'white',
              fontSize: '20px'
            }}>
              📞
            </div>
            <h3>Phone</h3>
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>+91 0000000000</p>
          </div>

          <div>
            <div style={{
              width: '40px',
              height: '40px',
              backgroundColor: 'var(--color-accent)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px',
              color: 'white',
              fontSize: '20px'
            }}>
              📧
            </div>
            <h3>Email</h3>
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>squeakyfms@gmail.com</p>
          </div>

          <div>
            <div style={{
              width: '40px',
              height: '40px',
              backgroundColor: 'var(--color-accent)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px',
              color: 'white',
              fontSize: '20px'
            }}>
              📍
            </div>
            <h3>Location</h3>
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>Kakkanchery, Near KINFRA<br/>Malappuram</p>
          </div>
        </div>
      </section>

      <section className="section container">
        <h2>Send Us a Message</h2>

        <form 
          onSubmit={handleSubmit}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
            maxWidth: '700px',
            margin: '40px auto 0'
          }}
        >
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ gridColumn: '1 / -1' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Message
            </label>
            <textarea
              name="message"
              placeholder="Tell us about your facility management needs..."
              rows={6}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px',
                fontFamily: 'inherit',
                boxSizing: 'border-box',
                resize: 'vertical'
              }}
            />
          </div>

          <div style={{ gridColumn: '1 / -1' }}>
            <button
              type="submit"
              disabled={submitting}
              style={{
                padding: '12px 30px',
                backgroundColor: submitting ? '#ccc' : 'var(--color-primary)',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: '600',
                textTransform: 'uppercase',
                cursor: submitting ? 'not-allowed' : 'pointer',
                width: '100%'
              }}
            >
              {submitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>

        {submitted && (
          <div style={{
            maxWidth: '700px',
            margin: '20px auto 0',
            textAlign: 'center',
            color: '#2D5016',
            fontSize: '14px',
            backgroundColor: '#E8F3E0',
            padding: '12px',
            borderRadius: '4px',
            border: '1px solid #6BA643'
          }}>
            <p>✓ Message sent successfully! We'll get back to you soon.</p>
          </div>
        )}

        {error && (
          <div style={{
            maxWidth: '700px',
            margin: '20px auto 0',
            textAlign: 'center',
            color: '#c41e3a',
            fontSize: '14px',
            backgroundColor: '#ffe0e6',
            padding: '12px',
            borderRadius: '4px',
            border: '1px solid #c41e3a'
          }}>
            <p>✗ {error}</p>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}
