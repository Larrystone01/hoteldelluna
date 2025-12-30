"use client"; // can be client if you want interactivity, remove if only server

import React from "react";
import Link from "next/link";

export default function SeoPage({
  title,
  intro,
  sections = [],
  ctaText,
  ctaLink,
  schema,
  hidden = false,
}) {
  return (
    <div className={hidden ? "sr-only" : ""}>
      {title && <h1 className="text-3xl font-bold mb-4">{title}</h1>}

      {/* Intro paragraph */}
      {intro && <p className="mb-6">{intro}</p>}

      {sections.map((sec, idx) => (
        <section key={idx} className="mb-6">
          {sec.heading && (
            <h2 className="text-2xl font-semibold mb-2">{sec.heading}</h2>
          )}
          {sec.content && <p className="mb-2">{sec.content}</p>}
          {sec.list && (
            <ul className="list-disc pl-5">
              {sec.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}

      {/* CTA Button */}
      {ctaText && ctaLink && (
        <Link
          href={ctaLink}
          className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {ctaText}
        </Link>
      )}

      {/* JSON-LD structured data */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </div>
  );
}
