import "../styles/nav.scss";
import { useLocation, Link } from "react-router-dom";
import { getCategories, getProducts } from "../states/product";
import { useRecoilValueLoadable } from "recoil";
import blog from "../assets/images/blog.png";
import demo from "../assets/images/demo.png";
import how from "../assets/images/how.png";
import video from "../assets/images/video.png";
import web from "../assets/images/web.png";
import why from "../assets/images/why.png";
import wayalogo from "../assets/images/wayaBankLogo.png";

function TopNav(params) {
  const data = useRecoilValueLoadable(getProducts);
  const dataC = useRecoilValueLoadable(getCategories);
  const products =
    data.state === "hasValue" && data.contents ? data.contents.data : [];
  const categories =
    dataC.state === "hasValue" && dataC.contents ? dataC.contents.data : [];
  let location = useLocation();

  return (
    <nav
      className="navbar navbar-expand-lg w-100 "
      style={{ backgroundImage: "url(/grain.png)" }}
    >
      <a className="navbar-brand ml-4 pl-3" href="/">
        <img src={wayalogo} alt="wayachat logo" />
      </a>
      <div
        style={{
          flexGrow: "1",
        }}
      />

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="">
          <img src="/menu-icon.png"></img>{" "}
        </span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNavDropdown"
        style={{
          flexGrow: "0",
        }}
      >
        <ul className="navbar-nav mr-4">
          {/* <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              SOLUTIONS
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="/merchant">
                Merchants
              </a>
              <a className="dropdown-item" href="/agent">
                Agents
              </a>
              <a className="dropdown-item" href="/commerce">
                E-Commerce
              </a>
            </div>
          </li> */}
          {/* <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              OUR SERVICES
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="/merchant">
                Cash Transfer
              </a>
              <a className="dropdown-item" href="/agent">
                Requst Cash
              </a>
              <a className="dropdown-item" href="/commerce">
                Pay Bills
              </a>
              <a className="dropdown-item" href="/commerce">
                USSD
              </a>
            </div>
          </li> */}

          {/* <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Developers
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="/developer/developer-docs">
                Developer Docs
              </a>
              <a className="dropdown-item" href="/developer/integration">
                Integration
              </a>
              <a className="dropdown-item" href="/developer/api-reference">
                Api Reference
              </a>
            </div>
          </li> */}

          {/* <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{
                position: "relative",
              }}
            >
              Learn
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
              style={{
                position: "absolute",
                width: "590px",
                left: "-316px",
                top: "52px",
              }}
            >
              <div className="learn-drop-down">
                <div className="left">
                  <div className="l-item">
                    <img src={blog} alt="blo" />
                    <div className="li-text">
                      <div className="li-title">Blog</div>
                      <div className="li-content">
                        Developer stories, merchant stories product features and
                        more.
                      </div>
                    </div>
                  </div>
                  <div className="l-item">
                    <img src={video} alt="blo" />
                    <div className="li-text">
                      <div className="li-title">Video Tutorials</div>
                      <div className="li-content">
                        Quick video tutorials on how to use Wayapaychat.
                      </div>
                    </div>
                  </div>
                  <div className="l-item">
                    <img src={how} alt="blo" />
                    <div className="li-text">
                      <div className="li-title">How it Works</div>
                      <div className="li-content">
                        Explore step by step how wayapaychat works.
                      </div>
                    </div>
                  </div>
                  <div className="l-item">
                    <img src={why} alt="blo" />
                    <div className="li-text">
                      <div className="li-title">Why you got charged</div>
                      <div className="li-content">
                        See why and where you got charged by wayapaychat.
                      </div>
                    </div>
                  </div>
                  <div className="l-item">
                    <img src={web} alt="blo" />
                    <div className="li-text">
                      <div className="li-title">Web POS Features</div>
                      <div className="li-content">
                        Learn about web pos features including settlements,
                        chargebacks,payment links e.t.c.
                      </div>
                    </div>
                  </div>
                  <div className="l-item">
                    <img src={demo} alt="blo" />
                    <div className="li-text">
                      <div className="li-title">Demo</div>
                      <div className="li-content">
                        Explore our Checkout demo.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="r-title">Company</div>
                  <div className="r-item">About us</div>
                  <div className="r-item">Compliance</div>
                  <div className="r-item">Careers</div>
                  <div className="r-item">Press & Media</div>
                </div>
              </div>
            </div>
          </li> */}
          <li className="nav-item">
            <a
              className={
                location?.pathname === "/solution"
                  ? "mr-4 border-bottom nav-link "
                  : "nav-link"
              }
              href="/solution"
            >
              OUR SOLUTION
            </a>
          </li>
          <li className="nav-item">
            <a
              className={
                location?.pathname === "/contact"
                  ? "mr-4 border-bottom nav-link "
                  : "nav-link"
              }
              href="/contact"
            >
              Contact
            </a>
          </li>
          <li
            className={`${
              location.pathname == "/signin" ? "hiding" : "showing"
            } nav-item`}
          >
            <a className="nav-link" href="/login">
              LOGIN
            </a>
          </li>
          <li className={`nav-item link-btn`}>
            <a className="nav-link" href="/signup">
              REGISTER
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default TopNav;
