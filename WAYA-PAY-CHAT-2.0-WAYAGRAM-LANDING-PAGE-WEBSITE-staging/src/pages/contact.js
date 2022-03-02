import PageFooter from "../componentParts/footer";
import TopNav from "../componentParts/topNav";
import Fade from "react-reveal/Fade";
import "../styles/contact.scss";
import { useRecoilValueLoadable } from "recoil";
import { getAllContacts } from "../states/contact";
import { useState } from "react";
import { sendData } from "../services/apiCalls";

function Contact() {
  const dataC = useRecoilValueLoadable(getAllContacts);
  const contacts =
    dataC.state === "hasValue" && dataC.contents ? dataC.contents : [];
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({ show: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await sendData({ data });
      if (res?.status) {
        setResponse({ status: "success", message: res.message, show: true });
        setData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setResponse({
          status: "warning",
          message: res.message || res,
          show: true,
        });
      }
    } catch (error) {
      setResponse({
        status: "warning",
        message: error.message || error,
        show: true,
      });
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((data) => ({ ...data, [name]: value }));
  };

  const contactsBackup = [
    {
      id: 1,
      key: "Head Office",
      value: "69 Seefeldstrasse, Zurich, Switzerland",
      type: "ADDRESS",
    },
    {
      id: 2,
      key: "Lekki Phase 1 Office",
      value: "14 Yeye Olofin Street, Lekki Phase 1, Lagos, Nigeria.",
      type: "ADDRESS",
    },
    {
      id: 3,
      value: "info@wayagram.ng",
      type: "EMAIL",
    },
  ];

  return (
    <div id="contactPage">
      <TopNav />
      <div className="row actual-content py-4 px-lg-4 justify-content-start">
        <Fade right>
          <div className="col-sm-10 col-md-6 text first">
            <h3>Contact Us</h3>
            <p className="">
              You are welcome to reach us at any of the contacts below
            </p>
            {contactsBackup.map((contact) => (
              <address className="row" key={contact.id}>
                <div className="col-sm-1 pr-2 mt-md-1">
                  <img
                    src={
                      contact.type === "ADDRESS" ? "/ion_home.png" : "/send.png"
                    }
                    alt="icon"
                  />
                </div>
                <div className="col-sm-9 ml-1 text">
                  <h5>{contact.key}</h5>
                  <p>{contact.value}</p>
                </div>
              </address>
            ))}

            <div className="mapouter text-start">
              <div className="gmap_canvas">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.3055849756474!2d3.459669057852333!3d6.4439455640997885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf455e18bb16f%3A0x43adbc3bcbd2792d!2s14%20Yeye%20Olofin%20St%2C%20Lekki%20Phase%20I%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1644425295232!5m2!1sen!2sng"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                />
              </div>
            </div>
          </div>
        </Fade>

        <Fade left>
          <div className="col-sm-10 col-md-6 text-start">
            <h4>Get in touch</h4>
            <form className="pt-4" id="contactForm" onSubmit={handleSubmit}>
              <input
                onChange={handleChange}
                name="name"
                value={data.name}
                type="text"
                placeholder="Name"
                required
              />
              <input
                onChange={handleChange}
                name="email"
                value={data.email}
                type="email"
                placeholder="Email"
                required
              />
              <input
                onChange={handleChange}
                name="phone"
                value={data.phone}
                type="tel"
                placeholder="Phone number"
                required
              />
              <input
                onChange={handleChange}
                name="subject"
                value={data.subject}
                type="text"
                placeholder="Subject"
                required
              />
              <textarea
                onChange={handleChange}
                name="message"
                value={data.message}
                placeholder="Leave us a message"
              />
              {response.show && (
                <div class={`alert alert-${response.status} mr-3`} role="alert">
                  {response.message}
                </div>
              )}
              <button type="submit" className="orange mb-3">
                {loading ? "Sending..." : "Send"}{" "}
                <span>
                  <img src="/rightArr.png" />
                </span>
              </button>
            </form>
          </div>
        </Fade>
      </div>
      <PageFooter />
    </div>
  );
}

export default Contact;
