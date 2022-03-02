import { useHistory } from 'react-router';
import PageFooter from '../componentParts/footer';
import GenericJumbotron from '../componentParts/genericJumbotron';
import TopNav from '../componentParts/topNav';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import '../styles/home.scss';
import { useRecoilValueLoadable } from 'recoil';
import { getHome, getSettings, getFeatures } from '../states/home';
import { imageUrl } from '../services/axios';
import { Button, Image, Switch } from 'antd';
import { useState } from 'react';
import send from '../assets/svgs/send.svg';
import perform from '../assets/svgs/perform.svg';
import recieve from '../assets/svgs/recieve.svg';
import pay from '../assets/svgs/pay.svg';
import request from '../assets/svgs/request.svg';
import explore from '../assets/svgs/explore.svg';
import chain from '../assets/svgs/chain.svg';
import arrowRight from '../assets/svgs/arrow-right.svg';
import qrcode from '../assets/images/qrcode.png';
import makePayment from '../assets/images/phoneicon.png';
import bar from '../assets/images/bar.png';
import safe from '../assets/images/safensecure.png';
import agent from '../assets/images/agent.png';
import chat from '../assets/images/chat.png';
import merchant from '../assets/images/speaker.png';
import phone from '../assets/images/phone.png';
import smallBlue from '../assets/images/smallBlue.png';
import phoneinhand from '../assets/images/phoneinhand.png';
import appstore from '../assets/images/appstore.png';
import googleplay from '../assets/images/googleplay.png';
import webWaya from '../assets/images/webWaya.png';
import Backg from '../assets/images/wayaBg.png';
import Backg2 from '../assets/images/wayaBg2.png';
import list from '../assets/images/List.png';
import transferLogo from '../assets/images/transferLogo.png';
import ssimg from '../assets/svgs/ssimg.svg';
import qr from '../assets/svgs/qr.svg';
import devices from '../assets/images/devices.png';
import wallet from '../assets/images/wallet.png';
import wallet2 from '../assets/images/wallet2.png';
import lock from '../assets/images/lock.png';
import bank from '../assets/images/bank.png';
import mail from '../assets/images/mail.png';
import diary from '../assets/images/diary.png';
import anotherBg from '../assets/images/anotherBg.png';

