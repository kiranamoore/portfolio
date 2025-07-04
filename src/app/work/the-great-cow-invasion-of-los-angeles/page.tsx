"use client";

import ImageSlideshow from "@/components/core/ImageSlideshow";

const images = [
  "/cow1.JPG",
  "/cow2.JPG",
  "/cow3.JPG",
];

export default function TheGreatCowInvasionPage() {
  return (
    <>
      <div className="h-32" />
      <div
        className="min-h-screen bg-black text-white py-12 flex justify-center items-center mt-16 md:mt-24 mb-12"
        style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '50px', maxWidth: '1400px' }}
      >
        <div className="w-full flex flex-col lg:flex-row gap-16 items-center justify-center" style={{maxWidth: '1200px'}}>
          {/* Left column: Slideshow */}
          <div className="flex flex-col items-center justify-center flex-1 w-full">
            <ImageSlideshow images={images} altPrefix="The Great Cow Invasion project image" />
          </div>
          {/* Right column: Content */}
          <div className="flex flex-col items-center text-center space-y-6 flex-1">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Spring 2024</p>
              <h1 className="text-4xl md:text-6xl font-bold">The Great Cow Invasion of Los Angeles!</h1>
            </div>
            <div className="space-y-10 text-left max-w-2xl w-full">
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-pink-500 to-red-400" />
                  <h2 className="text-2xl font-bold text-pink-400 tracking-tight">Project Overview</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Storytelling through art has always been a passion of mine. I wanted to be able to tell <b>a sequence of events through a single image , Using the reflections in the glass of the Los Angeles Metro,</b> the story of the Great Cow Invasion plays out.</span></li>
                </ul>
              </section>
              <div className="flex items-center gap-3 mb-2 mt-6">
                <span className="h-6 w-1 rounded bg-gradient-to-b from-blue-400 to-cyan-400" />
                <h3 className="text-xl font-bold text-blue-300 tracking-tight">Narrative Details</h3>
              </div>
              <ul className="space-y-2 pl-6 list-none">
                <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Just by looking at the reflections in the first piece, the viewer can see the sequence of events. Following the story of the man in the foreground, <b>in the reflection on the left, you can see his first encounter with the cows. In the reflection on the right, you can see his head getting cut off by the same cow. </b>The story ending with the <b>cows being revealed to by human-killing aliens</b> is shown as a small window into the final piece through the reflections in the first image. As the viewer moves from piece to piece in the series, the sequence of events is revealed.</span></li>
              </ul>
              <div className="flex items-center gap-3 mb-2 mt-6">
                <span className="h-6 w-1 rounded bg-gradient-to-b from-green-400 to-emerald-500" />
                <h3 className="text-xl font-bold text-green-300 tracking-tight">Color & Atmosphere</h3>
              </div>
              <ul className="space-y-2 pl-6 list-none">
                <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span><b>The colors in the piece are used to emphasize the absurdity of the story.</b> The first piece's bright blue and green color scheme portrays the scene as calm and sterile. The green intensifies in the second piece as the absurdity of the story increases with the cows invading the metro car. Lastly, the orange color scheme in the final piece is a twist from the blues and greens seen before, paralleling the twist in the story.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 