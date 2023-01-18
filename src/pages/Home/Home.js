import React from "react";
import { SEO, Customer, Nav, Hero, Credits, Footer } from "../../components";
import {
  Image_four,
  Image_six,
  Image_five,
  Image_three,
  Image_one,
  Image_two,
} from "../../Assets/Carbon";

function Home() {
  const credits = [
    {
      avatar: Image_one,
    },
    { avatar: Image_two },
    { avatar: Image_three },
    { avatar: Image_four },
    { avatar: Image_five },
    { avatar: Image_six },
  ];
  return (
    <React.Fragment>
      <SEO title="Home" />
      <Nav />
      <Hero />
      <Credits title credits={credits} spacx />
      <Customer />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
