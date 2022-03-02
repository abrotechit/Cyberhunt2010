import React from "react";
import "../styles/solution.scss";
import TopNav from "../componentParts/topNav";
import PageFooter from "../componentParts/footer";
import SupportPhone from "../assets/images/supportPhone.png";
import DigitalWallet from "../assets/images/digitalMoney.png";
import SendMoney from "../assets/images/sendMoney.png";
import WithdrawMoney from "../assets/images/withdrawMoney.png";
import QrCodeScan from "../assets/images/qrCodeScan.png";
import payBills from "../assets/images/payBills.png";
import onLinecheckout from "../assets/images/onlineCheckout.png";
import requestMoney from "../assets/images/requestsMoney.png";
import settleInvoice from "../assets/images/settleInvoice.png";
import tvSubscription from "../assets/images/tvSubscription.png";
import mobileTopup from "../assets/images/movileTopup.png";

const Support = () => {
  const spbItem = [
    {
      img: DigitalWallet,
      title: "DIGITAL WALLET",
      content:
        "Digital Banking personalised for you to store funds safely, receive money, budget spendings, pay bills",
    },
    {
      img: SendMoney,
      title: "SEND MONEY",
      content:
        "Send money using Wayabank at insanely fast, secure and cheap rates either as a customer or agent",
    },
    {
      img: WithdrawMoney,
      title: "WITHDRAW MONEY",
      content:
        "Withdraw money from your Waya digital Banking direct to your bank account or any WAYA Agent",
    },
    {
      img: QrCodeScan,
      title: "qr code scanner",
      content:
        "WayaBank’s scan and pay feature helps ypu transfer or receive funds without needing a bank account or phone number. Just whip out your app, scan and pay and the fund is transferred easy peasy!",
    },
    {
      img: payBills,
      title: "pay bills",
      content:
        "Pay bills using our digital wallet with our list of growing merchants who use WayaBank as their preferred way of receiving money from their customers, school fess, hotel booking, visa payment, utility bills, church, mosque and religious expenses etc.",
    },
    {
      img: onLinecheckout,
      title: "online checkout",
      content:
        "Online checkout has never been easier with Waya digital Banking, pay for your online shopping across several top websites like Jumia, Amazon, Konga, Alibaba etc. WayaBank affords every user simple and easy way to create instant virtual cards to shop and enjoy befitting lifestyle.",
    },
    {
      img: requestMoney,
      title: "REQUEST MONEY",
      content:
        "Request and receive money from friends and families, customers etc, using phone number through WayaBank",
    },
    {
      img: settleInvoice,
      title: "settle invioce",
      content:
        "Settle invoice from customers, WayaBank enables easy settlement and clearing for smooth business operation",
    },
    {
      img: tvSubscription,
      title: "pay tv subscription",
      content:
        "Pay - TV subscription for your pay - TV like DSTV, GoTV, TSTV etc",
    },
    {
      img: mobileTopup,
      title: "top-up airtime and data",
      content:
        "Request and receive money from friends and families, customers etc, using phone number through WayaPay",
    },
  ];
  return (
    <div id="solutionPage">
      <TopNav />
      <div className="sp-content">
        <div className="sp-top">
          <div className="spt-text">
            <div className="sptt-title">
              Send money to friends and family or get payments from your
              customers
            </div>
            <div className="sptt-subTitle">
              Wayabank digital Banking is an all - in - one platform to perform
              safe and secure transactions, pay your bills.
            </div>
          </div>
          <div className="spt-img">
            <img src={SupportPhone} alt="phone" />
          </div>
        </div>
        <div className="sp-bottom">
          {spbItem?.map((item) => (
            <div className="spb-item">
              <div>
                <img src={item?.img} alt="" />
              </div>
              <div className="spbi-title">{item?.title}</div>
              <div className="spbi-text">{item?.content}</div>
            </div>
          ))}
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

export default Support;
