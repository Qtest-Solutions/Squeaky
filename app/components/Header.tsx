'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* INTERNAL CSS FOR MODERN HEADER EFFECTS */}
      <style>{`
        .nav-link {
          position: relative;
          font-weight: 500;
          color: #0f172a;
          padding-bottom: 4px;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: #059669;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0%;
          height: 2px;
          background-color: #059669;
          transition: width 0.3s ease;
          border-radius: 4px;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-link.active {
          color: #059669;
          font-weight: 700;
        }

        .nav-link.active::after {
          width: 100%;
        }

        /* MOBILE MENU */
        @media (max-width: 850px) {
          .desktop-menu {
            display: none !important;
          }

          .mobile-menu {
            display: flex !important;
          }
        }

        @media (min-width: 851px) {
          .mobile-menu-dropdown {
            display: none !important;
          }
        }
      `}</style>

      <header
        style={{
          position: "sticky",
          top: "0",
          zIndex: "1000",
          backdropFilter: "blur(12px)",
          background: "rgba(255, 255, 255, 0.75)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "18px 32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <Link href="/">
            <img
              src="/Logo-01.png"
              alt="SqueakyFMS"
              style={{
                height: "58px",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="desktop-menu" style={{ display: "flex" }}>
            <ul
              style={{
                display: "flex",
                gap: "32px",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`nav-link ${isActive(item.href) ? "active" : ""}`}
                    style={{
                      textDecoration: "none",
                      fontSize: "1rem",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div
            className="mobile-menu"
            style={{
              display: "none",
              cursor: "pointer",
            }}
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X style={{ width: '28px', height: '28px', color: '#0f172a', transition: '0.3s' }} />
            ) : (
              <Menu style={{ width: '28px', height: '28px', color: '#0f172a', transition: '0.3s' }} />
            )}
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {open && (
          <div
            className="mobile-menu-dropdown"
            style={{
              background: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(10px)",
              padding: "20px 32px",
              borderBottom: "1px solid rgba(0,0,0,0.08)",
              animation: "fadeDown 0.3s ease",
            }}
          >
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`nav-link ${isActive(item.href) ? "active" : ""}`}
                    style={{
                      textDecoration: "none",
                      fontSize: "1.2rem",
                      display: "block",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
