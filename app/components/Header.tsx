import Link from 'next/link';

export default function Header() {
  return (
    <header className="container site-nav">
      <a className="brand" href="/">SqueakyFMS</a>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
