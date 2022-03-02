
import MTNLogo from '../assets/mtn.png';
import DOMINOLogo from '../assets/dominos.png';
import MRBiggLogo from '../assets/mr_biggs.png';

function Trusted() {
    return (
        <div class="trust-section flex flex-col justify-center items-center shadow">
            <p className="font-medium text-lg">Trusted by over 50,000 businesses</p>
            <div class="trusted-brands">
                <img src={MTNLogo} alt="" />
                <img src={DOMINOLogo} alt="" />
                <img src={MRBiggLogo} alt="" />
            </div>
        </div>
    )
}

export default Trusted
