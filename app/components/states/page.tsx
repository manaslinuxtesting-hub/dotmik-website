"use client";
import { useEffect, useState } from "react";
import Icons from "@/app/constants/Icons";
import Link from "next/link";
import Image from "next/image";
import 'aos/dist/aos.css'; 

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    phone: "",
    website: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors((prev) => ({ ...prev, [name]: "" })); // clear error when typing
  };

  // validation
  const validate = () => {
    let newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }
    if (formData.website.trim() && !/^https?:\/\/.+\..+/.test(formData.website)) {
      newErrors.website = "Invalid website URL";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted ✅", formData);
      // yaha API call bhi kar sakte ho
      // await fetch("/api/contact", { method:"POST", body: JSON.stringify(formData) })
      alert("Form submitted successfully ✅");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex-1 border border-white rounded-[14px] p-10 border-y-[6px] mt-10 md:mt-0" data-aos="fade-up"
    >
      <div className="flex gap-10 flex-wrap">
        <div className="flex flex-col flex-1">
          <label htmlFor="firstName" className="text-white">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter Your First Name"
            className="text-white border border-white p-2 rounded-lg mt-2.5 shadow-[0px_1px_4px_0px_#fff]"
          />
          {errors.firstName && (
            <span className="text-red-500 text-sm mt-1">{errors.firstName}</span>
          )}
        </div>
        <div className="flex flex-col flex-1">
          <label htmlFor="phone" className="text-white">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter Your Phone No."
            className="text-white border border-white p-2 rounded-lg mt-2.5 shadow-[0px_1px_4px_0px_#fff]"
          />
          {errors.phone && (
            <span className="text-red-500 text-sm mt-1">{errors.phone}</span>
          )}
        </div>
      </div>

      <div className="flex gap-10 mt-8 flex-wrap">
        <div className="flex flex-col flex-1">
          <label htmlFor="website" className="text-white">
            Your Website Link
          </label>
          <input
            type="link"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="https://www.dotmik.com"
            className="text-white border border-white p-2 rounded-lg mt-2.5 shadow-[0px_1px_4px_0px_#fff]"
          />
          {errors.website && (
            <span className="text-red-500 text-sm mt-1">{errors.website}</span>
          )}
        </div>

        <div className="flex flex-col flex-1">
          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            className="text-white border border-white p-2 rounded-lg mt-2.5 shadow-[0px_1px_4px_0px_#fff]"
          />
          {errors.email && (
            <span className="text-red-500 text-sm mt-1">{errors.email}</span>
          )}
        </div>
      </div>

      <div className="flex flex-col flex-1 mt-8 flex-wrap">
        <label htmlFor="message" className="text-white">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter Your Message"
          className="text-white border border-white p-2 rounded-lg mt-2.5 shadow-[0px_1px_4px_0px_#fff]"
        ></textarea>
        {errors.message && (
          <span className="text-red-500 text-sm mt-1">{errors.message}</span>
        )}
      </div>

      <button
        type="submit"
        className="flex items-center gap-2 banner-button mt-8 w-fit shadow-[0px_1px_4px_0px_#fff] px-6 py-2 rounded-lg  cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
}

