import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { SocialIcon } from 'react-social-icons';

type ContactSectionProps = {};

const ContactSection: React.FC<ContactSectionProps> = ({}) => {
  return (
    <section id="contact" className="py-24 relative max-w-5xl mx-auto">
      <div>
        <h3 className="text-2xl md:text-3xl font-semibold text-white/90 mb-8">Contact</h3>
        <p className="text-sm text-white/60 max-w-xl">
          Actuellement disponible et à la recherche de nouvelles opportunités, je suis ouvert à
          toute prise de contact. N’hésitez pas à m’écrire pour échanger ou en savoir plus sur mes
          projets en développement web et mobile.
        </p>
        <div className="mt-6 text-white/80">
          <Link href="mailto:ffranckmuzabadfr@gmail.com" className="hover:text-[#a855f7]">
            ffranckmuzabafr@gmail.com
          </Link>
        </div>
        <div className="mt-6 flex items-center gap-4 text-white/80">
          <SocialIcon
            url="https://www.linkedin.com/in/franck-muzaba-550b84181/?skipRedirect=true"
            style={{ height: 40, width: 40 }}
          />

          <SocialIcon url="https://x.com/MuzabaF" style={{ height: 40, width: 40 }} />

          <SocialIcon url="mailto:ffranckmuzabaffr@gmail.com" style={{ height: 40, width: 40 }} />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
