import Hero from '@/components/Hero';
import LogoTicker from '@/components/sections/LogoTicker';
import AbsolutePositioning from '@/components/sections/AbsolutePositioning';
import ProjectGallery from '@/components/sections/ProjectGallery';
import DISS from '@/components/sections/DISS';
import Pricing from '@/components/sections/Pricing';
import DeckInABox from '@/components/sections/DeckInABox';


export default function Home() {
  return (
    <main>
      <Hero />
      <LogoTicker />
      <AbsolutePositioning />
      <ProjectGallery />
      <DISS />
      <Pricing />
      <DeckInABox />
    </main>
  );
}