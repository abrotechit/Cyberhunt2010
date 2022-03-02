import { useEffect } from "react";
import Privacy from "../assets/privacy.png";
import AOS from "aos";
import "aos/dist/aos.css";

function ProductFeatures() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 pl-20 pr-0 md:px-32 py-24 relative">
      <svg
        width="22"
        height="418"
        className="absolute left-8 md:left-20 top-28"
        viewBox="0 0 22 418"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11" cy="11" r="6" fill="#FF4400" />
        <circle cx="11" cy="209" r="6" fill="#FF4400" />
        <circle cx="11" cy="407" r="6" fill="#FF4400" />
        <circle cx="11" cy="11" r="10.5" stroke="black" />
        <circle cx="11" cy="209" r="10.5" stroke="black" />
        <circle cx="11" cy="407" r="10.5" stroke="black" />
        <line
          x1="10.5"
          y1="21"
          x2="10.5"
          y2="198"
          stroke="black"
          stroke-opacity="0.3"
        />
        <line
          x1="11.5"
          y1="220"
          x2="11.5"
          y2="396"
          stroke="black"
          stroke-opacity="0.3"
        />
      </svg>

      <div className="pt-3">
        <div className="h-48">
          <h4
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-primary-theme text-2xl font-semibold"
          >
            Protected Access
          </h4>
          <p
            data-aos="fade-up"
            data-aos-delay="500"
            className="w-full lg:w-3/4 pr-8 lg:pr-14 mt-4 leading-relaxed"
          >
            Your Wayapay Account is protected with multiple layers of security.
            If you lose your phone, you can have your Wayapay account blocked at
            any time.
          </p>
        </div>
        <div className="h-52 pt-2">
          <h4
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-primary-theme text-2xl font-semibold"
          >
            Secure Transcations
          </h4>
          <p
            data-aos="fade-up"
            data-aos-delay="500"
            className="w-full lg:w-3/4 pr-8 lg:pr-14 mt-4 leading-relaxed"
          >
            At Wayapay, we take security seriously so every payment made on our
            platform is 100% secure, even exceeding industry standard.
          </p>
        </div>
        <div className="h-48 -mt-1">
          <h4
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-primary-theme text-2xl font-semibold"
          >
            Data Protection
          </h4>
          <p
            data-aos="fade-up"
            data-aos-delay="500"
            className="w-full lg:w-3/4 pr-8 lg:pr-14 mt-4 leading-relaxed"
          >
            Wayapay stores all personal data at a secure location and we do not
            disclose any personal data to third parties.
          </p>
        </div>
      </div>

      <div className="flex items-center">
        <img
          data-aos="fade-up"
          data-aos-delay="700"
          src={Privacy}
          alt=""
          className="md:-mt-12 w-4/5 md:w-full ..."
        />
      </div>
    </div>
  );
}

export default ProductFeatures;
