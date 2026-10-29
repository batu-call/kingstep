"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import { FILTERS, products } from "../lib/products";

export default function ProductSection() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["value"]>("all");
  const visible = products.filter((p) => filter === "all" || p.type === filter);

  return (
    <section className="shop" id="shop">
      <div className="shophead">
        <h3>New arrivals</h3>
        <div className="filters">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              type="button"
              className={filter === f.value ? "on" : ""}
              onClick={() => setFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>
      <div className="grid">
        {visible.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}