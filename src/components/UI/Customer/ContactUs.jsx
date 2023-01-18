function ContactUs() {
  return (
    <section className="mt-[40px] bg-green mb-[300px] md:mt-[200px] md:mb-[260px]">
      <div className="container relative md:flex-row">
        <div className=" flex flex-col ">
          <div className="flex_Dir gap-[20px] pb-[400px] pl-[30px] pt-[30px] md:w-1/2 md:pb-[100px]">
            <div className="flex_Dir gap-[8px]">
              <h1 className="text-white font-light">SUPPORT</h1>
              <h1 className="text-white font-extralight">
                info@carboncreditlistings.com
              </h1>
              <h1 className="text-white font-extralight">
                Office: 832.952.0733
              </h1>
            </div>
            <div className="flex flex-col gap-[8px]">
              <h1 className="text-white font-light">AREA</h1>

              <h1 className="text-white font-extralight">
                2717 Commercial Center Blvd., Katy, TX 77494
              </h1>
            </div>
          </div>

          <form className="rounded bg-white p-5 shadow-md ml-[10%] absolute top-[40%] w-[80%] md:w-[40%] md:right-[10%] md:top-[-50%]">
            <div className="flex flex-col gap-1 mb-3">
              <label className="text-black font-medium">First Name</label>
              <input placeholder="Enter First Name" className="inputs" />
            </div>
            <div className="flex flex-col gap-1 mb-3">
              <label className="text-black font-medium">Last Name</label>
              <input placeholder="Enter Last Name" className="inputs" />
            </div>
            <div className="flex flex-col gap-2 mb-3">
              <label className="text-black font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter email"
                className="inputs"
              />
            </div>
            <div className="flex flex-col gap-2 mb-3">
              <label className="text-black font-medium">Phone</label>
              <input placeholder="Enter Phone" className="inputs" />
            </div>

            <div className="flex flex-col gap-2 mb-3">
              <label className="font-medium text-black">Land Address</label>
              <textarea cols="10" rows="4" className="inputs"></textarea>
            </div>
            <div>
              <button className="px-6 py-4 click_btn flex items-center">
                CONTACT US NOW !
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
