import React from "react";
import LandingPage from "../components/LandingPage";
import Section from "../components/Section";
import { client } from "../lib/sanity";
import BlockContent from "@sanity/block-content-to-react";

const Home = ({ sections }) => (
  <main>
    <LandingPage />
    <div id="home-content" className="home-content">
      {sections
        .sort((a, b) => a.order - b.order)
        .map((section, index) => (
          <Section
            key={section._id}
            id={section.id}
            title={section.title}
            imageSrc={section.imageSrc}
            text={section.text}
            buttonText={section.buttonText}
            buttonLink="/contact-us"
            reverse={index % 2 === 0}
          />
        ))}
    </div>
  </main>
);

export async function getStaticProps() {
  const query = `*[_type == "section"] | order(_createdAt asc) {
    _id,
    id,
    title,
    "imageSrc": imageSrc.asset->url,
    text,
    buttonText,
    order
  }`;
  const sections = await client.fetch(query);
  console.log("this is sections", sections);
  return { props: { sections } };
}

export default Home;
