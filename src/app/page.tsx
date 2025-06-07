import Hero from '@/components/Hero';
import FeaturedProjects from '@/components/FeaturedProjects';
import SkillsSection from '@/components/SkillsSection';
import { projects, skills } from '@/data';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects projects={projects} />
      <SkillsSection skills={skills} />
    </>
  );
}
