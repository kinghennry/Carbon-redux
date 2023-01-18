import React from "react";
import { SEO, Nav, Footer, BreadCrumb, ContactUs } from "../../components";

function Contact() {
  return (
    <React.Fragment>
      <SEO title="Contact" />
      <Nav />
      <BreadCrumb
        title="Contact Us"
        desc="If you have any question regarding our services or need support using our platform, please do not hessitate to contact us either by email of by giving a member of our staff a call."
      />
      <ContactUs />
      <Footer />
    </React.Fragment>
  );
}

export default Contact;
