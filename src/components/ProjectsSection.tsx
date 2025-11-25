import ScrollReveal from '@/components/ScrollReveal';
import Image from 'next/image';
import React from 'react';

type ProjectsSectionProps = {};

const ProjectsSection: React.FC<ProjectsSectionProps> = ({}) => {
  return (
    <section id="projects" className="max-w-5xl mx-auto relative py-28 space-y-24">
      <div>
        <div
          className="pointer-events-none absolute right-0 left-1/3 top-8 -z-10 h-[420px] opacity-40 blur-3xl
                "
          style={{
            background:
              'radial-gradient(60% 60% at 60% 40%, rgba(125, 58, 242, 0.65) 0%, rgba(18, 8, 36, 0) 70%)',
          }}
        />
        <ScrollReveal stagger={0.12} delay={0.6} className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* TEXT CONTENT */}
          <div className="relative z-10">
            {/* HEADING */}
            <div className="mb-12">
              <p className="text-xs text-[#a48cc9]">Projets en vedette</p>
              <h3 className="text-2xl md:text-3xl font-semibold text-white/90">Projets réalisés</h3>
            </div>

            {/* DESCRIPTION */}
            <div className="relative md:-mr-12 md:-mt-6 z-20 max-w-5xl rounded-2xl p-5 bg-white/6 backdrop-blur-sm border border-white/10 shadow-[0_6px_50px_rgba(126, 34, 206, 0.25)]">
              <p className="text-xs text-white/75 leading-relaxed">
                NutriSpark est une application web construite avec Next.js 15 permettant de
                rechercher des aliments et d’explorer leurs valeurs nutritionnelles grâce à des
                graphiques interactifs. Elle offre une interface moderne, rapide et intuitive pour
                mieux comprendre la composition des aliments et suivre ses habitudes alimentaires.
              </p>
              <div
                className="pointer-events-none absolute -inset-px rounded-[14px] opacity-60"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(168, 85, 247, 0.35), rgba(168, 85, 247, 0.05))',
                }}
              />
            </div>
            <div className="mt-6 ml-2 flex justify-start space-x-3 text-white/60">
              <span>*</span>
              <span>*</span>
            </div>
          </div>

          {/* PROJECT IMAGE */}
          <div className="relative">
            <div
              tabIndex={0}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-[#0f061c] border border-[#2f1c55] shadow-[0_0_90px_rgba(168, 85, 247, 0.28)] transition-transform duration-300 hover:-translate-y-1 focus:-translate-y-1 "
            >
              <div className="overflow-hidden h-[360px] md:h-[250px]">
                <Image
                  src="/images/Portfolio.png"
                  alt="portfolio"
                  width={582}
                  height={640}
                  className="w-full h-auto transition-transform duration-3500 ease-linear group-hover:-translate-y-[55%] group-active:-translate-y-[55%] group-focus:-translate-y-[55%]"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div>
        <div
          className="pointer-events-none absolute right-0 left-1/3 top-8 -z-10 h-[420px] opacity-40 blur-3xl
                "
          style={{
            background:
              'radial-gradient(60% 60% at 60% 40%, rgba(125, 58, 242, 0.65) 0%, rgba(18, 8, 36, 0) 70%)',
          }}
        />
        <ScrollReveal stagger={0.12} delay={0.6} className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* TEXT CONTENT */}
          <div className="relative md:order-2 z-10">
            {/* HEADING */}
            <div className="mb-12 text-right">
              <p className="text-xs text-[#a48cc9]">Projets en vedette</p>
              <h3 className="text-2xl md:text-3xl font-semibold text-white/90">Projets réalisés</h3>
            </div>

            {/* DESCRIPTION */}
            <div className="relative md:-ml-12 md:-mt-6 z-20 max-w-5xl rounded-2xl p-5 bg-white/6 backdrop-blur-sm border border-white/10 shadow-[0_6px_50px_rgba(126, 34, 206, 0.25)]">
              <p className="text-xs text-white/75 leading-relaxed">
                Une application web pour visualiser vos données Spotify personnalisées. Découvrez
                vos artistes préférés, vos titres les plus écoutés, vos titres récemment écoutés et
                des informations audio détaillées sur chaque morceau. Créez et enregistrez de
                nouvelles playlists de titres recommandés en fonction de vos playlists existantes et
                bien plus encore.
              </p>
              <div
                className="pointer-events-none absolute -inset-px rounded-[14px] opacity-60"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(168, 85, 247, 0.35), rgba(168, 85, 247, 0.05))',
                }}
              />
            </div>
            <div className="mt-6 ml-2 flex justify-end space-x-3 text-white/60">
              <span>*</span>
              <span>*</span>
            </div>
          </div>

          {/* PROJECT IMAGE */}
          <div className="relative md:order-1">
            <div
              tabIndex={0}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-[#0f061c] border border-[#2f1c55] shadow-[0_0_90px_rgba(168, 85, 247, 0.28)] transition-transform duration-300 hover:-translate-y-1 focus:-translate-y-1 "
            >
              <div className="overflow-hidden h-[360px] md:h-[250px]">
                <Image
                  src="/images/Portfolio.png"
                  alt="portfolio"
                  width={582}
                  height={640}
                  className="w-full h-auto transition-transform duration-3500 ease-linear group-hover:-translate-y-[55%] group-active:-translate-y-[55%] group-focus:-translate-y-[55%]"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProjectsSection;
