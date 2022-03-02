
import {useEffect} from 'react';
import AndroidImage from '../assets/android.svg';
import IOSImage from '../assets/ios.svg';
import PhoneInHand from '../assets/phone-in-hand.png';
import AOS from 'aos';
import "aos/dist/aos.css";

function DownloadCTA() {
    useEffect(() => {
        AOS.init({
            duration : 1500
        });
    },[]);
    return (
        <div data-aos="fade-up" className="download-container px-5 md:px-20">
           <div className="download-cta-container py-12 w-full h-auto md:h-auto lg:h-auto bg-primary-theme rounded-3xl grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
                <div className="flex items-start md:items-end justify-start md:justify-start lg:justify-end">
                    <img src={PhoneInHand} alt="" className="w-3/5 md:w-1/2 ..."/>
                </div>
                <div className="pl-8 md:pl-16 pt-16 md:pt-28 col-span-2 pr-8 md:pr-12 lg:pr-64">
                    <h4 className="text-white font-semibold text-4xl md:text-5xl lg:text-6xl pr-8 md:pr-8 lg:pr-32">Download the app</h4>
                    <p className="text-white text-lg mt-3">Download Waya PayChat and start enjoying our great features.</p>

                    <div className="flex gap-3 mt-8">
                        <button data-aos="fade-up" data-aos-delay="300" className="bg-red-500 w-3/5 ...">
                            <img src={AndroidImage} alt="" width="100%" />
                        </button>
                        <button data-aos="fade-up" className="bg-red-500 w-3/5 ...">
                            <img src={IOSImage} alt="" width="100%" />
                        </button>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default DownloadCTA
