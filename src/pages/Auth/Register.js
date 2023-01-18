import React from "react";
import { SEO, Footer, Header } from "../../components";
import AuthLayout from "./AuthLayout";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight, AiOutlineUser } from "react-icons/ai";
import Polygon_two from "./Polygon_two.svg";
import { FaHandsHelping } from "react-icons/fa";

function Register() {
  const options = [
    { title: "Land Owner", path: "/land-owner", icon: <AiOutlineUser /> },
    {
      title: "Carbon Credit Buyer",
      path: "/customer-purchase",
      icon: <FaHandsHelping />,
      right: true,
    },
  ];
  return (
    <React.Fragment>
      <SEO title="Carbon || Register" />
      <div className="bg">
        <section className="container">
          <Header url="/login" span="Sign In" text="Already have an account?" />
          <AuthLayout
            text="Sign Up"
            desc="Click one of the links below to sign in or learn more. It only
                takes a few minutes to register."
          >
            <div className="flex flex-col gap-4 mt-6">
              {options.map((item, i) => {
                return (
                  <Link
                    key={i}
                    to={item.path}
                    className="div_sty flex gap-3 p-8 animate hover:bold_sty border-green"
                  >
                    <figure className="relative">
                      <div className="w-20">
                        <img src={Polygon_two} alt="polygon" />
                      </div>
                      <span className="text-green text-xl top-[30%] ml-7 abs md:top-[40%]">
                        {item.icon}
                      </span>
                    </figure>

                    <div className="flex flex-col ml-4 gap-0.5">
                      <p className="font-semibold">{item.title}</p>
                      {item.right && (
                        <AiOutlineArrowRight className="text-[#008c36] text-xl ml-auto" />
                      )}
                      <p className="text-sm text-[#4D4D4D] font-normal">
                        Click here to register and review our specific and
                        verifiable Carbon Credits
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </AuthLayout>
        </section>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Register;
