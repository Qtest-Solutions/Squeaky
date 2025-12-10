import Header from '../components/Header';

export const metadata = {
  title: 'Contact – SqueakyFMS',
  description: 'Get in touch with SqueakyFMS. We\'re here to help with your facility management needs.',
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <section className="hero" style={{display:'flex', alignItems:'center', gap:'30px'}}>
        <div className="container lead" style={{flex:'0 0 30%'}}>
          <h1>Get in Touch</h1>
          <p>Have questions about our facility management services? We're here to help. Reach out using the form below or contact us directly.</p>
        </div>
        <img src="/bruce-mars-8YG31Xn4dSw-unsplash.jpg" alt="Contact SqueakyFMS" style={{flex:'0 0 70%', height:'700px', objectFit:'contain'}} />
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
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>(701) 814-6992</p>
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
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>info@squeakyfms.com</p>
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
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>6296 Donnelly Plaza<br/>Ratkeville, Bahamas</p>
          </div>
        </div>
      </section>

      <section className="section container">
        <h2>Send Us a Message</h2>

        <form style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          maxWidth: '700px',
          margin: '40px auto 0'
        }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
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
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
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
              style={{
                padding: '12px 30px',
                backgroundColor: 'var(--color-primary)',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: '600',
                textTransform: 'uppercase',
                cursor: 'pointer',
                width: '100%'
              }}
            >
              Send Message
            </button>
          </div>
        </form>
      </section>

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
    </>
  );
}
