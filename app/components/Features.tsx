import Reveal from "./Reveal";

const features = [
  { n: "01", t: "Engineered mesh", d: "Light, breathable and tough enough for daily wear." },
  { n: "02", t: "Cushioned step", d: "A soft midsole that keeps every stride comfortable." },
  { n: "03", t: "Street grip", d: "Rubber outsole that holds on wet pavement." },
  { n: "04", t: "Built to last", d: "Reinforced stitching in every high-stress area." },
];

export default function Features() {
  return (
    <section className="sec features" id="features">
      <Reveal>
        <span className="eyebrow">Details</span>
        <h2 className="sec-title">Every detail, on purpose.</h2>
      </Reveal>
      <div className="feat-grid">
        {features.map((f, i) => (
          <Reveal key={f.n} delay={i * 100} className="feat">
            <b>{f.n}</b>
            <h3>{f.t}</h3>
            <p>{f.d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}