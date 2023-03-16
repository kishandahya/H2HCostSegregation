// pages/index.js

import React from 'react';
import LandingPage from '../components/LandingPage';
import Section from '../components/Section';

const Home = () => (
  <main>
    <LandingPage />
    <div id="home-content" className="home-content">
    <Section
        id="about"
        title="About Us"
        imageSrc="/assets/hotelexterior.jpg"
        text="Our team of experts specializes in hotel cost segregation services, helping hotel owners like you to
        maximize tax savings and improve cash flow. With our in-depth knowledge of the industry and the latest tax
        laws, we provide comprehensive cost segregation studies tailored to your hotel's unique needs."
        buttonText="Learn More"
        buttonLink="/contact-us"
        reverse={false}
      />
      <Section
        id="work"
        title="Our Work"
        imageSrc="/assets/tropicalbedroom.jpg"
        text="We have successfully completed cost segregation studies for a variety of hotel types, from small boutique
        properties to large luxury resorts. Our clients have realized significant tax savings and improved cash flow
        through our detailed analysis and strategic planning."
        buttonText="See Our Projects"
        buttonLink="/contact-us"
        reverse={true}
      />
      <Section
        id="team"
        title="Our Team"
        imageSrc="/assets/sideofbed.jpg"
        text="Our experienced team of professionals includes engineers, tax specialists, and industry experts who are
        dedicated to helping you achieve the maximum tax savings for your hotel. We work closely with you to
        understand your hotel's unique needs and develop a customized cost segregation strategy."
        buttonText="Meet the Team"
        buttonLink="/contact-us"
        reverse={false}
      />
      <Section
        id="blog"
        title="Blog"
        imageSrc="/assets/standardroom.jpg"
        text="Stay up to date with the latest news, trends, and insights in hotel cost segregation and tax savings
        strategies. Our blog offers valuable information and resources to help you make informed decisions and
        optimize your hotel's financial performance."
        buttonText="Read Our Blog"
        buttonLink="/contact-us"
        reverse={true}
      />
      <Section
        id="contact"
        title="Contact Us"
        imageSrc="/assets/poolside.jpg"
        text="Ready to start maximizing your hotel's tax savings? Get in touch with us today to schedule a consultation
        and learn more about our hotel cost segregation services. We look forward to helping you achieve your
        financial goals."
        buttonText="Contact Us"
        buttonLink="/contact-us"
        reverse={false}
      />
    </div>
  </main>
);

export default Home;
