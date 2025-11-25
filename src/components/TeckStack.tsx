import ScrollReveal from '@/components/ScrollReveal';
import Image from 'next/image';
import React from 'react';

type TeckStackProps = {};

const TeckStack: React.FC<TeckStackProps> = ({}) => {
  return (
    <section id="lab" className="relative py-28 max-w-5xl mx-auto">
      <ScrollReveal stagger={0.08} className="text-center">
        <p className="text-white/70 mb-6">
          I'm currently looking to join a <span className="text-[#aB55f7]"> cross-functional</span>
          team
        </p>
        <p className="text-white/50 text-sm mb-16">
          that values improving people's lives through accessible design
        </p>
        <div className="relative max-w-4xl mx-auto w-full">
          <Image
            src="/images/skills-section.png"
            alt="tech stack"
            width={1280}
            height={920}
            priority
            className="w-full h-auto"
          />
        </div>
      </ScrollReveal>
    </section>
  );
};

export default TeckStack;
