"use client";

import Link from "next/link";
import Lenis from "lenis";
import { useEffect, useRef } from "react";

const clamp = (v: number) => Math.min(1, Math.max(0, v));
const seg = (p: number, a: number, b: number) => clamp((p - a) / (b - a));
const ease = (t: number) => 1 - Math.pow(1 - t, 3); // easeOutCubic

// Scroll'un son %3'ünde progress 1'de sabit kalır
const END_HOLD = 0.97;

export default function ScrollHero() {
  const trackRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const dimRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current!;
    const video = videoRef.current!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // smooth scroll
    const lenis = new Lenis({
      lerp: reduce ? 1 : 0.085,
      smoothWheel: true,
    });

    let progress = 0;
    let current = 0;
    let last = performance.now();
    let raf = 0;

    const read = () => {
      const max = track.offsetHeight - window.innerHeight;
      const raw = (window.scrollY - track.offsetTop) / max;
      progress = clamp(raw / END_HOLD);
    };

    // iOS/Safari: videoyu "aç" ki currentTime ile sarılabilsin
    const unlock = () => {
      video.play().then(() => video.pause()).catch(() => {});
      window.removeEventListener("touchstart", unlock);
    };
    window.addEventListener("touchstart", unlock, { passive: true });
    video.pause();

    // parça parça belirme: opacity + aşağıdan yukarı kayma
    const reveal = (el: HTMLElement, t: number, dist = 28) => {
      const e = ease(t);
      el.style.opacity = String(e);
      el.style.transform = `translateY(${(1 - e) * dist}px)`;
    };

    const loop = (now: number) => {
      lenis.raf(now);
      read();

      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      if (video.duration) {
        const target = progress * (video.duration - 0.05);
        // frame-rate bağımsız yumuşatma
        current += (target - current) * (1 - Math.exp(-dt * 10));
        // sadece bir önceki seek bittiyse ve fark bir kareden büyükse sar
        if (!video.seeking && Math.abs(video.currentTime - current) > 1 / 60) {
          video.currentTime = current;
        }
      }

      // giriş başlığı
      titleRef.current!.style.opacity = String(1 - seg(progress, 0, 0.14));
      hintRef.current!.style.opacity = String(1 - seg(progress, 0, 0.05));

      // FİNAL: önce video hafif kararır, sonra ürün adı -> alt yazı -> buton sırayla gelir
      dimRef.current!.style.opacity = String(0.4 * seg(progress, 0.78, 0.94));
      reveal(nameRef.current!, seg(progress, 0.82, 0.92));
      reveal(subRef.current!, seg(progress, 0.87, 0.96));
      reveal(ctaRef.current!, seg(progress, 0.91, 1), 20);
      productRef.current!.style.pointerEvents = progress > 0.93 ? "auto" : "none";

      // alt kenar shop bölümünün rengine erir, sert çizgi kalmaz
      fadeRef.current!.style.opacity = String(seg(progress, 0.9, 1));

      // ilerleme çubuğu sonda kaybolur
      barRef.current!.style.width = `${progress * 100}%`;
      barRef.current!.style.opacity = String(1 - seg(progress, 0.94, 1));

      raf = requestAnimationFrame(loop);
    };

    read();
    window.addEventListener("resize", read);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", read);
      window.removeEventListener("touchstart", unlock);
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={trackRef} className="hero-track">
      <div className="hero-stage">
        <video
          ref={videoRef}
          className="hero-video"
          src="/main_video1_scrub.mp4"
          poster="/hero-poster.png"
          muted
          playsInline
          preload="auto"
          aria-label="A man walks through a dark corridor toward a close-up of his sneakers"
        />
        <div className="hero-vignette" />
        <div ref={dimRef} className="hero-dim" />
        <div ref={fadeRef} className="hero-fade" />

        <div ref={titleRef} className="hero-copy hero-title">
          The street <em>is yours.</em>
        </div>

        <div ref={productRef} className="hero-copy hero-product">
          <div>
            <h2 ref={nameRef} style={{ opacity: 0 }}>Kingstep One</h2>
            <p ref={subRef} style={{ opacity: 0 }}>Engineered mesh, rubber outsole. $289</p>
          </div>
          <Link ref={ctaRef} href="#shop" className="cta" style={{ opacity: 0 }}>
            Shop the collection
          </Link>
        </div>

        <div ref={hintRef} className="hero-hint">scroll</div>
        <div ref={barRef} className="hero-bar" />
      </div>
    </div>
  );
}