function Home() {
  const history = useHistory();
  const [posType, setPosType] = useState('web');
  const data = useRecoilValueLoadable(getHome);
  const dataS = useRecoilValueLoadable(getSettings);
  const dataF = useRecoilValueLoadable(getFeatures);
  const home = data.state === 'hasValue' ? data.contents : {};
  const settings = dataS.state === 'hasValue' ? dataS.contents : {};
  const features =
    dataF.state === 'hasValue' && dataF.contents ? dataF.contents : [];
  console.log(home);

  const defaultFeature = [
    {
      img: '/safensecure.png',
      title: 'Safe And Secure',
      description:
        'Transactions are safe and secure when you send and receive money and our fees are low (10N).',
    },
    {
      img: '/phoneicon.png',
      title: 'USSD Access',
      description:
        'No internet? No problem. Waya has free USSD codes so you can simply dial to make transactions.',
    },
    {
      img: '/qrcode.png',
      title: 'QR Code Scanner',
      description: 'Quick and easy transactions by scanning a QR code.',
    },
    {
      img: '/cryptochat.png',
      title: 'Socialize',
      description:
        'Chat, call and keep up with your favorite vendors and customers on WayaGram.',
    },
    {
      img: '/briefcase.png',
      title: 'Agents and Kiosks',
      description: 'Top up your wallet or get cash out via Waya Agent.',
    },
    {
      img: '/speaker.png',
      title: 'Merchants',
      description:
        'Make extra cash as a Waya Merchant. Earn commissions every time your customer pays you using Waya PayChat.',
    },
  ];

  const switchPos = (type) => {
    setPosType(type);
  };

  const CustomerFeedback = [
    {
      id: 1,
      img: '/feedback.png',
      name: 'Rahul Salem',
      role: 'Product Manager',
      company: '/brands/biggs.png',
      com: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante id malesuada mauris orci vulputate ut blandit et. Pharetra dui suscipit odio diam et nunc suspendisse. Sagittis pretium fringilla egestas facilisi ornare sit fames. Tortor, dui, sit tellus hendrerit pharetra arcu quis.',
    },
    {
      id: 2,
      img: '/feedback.png',
      name: 'Rahul Salem',
      role: 'Product Manager',
      company: '/brands/biggs.png',
      com: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante id malesuada mauris orci vulputate ut blandit et. Pharetra dui suscipit odio diam et nunc suspendisse. Sagittis pretium fringilla egestas facilisi ornare sit fames. Tortor, dui, sit tellus hendrerit pharetra arcu quis.',
    },
    {
      id: 3,
      img: '/feedback.png',
      name: 'Rahul Salem',
      role: 'Product Manager',
      company: '/brands/biggs.png',
      com: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante id malesuada mauris orci vulputate ut blandit et. Pharetra dui suscipit odio diam et nunc suspendisse. Sagittis pretium fringilla egestas facilisi ornare sit fames. Tortor, dui, sit tellus hendrerit pharetra arcu quis.',
    },
  ];

  return (
    <div id='homesection'>
      <TopNav className='mb-4' />
      <div
        className='home-jumbotron pt-4 '
        style={{
          backgroundImage: `url(${Backg})`,
        }}
      >
        <div className='topHj'>
          <Fade left>
            <div className='leftHj'>
              <div className='lhj-top'>
                Bank of the new Age, digitally built for you!
              </div>
              <div className='lhj-bot'>
                We are the bank of the easy-to-use, secured and commited to help
                you save time and charges from your day to day transactions.
              </div>
              <div className='img-Cont'>
                <img src={appstore} alt='' />
                <img src={googleplay} alt='' />
                <img src={webWaya} alt='' />
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className='rightHj'>
              <img src={Backg2} className='' alt='jumbotron' />
            </div>
          </Fade>
        </div>
      </div>

      <div
        className='bottom-section'
        style={{
          backgroundImage: `url(${anotherBg})`,

          background:
            'linear-gradient(0deg, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.12))',
        }}
      >
        <div className='bs-tit'>WayaBank Services</div>
        <div className='bs-subTit'>Testfully designed for you.</div>
        <div className='bs-Cont'>
          <Fade bottom>
            <div className='first-bs'>
              <div className='fbs-top'>
                Are you a Business or an individual? Wayabank provide services
                that help personal and businesses carryout financial activities
                easily without any delay and hinderance. Our users can make
                seamless cash transfers, withdrawal, pay bills, request and
                receive money.
              </div>
              <div className='fbs-bottom'>
                <div className='fbsb-top'>
                  <img src={wallet} alt='' />
                  <div className='fbsbt-text'>Digital Personal Banking</div>
                </div>
                <div className='fbsb-middle'>
                  Wayabank provides completely digital personal banking via web,
                  mobile app and USSD.
                  <br />
                  <br />
                  <br />
                  Available on Android and iOS devices, the Wayabank app allows
                  customers to make savings and carry out payments.
                </div>
                <div
                  className='fbsb-footer'
                  onClick={() => history.push('/signup')}
                >
                  <div onClick={() => history.push('/signup')}>
                    Create Wayabank Personal Account
                  </div>
                  <img src={arrowRight} />
                </div>
              </div>
            </div>
          </Fade>
          <Fade top>
            <div className='second-bs'>
              <div className='fbs-bottom'>
                <div className='fbsb-top'>
                  <img src={wallet} alt='' />
                  <div className='fbsbt-text'>Digital Business Banking</div>
                </div>
                <div className='fbsb-middle'>
                  Tailor-made for businesses, Wayabank completely digital
                  platform grants businesses an ability to make savings, carry
                  out payments, gain commissions as an agents or aggregators and
                  also have access to Wayabank Open APIs.
                </div>
                <div
                  className='fbsb-footer'
                  onClick={() => history.push('/signup?tab=corporate')}
                >
                  <div onClick={() => history.push('/signup?tab=corporate')}>
                    Create Wayabank Business Account
                  </div>
                  <img src={arrowRight} />
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>

      <Fade bottom>
        <div className='genericJumbo '>
          <div className='gc-title'>How WayaBank Works</div>
          <div className='gc-underline' />
          <div className='gc-text'>
            Wayabank provide users the platform to carryout financial activities
            as an Individual (personal) or corporate (Merchants, Agents and
            Aggregators). Access to the platform is by downloading the mobile
            application from app store, playstore or accessing the web version
            via the url{' '}
            <span
              style={{
                color: '#ff4400',
              }}
            >
              (www.wayabank.ng)
            </span>
            . WayaBank payment platform combine a lots of financial benefits and
            features, our mobile platform ease the challenges of all financial
            transactions.
            <br />
            <br />
            We are committed to providing a secure and cashless payment solution
            that assists our users, merchants, and organizations, to optimize
            their daily lives and business processes while taking care of their
            transactions.
          </div>
        </div>

        <div>
          <div className='mx-auto howBottom '>
            <div className='hb-item'>
              <img src={smallBlue} alt='' />
              <div className='hbi-right'>
                <div className='title'>Download WayaBank App</div>
                <div className='content'>
                  It only takes a few minutes to start enjoying free benefits.
                  Download Wayabank on Google Play or the App Store.
                </div>
              </div>
            </div>

            <div className='hb-item'>
              <img src={smallBlue} alt='' />
              <div className='hbi-right'>
                <div className='title'>Verify Your Account</div>
                <div className='content'>
                  You need to verify your email address, phone number and BVN to
                  ensure your account security.
                </div>
              </div>
            </div>
            <div className='hb-item'>
              <img src={smallBlue} alt='' />
              <div className='hbi-right'>
                <div className='title'>Start Transacting</div>
                <div className='content'>
                  Start enjoying wayabank. Make savings, withdrawal, Transfers,
                  Bills payment and others.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>

      <div
        className='another-bottom-section'
        style={{ backgroundImage: 'url(/grain.png)' }}
      >
        <Fade right>
          <div className='abs-left'>
            <div className='absl-1'>The easy-to-use Banking platform</div>
            <div className='absl-2'>
              We re-engineered this app to proudly enable you do alot + perform
              financial transactions with ease. All you need is the reciever’s
              email or phone and you pay absolutely nothing for sending money
              with these.
            </div>
            <div className='absl-3'>Open an Account in minutes</div>
            <div className='absl-4'>
              <div className='absl-text'>
                <div className='abslt-top'>
                  Take care of all your business expenses in one place.
                </div>

                <div className='abslt-bot'>
                  Pay bills and buy airtime easily without switching platforms,
                  keep yourself organised and your business running smoothly.
                </div>
              </div>
              <div
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  background: 'rgba(255, 68, 0, 0.14)',
                  padding: '14px',
                }}
              >
                <img src={wallet2} alt='' />
              </div>
            </div>
          </div>
        </Fade>
        <Fade left>
          <div className='abs-right'>
            <div className='absl-4 align-self-end'>
              <div className='absl-text'>
                <div className='abslt-top'>
                  Easy life! Send or receive money with email address or phone
                  number
                </div>
                <div className='abslt-bot'>
                  We designed a banking app to make your busy lifestyle easy. We
                  have made it ease for you to transfer or receive money with
                  your phone number. That’s all you need to make the right moves
                  with your money, no sweat.
                </div>
              </div>
              <div
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  background: 'rgba(255, 68, 0, 0.14)',
                  padding: '14px',
                }}
              >
                <img src={bank} alt='' />
              </div>
            </div>
            <div className='absl-4'>
              <div className='absl-text'>
                <div className='abslt-top'>
                  It’s your money, we just help you manage it.{' '}
                </div>

                <div className='abslt-bot'>
                  Save it, spend it, send it. It’s up to you. Whatever you
                  choose to do with your money, we’ll make sure it’s done better
                  and free of charge. We take responsibility for that.
                </div>
              </div>

              <img src={lock} alt='' />
            </div>
          </div>
        </Fade>
      </div>

      <section
        className='features text-center'
        style={{
          backgroundImage: 'url(/grain.png)',
          backgroundRepeat: 'repeat',
        }}
      >
        <div className='infographic row'>
          <Fade big>
            <div
              className='col-md-6 singlePhone'
              //  className='singlePhone'
            >
              <Image
                preview={false}
                src='/singlePhone.png'
                alt='feature'
                placeholder={<Image src={phone} preview={false} width={200} />}
              />
            </div>
          </Fade>
          <Fade right cascade>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <div className='special-row'>
                <div className=''>
                  <Image
                    preview={false}
                    src={safe}
                    alt='feature'
                    width={100}
                    placeholder={
                      <Image src={bar} preview={false} width={200} />
                    }
                  />
                </div>
                <div className='theTexts'>
                  <h6>Safe and secure</h6>
                  <p>
                    Transactions are safe and secure when you send and receive
                    money and our fees are low (10N).
                  </p>
                </div>
              </div>

              <div className='special-row'>
                <div className=''>
                  <Image
                    preview={false}
                    src={makePayment}
                    alt='feature'
                    width={100}
                    placeholder={
                      <Image src={makePayment} preview={false} width={200} />
                    }
                  />
                </div>
                <div className='theTexts'>
                  <h6>USSD Access</h6>
                  <p>
                    No internet? No problem. Waya has free USSD codes so you can
                    simply dial to make transactions.
                  </p>
                </div>
              </div>
              <div className='special-row'>
                <div className=''>
                  <Image
                    preview={false}
                    src={qrcode}
                    alt='feature'
                    width={100}
                    placeholder={
                      <Image src={qrcode} preview={false} width={200} />
                    }
                  />
                </div>
                <div className='theTexts'>
                  <h6>Qr Code Scanner</h6>
                  <p>Quick and easy transactions by scanning a QR code.</p>
                </div>
              </div>
              <div className='special-row'>
                <div className=''>
                  <Image
                    preview={false}
                    src={agent}
                    alt='feature'
                    width={100}
                    placeholder={
                      <Image src={agent} preview={false} width={200} />
                    }
                  />
                </div>
                <div className='theTexts'>
                  <h6>Agents</h6>
                  <p>
                    Make deposits, withdrawals, transfers, cash out and bills
                    payment via Wayabank Agent.
                  </p>
                </div>
              </div>
              <div className='special-row'>
                <div className=''>
                  <Image
                    preview={false}
                    src={merchant}
                    alt='feature'
                    width={100}
                    placeholder={
                      <Image src={merchant} preview={false} width={200} />
                    }
                  />
                </div>
                <div className='theTexts'>
                  <h6>Merchants, Agents and Agents Aggregator</h6>
                  <p>
                    Make extra cash as a Wayabank Merchant, Agents or Agents
                    Aggregator. Earn commissions every time your customer pays
                    you using Wayabank.
                  </p>
                </div>
              </div>
              <div className='special-row'>
                <div className=''>
                  <Image
                    preview={false}
                    src={chat}
                    alt='feature'
                    width={100}
                    placeholder={
                      <Image src={chat} preview={false} width={200} />
                    }
                  />
                </div>
                <div className='theTexts'>
                  <h6>24/7 Support</h6>
                  <p>
                    Our support and engineering team are ever on standby to give
                    you necessary support you need.
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* <section className="wayaCustomerFeedback my-4">
        <div className="">
          <div className="text-center py-5">
            <p className="fs-3 fw-sm lh-1 m-0">Our Customer’s Feedbacks</p>
            <p className="fs-6">What our customers love about us</p>
          </div>
          <Fade bottom>
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  className="bg-orange active"
                  data-bs-slide-to="0"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  className="bg-orange"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  className="bg-orange"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                {CustomerFeedback.map((props) => (
                  <div
                    id={props.id}
                    className={`carousel-item ${
                      props.id === 1 ? "active" : ""
                    }`}
                  >
                    <div className="w-100 row">
                      <div className="col-md-5 text-center">
                        <Image
                          width={300}
                          preview={false}
                          src={props.img}
                          alt="paybill"
                          placeholder={
                            <Image
                              src={`${imageUrl}${home.feature1_image_url}`}
                              preview={false}
                            />
                          }
                        />
                      </div>
                      <div className="col-md-7">
                        <div className="mx-auto px-3 py-4">
                          <p>{props.com}</p>
                          <p className="fs-5 fw-bold lh-1">{props.name}</p>
                          <p className="lh-1">{props.role}</p>
                          <img
                            width="50px"
                            src={props.company}
                            alt={props.name}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                style={{ width: "50px", height: "50px" }}
                className="my-auto bg-orange rounded-circle carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                style={{ width: "50px", height: "50px" }}
                className="my-auto bg-orange rounded-circle carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </Fade>
        </div>
      </section> */}

      <Zoom>
        <div
          className=' pt-1  my-5 last-jumboWrapper'
          style={{
            backgroundImage: 'url(/grain.png)',
            backgroundRepeat: 'repeat',
          }}
        >
          <div
            className='last-jumbotron-left'
            style={{
              backgroundImage: 'url(/grain.png)',
            }}
          >
            <div className='download' style={{}}>
              Download
            </div>
            <img src={phoneinhand} alt='' style={{}} />
          </div>
          <div
            className='last-jumbotron-right'
            style={{
              backgroundImage: 'url(/grain.png)',
              backgroundRepeat: 'repeat',
            }}
          >
            <div className='theApp'>the app</div>
            <div className='bottomCont'>
              <div
                style={{
                  fontFamily: 'Sarabun',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  fontSize: '20px',
                  lineHeight: '30px',
                  color: '#FFFFFF',
                  marginBottom: '43.37px',
                  marginTop: '50px',
                }}
              >
                Download Wayabank and start enjoying our great <br /> features.
              </div>
              <div className='d-flex'>
                <img src={googleplay} alt='' className='mr-4' />
                <img src={appstore} alt='' />
              </div>
            </div>
          </div>
        </div>
      </Zoom>
      <PageFooter />
    </div>
  );
}

export default Home;
