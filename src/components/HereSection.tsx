'use client';

import ScrollReveal from '@/components/ScrollReveal';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import { type IconType } from 'react-icons';
import { DiCodeigniter } from 'react-icons/di';
import { FaLaravel, FaReact, FaSymfony } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { SiDjango } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';
import { Typewriter } from 'react-simple-typewriter';

type HereSectionProps = {};

type TECHNO = {
  name: string;
  icon: IconType;
  color: string;
  className?: string;
};

const technologies: TECHNO[] = [
  { name: 'react', icon: FaReact, color: '#61DAFB' },
  { name: 'next', icon: RiNextjsFill, color: '#ffffff' },
  { name: 'laravel', icon: FaLaravel, color: '#FF2D20' },
  { name: 'django', icon: SiDjango, color: '#0C4B33' },
  { name: 'native', icon: FaReact, color: '#61DAFB' },
  { name: 'symfony', icon: FaSymfony, color: '#ffffff' },
  { name: 'express', icon: SiExpress, color: '#ffffff' },
  { name: 'codeigniter', icon: DiCodeigniter, color: '#EE0000' },
];

const HereSection: React.FC<HereSectionProps> = ({}) => {
  return (
    <section
      id="#home"
      className="relative pt-20 pb-24 max-[640px]:pb-0 container max-w-5xl mx-auto"
    >
      <div className="mt-12 md:mt-24">
        {/* Avatar & Headline */}
        <ScrollReveal
          stagger={0.12}
          className="flex flex-col md:flex-row gap-8 items-start md:items-center"
        >
          {/* Avatar */}
          <div className="relative flex justify-center md:justify-end">
            <div className="pointer-events-none absolute -inset-x-12 md:-inset-24 rounded-full bg-linear-to-b from-[#7c3aed] via-[#6d28d9]/30 to-transparent blur-3xl opacity-90"></div>
            <div className="relative">
              <Image
                src="/images/Avatar.png"
                alt="avatar"
                width={240}
                height={240}
                className="h-auto rounded-full object-top object-cover"
                priority
              />

              {/* small greeting with curve arrow */}
              <div className="select-none pointer-events-none absolute -top-8 -right-6 md:-top-16 md:-right-40 text-xs text-white/70">
                <div className="relative flex items-center justify-end">
                  <div className="relative w-16 h-16 md:w-24 md:h-16">
                    <Image
                      src="/images/Arrow.png"
                      alt="Arrow"
                      fill
                      className="object-contain scale-x-100 -rotate-6"
                      priority
                      sizes="(max-width: 768px) 32px, 64px"
                    />
                  </div>
                  <div className="-mt-6 md:-mt-10 shrink-0">
                    <span className="!text-[9px]">Salut! Je suis </span>
                    <span className="text-[#a78bfa] text-left !text-[9px]">
                      <Typewriter
                        words={['Franck MUZABA']}
                        typeSpeed={65}
                        deleteSpeed={0}
                        delaySpeed={600}
                        loop={false}
                        cursor
                        cursorStyle="|"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Headline */}
          <div className="md:pl-2 text-center md:text-left">
            <p className="realtive text-sm md:text-base text-white/60 mb-2">
              <span className="block min-h-[60px] !text-[11.5px]">
                <Typewriter
                  words={[' Développeur Web & Mobile ']}
                  typeSpeed={65}
                  deleteSpeed={0}
                  delaySpeed={600}
                  loop={false}
                  cursor
                  cursorStyle="|"
                />
              </span>
            </p>
            <h1 className="text-3xl sm:text-5xl font-normal tracking-tight leading-[1.5]">
              <span className="block">Développeur web & mobile</span>
              <span className="block">
                by its{' '}
                <span className="relative inline-block align-baseline">
                  <span className="relative é-10 text-[#7127BA]">cover</span>
                  <span className="pointer-events-none absolute -inset-x-2 -inset-y-2 translate-y-1 -z-10 rotate-12">
                    <Image
                      src="/images/Ellipse.png"
                      alt="Arrow"
                      fill
                      className="object-contain"
                      priority
                      sizes="(max-width: 768px) 32px, 64px"
                    />
                  </span>
                </span>
                ...
              </span>
            </h1>
            <p className="mt-2 text-[10px] md:text-xs text-white/50 max-w-md md:max-w-lg mx-auto md:mx-0">
              Car si la couverture ne vous impressionne pas, qu'est-ce qui le fera ?
            </p>
          </div>
        </ScrollReveal>

        {/* role & description */}
        <ScrollReveal delay={0.15} className="mt-16 max-w-3xl">
          <h2 className="relative text-xl sm:text-2xl md:text-3xl font-normal tracking-tight">
            <span className="block min-h-[60px]">
              <Typewriter
                words={['Developpeur Web & Mobile']}
                typeSpeed={65}
                deleteSpeed={0}
                delaySpeed={600}
                loop={false}
                cursor
                cursorStyle="|"
              />
            </span>
          </h2>
          <p className="max-[640px]:text-[12px] sm:text-sm !mb-5 mt-3 sm:mt-0 text-center container mx-auto">
            Actuellement je suis en train de poursuivre mes formations sur les technologies
            ci-dessous
          </p>

          <div className="mt-4 flex space-x-4 max-[1280px]:grid max-[1280px]:grid-cols-1 gap-4">
            {technologies.map((technology, index) => {
              const Icon = technology.icon;
              return (
                <div className="flex items-center space-x-2 mb-4" key={index}>
                  <Icon
                    className={clsx(`w-8 h-8 ${technology.className}`)}
                    color={technology.color}
                  />
                  <span className="capitalize text-xs">{technology.name}</span>
                </div>
              );
            })}
          </div>

          <p className="max-[640px]:text-[12px] relative sm:text-sm mt-6 text-white/70 leading-7">
            <span className="block inset-0 min-h-[115px] max-[640px]:min-h-[250px]">
              <Typewriter
                words={[
                  'développeur web et mobile passionné, avec une formation en télécommunications,' +
                    ' une solide base en réseaux informatiques, et une réelle curiosité pour' +
                    ' les technologies modernes. Après mon stage à FirstBank DRC, ' +
                    ' où j’ai assuré la supervision du réseau ',
                  'l’assistance technique et la configuration de postes de travail, je me suis pleinement orienté ' +
                    'vers le développement logiciel, domaine dans lequel je m’épanouis aujourd’hui Je conçois et' +
                    ' développe des applications performantes, sécurisées et modernes, aussi bien côté ',
                  'frontend que backend. En frontend, je maîtrise HTML, CSS, JavaScript, ainsi que des écosystèmes ' +
                    'modernes comme React, Vue.js, TailwindCSS, Bootstrap et Next.js. En backend, j’utilise PHP, ' +
                    'Node.js et Python, avec des frameworks tels que Laravel, Symfony, Django, Express et CodeIgniter',
                ]}
                typeSpeed={65}
                deleteSpeed={0}
                delaySpeed={600}
                loop={false}
                cursor
                cursorStyle="|"
              />
            </span>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HereSection;
