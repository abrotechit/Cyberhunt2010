import React from "react";
import PageFooter from "../../componentParts/footer";
import TopNav from "../../componentParts/topNav";
import Fade from "react-reveal/Fade";

function WayaPos() {
  return (
    <div>
      <TopNav />
      <div>
        <div
          className="jumbotron wayagramJumbotron py-1 mb-1"
          style={{ backgroundImage: "url(/Ellipse.png)" }}
        >
          <Fade right>
            <div className="pb-1 row justify-content-center">
              <div className="col-md-5 pt-4 ">
                <h2 className="">
                  Start accepting payments in{" "}
                  <h2
                    style={{
                      backgroundImage: "url(/roundsk.png)",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    {" "}
                    minutes
                  </h2>
                </h2>
              </div>
              <div className="col-md-4">
                <img src="/deskphone.png" alt="Socialize Jumbotron" />
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <PageFooter />
    </div>
  );
}

export default WayaPos;
