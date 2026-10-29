import Image from "next/image";
import Reveal from "./Reveal";

const stats = [
  { n: "48h", l: "Fast delivery" },
  { n: "30", l: "Day free returns" },
  { n: "2Y", l: "Warranty" },
];

export default function Story() {
  return (
    <section className="sec story" id="story">
      <Reveal>
        <span className="eyebrow">Our story</span>
        <h2 className="sec-title">Made for the ones who never walk past.</h2>
        <p className="body-text">
          Kingstep started with a simple idea: a sneaker should feel as good as the street looks at
          night. Every pair is designed around movement, light materials and a silhouette that
          stands out without shouting.
        </p>
        <div className="stats">
          {stats.map((s) => (
            <div key={s.l}>
              <b>{s.n}</b>
              <span>{s.l}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={150} className="story-img">
        <Image
          src="/frames/f_0118.png"
          alt="Kingstep campaign"
          fill
          quality={95}
          sizes="100vw"
        />
      </Reveal>
    </section>
  );
}