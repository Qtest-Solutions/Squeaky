'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <header style={{position:'sticky', top:'0', backgroundColor:'white', zIndex:'1000', borderBottom:'1px solid #e0e0e0', boxShadow:'0 2px 4px rgba(0,0,0,0.05)'}}>
      <div className="container site-nav" style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'20px 40px', maxWidth:'1200px', margin:'0 auto'}}>
        <div style={{display:'flex', alignItems:'center'}}>
          <img src="/Logo-01.png" alt="SqueakyFMS" style={{height:'60px'}} />
        </div>
        <nav>
          <ul style={{display:'flex', gap:'30px', listStyle:'none', margin:'0', padding:'0'}}>
            <li>
              <Link href="/" style={{
                textDecoration:'none',
                color: isActive('/') ? 'var(--color-primary)' : 'var(--color-dark)',
                fontWeight: isActive('/') ? '700' : '500',
                borderBottom: isActive('/') ? '2px solid var(--color-primary)' : 'none',
                paddingBottom: isActive('/') ? '4px' : '0'
              }}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" style={{
                textDecoration:'none',
                color: isActive('/services') ? 'var(--color-primary)' : 'var(--color-dark)',
                fontWeight: isActive('/services') ? '700' : '500',
                borderBottom: isActive('/services') ? '2px solid var(--color-primary)' : 'none',
                paddingBottom: isActive('/services') ? '4px' : '0'
              }}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" style={{
                textDecoration:'none',
                color: isActive('/about') ? 'var(--color-primary)' : 'var(--color-dark)',
                fontWeight: isActive('/about') ? '700' : '500',
                borderBottom: isActive('/about') ? '2px solid var(--color-primary)' : 'none',
                paddingBottom: isActive('/about') ? '4px' : '0'
              }}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" style={{
                textDecoration:'none',
                color: isActive('/contact') ? 'var(--color-primary)' : 'var(--color-dark)',
                fontWeight: isActive('/contact') ? '700' : '500',
                borderBottom: isActive('/contact') ? '2px solid var(--color-primary)' : 'none',
                paddingBottom: isActive('/contact') ? '4px' : '0'
              }}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
