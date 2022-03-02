import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "../assets/facebook.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import TwitterIcon from "../assets/twitter.svg";
import InstagramIcon from "../assets/instagram.svg";

function Footer() {
  return (
    <>
      <div className="bg-black w-full h-auto md:h-auto lg:h-80 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-12 md:px-20 py-14">
        <div className="">
          <h5 className="text-white font-semibold text-2xl">
            Customer Support
          </h5>
          <p className="text-gray-400 text-md font-medium pr-5 mt-2">
            If you have any questions or want to know more about Waya PayChat
            and our services, check our FAQ or contact our Customer Support
          </p>

          <div class="btn-container mt-5 flex flex-col md:flex-row rounded">
            <button class="btn-register2 rounded text-sm shadow">
              CONTACT US
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                  fill="white"
                />
              </svg>
            </button>

            <div className="flex items-center gap-10 px-4 mt-10 md:mt-0 lg:mt-0">
              <a href="/#">
                <img src={TwitterIcon} alt="" />
              </a>
              <a href="/#">
                <img src={FacebookIcon} alt="" />
              </a>
              <a href="/#">
                <img src={InstagramIcon} alt="" />
              </a>
              <a href="/#">
                <img src={LinkedinIcon} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="md:pl-0 lg:pl-24 md:block lg:block h-auto">
          <p className="text-gray-400 text-md font-medium pr-5 mt-10">
            Be the First to Know About our Promotions, Giveaways, and Amazing
            Business Offers
          </p>
          <div className="relative flex mt-6 flex-col lg:flex-row lg:items-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="pl-4 py-2 rounded-tr-0 rounded-br-0 border border-white bg-transparent text-white"
            />
            <button class="bg-white font-medium text-primary-theme px-3 py-3 mt-4 lg:mt-0 flex items-center justify-center text-white rounded-bl-0 rounded-tl-0 text-sm shadow">
              CONTACT US
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="px-8 md:px-20 mt-10 h-auto">
        <hr />
      </div>
      <div class="px-8 h-auto md:px-20 mb-16 md:mb-4 py-4 flex flex-col md:flex-row items-center justify-between">
        <p>Copyright © Waya 2020 All rights reserved</p>
        <p className="flex gap-6">
          <Link
            to="/#about"
            className="text-primary-theme font-semibold text-sm"
          >
            About
          </Link>
          <Link
            to="/#contact"
            className="text-primary-theme font-semibold text-sm"
          >
            Contact
          </Link>
          <Link
            to="/#FAQs"
            className="text-primary-theme font-semibold text-sm"
          >
            FAQs
          </Link>
        </p>
      </div>
    </>
  );
}

export default Footer;
