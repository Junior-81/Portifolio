import Hero from '@/components/Hero';
import SpecialtiesSection from '@/components/SpecialtiesSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import SkillsSection from '@/components/SkillsSection';
import { projects, skills } from '@/data';

export default function Home() {
  return (
    <>
      <Hero />
      <SpecialtiesSection />
      <FeaturedProjects projects={projects} />
      <SkillsSection skills={skills} />
    </>
  );
}
