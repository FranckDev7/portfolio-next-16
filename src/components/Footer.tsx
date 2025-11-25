import React from 'react';

type FooterProps = {};

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="maw-w-7xl mx-auto px-6 lg:px-8 py-4 text-center">
        <p className="text-sm text-white/40">
          @ {new Date().getFullYear()} Portfolio de Mr Franck MUZABA. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
