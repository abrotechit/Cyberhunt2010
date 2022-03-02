
import React, { useEffect } from 'react';
import PCI1 from '../assets/pci-big-icon.svg';
import PCI2 from '../assets/pci.svg';
import AOS from 'aos';
import "aos/dist/aos.css";



function Caution() {
    useEffect(() => {
        AOS.init({
            duration: 1500
        });
    }, []);
    return (
        <React.Fragment>
            <div data-aos="fade-up" data-aos-delay="300" className="caution-container mt-16 w-full h-auto md:h-auto lg:h-96 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 md:px-24 py-8">
                <div className="flex items-center justify-center">
                    <img src={PCI1} alt="" width="64%" />
                </div>
                <div className="col-span-2 pt-20 md:pr-32 lg:pr-72">
                    <h4 className="text-center md:text-left lg:text-center text-primary-theme font-semibold text-4xl leading-10">Keeping your business safe is our priority</h4>
                    <p className="text-center md:text-left lg:text-center md:text-xl text-gray-600 font-medium mt-2">Account is secured by</p>
                    <button className="mt-10 flex mx-auto md:mx-0 lg:mx-auto">
                        <img src={PCI2} alt="" width="90%" />
                    </button>
                </div>
            </div>
            <div className="w-full h-auto pb-12 md:h-56 bg-white flex flex-col justify-center p-8">
                <h5 className="text-primary-theme text-3xl font-semibold text-center">Get started now to develop your business.</h5>

                <div class="btn-container mt-5 flex justify-center items-center flex-col md:flex-row rounded">
                    <button class="btn-register2 rounded text-sm shadow">
                        REGISTER NOW
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="white" />
                        </svg>
                    </button>
                    <button class="explore-btn2 px-8 py-3 border border-gray-700 rounded text-sm font-medium rounded shadow">EXPLORE DOCS</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Caution
