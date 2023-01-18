import React from "react";
import { SEO, Footer, Header } from "../../components";
import { AiOutlineArrowRight } from "react-icons/ai";

function CustomerPurchase() {
  return (
    <React.Fragment>
      <SEO title="Customer Purchase" />
      <section className="container">
        <Header url="/login" span="Sign In" text="Already have an account?" />
        <h1 className="text-3xl text-black font-semibold my-2">
          Carbon Credit Purchaser
        </h1>

        <form className="flex flex-col gap-4 px-5">
          <h1 className="db_header ">Carbon Credit Buyer Information</h1>
        </form>
      </section>
      <Footer />
    </React.Fragment>
  );
}

export default CustomerPurchase;
