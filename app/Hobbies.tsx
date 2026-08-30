"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type AudioTrack = {
  artistName: string;
  artworkUrl100: string;
  collectionName: string;
  previewUrl: string;
  trackId: number;
  trackName: string;
  trackViewUrl: string;
};

const WEEKND_CATALOG =
  "https://itunes.apple.com/search?term=the%20weeknd&media=music&entity=song&attribute=artistTerm&limit=100&country=gb";
const WEEKND_APPLE_MUSIC = "https://music.apple.com/gb/artist/the-weeknd/479756766";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function Hobbies() {
  const [flipped, setFlipped] = useState(false);
  const [catalog, setCatalog] = useState<AudioTrack[]>([]);
  const [catalogState, setCatalogState] = useState<"loading" | "ready" | "error">("loading");
  const [currentTrack, setCurrentTrack] = useState<AudioTrack | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadCatalog() {
      try {
        const response = await fetch(WEEKND_CATALOG, { signal: controller.signal });
        if (!response.ok) throw new Error("Audio catalogue unavailable");

        const data = (await response.json()) as { results?: AudioTrack[] };
        const seen = new Set<string>();
        const tracks = (data.results ?? []).filter((track) => {
          const key = track.trackName?.trim().toLowerCase();
          const isWeeknd = track.artistName?.toLowerCase().includes("the weeknd");
          if (!key || !track.previewUrl || !isWeeknd || seen.has(key)) return false;
          seen.add(key);
          return true;
        });

        if (tracks.length === 0) throw new Error("No audio previews returned");
        setCatalog(tracks);
        setCatalogState("ready");
      } catch (error) {
        if ((error as Error).name !== "AbortError") setCatalogState("error");
      }
    }

    void loadCatalog();
    return () => controller.abort();
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !currentTrack) return;

    audio.src = currentTrack.previewUrl.replace("http://", "https://");
    audio.currentTime = 0;
    void audio.play().catch(() => setIsPlaying(false));
  }, [currentTrack]);

  function playRandomTrack() {
    if (catalog.length === 0) return;
    const choices = currentTrack
      ? catalog.filter((track) => track.trackId !== currentTrack.trackId)
      : catalog;
    const next = choices[Math.floor(Math.random() * choices.length)] ?? catalog[0];
    setCurrentTrack(next);
  }

  function togglePlayback() {
    const audio = audioRef.current;
    if (!audio || !currentTrack) {
      playRandomTrack();
      return;
    }

    if (audio.paused) {
      void audio.play().catch(() => setIsPlaying(false));
    } else {
      audio.pause();
    }
  }

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
          <article className={`radio-card reveal ${isPlaying ? "is-playing" : ""}`}>
            <div className="radio-topline">
              <span>XO vinyl / audio only</span>
              <span className="on-air"><i /> {isPlaying ? "On air" : "Ready"}</span>
            </div>
            <div className="vinyl-stage">
              <div className="vinyl-sleeve" aria-hidden="true">
                <span>After-hours archive</span>
                <strong>XO<br />audio<br />club</strong>
                <i>UK night press</i>
              </div>
              <button
                type="button"
                className="vinyl-trigger"
                aria-label={currentTrack ? "Play another random The Weeknd song" : "Play a random The Weeknd song"}
                disabled={catalog.length === 0}
                onClick={playRandomTrack}
              >
                <span className="vinyl-record" aria-hidden="true">
                  <span className="vinyl-grooves" />
                  <span className="vinyl-label"><i /></span>
                </span>
              </button>
              <div className="tonearm" aria-hidden="true">
                <i className="tonearm-pivot" />
                <i className="tonearm-bar" />
                <i className="tonearm-needle" />
              </div>
            </div>
            <audio
              ref={audioRef}
              preload="none"
              onEnded={playRandomTrack}
              onPause={() => setIsPlaying(false)}
              onPlay={() => setIsPlaying(true)}
            />
            <div className="radio-copy">
              <div aria-live="polite">
                <p>{currentTrack ? "Now spinning" : catalogState === "error" ? "Signal unavailable" : "Record shelf loading"}</p>
                <h3>{currentTrack?.trackName ?? "Press the vinyl"}</h3>
                <span className="track-meta">
                  {currentTrack?.collectionName ?? (catalogState === "ready" ? `${catalog.length} audio tracks ready` : "Building the audio catalogue")}
                </span>
              </div>
              <button type="button" className="radio-button" disabled={catalog.length === 0} onClick={togglePlayback}>
                <span aria-hidden="true">{isPlaying ? "Ⅱ" : "▶"}</span>
                {isPlaying ? "Pause" : currentTrack ? "Resume" : "Play random"}
              </button>
            </div>
            <div className="radio-footnote">
              <p className="radio-note">Audio previews provided courtesy of iTunes. No video player.</p>
              <a href={currentTrack?.trackViewUrl ?? WEEKND_APPLE_MUSIC} target="_blank" rel="noreferrer">
                Listen on Apple Music <Arrow />
              </a>
            </div>
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
