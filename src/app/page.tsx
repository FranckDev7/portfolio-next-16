import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import HereSection from '@/components/HereSection';
import ProjectsSection from '@/components/ProjectsSection';
import TeckStack from '@/components/TeckStack';
import WorkExperience from '@/components/WorkExperience';
import React from 'react';

type HomeProps = {};

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <>
      <main className="max-w-7xl mx-auto px-6 lg-px-8">
        <HereSection />
        <WorkExperience />
        <TeckStack />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Home;
