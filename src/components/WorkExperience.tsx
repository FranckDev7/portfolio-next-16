import ScrollReveal from '@/components/ScrollReveal';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type WorkExperienceProps = {};

type experienceItemsProps = {
  title: string;
  description: string;
  image: string;
  link?: string;
};

const experienceItems: experienceItemsProps[] = [
  {
    title: 'NutriSpark',
    description: `
        Application d’exploration des valeurs nutritionnelles des aliments
      `,
    image: '/images/food.svg',
    link: 'https://nutri-spark.vercel.app/',
  },
  {
    title: 'Todo List App REACT',
    description: `
        application web de gestion de tâches construite avec React et TypeScript.
      `,
    image: '/images/todo-list.svg',
    link: 'https://todo-list-react-19.vercel.app/',
  },
  {
    title: 'TODO LIST APP VUE 3',
    description: `
        application web de gestion de tâches construite avec VUE 3 et TypeScript.
      `,
    image: '/images/todo-list.svg',
    link: 'https://todo-app-vue-kappa.vercel.app/',
  },
  {
    title: 'Pokemon',
    description: `
        application web permettant d’explorer l’univers des Pokémon
        
      `,
    image: '/images/pokemon.svg',
    link: 'https://pokemon-qblh.vercel.app/',
  },
];

const WorkExperience: React.FC<WorkExperienceProps> = ({}) => {
  return (
    <section id="about" className="relative py-24 max-w-5xl mx-auto">
      {/* glow effect */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[90vw] sm:w-[760px] md:w-[1000px] h-[280px] sm:h-[380px] md:h-[520px] opacity-40 blur-3xl"
        style={{
          background:
            'radial-gradient(60% 60% at 50% 0%, rgba(168, 85, 247, 0.6) 0%, rgba(126, 34, 206, 0.0) 70%)',
        }}
      />
      <div className="container mx-auto">
        <h3 className="text-2xl md:text-3xl font-semibold text-white/90 mb-8">
          Expérience de travail
        </h3>

        <ScrollReveal
          stagger={0.15}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 md:gap-8"
        >
          {experienceItems.map((item, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-2xl p-5 sm:p-6 md:p-7 bg-[#140a26] border border-[#2f1c55] shadow-[0_10px_40px_rgba(113, 39, 186, 0.25)] transition-all duration-300 hover:-translate-y-1 md:-translate-y-2 hover:border-[#7c3aed]/60 hover:shadow-[0_20px_60px_rgba(113, 39, 186, 0.40)]"
            >
              {/* card gradient */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-70 transition-opacity duration-300 group-hover:opacity-90"
                style={{
                  background:
                    'radial-gradient(120% 80% at 80% 10%, rgba(125, 58, 242, 0.35) 0%, rgba(126, 58, 242, 0.15) 25%), rgba(18, 8, 36, 0) 60%',
                }}
              ></div>

              <div className="relative flex flex-col lg:flex-row sm:items-start items:center gap-2 sm:gap-6 md:gap-8">
                {/* icon */}
                <div className="mx-auto sm:mx-0 relative shrink-0 w-10 h-10 sm:size-20 md:size-24 transition-transform duration-300 group-hover:-translate-y-1">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain drop-shadow-[0_8px_24px_rgba(113, 39, 186, 0.35)] rounded-full"
                    quality={100}
                    sizes="(max-width: 768px) 40px, (max-width: 1024px) 80px, 96px"
                  />
                </div>

                {/* text content */}
                <div>
                  <h4 className="text-center sm:text-start text-base sm:text-lg md:text-xl font-semibold text-white mt-4 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-center sm:text-start mt-2 text-xs leading-5 md:text-sm text-white/60 mx-auto sm:mx-0 mb-4">
                    {item.description}
                  </p>
                  <div>
                      <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="max-[640px]:w-full max-[640px]:text-center inline-block items-center text-[11px] md:text-xs px-8 py-4 rounded-[10px] bg-[#1a0c2e] border border-[#3e1d6d] text-white/80 hover:text-white hover:border-[#a855f7] hover:bg-[#220e3d] transition-colors"
                      >
                          Savoir plus
                      </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WorkExperience;
