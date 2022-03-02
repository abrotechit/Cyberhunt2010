import { useEffect } from "react";
import Rocket from "../assets/big-rocket.svg";
import AOS from "aos";
import "aos/dist/aos.css";

function ProductIntro() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <div className="flex flex-col py-8 px-8 md:px-0">
      <div className="w-full h-auto md:h-auto grid grid-cols-1 md:grid-cols-2 md:pb-16">
        <div className="h-100 flex w-full justify-center md:justify-end items-center mb-8">
          <img
            data-aos="flip-right"
            src={Rocket}
            alt="product_rocket"
            className="mx-8 md:mr-20 w-full md:w-3/5 ..."
          />
        </div>
        <div className="w-full md:w-4/5 pr-10 flex flex-col items-start justify-center ...">
          <h4
            data-aos="fade-up"
            className="title md:text-xl md:mt-12 font-semibold"
          >
            Get onboarded and begin accepting payments in no time.
          </h4>
          <ul className="mt-8">
            <li
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex items-center gap-3 my-6"
            >
              <svg
                width="35"
                height="33"
                viewBox="0 0 35 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="35" height="33" rx="10" fill="#FFECE6" />
                <path
                  d="M25 11L14 22L9 17"
                  stroke="#FF4400"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="w-4/5 ...">
                <span className="text-primary-theme">Register</span> account
                with us.
              </p>
            </li>
            <li
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex items-center gap-3 my-6"
            >
              <svg
                width="35"
                height="33"
                viewBox="0 0 35 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="35" height="33" rx="10" fill="#FFECE6" />
                <path
                  d="M25 11L14 22L9 17"
                  stroke="#FF4400"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="w-4/5 ...">
                Perform test mode transactions by using test API keys.
              </p>
            </li>
            <li
              data-aos="fade-up"
              data-aos-delay="500"
              className="flex items-center gap-3 my-6"
            >
              <svg
                width="35"
                height="33"
                viewBox="0 0 35 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="35" height="33" rx="10" fill="#FFECE6" />
                <path
                  d="M25 11L14 22L9 17"
                  stroke="#FF4400"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="w-4/5 ...">Submit compliance form</p>
            </li>
            <li
              data-aos="fade-up"
              data-aos-delay="600"
              className="flex gap-3 my-6"
            >
              <svg
                width="35"
                height="33"
                viewBox="0 0 35 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="35" height="33" rx="10" fill="#FFECE6" />
                <path
                  d="M25 11L14 22L9 17"
                  stroke="#FF4400"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="w-4/5 ...">
                Start collecting real-life payment from your customers either by
                integrating with our platforms or using our payment link
                feature.
              </p>
            </li>
          </ul>

          <div
            data-aos="fade-up"
            data-aos-delay="800"
            class="btn-container mt-4 pl-12 flex flex-col md:flex-row rounded"
          >
            <button class="btn-register2 rounded text-sm shadow">
              REGISTER NOW
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
      <div className="flex flex-col items-center mt-20 md:mt-0">
        <h4
          data-aos="fade-up"
          data-aos-delay="300"
          className="title2 md:mt-12 text-primary-theme text-4xl font-semibold"
        >
          Wayapay Prducts
        </h4>

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="toggle mt-6 border border-gray-100 flex items-center w-full md:w-2/5 h-14 rounded-full bg-gray-100 relative ..."
        >
          <div className="w-1/2 h-14 flex items-center justify-center rounded-full bg-primary-theme ...">
            <p className="text-white text-sm md:text-md font-medium">Web POS</p>
          </div>
          <p className="text-gray-500 pl-6 text-md md:text-md font-medium">
            Terminal POS
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductIntro;
