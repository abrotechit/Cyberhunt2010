import PageFooter from "../componentParts/footer";
import GenericJumbotron from "../componentParts/genericJumbotron";
import TopNav from "../componentParts/topNav";
import Fade from "react-reveal/Fade";
// import Zoom from 'react-reveal/Zoom';
import "../styles/about.scss";
import { useRecoilValueLoadable } from "recoil";
import { getAboutContent, getSettings } from "../states/home";
import { imageUrl } from "../services/axios";
import { Image } from "antd";

function About() {
  const data = useRecoilValueLoadable(getAboutContent);
  const dataS = useRecoilValueLoadable(getSettings);
  const settings = dataS.state === "hasValue" ? dataS.contents : {};
  const aboutContent = data.state === "hasValue" ? data.contents : [];
  console.log(aboutContent);

  const aboutBackup = [
    {
      id: 1,
      image_url: "/payment.svg",
      title: "PAYMENT SOLUTION",
      content: "Register, Login and Transact with your Phone number",
    },
    {
      id: 2,
      image_url: "/easy-use.svg",
      title: "EASY TO USE",
      content: "Add Bank card / setup Bank account and start transacting",
    },
    {
      id: 3,
      image_url: "/transact.svg",
      title: "EASY TO TRANSACT",
      content:
        "Link Your BVN, Top up your Wallet, Request for Payment, Accept payment, Transfer money, Pay for Subscriptions and Services, with just few clicks.",
    },
    {
      id: 4,
      image_url: "/payment-option.svg",
      title: "PAYMENT OPTIONS",
      content:
        "Transact, and Receive payments with or without Internet access with our multiple payment options.",
    },
    {
      id: 5,
      image_url: "/qr-code.svg",
      title: "QR CODE",
      content:
        "Scan and make payments, Send QR code to customers/contact list and get paid in minutes.",
    },
    {
      id: 6,
      image_url: "/chat.svg",
      title: "CHAT, CALL, TRANSACT",
      content:
        "Get in touch with your loved ones, send them pictures and videos, make free video and audio calls, and send them money",
    },
    {
      id: 7,
      image_url: "/socialize.svg",
      title: "SOCIALIZE",
      content:
        "Meet new people, Post pictures and videos, create groups, advertise your products, follow people and synchronize with your other social media accounts",
    },
  ];
  return (
    <div>
      <TopNav />
      <div id="aboutsection">
        <GenericJumbotron
          titleText="ABOUT US"
          desc={
            settings.about_us ||
            "Wayagram is the new social mobile payment app in Nigeria which combines a financial inclusion and a social solution in one app. By combining a social platform and mobile transactions we want to ease the problems of transactions and people staying connected. With Wayagram you can make free calls, chat, socialize, and make transactions seamlessly. With our multiple options for transactions you don’t have to worry about internet access to make payments or receive payments, we have solved that problem for you We are committed to providing a secure and cashless payment solution that assists our users, merchants, and organizations, to optimize their daily lives and business processes while taking care of their transactions. "
          }
        />
        <div id="aboutGrid" className="pb-4 mb-4 px-4 mx-2">
          {aboutBackup.map((about) => (
            <Fade bottom key={about.id}>
              <div>
                <Image
                  preview={false}
                  src={about.image_url}
                  alt={about.title}
                  placeholder={
                    <Image
                      src={`${imageUrl}${about.image_url}`}
                      preview={false}
                    />
                  }
                />
                <div className="text-center">
                  <h6>{about.title}</h6>
                  <div className="row justify-content-center">
                    <p className="col  ">{about.content}</p>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
        <PageFooter />
      </div>
    </div>
  );
}

export default About;
