"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import { COLORWAYS, type Product } from "../lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const [bg, setBg] = useState<string>(COLORWAYS[0].bg);
  const [added, setAdded] = useState(false);
  const [broken, setBroken] = useState(false);

  const add = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  const hasImage = Boolean(product.image) && !broken;

  return (
    <article className="card" style={{ "--bg": bg } as CSSProperties}>
      <span className={`tag${product.tagHot ? " hot" : ""}`}>{product.tag}</span>

      <div className={`pic${hasImage ? " has-img" : ""}`}>
        {hasImage ? (
          <Image
            src={product.image as string}
            alt={product.name}
            fill
            quality={90}
            sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 480px"
            onError={() => setBroken(true)}
            style={{ objectFit: "cover" }}
          />
        ) : (
          <svg viewBox="0 0 900 400" aria-hidden="true">
            <use href="#sneaker" />
          </svg>
        )}
      </div>

      <div className="info">
        {product.name}
        <small>${product.price}</small>
      </div>
      <div className="meta">{product.meta}</div>

      <div className="row">
        <div className="sw">
          {COLORWAYS.map((c) => (
            <button
              key={c.name}
              type="button"
              className={bg === c.bg ? "on" : ""}
              style={{ background: c.bg }}
              aria-label={c.name}
              aria-pressed={bg === c.bg}
              onClick={() => setBg(c.bg)}
            />
          ))}
        </div>
        <button type="button" className="add" onClick={add}>
          {added ? "Added" : "Add to cart"}
        </button>
      </div>
    </article>
  );
}