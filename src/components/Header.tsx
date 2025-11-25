'use client';

import Logo from '../../public/images/Logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { HiBars3 } from 'react-icons/hi2';

type HeaderProps = {};

type Link = {
  href: string;
  label: string;
};

const links: Link[] = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#lab', label: 'Lab' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Header: React.FC<HeaderProps> = ({}) => {
  const [isScrolled, setIsScrolled] = React.useState<boolean>(false);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    // Le troisième argument indique que l'écouteur est "passive"
    // ce qui signifie que le callback ne pourra pas appeler e.preventDefault()
    // et permet au navigateur d'optimiser les performances du scroll
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`header ${isScrolled || isOpen ? 'bg-[#1A0B2E]/70 backdrop-blur-md shadow-[0_0_40px_rgba(113, 39, 186, 020)]' : 'bg-transparent'}`}
    >
      {/* Desktop */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-3xl font-extrabold text-[#7e22ce]">
          <Image src={Logo} alt="logo" width={0} className="w-6 h-auto" />
        </Link>
        {/* Desktop navigation menu */}
        <nav className="nav">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="hover:text-[#a855f7] !text-sm transition duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded text-white/80 hover:text-[#1A0B2E] transition duration-200"
        >
          <HiBars3 size={24} />
        </button>
      </div>

      {/* mobile */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          {/* Mobile navigation menu */}
          <nav className="navMobile">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="hover:text-[#a855f7] transition duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
