import * as React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaLinkedinIn,
  FaYoutube,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { HiOutlineBuildingOffice2, HiOutlineArrowUp } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import Container from "../components/Container";
import footerLogo from "../assets/footer-logo.png";
import seawindLogo from "../assets/footerlogo.png";
// If using React Router, uncomment the next line
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-[#111827] text-white relative z-10">
      {/* Main Content */}
      <div className="py-10 sm:py-12 md:py-14 border-b border-gray-700">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white border-b border-gray-600 pb-2">
                Quick Links
              </h4>
              <ul className="space-y-2 text-base text-gray-400">
                <li><a href="/about" className="hover:text-white">About Us</a></li>
                <li><a href="/product" className="hover:text-white">Features</a></li>
                <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
                <li><a href="/blog" className="hover:text-white">Blog</a></li>
                <li><a href="/faq" className="hover:text-white">FAQs</a></li>
                <li><a href="/media" className="hover:text-white">News/Media</a></li>
                <li><a href="/video" className="hover:text-white">Video</a></li>
              </ul>
            </div>

            {/* Research */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white border-b border-gray-600 pb-2">
                Research
              </h4>
              <ul className="space-y-2 text-base text-gray-400">
                <li><a href="/contact" className="hover:text-white">Inquiry</a></li>
                {/* <li><a href="/notebook" className="hover:text-white">Order Notebook</a></li> */}
                <li><a href="/affilate" className="hover:text-white">B2B Partner Program</a></li>
                <li><a href="/page/payment-policy" className="hover:text-white">Payment Policy</a></li>
                <li><a href="/page/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="/page/terms-condition" className="hover:text-white">Terms & Condition</a></li>
                <li><a href="/page/refund" className="hover:text-white">Refund Policy</a></li>
              </ul>
            </div>

            {/* Get in Touch */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white border-b border-gray-600 pb-2">
                Get in Touch
              </h4>
              <div className="space-y-4 text-base text-gray-400">
                <div className="flex items-start gap-3">
                  <HiOutlineBuildingOffice2 className="text-[#004aad] mt-1" />
                  <span>4000 Central Florida Blvd. Orlando, Florida, 32816</span>
                </div>
                <div className="flex items-start gap-3">
                  <FaPhoneAlt className="text-[#004aad] mt-1" />
                  <span>+03601 885399</span>
                </div>
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-[#004aad] mt-1" />
                  <span>Ahmedabad</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white border-b border-gray-600 pb-2">
                Contact
              </h4>
              <div className="flex items-start gap-4 mb-6 sm:mb-8">
                <div className="bg-pink-500 p-3 rounded-full text-lg">
                  <FaPhone />
                </div>
                <div>
                  <p className="text-pink-200 text-sm font-semibold">PHONE NUMBER</p>
                  <p className="text-base font-medium text-white">+91 9978078075, +91 9879791280</p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-6 sm:mb-8">
                <div className="bg-[#004aad] p-3 rounded-full text-lg">
                  <MdEmail />
                </div>
                <div>
                  <p className="text-[#004aad] text-sm font-semibold">EMAIL ADDRESS</p>
                  <p className="text-base font-medium text-white">info@edutechera.com</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Social + Bottom Section */}
      <div className="py-6 px-4 sm:px-0 bg-[#0f172a]">
        <Container>
          <div className="flex flex-col sm:flex-col md:flex-row md:items-center justify-between gap-6 text-center sm:text-left">
            {/* Social Icons */}
            <div className="flex gap-3 sm:gap-4 justify-center md:justify-start flex-wrap">
              {[
                { icon: FaFacebookF, link: "https://facebook.com", bg: "bg-[#3b5998]", color: "hover:bg-white hover:text-[#3b5998]" },
                { icon: FaInstagram, link: "https://instagram.com", bg: "bg-gradient-to-r from-pink-500 to-yellow-500", color: "hover:opacity-80" },
                { icon: FaLinkedinIn, link: "https://linkedin.com", bg: "bg-[#0077b5]", color: "hover:bg-white hover:text-[#0077b5]" },
                { icon: FaTwitter, link: "https://twitter.com", bg: "bg-[#1DA1F2]", color: "hover:bg-white hover:text-[#1DA1F2]" },
                { icon: FaYoutube, link: "https://youtube.com", bg: "bg-[#FF0000]", color: "hover:bg-white hover:text-[#FF0000]" },
              ].map(({ icon: Icon, link, bg, color }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 flex items-center justify-center text-white rounded-full ${bg} ${color} transition-colors`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-400 text-center md:text-left">
              © 2025 Edutech Era. All rights reserved. Powered by{" "}
              <a
                href="https://seawindsolution.com/"
                className="text-blue-400 hover:text-blue-200 ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Seawind Solution
              </a>
              <img
                src={seawindLogo}
                alt="Seawind Logo"
                className="inline h-4 ml-2 animate-spin"
              />
            </div>

            {/* Bottom Links */}
            <div className="flex flex-wrap gap-2 sm:gap-4 text-sm text-gray-400 justify-center md:justify-end mt-2 md:mt-0">
              <a href="/terms-conditions" className="hover:text-white">Terms of Service</a>
              <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
              <a href="/blog" className="hover:text-white">Visit Blog</a>
            </div>
          </div>
        </Container>
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-20 right-4 sm:right-5 md:right-6 z-50">
        <a
          href="#top"
          className="w-10 h-10 flex items-center justify-center bg-[#004aad] text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors"
        >
          <HiOutlineArrowUp className="w-5 h-5" />
        </a>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://api.whatsapp.com/send/?phone=919978078075&text=Hello&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="fixed bottom-4 right-4 sm:right-5 md:right-6 z-50">
          <div className="w-10 h-10 flex items-center justify-center bg-[#10db3c] text-white rounded-full shadow-lg transition-colors">
            <FaWhatsapp className="w-6 h-6" />
          </div>
        </div>
      </a>
    </footer>
  );
};

export default Footer;
