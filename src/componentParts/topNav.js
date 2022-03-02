import "../styles/nav.scss";
import { useLocation, Link } from "react-router-dom";
import { getCategories, getProducts } from "../states/product";
import { useRecoilValueLoadable } from "recoil";

function TopNav(params) {
  const data = useRecoilValueLoadable(getProducts);
  const dataC = useRecoilValueLoadable(getCategories);
  const products =
    data.state === "hasValue" && data.contents ? data.contents.data : [];
  const categories =
    dataC.state === "hasValue" && dataC.contents ? dataC.contents.data : [];
  const location = useLocation();

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundImage: "url(/grain.png)" }}
    >
      <Link className="navbar-brand ml-4 pl-3" to="/" style={{ width: 200 }}>
        <img src="/logo-white.svg" alt="Wayagram logo" />
      </Link>
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
          <img src="/menu-icon.png" />{" "}
        </span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav mr-4">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/wayagram">
              Our SOlutions
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/contact">
              Contact Us
            </Link>
          </li>
          <li
            className={`${
              location.pathname == "/signin" ? "hiding" : "showing"
            } nav-item d-md-none d-xl-none d-xxl-none d-sm-flex`}
          >
            <abbr className="nav-link" href={process.env.REACT_APP_LOGIN_URL}>
              LOGIN
            </abbr>
          </li>
          <li className="nav-item link-btn d-md-none d-xl-none d-xxl-none d-sm-flex">
            <a className="nav-link" href={process.env.REACT_APP_REGISTER_URL}>
              REGISTER
            </a>
          </li>
        </ul>
      </div>
      <ul className="navbar-nav mr-4 d-none d-sm-none d-md-none d-lg-flex">
        <li
          className={`${
            location.pathname == "/signin" ? "hiding" : "showing"
          } nav-item`}
        >
          <a className="nav-link" href={process.env.REACT_APP_LOGIN_URL}>
            LOGIN
          </a>
        </li>
        <li className="nav-item link-btn">
          <a className="nav-link" href={process.env.REACT_APP_REGISTER_URL}>
            REGISTER
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default TopNav;
