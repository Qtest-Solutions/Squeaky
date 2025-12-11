
"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Users, MessageSquare, Clock } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

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

export default function AboutPage() {
  return (
    <>
      {/* Responsive + Hover CSS */}
      <style>
        {`
          /* GRID responsiveness */
          @media (max-width: 768px) {
            .hero-grid {
              grid-template-columns: 1fr !important;
            }
            .team-grid {
              grid-template-columns: 1fr !important;
            }
            .stats-grid {
              grid-template-columns: 1fr 1fr !important;
            }
          }

          @media (max-width: 480px) {
            .stats-grid {
              grid-template-columns: 1fr !important;
            }
          }

          /* Hover Effects */
          .hover-scale:hover {
            transform: scale(1.05);
            box-shadow: 0px 12px 30px rgba(0,0,0,0.15);
          }

          .hover-card:hover {
            transform: translateY(-6px);
            box-shadow: 0px 12px 30px rgba(0,0,0,0.12);
          }

          .hover-bright:hover {
            filter: brightness(1.1);
          }
        `}
      </style>

      <main style={{ minHeight: "100vh", backgroundColor: "#fff" }} suppressHydrationWarning>
        <Header />

        {/* HERO SECTION */}
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            background: "linear-gradient(to bottom right, #ecfdf5, white, #f0fdf4)",
            padding: "80px 24px",
          }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div
              className="hero-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "48px",
                alignItems: "center",
              }}
            >
              {/* TEXT */}
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <h1
                  style={{
                    fontSize: "48px",
                    fontWeight: "bold",
                    color: "#111827",
                    lineHeight: "1.1",
                  }}
                >
                  About SqueakyFMS
                </h1>

                <p
                  style={{
                    fontSize: "20px",
                    color: "#4b5563",
                    lineHeight: "1.6",
                  }}
                >
                  With over 5 years of experience in facility management, we help
                  maintain clean, safe, and efficient spaces across multiple sectors.
                </p>

                <a
                  className="hover-scale"
                  href="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    backgroundColor: "#059669",
                    color: "white",
                    padding: "14px 32px",
                    borderRadius: "999px",
                    fontWeight: 600,
                    textDecoration: "none",
                    width: "fit-content",
                    transition: "0.3s ease",
                  }}
                >
                  Get Started
                  <ArrowRight style={{ width: 20, height: 20 }} />
                </a>
              </div>

              {/* IMAGE */}
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top right, #34d399, #6ee7b7)",
                    borderRadius: "24px",
                    opacity: 0.2,
                    filter: "blur(40px)",
                  }}
                ></div>

                <img
                  src="/about-hero-image.webp"
                  className="hover-scale"
                  alt="About SqueakyFMS"
                  style={{
                    width: "100%",
                    height: "520px",
                    objectFit: "contain",
                    position: "relative",
                    transition: "0.3s ease",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* TEAM SECTION */}
        <section style={{ padding: "96px 24px", backgroundColor: "white" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "40px",
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "64px",
                color: "#111827",
              }}
            >
              Our Team
            </h2>

            <div
              className="team-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "48px",
              }}
            >
              {/* CARD 1 */}
              <div
                className="hover-card"
                style={{
                  background: "linear-gradient(to bottom right, #ecfdf5, #f0fdf4)",
                  padding: "40px",
                  borderRadius: "24px",
                  border: "1px solid #bbf7d0",
                  transition: "0.3s ease",
                }}
              >
                <Users style={{ width: 56, height: 56, color: "#059669", marginBottom: 24 }} />
                <h3 style={{ fontSize: "22px", fontWeight: "bold", color: "#111827" }}>
                  Expert Professionals
                </h3>
                <p style={{ fontSize: "16px", color: "#4b5563", marginTop: 12 }}>
                  Trained professionals delivering premium facility management services.
                </p>
              </div>

              {/* CARD 2 */}
              <div
                className="hover-card"
                style={{
                  background: "linear-gradient(to bottom right, #ecfdf5, #f0fdf4)",
                  padding: "40px",
                  borderRadius: "24px",
                  border: "1px solid #bbf7d0",
                  transition: "0.3s ease",
                }}
              >
                <MessageSquare style={{ width: 56, height: 56, color: "#059669", marginBottom: 24 }} />
                <h3 style={{ fontSize: "22px", fontWeight: "bold", color: "#111827" }}>
                  Transparent Communication
                </h3>
                <p style={{ fontSize: "16px", color: "#4b5563", marginTop: 12 }}>
                  You are always informed — clarity and reliability at every step.
                </p>
              </div>

              {/* CARD 3 */}
              <div
                className="hover-card"
                style={{
                  background: "linear-gradient(to bottom right, #ecfdf5, #f0fdf4)",
                  padding: "40px",
                  borderRadius: "24px",
                  border: "1px solid #bbf7d0",
                  transition: "0.3s ease",
                }}
              >
                <Clock style={{ width: 56, height: 56, color: "#059669", marginBottom: 24 }} />
                <h3 style={{ fontSize: "22px", fontWeight: "bold", color: "#111827" }}>
                  On-Time Service
                </h3>
                <p style={{ fontSize: "16px", color: "#4b5563", marginTop: 12 }}>
                  Timing and reliability are core to our work culture.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section
          style={{
            padding: "96px 24px",
            background: "linear-gradient(to bottom right, #111827, #1f2937)",
            color: "white",
          }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div
              className="stats-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "48px",
                textAlign: "center",
              }}
            >
              {[
                [5, "Years Experience"],
                [450, "Projects Completed"],
                [240, "Happy Clients"],
                [20, "Team Members"],
              ].map(([num, label]) => (
                <div key={label}>
                  <h3 style={{ fontSize: "50px", fontWeight: "bold", color: "#34d399" }}><CountUp target={num as number} />+</h3>
                  <p style={{ color: "#d1d5db", fontSize: "18px" }}>{label}</p>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section
          style={{
            padding: "96px 24px",
            background: "linear-gradient(white, #ecfdf5)",
          }}
        >
          <div style={{ maxWidth: "768px", margin: "0 auto" }}>
            <div
              style={{
                background: "linear-gradient(to bottom right, #059669, #047857)",
                padding: "64px",
                borderRadius: "32px",
                textAlign: "center",
                color: "white",
              }}
            >
              <h3 style={{ fontSize: "40px", fontWeight: "bold" }}>Why Choose SqueakyFMS?</h3>

              <p style={{ fontSize: "20px", marginTop: "20px", color: "#d1fae5" }}>
                Reliable, expert and affordable facility services tailored to you.
              </p>

              <a
                href="/contact"
                className="hover-scale"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  backgroundColor: "white",
                  color: "#059669",
                  padding: "16px 32px",
                  borderRadius: "999px",
                  marginTop: "32px",
                  fontWeight: "bold",
                  textDecoration: "none",
                  transition: "0.3s ease",
                }}
              >
                Contact Us <ArrowRight style={{ width: 24, height: 24 }} />
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
