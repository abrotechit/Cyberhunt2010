import { Divider } from "antd";
import { useState } from "react";
import Fade from "react-reveal/Zoom";
import { Link } from "react-router-dom";
import { useRecoilValueLoadable } from "recoil";
import { sendData } from "../services/apiCalls";
import { getSocialLinks } from "../states/contact";
import "../styles/footer.scss";

function PageFooter() {
  const data = useRecoilValueLoadable(getSocialLinks);
  const social = data.state === "hasValue" ? data.contents : {};
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({ show: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await sendData({ data: { email }, url: "subscribe" });
    if (res.status) {
      setResponse({ status: "success", message: res.message, show: true });
      setEmail("");
    } else {
      setResponse({
        status: "warning",
        message: res.message || res,
        show: true,
      });
    }
    setLoading(false);
  };
  return (
    <footer>
      {response.show && (
        <div class={`alert alert-${response.status}`} role="alert">
          {response.message}
        </div>
      )}
      <Fade right cascade>
        <div className="top row" style={{ backgroundImage: "url(/chat.png)" }}>
          <Fade right cascade>
            <div className="col mr-4 justify-content-between">
              <h4 className="text-white">Customer Support</h4>
              <p>
                If you have any questions or want to know more about Wayagram
                and our services, Contact our Customer Support
              </p>
              <div className="contacts row">
                <div className="col-sm-3 col-md-12 col-lg-3 mr-4">
                  <a href="/contact">
                    <button type="submit" className="orange">
                      Contact Us{" "}
                      <span>
                        <img src="/rightArr.png" />
                      </span>
                    </button>
                  </a>
                </div>
                <div className="col col-md-12 col-lg-8 row socials">
                  <div className="col ml-4 pt-1 pl-4">
                    <a href="#" target="_blank">
                      <img
                        src="/twitter.png"
                        style={{ maxWidth: "50%" }}
                        alt="twitter"
                      />
                    </a>
                  </div>
                  <div className="col">
                    <a href="#" target="_blank">
                      <img
                        src="/facebook.png"
                        style={{ maxWidth: "30%" }}
                        alt="facebook"
                      />
                    </a>
                  </div>
                  <div className="col">
                    <a href="#" target="_blank">
                      <img
                        src="/instagram.png"
                        style={{ maxWidth: "55%" }}
                        alt="instagram"
                      />
                    </a>
                  </div>
                  <div className="col">
                    <a href="#" target="_blank">
                      <img
                        src="/linkedin.png"
                        style={{ maxWidth: "55%" }}
                        alt="linkedin"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="inputs col pl-4 pt-4 mt-3 ml-4">
              {/* <p>Be the First to Know About our Promotions, Giveaways, and <br />Amazing Business Offers</p>
              <form onSubmit={handleSubmit}>
                <input value={email} required onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Enter your email address' />
                <button type='submit'>{loading ? "Loading..." : "Subscribe"}</button>
              </form> */}
            </div>
          </Fade>
        </div>
        <div className="bottom container pt-4">
          {/* <hr className='pt-4 mt-4' /> */}
          <Divider type="horizontal" className="bg-secondary" />
          <div className="row justify-content-center">
            <p className="col-sm-12 col-lg-12">
              Copyright &copy; Waya {new Date().getFullYear()} All rights
              reserved
            </p>
            {/* <ul className='col col-lg-7'>
              <li>
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/terms-of-use">
                  Terms of use
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul> */}
          </div>
        </div>
      </Fade>
    </footer>
  );
}

export default PageFooter;
