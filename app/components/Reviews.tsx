import Reveal from "./Reveal";

const reviews = [
  { name: "Alex M.", text: "Most comfortable pair I own. The red detail gets compliments everywhere I go." },
  { name: "Sara K.", text: "Clean, minimal and feels premium. Shipping took two days." },
  { name: "Daniel R.", text: "Grip on wet pavement is unreal. Already ordered a second colorway." },
];

export default function Reviews() {
  return (
    <section className="sec" id="reviews">
      <Reveal>
        <span className="eyebrow">Reviews</span>
        <h2 className="sec-title">Worn by the streets.</h2>
      </Reveal>
      <div className="rev-grid">
        {reviews.map((r, i) => (
          <Reveal key={r.name} delay={i * 120} className="rev">
            <div className="st" aria-label="5 out of 5 stars">★★★★★</div>
            <p>{r.text}</p>
            <b>{r.name}</b>
          </Reveal>
        ))}
      </div>
    </section>
  );
}