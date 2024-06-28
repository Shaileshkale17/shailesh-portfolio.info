import React from "react";

const ContactFrom = () => {
  return (
    <div
      className=" flex flex-col flex-wrap justify-centern items-center mt-16 gap-8"
      data-aos="fade-up"
      data-aos-duration="3000"
      id="Contact">
      <form action="" method="post" className="flex flex-col gap-4">
        <div className="flex flex-row gap-7">
          <div className="flex flex-col gap-2 ">
            <label htmlFor="name" className="text-[#22c3e6]">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="h-8 rounded-lg "
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="Email" className="text-[#22c3e6]">
              Email
            </label>
            <input
              type="email"
              name="Email"
              id="Email"
              className="h-8 rounded-lg "
            />
          </div>
        </div>
        <div className="flex flex-row gap-7">
          <div className="flex flex-col gap-2">
            <label htmlFor="Phone" className="text-[#22c3e6]">
              Phone
            </label>
            <input
              type="tel"
              name="Phone"
              id="Phone"
              className="h-8 rounded-lg "
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="Company_Name" className="text-[#22c3e6]">
              Company Name
            </label>
            <input
              type="text"
              name="Company_Name"
              id="Company_Name"
              className="h-8 rounded-lg "
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-[#22c3e6]">
            message
          </label>
          <textarea
            name="message"
            className="w-96 rounded-lg "
            id=""
            cols="5"
            rows="5"></textarea>
        </div>
        <div className="flex flex-row justify-center items-center mt-8">
          <button
            type="submit"
            className="text-[#22c3e6] text-center rounded-lg p-2 "
            style={{ border: "2px solid #fff" }}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactFrom;
