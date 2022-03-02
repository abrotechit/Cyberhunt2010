import { Card, Divider } from "antd";
import React from "react";

function IntegrationsPage() {
  const cards = {
    platforms: [
      {
        image: "/integrations/js.png",
        title: "Web Integration",
        link: "#webIntegration",
      },
      {
        image: "/integrations/android.png",
        title: "Android SDK",
        link: "#androidIntegration",
      },
      {
        image: "/integrations/ios.png",
        title: "IOS SDK",
        link: "#iosIntegration",
      },
    ],
  };

  return (
    <div className="devIntegration">
      <div
        className="text-center py-5"
        style={{ background: "url(/grain.png)" }}
      >
        <h1 className="text-secondary">Integrations</h1>
      </div>

      <div className="container text-center my-5">
        <div className="">
          <h4 className="text-orange">Platform SDKs</h4>
        </div>
        <div className="row">
          {cards.platforms.map((props, index) => (
            <div className="col-md-4" key={index}>
              <div
                className="card bg-light p-0 rounded"
                style={{ height: "300px" }}
              >
                <div className="card-img-top py-4" style={{ height: "170px" }}>
                  <img src={props.image} alt="" width="120" />
                </div>
                <Divider type="horizontal" className="m-0" />
                <p className="fw-sm">{props.title}</p>
                <Divider type="horizontal" className="m-0" />
                <a
                  href={props.link}
                  className="card-footer mx-3 my-3 btn btn-lg btn-orange"
                >
                  Exoplore Doc
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default IntegrationsPage;
