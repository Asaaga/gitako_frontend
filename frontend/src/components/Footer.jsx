import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaGithubSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-black mx-auto py-16 px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-300">
      <div className="flex flex-col items-start">
        <img height={200} width={200} src="/logo.jpeg" alt="Logo" />
        <p className="py-4">
          Empowering farmers through knowledge sharing and community support.
          Join us in transforming agriculture with innovation and collaboration.
        </p>
        <div className="flex justify-between w-full my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
        </div>
      </div>
      <div className="md:col-span-2 lg:col-span-2 flex flex-col lg:flex-row justify-between mt-6">
        <div className="mb-4 lg:mb-0">
          <h6 className="font-medium text-gray-400">Resources</h6>
          <ul>
            <li className="py-2 text-base">Farming Guides</li>
            <li className="py-2 text-base">Expert Articles</li>
            <li className="py-2 text-base">Webinars</li>
            <li className="py-2 text-base">Community Events</li>
          </ul>
        </div>
        <div className="mb-4 lg:mb-0">
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-base">FAQs</li>
            <li className="py-2 text-base">Contact Us</li>
            <li className="py-2 text-base">Help Center</li>
            <li className="py-2 text-base">Feedback</li>
          </ul>
        </div>
        <div className="mb-4 lg:mb-0">
          <h6 className="font-medium text-gray-400">About Us</h6>
          <ul>
            <li className="py-2 text-base">Our Story</li>
            <li className="py-2 text-base">Blog</li>
            <li className="py-2 text-base">Careers</li>
            <li className="py-2 text-base">Press</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-base">Privacy Policy</li>
            <li className="py-2 text-base">Terms of Service</li>
            <li className="py-2 text-base">Cookies Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
