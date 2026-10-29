"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "done" | "error">("idle");

  const submit = () => {
    if (!email.includes("@")) return setState("error");
    setState("done");
    // TODO: send `email` to your mailing list (Mailchimp, Resend, Klaviyo...)
  };

  return (
    <section className="sec nl">
      <Reveal>
        <h2 className="sec-title">Join the kingdom.</h2>
        <p>Early access to drops, limited editions and 10% off your first order.</p>
        <div className="nl-row">
          <input
            type="email"
            placeholder="Your email"
            aria-label="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setState("idle");
            }}
          />
          <button type="button" onClick={submit}>
            {state === "done" ? "You're in" : state === "error" ? "Check email" : "Subscribe"}
          </button>
        </div>
      </Reveal>
    </section>
  );
}