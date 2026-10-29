"use client";

import type { MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

const specs = [
  ["Upper", "Engineered mesh"],
  ["Sole", "Rubber outsole"],
  ["Fit", "True to size"],
  ["Weight", "310 g"],
];

function onMove(e: MouseEvent<HTMLDivElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
  e.currentTarget.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
}

export default function Spotlight() {
  return (
    <section className="sec alt spot" id="spotlight">
      <Reveal className="spot-art">
        <div className="spot-stage" onMouseMove={onMove}>
          <div className="spot-glow" />
          <div className="spot-shadow" />
          <Image
            src="/frames/king-one.png"
            alt="Kingstep One low top sneaker"
            width={900}
            height={400}
            sizes="(max-width: 820px) 90vw, 50vw"
            className="spot-img"
          />
        </div>
      </Reveal>

      <Reveal delay={150}>
        <span className="eyebrow">Featured</span>
        <h2 className="sec-title">Kingstep One</h2>
        <p className="body-text">
          Our signature low top. Breathable mesh, a clean red accent and a sole built for long city
          walks.
        </p>
        <ul className="specs">
          {specs.map(([k, v]) => (
            <li key={k}>
              <span>{k}</span>
              <b>{v}</b>
            </li>
          ))}
        </ul>
        <div className="spot-buy">
          <span className="price">$289</span>
          <Link href="#shop" className="cta">Add to cart</Link>
        </div>
      </Reveal>
    </section>
  );
}