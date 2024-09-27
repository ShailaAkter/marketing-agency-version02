"use client"
import ContainerBox from "@/components/shared/ContainerBox";
import React, { useState } from "react";
import { IoCallOutline, IoLocationOutline, IoMailOutline } from "react-icons/io5";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/contact-us`, {
        name: formData.name,
        email: formData.email,
        message: formData.message
      });

      if (res && res.data.success) {
        toast.success(res.data.message);
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(`Error in Contact handleSubmit = ${error}`);
      toast.error("Something went wrong while sending your message.");
    }
  };

  return (
    <section className="mb-16 md:mb-20 lg:mb-24 xl:mb-24 bg-orange-50">
      <ContainerBox>
        <div className="pt-20 lg:pt-32 xl:pt-40">
          <div className="flex flex-col justify-center items-center">
            <div className="text-center md:max-w-[500px] xl:max-w-[600px] ">
              <h1 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-secondary-darker font-bold pb-4 md:pb-6 lg:pb-8 xl:pb-10">Contact Us</h1>

              <p className="text-sm lg:text-lg xl:text-lg text-secondary pb-8 md:pb-10 lg:pb-12 xl:pb-14">We will help to develop every smallest thing into a big one for your company.</p>
            </div>
          </div>
          <div className="flex items-center justify-center xl:px-14">
            <div className="max-w-6xl w-full shadow-lg rounded-lg overflow-hidden">
              <div className="grid xl:grid-cols-2 grid-cols-1 bg-none bg-primary">

                {/* Left Side: Let's Talk */}
                <div className="p-8 md:p-10 lg:p-16 xl:p-20 flex flex-col text-white w-full">
                  <h2 className="text-xl md:text-2xl lg:text-4xl xl:text-4xl font-semibold mb-6">Let&apos;s Talk With Us</h2>
                  <p className="text-sm text-white pb-8 md:pb-10 lg:pb-12 xl:pb-14 font-light">
                    Have a project in mind that you think we’d be a great fit for? We’d love to know what you’re thinking.
                  </p>

                  <h1 className="py-2 md:py-2 lg:py-4 xl:py-6 font-semibold text-lg md:text-xl lg:text-xl xl:text-2xl">Contact Info</h1>
                  <div className="flex flex-col space-y-2">
                    <div className="flex justify-start items-center">
                      <span><IoCallOutline /></span>
                      <span className="text-xs md:text-xs lg:text-sm xl:text-sm text-white px-4">Phone Number: (62) 1829017</span>
                    </div>
                    <div className="flex justify-start items-center">
                      <span><IoMailOutline /></span>
                      <span className="text-xs md:text-xs lg:text-sm xl:text-sm text-white px-4">Email: support@devgenius.app</span>
                    </div>
                    <div className="flex justify-start items-center">
                      <span><IoLocationOutline /></span>
                      <span className="text-xs md:text-xs lg:text-sm xl:text-sm text-white px-4">Map Street: John Bucarest St. 199</span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Contact Form */}
                <div className="xl:p-10 md:p-8 p-6 xl:m-8 md:m-8 bg-white lg:rounded-lg xl:rounded-lg">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label className="text-sm text-secondary-darker block font-bold mb-3" htmlFor="name">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                        placeholder="Enter your full name here"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="text-sm text-secondary-darker block font-bold mb-3" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                        placeholder="Enter your email address here"
                      />
                    </div>
                    <div className="mb-6">
                      <label className="text-sm text-secondary-darker block font-bold mb-3" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                        rows="6"
                        placeholder="Write your message here"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="bg-primary text-white px-4 py-3 rounded-md hover:bg-primary-dark transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                  {status && <p className="mt-4 text-green-600">{status}</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerBox>
    </section>
  );
};

export default Contact;
