'use client';
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e:any) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.phone || !formData.message) {
      setError('Please fill in all fields.');
      return;
    }

    setSubmitting(true);
    setError('');

    try {
      const formDataObj = new FormData();
      formDataObj.append('name', formData.name);
      formDataObj.append('phone', formData.phone);
      formDataObj.append('message', formData.message);

      const response = await fetch('https://formsubmit.co/squeakyfms@gmail.com', {
        method: 'POST',
        body: formDataObj,
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', phone: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
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
      <main style={{ minHeight: '100vh', backgroundColor: '#ffffff' }} suppressHydrationWarning>
        
        {/* HEADER */}
        <Header />

        {/* ⭐ Modernised Hero Section */}
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            background: "linear-gradient(135deg, #ecfdf5 0%, #ffffff 40%, #e8fff3 100%)",
            padding: "6rem 1.5rem",
          }}
        >
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            {/* LEFT TEXT */}
            <div style={{ position: "relative", zIndex: 10 }}>
              <h1
                style={{
                  fontSize: "3.5rem",
                  fontWeight: "900",
                  color: "#064e3b",
                  lineHeight: "1.1",
                  marginBottom: "1.5rem",
                  letterSpacing: "-1px",
                }}
              >
                We're Here to Help You
                <span style={{ color: "#059669", display: "block" }}>
                  Contact SqueakyFMS
                </span>
              </h1>

              <p
                style={{
                  fontSize: "1.25rem",
                  color: "#475569",
                  lineHeight: "1.75",
                  maxWidth: "90%",
                  fontWeight: 500,
                }}
              >
                Have questions or need assistance with our facility management
                services? Send us a message and our team will get back to you
                promptly.
              </p>

              <div style={{ marginTop: "2.5rem", display: "flex", gap: "1rem" }}>
                <a
                  href="tel:+919847343337"
                  className="hover-scale"
                  style={{
                    backgroundColor: "#059669",
                    color: "#ffffff",
                    padding: "1rem 2rem",
                    borderRadius: "0.75rem",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    textDecoration: "none",
                    transition: "0.3s ease",
                  }}
                >
                  Call Us
                </a>

                <a
                  href="#contact-form"
                  className="hover-scale"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#059669",
                    padding: "1rem 2rem",
                    borderRadius: "0.75rem",
                    border: "2px solid #059669",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    textDecoration: "none",
                    transition: "0.3s ease",
                  }}
                >
                  Send Message
                </a>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "420px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at 70% 30%, #6ee7b7 0%, transparent 70%)",
                  opacity: 0.4,
                  filter: "blur(60px)",
                }}
              ></div>

              <img
                src="/bruce-mars-8YG31Xn4dSw-unsplash.jpg"
                alt="Contact SqueakyFMS"
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "1.75rem",
                  boxShadow: "0 25px 40px rgba(0,0,0,0.12)",
                  transition: "transform 0.5s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.04)";
                  e.currentTarget.style.boxShadow =
                    "0 35px 50px rgba(0,0,0,0.18)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 25px 40px rgba(0,0,0,0.12)";
                }}
              />
            </div>
          </div>

          {/* Decorative glowing blobs */}
          <div
            style={{
              position: "absolute",
              top: "-4rem",
              left: "-2rem",
              width: "14rem",
              height: "14rem",
              background: "#bbf7d0",
              borderRadius: "50%",
              filter: "blur(70px)",
              opacity: 0.3,
            }}
          ></div>

          <div
            style={{
              position: "absolute",
              bottom: "-3rem",
              right: "0",
              width: "12rem",
              height: "12rem",
              background: "#a7f3d0",
              borderRadius: "50%",
              filter: "blur(70px)",
              opacity: 0.35,
            }}
          ></div>
        </section>

        {/* ⭐ Contact Info Section (unchanged) */}
        <section style={{
          padding: '4rem 1.5rem',
          background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')`,
            opacity: 0.1
          }}></div>

          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 10
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '3rem'
            }}>
              {/* PHONE */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '4rem',
                  height: '4rem',
                  backgroundColor: '#059669',
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                  <span style={{ fontSize: '1.75rem' }}>📞</span>
                </div>

                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem'
                }}>Phone</h3>

                <p style={{ fontSize: '1.125rem', color: '#d1d5db' }}>+91 98473 43337</p>
              </div>

              {/* EMAIL */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '4rem',
                  height: '4rem',
                  backgroundColor: '#059669',
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                  <span style={{ fontSize: '1.75rem' }}>📧</span>
                </div>

                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem'
                }}>Email</h3>

                <p style={{ fontSize: '1.125rem', color: '#d1d5db' }}>squeakyfms@gmail.com</p>
              </div>

              {/* LOCATION */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '4rem',
                  height: '4rem',
                  backgroundColor: '#059669',
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                  <span style={{ fontSize: '1.75rem' }}>📍</span>
                </div>

                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem'
                }}>Location</h3>

                <p style={{ fontSize: '1.125rem', color: '#d1d5db' }}>
                  Kakkanchery, Near KINFRA<br />Malappuram
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ⭐ Contact Form Section */}
        <section
          id="contact-form"
          style={{
            padding: "4rem 1.5rem",
            background: "linear-gradient(180deg, #ffffff 0%, #f0fdf4 100%)",
          }}
        >
          <div style={{ maxWidth: "56rem", margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                color: "#111827",
                marginBottom: "3rem",
                textAlign: "center",
              }}
            >
              Send Us a Message
            </h2>

            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "1.5rem",
                padding: "2.5rem",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                border: "1px solid #d1fae5",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "1.5rem",
                }}
              >
                {/* NAME */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "1rem",
                      fontWeight: "600",
                      color: "#111827",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    style={{
                      width: "100%",
                      padding: "1rem",
                      border: "2px solid #e5e7eb",
                      borderRadius: "0.75rem",
                      fontSize: "1rem",
                      outline: "none",
                      transition: "border-color 0.3s ease",
                      boxSizing: "border-box",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#059669")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "1rem",
                      fontWeight: "600",
                      color: "#111827",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone Number"
                    style={{
                      width: "100%",
                      padding: "1rem",
                      border: "2px solid #e5e7eb",
                      borderRadius: "0.75rem",
                      fontSize: "1rem",
                      outline: "none",
                      transition: "border-color 0.3s ease",
                      boxSizing: "border-box",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#059669")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "1rem",
                      fontWeight: "600",
                      color: "#111827",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us about your facility management needs..."
                    style={{
                      width: "100%",
                      padding: "1rem",
                      border: "2px solid #e5e7eb",
                      borderRadius: "0.75rem",
                      fontSize: "1rem",
                      fontFamily: "inherit",
                      outline: "none",
                      transition: "border-color 0.3s ease",
                      resize: "vertical",
                      boxSizing: "border-box",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#059669")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <div>
                  <button
                    onClick={handleSubmit}
                    disabled={submitting}
                    style={{
                      width: "100%",
                      backgroundColor: submitting ? "#9ca3af" : "#059669",
                      color: "#ffffff",
                      padding: "1rem 2rem",
                      borderRadius: "0.75rem",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      border: "none",
                      cursor: submitting ? "not-allowed" : "pointer",
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                    }}
                    onMouseEnter={(e) => {
                      if (!submitting) {
                        e.currentTarget.style.backgroundColor = "#047857";
                        e.currentTarget.style.boxShadow =
                          "0 20px 25px -5px rgba(0,0,0,0.1)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!submitting) {
                        e.currentTarget.style.backgroundColor = "#059669";
                        e.currentTarget.style.boxShadow = "none";
                      }
                    }}
                  >
                    {submitting ? (
                      <>
                        <span
                          style={{
                            display: "inline-block",
                            width: "1rem",
                            height: "1rem",
                            border: "2px solid #ffffff",
                            borderTopColor: "transparent",
                            borderRadius: "50%",
                            animation: "spin 1s linear infinite",
                          }}
                        ></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <span style={{ fontSize: "1.25rem" }}>➤</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* SUCCESS MESSAGE */}
            {submitted && (
              <div
                style={{
                  marginTop: "1.5rem",
                  backgroundColor: "#d1fae5",
                  border: "2px solid #059669",
                  borderRadius: "0.75rem",
                  padding: "1.25rem",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                }}
              >
                <span
                  style={{
                    fontSize: "1.5rem",
                    color: "#059669",
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#065f46",
                    fontWeight: "500",
                    margin: 0,
                  }}
                >
                  Message sent successfully! We'll get back to you soon.
                </p>
              </div>
            )}

            {/* ERROR MESSAGE */}
            {error && (
              <div
                style={{
                  marginTop: "1.5rem",
                  backgroundColor: "#fee2e2",
                  border: "2px solid #dc2626",
                  borderRadius: "0.75rem",
                  padding: "1.25rem",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                }}
              >
                <span
                  style={{
                    fontSize: "1.5rem",
                    color: "#dc2626",
                    flexShrink: 0,
                  }}
                >
                  ✗
                </span>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#991b1b",
                    fontWeight: "500",
                    margin: 0,
                  }}
                >
                  {error}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* FOOTER */}
        <Footer />
      </main>

      {/* INTERNAL CSS */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @media (max-width: 900px) {
          section > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
