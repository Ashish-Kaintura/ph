// src/app/about-punarnava/page.js

import Aboutmeta from "../_Components/Aboutmeta";

export default function Pages() {
  return (
    <>
      <section>
        <Aboutmeta />
      </section>
    </>
  );
}
export function generateMetadata() {
  return {
    title: "About- Punarnava Resort and Spa",
    description:
      "Punarnava Resort and Spa - best destination wedding places in Dehradun, India.",
    alternates: {
      canonical: "https://thepunarnava.com/about-us",
    },
  };
}
