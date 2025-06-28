"use client";

import ImageSlideshow from "@/components/core/ImageSlideshow";

const images = [
  "/cow invasion1.jpg",
  "/cow invasion 2.jpg",
  "/cow invasion 3.jpg",
];

export default function TheGreatCowInvasionPage() {
  return (
    <>
      <div className="h-32" />
      <div
        className="min-h-screen bg-black text-white py-12 flex justify-center mt-16 md:mt-24 mb-12"
        style={{ marginLeft: '100px', marginRight: '100px', marginBottom: '50px' }}
      >
        <div className="max-w-full w-full grid grid-cols-1 lg:grid-cols-[700px_1fr] gap-16 items-center">
          {/* Left column: Slideshow */}
          <div className="flex flex-col items-start w-full">
            <ImageSlideshow
              images={images}
              altPrefix="The Great Cow Invasion project image"
            />
          </div>
          {/* Right column: Content */}
          <div className="flex flex-col items-center text-center space-y-6 justify-center">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Spring 2024</p>
              <h1 className="text-4xl md:text-6xl font-bold">The Great Cow Invasion of Los Angeles!</h1>
            </div>
            <div className="space-y-4 text-left max-w-2xl w-full">
              <p className="text-lg font-medium">
                Storytelling through art has always been a passion of mine. I wanted to be able to tell a sequence of events through a single image, Using the reflections in the glass of the Los Angeles Metro, the story of the Great Cow Invasion plays out.
              </p>
              <section>
                <p>
                  Just by looking at the reflections in the first piece, the viewer can see the sequence of events. Following the story of the man in the foreground, in the reflection on the left, you can see his first encounter with the cows. In the reflection on the right, you can see his head getting cut off by the same cow. The story ending with the cows being revealed to by human-killing aliens is shown as a small window into the final piece through the reflections in the first image. As the viewer moves from piece to piece in the series, the sequence of events is revealed.
                </p>
              </section>
              <section>
                <p>
                  The colors in the piece are used to emphasize the absurdity of the story. The first piece's bright blue and green color scheme portrays the scene as calm and sterile. The green intensifies in the second piece as the absurdity of the story increases with the cows invading the metro car. Lastly, the orange color scheme in the final piece is a twist from the blues and greens seen before, paralleling the twist in the story.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 