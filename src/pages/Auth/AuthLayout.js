import { Signin } from "../../Assets/Images";

function AuthLayout(props) {
  return (
    <>
      <article className="flex flex-col mt-8  gap-10 lg:flex-row lg:gap-4">
        <div className="flex flex-col gap-4 auth_desc lg:w-1/2 lg:mr-5">
          <h1 className="text-black font-normal text-4xl font-body">
            Welcome to our community
          </h1>

          <p className="text-[#4d4d4d] font-normal font-workbody">
            This is an exchange where Individuals, Organizations and Companies
            can purchase Carbon Credits controlled by a one year term contract
            and Landowners can list their land for carbon sequestration.
          </p>

          <div className="auth_img hidden lg:block">
            <img src={Signin} alt="Signin" />
          </div>
        </div>

        <div className="flex flex-col gap-3 lg:w-1/2">
          <h1 className="text-black font-semibold text-2xl">{props.text}</h1>
          <p className="text-[#4D4D4D] font-normal text-base leading-6">
            {props.desc}
          </p>

          <div>{props.children}</div>
        </div>
      </article>
      <div className="auth_img lg:hidden lg:w-1/2">
        <img src={Signin} alt="Signin" />
      </div>
    </>
  );
}

export default AuthLayout;
