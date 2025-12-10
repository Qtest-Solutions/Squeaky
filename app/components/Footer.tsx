import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>Phone: <strong>(701) 814-6992</strong></p>
        <p style={{marginTop:8}}>Physical address: <strong>6296 Donnelly Plaza, Ratkeville, Bahamas</strong></p>
        <div className="links">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <p style={{marginTop:18}}>&copy; 2025 SqueakyFMS</p>
      </div>
    </footer>
  );
}
