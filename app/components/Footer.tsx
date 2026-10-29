import Link from "next/link";

const cols = [
  { title: "Shop", links: [["New arrivals", "#shop"], ["Kingstep One", "#spotlight"], ["Limited", "#shop"]] },
  { title: "Brand", links: [["Our story", "#story"], ["Lookbook", "#lookbook"], ["Reviews", "#reviews"]] },
  { title: "Help", links: [["Shipping", "#"], ["Returns", "#"], ["Contact", "#"]] },
];

export default function Footer() {
  return (
    <>
      <footer className="foot">
        <div>
          <div className="logo">Kingstep</div>
          <p>Premium sneakers for the street.</p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h4>{c.title}</h4>
            {c.links.map(([label, href]) => (
              <Link key={label} href={href}>{label}</Link>
            ))}
          </div>
        ))}
      </footer>
      <div className="copy2">© 2026 Kingstep. All rights reserved.</div>
    </>
  );
}