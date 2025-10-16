import * as React from "react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "react-phone-input-2/lib/bootstrap.css";

import { FaRegUser } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";
import { FaSquareXTwitter, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import bg from "../../assets/contact/contact-banner.avif";
import contact from "../../assets/contact/contact.jpg";
import fame from "../../assets/about/fame.png";
import shape2 from "../../assets/about/shape-1.png";
import captcha from "../../assets/contact/logo_48.png";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handlePhoneChange = (value: any) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  return (
    <div
      className="bg-gray-50 flex items-center justify-center p-4 sm:p-8 relative"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <div className="absolute bottom-5 left-2 sm:left-10 top-2 sm:top-3">
        <img src={fame} alt="" className="w-[30px] sm:w-[60px]" />
      </div>
      <div className="absolute right-0 bottom-0 hidden sm:block">
        <img src={shape2} alt="" className="w-[150px] sm:w-[200px]" />
      </div> */}

      <div className="max-w-6xl w-full bg-white border-2 border-gray-200 rounded-2xl shadow-xl flex flex-col lg:flex-row overflow-hidden">
        <div className="bg-gradient-to-br from-[#004aad] via-[#8c8af8] to-indigo-700 text-white p-6 sm:p-8 w-full lg:w-1/2 relative">
          <img
            src={contact}
            alt="Contact Us"
            className="w-full rounded-lg mb-6"
          />
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-6 text-base">
            Do you have questions or comments? Don’t hesitate to contact us.
          </p>

          <div className="flex items-start gap-4 mb-4">
            <div className="bg-pink-500 p-3 rounded-full text-lg">
              <FaPhone />
            </div>
            <div>
              <p className="text-pink-200 text-sm font-semibold">
                PHONE NUMBER
              </p>
              <p className="text-base font-medium text-white">
                +91 9978078075, +91 9879791280
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-6">
            <div className="bg-sky-400 p-3 rounded-full text-lg">
              <MdEmail />
            </div>
            <div>
              <p className="text-sky-200 text-sm font-semibold">
                EMAIL ADDRESS
              </p>
              <p className="text-base font-medium text-white">
                info@edutechera.com
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-4">
            {[
              { icon: <FaFacebookF />, color: "#1877F2" },
              { icon: <FaSquareXTwitter />, color: "#000000" },
              {
                icon: <FaInstagram />,
                color: "linear-gradient(to right, #feda75, #d62976, #962fbf)",
              },
              { icon: <FaLinkedin />, color: "#0077B5" },
              { icon: <FaYoutube />, color: "#FF0000" },
              { icon: <FaPinterest />, color: "#E60023" },
            ].map((item, i) => (
              <a
                key={i}
                href="#"
                className={`p-3 rounded-full text-white hover:scale-110 transition`}
                style={{ background: item.color }}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="p-6 sm:p-8 w-full lg:w-1/2">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">Contact Us</h2>
          <p className="text-sm text-gray-500 mb-6">
            Any question or remarks? Just write us a message!
          </p>

          <form className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-full sm:w-1/2">
                <FaRegUser className="mr-2" />
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full outline-none"
                />
              </div>
              <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-full sm:w-1/2">
                <AiOutlineMail className="mr-2" />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full outline-none"
                />
              </div>
            </div>

            <PhoneInput
              country={"in"}
              value={formData.phone}
              onChange={handlePhoneChange}
              enableSearch
              inputClass="!w-full !py-3 !pl-12 !pr-3 !rounded border !border-gray-300 focus:!outline-none"
              buttonClass="!border-r !border-gray-300"
              containerClass="!w-full"
            />

            <textarea
              rows={2}
              placeholder="Subject (e.g., Partnership or Tablet Issue)"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              className="w-full border border-gray-300 rounded-md p-3 placeholder-gray-400 outline-none"
            />

            <textarea
              rows={4}
              placeholder="How can we help you?"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full border border-gray-300 rounded-md p-3 placeholder-gray-400 outline-none"
            />

            <div className="border border-gray-300 rounded-md p-4 bg-gray-50">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-gray-800">
                  <input type="checkbox" className="w-4 h-4 accent-blue-500" />
                  I'm not a robot
                </label>
                <img
                  src={captcha}
                  alt="reCAPTCHA"
                  className="h-10 mt-2 sm:mt-0"
                />
              </div>
              <div className="flex justify-between items-center mt-2 text-[10px] text-gray-500 flex-wrap">
                <span>reCAPTCHA</span>
                <div className="flex gap-2 underline">
                  <a href="" target="_blank" rel="noreferrer">
                    Privacy
                  </a>
                  <a href="" target="_blank" rel="noreferrer">
                    Terms
                  </a>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto bg-gradient-to-r from-sky-400 to-blue-500 text-white px-6 py-2 rounded-full shadow-md hover:from-sky-500 hover:to-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
