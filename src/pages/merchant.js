import PageFooter from "../componentParts/footer";
import TopNav from "../componentParts/topNav";
import Fade from "react-reveal/Fade";
import "../styles/merchant.scss";
import { useRecoilValueLoadable } from "recoil";
import { getMerchants } from "../states/business";
import { imageUrl } from "../services/axios";
import { getSettings } from "../states/home";
import { Image } from "antd";

function Merchant() {
  const data = useRecoilValueLoadable(getMerchants);
  const dataS = useRecoilValueLoadable(getSettings);
  const merchants = data.state === "hasValue" ? data.contents : {};
  const settings = dataS.state === "hasValue" ? dataS.contents : {};
  return (
    <div>
      <TopNav />
      <div id="merchantPage" className="">
        <div className="main-jumbotron pb-4 mb-4">
          <Fade right cascade>
            <div className="row">
              <div className="col-md-5 pt-lg-4 mt-4">
                <h1 className="fs-1">{merchants.hero_title}</h1>
                <p className="">{merchants.hero_description}</p>
                <strong className="pb-3">Download and sign up for free </strong>
                <div className=" mt-3">
                  <a
                    href={settings.play_store_link}
                    className="col col-md-4"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      alt="Google Play Download"
                      src="/google-play-badge.png"
                      className=""
                    />
                  </a>
                  <a
                    className="col col-md-4"
                    href={settings.app_store_link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img alt="App Store Download" src="/app-store-badge.png" />
                  </a>
                </div>
              </div>
              <div className="col pt-5">
                <Image
                  style={{ marginLeft: "80px" }}
                  width={450}
                  preview={false}
                  src="/full.png"
                  alt="paybill"
                  placeholder={
                    <Image
                      src={`${imageUrl}${merchants.hero_image_url}`}
                      preview={false}
                    />
                  }
                />
              </div>
            </div>
          </Fade>
        </div>

        <div className="container innerBanner pt-4">
          <div className="row px-lg-5">
            <Fade right>
              <div className="col-sm-12 col-lg-6">
                <Image
                  width={400}
                  preview={false}
                  src="/scan.png"
                  alt="paybill"
                  placeholder={
                    <Image
                      src={`${imageUrl}${merchants.body1_image_url}`}
                      preview={false}
                    />
                  }
                />
              </div>
            </Fade>
            <Fade left>
              <div className="col-sm-12 col-lg-6">
                <h3 className="">{merchants.body1_title}</h3>
                <p className="">{merchants.body1_description}</p>
              </div>
            </Fade>
          </div>
        </div>

        <div className="jumbotron innerBanner ">
          <div className="container">
            <div className="row">
              <Fade left>
                <div className="col-sm-12 col-lg-6 ">
                  <h3 className="">{merchants.body2_title}</h3>
                  <p className="">{merchants.body2_description}</p>
                </div>
              </Fade>
              <Fade right>
                <div className="col-sm-12 col-lg-6">
                  <Image
                    width={400}
                    preview={false}
                    src="/secure.png"
                    alt="security"
                    placeholder={
                      <Image
                        src={`${imageUrl}${merchants.body2_image_url}`}
                        preview={false}
                      />
                    }
                  />
                </div>
              </Fade>
            </div>
          </div>
        </div>

        <div className="container innerBanner py-4">
          <div className="row  except justify-content-center">
            <Fade right>
              <div className="col-sm-12 col-lg-6">
                <Image
                  width={500}
                  preview={false}
                  src="/wallet.png"
                  alt="open wallet"
                  placeholder={
                    <Image
                      src={`${imageUrl}${merchants.body3_image_url}`}
                      preview={false}
                    />
                  }
                />
              </div>
            </Fade>
            <Fade left>
              <div className="col-sm-12 col-lg-5">
                <h3 className="">{merchants.body3_title}</h3>
                <p className="">{merchants.body3_description}</p>
                <div className=" mt-3">
                  <a
                    href={settings.play_store_link}
                    className="col col-md-4"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      alt="Google Play Download"
                      src="/google-play-badge.png"
                      className=""
                    />
                  </a>
                  <a
                    className="col col-md-4"
                    href={settings.app_store_link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img alt="App Store Download" src="/app-store-badge.png" />
                  </a>
                </div>
              </div>
            </Fade>
          </div>
        </div>
        <PageFooter />
      </div>
    </div>
  );
}

export default Merchant;
