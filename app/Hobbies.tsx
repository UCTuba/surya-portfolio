"use client";

import Image from "next/image";
import { useState } from "react";

const tracks = [
  { title: "Blinding Lights", id: "4NRXx6U8ABQ" },
  { title: "Save Your Tears", id: "XXYlFuWEuKI" },
  { title: "Starboy", id: "34Na4j8AVgA" },
  { title: "The Hills", id: "yzTuBuRdAyA" },
  { title: "I Feel It Coming", id: "qFLhGq0060w" },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function Hobbies() {
  const [flipped, setFlipped] = useState(false);
  const [trackIndex, setTrackIndex] = useState<number | null>(null);

  function playRandomTrack() {
    setTrackIndex((current) => {
      if (tracks.length === 1) return 0;
      let next = Math.floor(Math.random() * tracks.length);
      while (next === current) next = Math.floor(Math.random() * tracks.length);
      return next;
    });
  }

  const currentTrack = trackIndex === null ? null : tracks[trackIndex];

  return (
    <section className="hobbies section-shell" id="hobbies" aria-labelledby="hobbies-title">
      <div className="section-heading hobbies-heading reveal">
        <div>
          <p className="eyebrow">Off the clock / frame by frame</p>
          <h2 id="hobbies-title">The things that<br />keep me curious.</h2>
        </div>
        <p>
          Cinema, music and the moments I want to remember. This is the personal
          side of the portfolio - a small archive that will keep growing.
        </p>
      </div>

      <div className="hobbies-grid">
        <article className="portrait-panel reveal">
          <div className={`photo-flip ${flipped ? "is-flipped" : ""}`}>
            <div className="photo-flip-inner">
              <figure className="photo-face photo-front" aria-hidden={flipped}>
                <Image
                  src="/surya-photo.jpg"
                  alt="Surya taking a mirror photograph"
                  fill
                  priority={false}
                  sizes="(max-width: 760px) 100vw, 58vw"
                />
                <figcaption>
                  <span>01 / real life</span>
                  <strong>Seen between scenes.</strong>
                </figcaption>
              </figure>
              <figure className="photo-face photo-back" aria-hidden={!flipped}>
                <Image
                  src="/weeknd-fan-art.jpg"
                  alt="Red illustrated Weeknd fan artwork supplied by Surya"
                  fill
                  priority={false}
                  sizes="(max-width: 760px) 100vw, 58vw"
                />
                <figcaption>
                  <span>02 / after dark</span>
                  <strong>Weeknd energy.</strong>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="flip-controls">
            <div>
              <p>{flipped ? "Fan-art side" : "Portrait side"}</p>
              <span>Two frames, one story.</span>
            </div>
            <button
              type="button"
              className="flip-button"
              aria-pressed={flipped}
              onClick={() => setFlipped((value) => !value)}
            >
              <span aria-hidden="true">↻</span>
              {flipped ? "Show portrait" : "Flip to fan art"}
            </button>
          </div>
        </article>

        <div className="hobby-stack">
          <article className="radio-card reveal">
            <div className="radio-topline">
              <span>Night radio / official videos</span>
              <span className="on-air"><i /> On air</span>
            </div>
            <div className="radio-display">
              {currentTrack ? (
                <iframe
                  key={currentTrack.id}
                  src={`https://www.youtube-nocookie.com/embed/${currentTrack.id}?autoplay=1&rel=0&playsinline=1&modestbranding=1`}
                  title={`The Weeknd - ${currentTrack.title}`}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="radio-idle" aria-hidden="true">
                  <div className="radio-orbit"><i /></div>
                  <div className="waveform">
                    {Array.from({ length: 24 }).map((_, index) => <i key={index} />)}
                  </div>
                </div>
              )}
            </div>
            <div className="radio-copy">
              <div>
                <p>{currentTrack ? "Now playing" : "Signal waiting"}</p>
                <h3>{currentTrack?.title ?? "The Weeknd - shuffle"}</h3>
              </div>
              <button type="button" className="radio-button" onClick={playRandomTrack}>
                <span aria-hidden="true">▶</span>
                {currentTrack ? "Play another" : "Play random"}
              </button>
            </div>
            <p className="radio-note">Playback is served by The Weeknd&apos;s official YouTube uploads.</p>
          </article>

          <a
            className="letterboxd-card reveal"
            href="https://boxd.it/3IiET"
            target="_blank"
            rel="noreferrer"
          >
            <div className="letterboxd-mark" aria-hidden="true"><i /><i /><i /></div>
            <div>
              <p>Film diary</p>
              <h3>Find me on Letterboxd</h3>
              <span>Ratings, reviews and everything I watch <Arrow /></span>
            </div>
          </a>

          <article className="album-card reveal">
            <div>
              <p>Photo roll / next chapter</p>
              <h3>An album is coming later.</h3>
              <span>A reserved space for photographs I take and stories from behind the frame.</span>
            </div>
            <div className="album-slots" aria-hidden="true"><i /><i /><i /></div>
          </article>
        </div>
      </div>
    </section>
  );
}
