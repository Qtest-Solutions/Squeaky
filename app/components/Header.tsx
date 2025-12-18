'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <style>{`
        .nav-link {
          position: relative;
          font-weight: 500;
          padding-bottom: 4px;
          transition: color 0.3s ease;
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

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        @media (max-width: 850px) {
          .desktop-menu { display: none !important; }
          .mobile-menu { display: flex !important; }
        }

        @media (min-width: 851px) {
          .mobile-menu-dropdown { display: none !important; }
        }
      `}</style>

      <header
        suppressHydrationWarning
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
          transition: 'all 0.3s ease',
          background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
          boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.08)' : 'none',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
        }}
      >
        <div
          style={{
            margin: '0 auto',
            padding: '18px 32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
      <Link href="/">
  <img
    src="/Logo-01.png"
    alt="SqueakyFMS"
    style={{
      height: '80px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      filter: scrolled
        ? 'none'
        : 'brightness(0) invert(1) drop-shadow(0 2px 6px rgba(0,0,0,0.6))',
    }}
  />
</Link>


          <nav className="desktop-menu">
            <ul
              style={{
                display: 'flex',
                gap: '36px',
                listStyle: 'none',
                margin: 0,
                padding: 0,
              }}
            >
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
                   style={{
  textDecoration: 'none',
  color: '#0f172a',
  fontWeight: isActive(item.href) ? 700 : 500,
}}

                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div
            className="mobile-menu"
            style={{ display: 'none', cursor: 'pointer' }}
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X size={28} color={scrolled ? '#0f172a' : 'white'} />
            ) : (
              <Menu size={28} color={scrolled ? '#0f172a' : 'white'} />
            )}
          </div>
        </div>

        {open && (
          <div
            className="mobile-menu-dropdown"
            style={{
              background: scrolled ? 'white' : 'rgba(0,0,0,0.9)',
              padding: '24px 32px',
              borderBottom: '1px solid rgba(0,0,0,0.08)',
            }}
          >
            <ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                listStyle: 'none',
                margin: 0,
                padding: 0,
              }}
            >
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
                    style={{
                      textDecoration: 'none',
                      fontSize: '1.2rem',
                      color: scrolled ? '#0f172a' : 'white',
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
