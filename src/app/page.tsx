import InteractiveBackground from "@/components/core/InteractiveBackground";
import TextScramble from "@/components/core/TextScramble";
import FeaturedWorks from "@/components/FeaturedWorks";

export default function Home() {
  return (
    <>
      <main>
        <InteractiveBackground>
          <section className="h-screen flex flex-col justify-center items-center relative text-center">
            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter">
              <TextScramble text="Kirana" />
            </h1>
            <p className="text-xl md:text-2xl mt-4">
              <TextScramble text="Digital Interaction & Visual Designer" />
            </p>
          </section>
        </InteractiveBackground>

        <section
          id="about"
          className="py-20 md:py-32 bg-black text-white text-center"
        >
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              <TextScramble text="About Me" />
            </h2>
            <p className="text-lg md:text-xl leading-relaxed">
              I&apos;m a passionate designer focused on creating beautiful and
              engaging digital experiences. With a background in visual design
              and interactive development, I strive to build products that are
              not only aesthetically pleasing but also intuitive and joyful to
              use. This portfolio is a collection of my favorite projects!
            </p>
          </div>
        </section>

        <FeaturedWorks />
      </main>
    </>
  );
}
