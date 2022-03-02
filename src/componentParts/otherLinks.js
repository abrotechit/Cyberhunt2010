import React from "react";
import Zoom from "react-reveal/Zoom";

const OtherLinks = () => {
  return (
    <>
      <Zoom>
        <div
          className=" pt-1  my-5 last-jumboWrapper"
          style={{
            backgroundImage: "url(/grain.png)",
            backgroundRepeat: "repeat",
          }}
        >
          <div
            className="last-jumbotron-left"
            style={{
              backgroundImage: "url(/grain.png)",
            }}
          >
            <div className="download" style={{}}>
              Download
            </div>
            <img src="/phoneinhand.svg" alt="" style={{}} />
          </div>
          <div
            className="last-jumbotron-right"
            style={{
              backgroundImage: "url(/grain.png)",
              backgroundRepeat: "repeat",
            }}
          >
            <div className="theApp">the app</div>
            <div className="bottomCont">
              <div
                style={{
                  fontFamily: "Sarabun",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "30px",
                  color: "#FFFFFF",
                  marginBottom: "43.37px",
                  marginTop: "50px",
                }}
              >
                Download Wayabank and start enjoying our great <br /> features.
              </div>
              <div className="d-flex">
                <img src="/google-play-badge.png" alt="" className="mr-4" />
                <img src="/app-store-badge.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </Zoom>
      <div className="sub-footer">
        <div className="top-subfooter">
          <img src="/bag.svg" />
          <div className="tsf-text my-auto">
            Explore other Businesses by WayaLinks Limited
          </div>
        </div>
        <div className="bottom-subfooter">
          <div className="bsf-item">
            <img src="/wayabank.svg" />
            <div className="bsfi-cont">
              Discover the best way to to carry your financial transactions.
              Free internet banking and bills payment
            </div>
            <div
              className="bsfi-foot"
              onClick={() =>
                window.open(process.env.REACT_APP_WAYABANK_URL, "_blank")
              }
            >
              Explore Wayabank
            </div>
          </div>
          <div className="bsf-item">
            <img src="/wayapay.svg" />
            <div className="bsfi-cont">
              One platform that lets you sell wherever your customers are —
              online, in‑person, anywhere in the world
            </div>
            <div
              className="bsfi-foot"
              onClick={() =>
                window.open(process.env.REACT_APP_WAYAPAY_URL, "_blank")
              }
            >
              Explore WayaPay
            </div>
          </div>
          <div className="bsf-item">
            <img src="/wayapos.svg" />
            <div className="bsfi-cont">
              Accepts MasterCard, VISA and Verve cards payment and perform other
              mobile banking services at your physical store with Wayapos
              Terminal POS device.
            </div>
            <div
              className="bsfi-foot"
              onClick={() =>
                window.open(process.env.REACT_APP_WAYAPOS_URL, "_blank")
              }
            >
              Explore WayaPos
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherLinks;
