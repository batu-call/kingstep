"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Reveal from "./Reveal";

const shots = [
  {
    src: "/frames/f_0003.png",
    title: "After dark",
    text: "Wet pavement, warm light. The One keeps its grip when the city slows down.",
    pos: "35% 78%",
  },
  {
    src: "/frames/f_0084.png",
    title: "In motion",
    text: "Light mesh and a soft midsole that keeps up with every stride.",
    pos: "50% 72%",
  },
  {
    src: "/frames/f_0167.png",
    title: "Every step",
    text: "A clean silhouette that looks sharp from the first step to the last.",
    pos: "60% 80%",
  },
];

export default function Lookbook() {
  const [active, setActive] = useState(0);

  return (
    <section className="sec alt" id="lookbook">
      <Reveal>
        <div className="look-head">
          <div>
            <span className="eyebrow">Lookbook</span>
            <h2 className="sec-title">Caught in the wild.</h2>
          </div>
          <div className="look-count" aria-hidden="true">
            0{active + 1}
            <small>/ 0{shots.length}</small>
          </div>
        </div>

        <div className="look-row">
          {shots.map((s, i) => (
            <div
              key={s.src}
              className={`look${active === i ? " on" : ""}`}
              tabIndex={0}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
            >
              <Image
                src={s.src}
                alt={s.title}
                fill
                quality={95}
                sizes="(max-width: 820px) 100vw, 70vw"
                style={{ objectPosition: s.pos }}
              />
              <span className="look-num">0{i + 1}</span>
              <span className="look-vert">{s.title}</span>

              <div className="look-body">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <Link href="#shop" className="look-link" tabIndex={active === i ? 0 : -1}>
                  Shop this look
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="look-foot">
          <p className="body-text">
            Real streets, real movement. No studio, no poses. Just the Kingstep One doing what it
            was built for.
          </p>
          <Link href="#shop" className="cta">Shop the look</Link>
        </div>
      </Reveal>
    </section>
  );
}