import Image from "next/image";
import { Container } from "../components/container";
import { Header } from "../components/header";
import { Hero, HeroSubtitle, HeroTitle } from "../components/hero";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <main className="bg-page-gradient pt-navigation-height">
        <Container className="py-[6.4rem]">
          <Hero>
            <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              Linear is a better way <br /> to build products
            </HeroTitle>
            <HeroSubtitle>
              Meet the new standard for modern software development.
              <br className="hidden md:block" /> Streamline issues, sprints, and
              product roadmaps.
            </HeroSubtitle>
            <img src="img/hero.webp" alt="Hero image" />
          </Hero>
        </Container>
      </main>
      <footer>
        <Container>footer</Container>
      </footer>
    </div>
  );
}
