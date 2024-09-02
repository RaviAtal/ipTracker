"use client";
import React, { useState } from "react";
import { PinkArrow } from "../common/Icons";
import Swal from "sweetalert2";

const Contact = () => {
  const [userSubmitDetail, setUserSubmitDetail] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserSubmitDetail({
      ...userSubmitDetail,
      [name]: value,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setUserSubmitDetail({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
    Swal.fire({
      title: "Thankyou",
      text: "Will be connect soon",
      icon: "success",
    });
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <div className="flex items-center lg:pr-4 flex-col sm:flex-row">
          <div className="flex flex-col w-full sm:w-1/2 lg:pr-2 xl:pr-4">
            <label
              htmlFor="name"
              className="uppercase text-[#a0a8b3] font-medium"
            >
              Your name
            </label>
            <input
              required
              className="w-full duration-300 focus:border-primary outline-none mt-[14px] h-[55px] bg-[#191b1e] rounded-[6px] border border-[#191b1e] px-3 text-sm text-secondary shadow-input-shadow"
              type="text"
              name="name"
              value={userSubmitDetail.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col w-full mt-4 sm:mt-0 sm:w-1/2 sm:pl-2 xl:pl-4">
            <label
              htmlFor="phone"
              className="uppercase text-[#a0a8b3] font-medium"
            >
              Phone
            </label>
            <input
              required
              className="w-full duration-300 focus:border-primary outline-none mt-[14px] h-[55px] bg-[#191b1e] rounded-[6px] border border-[#191b1e] px-3 text-sm text-secondary shadow-input-shadow"
              type="number"
              name="phone"
              value={userSubmitDetail.phone}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex flex-col w-full mt-4 xl:mt-7 lg:pr-4">
          <label
            htmlFor="email"
            className="uppercase text-[#a0a8b3] font-medium"
          >
            Email
          </label>
          <input
            required
            className="w-full duration-300 focus:border-primary outline-none mt-[14px] h-[55px] bg-[#191b1e] rounded-[6px] border border-[#191b1e] px-3 text-sm text-secondary shadow-input-shadow"
            type="email"
            name="email"
            value={userSubmitDetail.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col w-full mt-4 xl:mt-7 lg:pr-4">
          <label
            htmlFor="subject"
            className="uppercase text-[#a0a8b3] font-medium"
          >
            Subject
          </label>
          <input
            required
            className="w-full duration-300 focus:border-primary outline-none mt-[14px] h-[55px] bg-[#191b1e] rounded-[6px] border border-[#191b1e] px-3 text-sm text-secondary shadow-input-shadow"
            type="text"
            name="subject"
            value={userSubmitDetail.subject}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col w-full my-7 lg:pr-4">
          <label
            htmlFor="message"
            className="uppercase text-[#a0a8b3] font-medium"
          >
            Your message
          </label>
          <textarea
            required
            className="w-full resize-none py-3 duration-300 focus:border-primary outline-none mt-[14px] h-[235px] bg-[#191b1e] rounded-[6px] border border-[#191b1e] px-3 text-sm text-secondary shadow-input-shadow"
            name="message"
            value={userSubmitDetail.message}
            onChange={handleInputChange}
          />
        </div>
        <button className="uppercase group flex items-center hover:bg-card-gradient-translate duration-300 mb-4 gap-2 text-primary font-medium text-base px-[35px] py-[15px] rounded-[6px] bg-card-gradient shadow-box-shadow">
          Send message
          <span className="group-hover:translate-x-2 duration-300">
            <PinkArrow />
          </span>
        </button>
      </form>
    </>
  );
};

export default Contact;
