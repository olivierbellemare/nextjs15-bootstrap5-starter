'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav style={{ background: "var(--White30)" }} className="d-flex p-4 gap-4">
      <Link href="./" className={`text-White70 hover:text-gray-300 ${ pathname === '/' ? 'text-decoration-underline' : '' }`}>Home</Link>
      <Link href="/about" className={`text-White70 hover:text-gray-300 ${ pathname === '/about' ? 'text-decoration-underline' : '' }`}>About</Link>
      <Link href="/contact" className={`text-White70 hover:text-gray-300 ${ pathname === '/contact' ? 'text-decoration-underline' : '' }`}>Contact</Link>   
    </nav>
  );
};

export default Navbar;