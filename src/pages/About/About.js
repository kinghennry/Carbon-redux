import React from "react";
import {
  SEO,
  Customer,
  Stats,
  Nav,
  Footer,
  BreadCrumb,
  AboutUs,
  Teams,
} from "../../components";
import { texts } from "./data";

function About() {
  return (
    <React.Fragment>
      <SEO title="About" />
      <Nav bg="bg-white" />
      <BreadCrumb title="About Us" tab_sty />
      <AboutUs
        title="About Us"
        padding
        desc="The world needs a price on carbon"
        item="At TreesPlanted Ltd, we are focused on climate change and the sequstering of carbon. The organization was started as a challenge by  a thirteen and fifteen year old boy and girl that were bold enough to ask the difficult question. “What are you doing to save the enviornment?” We realized that if we couldn’t answer the question easily, then we simply were not doing enough.  It turns out that we were not doing enough then or even now. We also realized that sustainability is not a hobby, more so a life long committment. With recent legislation passed by the Federal Government, that it was time to simplify the process of locating and securing Carbon Credits.  Welcome to easiest way to secure your Carbon Credits. "
      />
      <Stats />
      <AboutUs name="Mission" infos={texts} />
      <AboutUs
        name="Vision"
        item="Our vision is simple. We strive to make the greatest impact on global warming and the greenhouse gas effect. This can be achieved through the support of individuals and corporations alike."
      />
      <div className="container">
        <Customer />
        <Teams />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default About;