const States = () => {
  return (
    <section className="relative h-banner contact-banner pt-40 ">
      <h1 className="text-center pt-10 lg:pb-8 pb-0 leading-none text-white lg:text-5lg !font-bold text-5lg  px-5" data-aos="fade-up">
        Connect with us
      </h1>

      <div className="w-full h-full mx-auto md:w-[1350px] mt-8  pb-30">
        <div className="flex flex-wrap px-8 md:px-0">
          {/* Card 1 */}
          <div className="border border-white rounded-lg px-8 py-8 flex-1 flex flex-col justify-between  shadow-[0px_1px_4px_0px_#fff] card-hover" data-aos="fade-up">
            <div className="flex flex-col">
              <Image
                src={Icons.support}
                alt="support"
                width={35}
                height={35}
                className="w-[40px] h-[40px] md:w-[35px] md:h-[35px] mb-2"
              />
              <h4 className="text-white text-large-24 font-bold mb-2">Customer Support</h4>
              <p className="text-white  text-small font-normal">
               Reach out to our round-the-clock helpdesk for any issues with our services.
              </p>
            </div>
            <Link
              href="/"
              className="flex items-center gap-2 banner-button mt-8 w-fit border border-white"
            >
              Get Support
            </Link>
          </div>

          {/* Card 2 */}
          <div className="border border-white rounded-lg px-8 py-8 flex-1 flex flex-col justify-between  shadow-[0px_1px_4px_0px_#fff] card-hover" data-aos="fade-up">
            <div className="flex flex-col">
              <Image
                src={Icons.sales}
                alt="sales"
                width={35}
                height={35}
                className="w-[40px] h-[40px] md:w-[35px] md:h-[35px] mb-2"
              />
              <h4 className="text-white text-large-24 font-bold mb-2">Sales</h4>
              <p className="text-white  text-small font-normal">
                Our sales experts are here to discuss how our solutions can meet your business banking requirements and address any concerns

              </p>
            </div>
            <Link
              href="/"
              className="flex items-center gap-2 banner-button mt-8 w-fit border border-white"
            >
              Contact Sales
            </Link>
          </div>

          {/* Card 3 */}
          <div className="border border-white rounded-lg px-8 py-8 flex-1 flex flex-col justify-between  shadow-[0px_1px_4px_0px_#fff] card-hover" data-aos="fade-up">
            <div className="flex flex-col">
              <Image
                src={Icons.partnership}
                alt="partnership"
                width={35}
                height={35}
                className="w-[40px] h-[40px] md:w-[35px] md:h-[35px] mb-2"
              />
              <h4 className="text-white  text-large-24 font-bold mb-2">
                Alliance Partnership
              </h4>
              <p className="text-white text-small font-normal">
                Join us to discover collaboration possibilities for advancing and innovating in digital banking.

              </p>
            </div>
            <Link
              href="/"
              className="flex items-center gap-2 banner-button mt-8 w-fit border border-white"
            >
              Partner Now
            </Link>
          </div>
        </div>
        <div className="border  border-white mt-6 rounded-t-none rounded-lg px-8 py-8 flex-1 flex flex-row items-center justify-between  shadow-[0px_1px_4px_0px_#fff] card-hover" data-aos="fade-up">
            <div className="flex flex-row gap-5 items-center">
              <Image
                src={Icons.partnership}
                alt="partnership"
                width={35}
                height={35}
                className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
              />
              <div className="">
                <h4 className="text-white  text-large-24 font-bold ">
                    Report Fraud
              </h4>
              <p className="text-white text-small font-normal">
                Report any suspicious activity or unusual transactions immediately to Instantpay.
              </p>
              </div>
              
            </div>
            <Link
              href="/"
              className="flex items-center gap-2 banner-button w-fit border border-white">
               Report Here   
            </Link>
          </div>

        <div className="flex md:pt-24 pt-10 flex-wrap px-8 md:px-0">
          <div className="relative flex-1">
            <div className="bg-left-effect"></div>
            <h2 className="mb-10 text-5lg !font-bold text-white">Our   <span className="text-heading">Office </span> </h2>
            <div className="flex flex-col ">
              <h4 className=" text-large-24  font-semibold text-heading" data-aos="fade-up">Contact Info</h4>
              <Link
                href="tel:+9355880074"
                className="text-white hover:text-gray-300 transition my-4 mb-2 text-tiny-2xl font-normal" data-aos="fade-up"
              >
                +91-9355880074
              </Link>
              <Link
                href="mailto:info@dotmik.com"
                className="text-white hover:text-gray-300 transition  text-tiny-2xl font-normal" data-aos="fade-up"
              >
                info@dotmik.com
              </Link>
            </div>
            <div className="flex flex-col gap-4 mt-10">
              <h4 className="text-heading  text-large-24  font-semibold" data-aos="fade-up">Visit our office</h4>
              <Link
                href="#"
                className="text-white hover:text-gray-300 transition  text-tiny-2xl font-normal" data-aos="fade-up">
                DotMik, G-Block, Street No.8, Prem Nagar, Najafgarh, <br /> South
                West Delhi, New Delhi 110043
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative flex-1  md:mt-0">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default States;
