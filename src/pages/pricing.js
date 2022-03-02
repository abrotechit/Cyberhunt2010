import PageFooter from "../componentParts/footer";
import TopNav from "../componentParts/topNav";
import Fade from "react-reveal/Fade";
import { useRecoilValueLoadable } from "recoil";
import { getSettings } from "../states/home";
import { List, Avatar } from "antd";
import "../styles/pricing.scss";

function PricingPage() {
  const data = useRecoilValueLoadable(getSettings);
  const settings = data.state === "hasValue" ? data.contents : {};

  const listData = [
    {
      title: "Transfers of NGN 5,000 and below",
    },
    {
      title: "Transfers between NGN 5,001 and NGN 50,000",
    },
    {
      title: "Transfers of NGN 5,000 and below",
    },
  ];

  const faqData = [
    {
      title: "When do I receive my money?",
      description:
        "You will receive your money the next day for local payments. International payment varies depending on your region.",
    },
    {
      title: "Are there any transaction limits?",
      description:
        "Yes, there are transaction limits. Transaction limits apply to the different types of accounts.",
    },
    {
      title: "Who bears the transaction charge?",
      description:
        "By default, your customers bear the transaction charges. You can change this on your dashboard anytime to your preference.",
    },
    {
      title: "Who bears the transaction charge?",
      description:
        "By default, your customers bear the transaction charges. You can change this on your dashboard anytime to your preference.",
    },
  ];
  return (
    <div className="bg-light">
      <TopNav />
      <div className="pricingPages">
        <div className="pricing-top">
          <div className="container py-5 pl-4 pb-2">
            <Fade bottom>
              <div className="text-center text-white py-4">
                <div className="d-flex justify-content-center mx-auto">
                  <p className="text-white mx-2 fs-6">Pricing</p>
                  <select
                    className="bg-orange-fade border-0 px-4 text-white mx-2 py-0"
                    style={{ height: "35px" }}
                  >
                    <option defaultValue>Nigeria</option>
                    <option>Nigeria</option>
                    <option>Nigeria</option>
                  </select>
                </div>
                <div className="w-75 mx-auto">
                  <h2 className="text-white">Simple, transparent pricing</h2>
                  <p className="text-white fs-6 lh-sm">
                    Waya PayChat provides fair, simple and transaparent <br />
                    pricing. No surprises, no hidden charges.
                  </p>
                </div>
              </div>
            </Fade>
            <div className="row">
              <Fade left>
                <div className="col-md-5 mx-auto my-2">
                  <div
                    className="rounded-5 mx-auto"
                    style={{ minHeight: "100px" }}
                  >
                    <div className="bg-white py-3 px-3 px-lg-5 rounded-w-top">
                      <button className="btn btn-orange">
                        For Local Transactions
                      </button>
                      <h1 className="text-secondary my-3">
                        1.5% per transaction
                      </h1>
                    </div>
                    <div className="h-50 bg-light py-3 px-2 px-lg-5 rounded-w-bottom">
                      <p className="fs-6 d-flex lh-sm">
                        <span className="mx-2">
                          <img src="/check.png" width="inherit" />
                        </span>{" "}
                        <span className="mx-2">
                          Local transactions fees are capped at ₦2000, meaning
                          that's the absolute maximum you'll ever pay in fees
                          per transactions
                        </span>
                      </p>
                      <p className="fs-6 d-flex lh-sm">
                        <span className="mx-2">
                          <img src="/check.png" width="inherit" />
                        </span>{" "}
                        <span className="mx-2" />
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>

              <Fade right>
                <div className="col-md-5 mx-auto my-2">
                  <div
                    className="rounded-5 mx-auto"
                    style={{ minHeight: "100px" }}
                  >
                    <div className="bg-white py-3 px-3 px-lg-5 rounded-w-top">
                      <button className="btn btn-orange">
                        For International Transactions
                      </button>
                      <h1 className="text-secondary my-3">
                        3.9% per transaction
                      </h1>
                    </div>
                    <div className="h-50 bg-light py-3 px-2 px-lg-5 rounded-w-bottom">
                      <p className="fs-6 d-flex lh-sm">
                        <span className="mx-2">
                          <img src="/check.png" width="inherit" />
                        </span>{" "}
                        <span className="mx-2">
                          Get paid by your customers from all over the world
                        </span>
                      </p>
                      <p className="fs-6 d-flex lh-sm">
                        <span className="mx-2">
                          <img src="/check.png" width="inherit" />
                        </span>{" "}
                        <span className="mx-2">
                          International cards are charged and settled in Naira
                          by default, but you can also choose to get settled in
                          USD.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>

        <div className="listSection my-5 px-lg-5">
          <div className="container px-lg-5">
            <div className="px-lg-5">
              <Fade bottom>
                <List
                  itemLayout="horizontal"
                  header={<h3>Transfers</h3>}
                  bordered
                  className="px-lg-5 rounded bg-white py-3 my-5"
                  dataSource={listData}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar src="/check.png" size="small" />}
                        title={<a href="#">{item.title}</a>}
                      />
                      <span>NGN 10 per Transfer</span>
                    </List.Item>
                  )}
                />
              </Fade>

              <Fade bottom>
                <List
                  itemLayout="horizontal"
                  header={<h3>User verification</h3>}
                  bordered
                  className="px-lg-5 rounded bg-white py-3 my-5"
                >
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src="/check.png" size="small" />}
                      title={<a href="#">BVN Match API</a>}
                    />
                    <span>NGN 10 per Transfer</span>
                  </List.Item>
                </List>
              </Fade>
            </div>
          </div>
        </div>

        <div className="faqSection bg-white py-5 px-lg-5">
          <div className="container px-lg-5">
            <div className="row px-lg-5">
              <Fade left>
                <div className="col-md-6">
                  <h4 className="fw-bold">
                    Frequently
                    <br /> Asked Questions
                  </h4>
                </div>
              </Fade>
              <Fade right>
                <div className="col-md-6">
                  {faqData.map((props, index) => (
                    <div key={index} className="pb-4">
                      <h5>{props.title}</h5>
                      <span>{props.description}</span>
                    </div>
                  ))}
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
}

export default PricingPage;
