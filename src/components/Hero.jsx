import { useEffect } from "react";
import HeroRightImage from "../assets/hero-section.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <div class="hero-section">
      <div class="hero-left-section px-8 md:pl-16 md:pb-16 pt-32">
        <h3
          data-aos="fade-up"
          class="hero-title font-semibold leading-tight text-gray-600"
        >
          Start accepting payments in <span>minutes</span>
        </h3>
        <p data-aos="fade-up" data-aos-delay="300" className="mt-5">
          One platform that lets you sell wherever your customers are — online,
          in‑person, anywhere in the world
        </p>
        <div class="btn-container mt-8 space-y-4 flex flex-col md:flex-row md:items-center rounded">
          <button
            data-aos="fade-right"
            class="btn-register2 md:mt-4 rounded text-sm shadow"
          >
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
          <button
            data-aos="fade-left"
            class="explore-btn rounded text-sm font-medium rounded shadow"
          >
            EXPLORE DOCS
          </button>
        </div>
      </div>
      <div class="hero-right-section px-16 hidden md:hidden lg:flex">
        <img
          data-aos="fade-up"
          data-aos-duration="1500"
          src={HeroRightImage}
          alt=""
          width="100%"
        />
      </div>
    </div>
  );
}

export default Hero;
