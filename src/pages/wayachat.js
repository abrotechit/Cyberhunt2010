// import '../styles/wayachat.scss'
import SingleBox from '../componentParts/singleBox'
import { useState } from 'react'
import Fade from 'react-reveal/Fade';
import PageFooter from '../componentParts/footer'
import TopNav from '../componentParts/topNav'
import '../styles/wayachat.scss'
import { getCategories, getProducts } from '../states/product';
import { useRecoilValueLoadable } from 'recoil';
import { useParams } from 'react-router';
import { imageUrl } from '../services/axios';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Divider } from 'antd';

function WayaChat() {
  const data = useRecoilValueLoadable(getProducts)
  const dataC = useRecoilValueLoadable(getCategories)
  const products = data.state === "hasValue" && data.contents ? data.contents.data : []
  const categories = dataC.state === "hasValue" && dataC.contents ? dataC.contents.data : []
  let { cat } = useParams();
  const categoryData = categories.find(category => category.url === cat) || {}
  const gridData = categoryData && products.filter(product => product.product_category_id === categoryData.id)
  console.log("data", categoryData.category_name, cat)


  const features = [
    {
      img: '/posfeat/1.png',
      title: 'Instant Activation',
      description: 'Get enacted and execute inside 2 minutes. Totally internet onboarding with least documentation.'
    },
    {
      img: '/posfeat/2.png',
      title: 'Easy Integration',
      description: 'With modules for every significant stage and dialects, coordinate and go live with wayaPay in under 60 minutes.'
    },
    {
      img: '/posfeat/3.png',
      title: 'API Driven',
      description: 'Assemble your business for scale with our total API-driven robotization that requires zero manual intercession.'
    },
    {
      img: '/posfeat/4.png',
      title: 'Multiple payment methods',
      description: 'Offer your customer the luxury of payment method that waya pay supports including credit/debit cards, USSD, Bank and wallets'
    },
    {
      img: '/posfeat/5.png',
      title: 'Simple Pricing',
      description: 'Our imaginative installment arrangements with serious evaluating simplify installments.'
    },
    {
      img: '/posfeat/6.png',
      title: 'Best in Industry Support',
      description: 'Continuously accessible email, telephone and talk based help to help you in all your means.'
    },
    {
      img: '/posfeat/7.png',
      title: 'Dashboard Reporting',
      description: 'Continuous information and bits of knowledge on your Wayapay Dashboard to settle on informed business choices.'
    },
    {
      img: '/posfeat/8.png',
      title: 'Secure',
      description: 'PCI DSS Level 1 consistent arrangement which eliminates your weight of administrative consistence.'
    },
  ]

  return (
    <div >
      <TopNav />
      <div id="wayaPayPage" className="">
        <div className="jumbotron wayagramJumbotron py-1 mb-1" style={{ backgroundImage: 'url(/Ellipse.png)' }}>
          <Fade right>
            <div className="pb-1 row justify-content-center">
              <div className='col-md-5 pt-4 '>
                <h2 className="">{categoryData.category_page_title}</h2>
                <p className='pt-2'>{categoryData.category_description}</p>
                <p className='lighter'>{categoryData.category_description2}</p>
                {
                  cat === 'waya-pos'?
                  <Fade left>
                  <div className='py-lg-5'>
                    <a className='btn btn-lg btn-orange px-3'>REGISTER NOW <img className='mx-2' alt='...' src='/arrRight.png' /></a>
                    <a className='btn btn-link'>EXPLORE DOC</a>
                  </div>
                  </Fade>
                  :''
                }
              </div>
              <div className="col-md-4">
                <img src={`${imageUrl}${categoryData.category_image_url}`} alt='Socialize Jumbotron' />
              </div>
            </div>
          </Fade>
        </div>
        <Fade bottom cascade>
          <div className='theGrids pb-4' style={{ backgroundColor: '#F9F8F7' }}>
            {gridData && gridData.map(el => {
              return <SingleBox key={el.id} bgColor={'white'}
                title={el.product_name}
                body={el.product_description}
                givenId={el.url}
                imageName={el.product_image_url} />
            })}
          </div>
        </Fade>
        {
          cat === 'waya-pos'?
          <div className=''>
            <Fade bottom>
            <div>
              <div className='text-center py-3' style={{background: 'url(/grain.png)'}}>
                <p className='fw-sm mb-0'>Trusted by over 50,000 businesses</p>
                <img className='' alt='...' src='/line.png' />
                <div className='d-flex justify-content-center'>
                  <img className='mx-3' alt='...' width='' src='/brands/mtn.png' />
                  <img className='mx-3' alt='...' width='' src='/brands/dominos.png' />
                  <img className='mx-3' alt='...' width='' src='/brands/biggs.png' />
                </div>
              </div>
              <Divider className='m-0 bg-silver' type='horizontal' /> 
            </div>
            </Fade>


            <div className='container py-5 my-5'>
              <div className='row'>
                <Fade left>
                <div className='col-md-6 text-center'>
                  <img alt='..' src='/rocket.png' width='200px' />
                </div>
                </Fade>
                <Fade right>
                <div className='col-md-6'>
                  <div className='px-lg-5'>
                    <h4>Get onboarded and begin accepting payments in no time.</h4>
                    <p className='m-0'><img alt='..' src='/checkbox.png' width='30px' className='me-3' /> <a href='/signup' className='btn-link'>Register</a>  account with us</p>
                    <p className='m-0'><img alt='..' src='/checkbox.png' width='30px' className='me-3' /> Perform test mode transactions by using test API keys</p>
                    <p className='m-0'><img alt='..' src='/checkbox.png' width='30px' className='me-3' /> Submit compliance form</p>
                    <p className='m-0'><img alt='..' src='/checkbox.png' width='30px' className='me-3' /> Start collecting real-life payment from your customers either by integrating with our platforms or using our payment link feature.</p>
                    <a className='btn btn-lg btn-orange px-3'>REGISTER NOW <img className='mx-2' alt='...' src='/arrRight.png' /></a>
                  </div>
                </div>
                </Fade>
              </div>
            </div>

            <div className='w-100 bg-light py-5'>
              <div className='container'>
                <Fade top>
                <div className='text-center px-lg-5 mb-5'>
                  <h4>Unique Features</h4>
                  <p className='lh-sm'>Enable your business with the appropriate tools to acknowledge online <br/> payments and give the best client experience</p>
                </div>
                </Fade>
                <div className='row'>
                  {
                    features.map((props, index)=>(
                      <Fade>
                      <div className='col-sm-6 col-md-3 my-2' key={index}>
                        <div>
                          <img src={props.img} alt='' />
                          <h6>{props.title}</h6>
                          <p className='lh-base'>{props.description}</p>
                        </div>
                      </div>
                      </Fade>
                    ))
                  }
                </div>
              </div>
            </div>

            <div className='w-100 py-5' style={{background: 'url(/grain.png)'}}>
              <div className='container'>
              <div className='row'>
                <Fade left>
                <div className='col-md-6 text-center'>
                  <img alt='..' src='/amor.png' />
                </div>
                </Fade>
                <Fade right>
                <div className='col-md-6 py-5'>
                  <div className='px-lg-5'>
                    <h4 className='fw-bold text-orange'>Keeping your business safe is our priority</h4>
                    <span>Account is secured by</span><br/>
                    <img alt='..' src='/trademark.png' />
                  </div>
                </div>
                </Fade>
              </div>
              </div>
            </div>

            <Fade bottom>
            <div className='py-5 text-center'>
              <h3 className='text-orange fw-bold'>Get started now to develop your business.</h3>
              <div className='px-lg-5 py-4'>
                <a className='btn btn-lg btn-orange'>Get started for free <img className='mx-2' alt='...' src='/arrRight.png' /></a>
                <a className='btn btn-link'>LEARN MORE</a>
              </div>
            </div>
            </Fade>

          </div>:
          ''
        }
        <PageFooter />
      </div>
    </div>
  )
}

export default WayaChat
