// import '../styles/wayachat.scss'
import SingleBox from '../componentParts/singleBox'
// import { useState } from 'react'
import Fade from 'react-reveal/Fade';
import PageFooter from '../componentParts/footer'
import TopNav from '../componentParts/topNav'
import '../styles/wayachat.scss'
import { getCategories } from '../states/product';
import { useRecoilValueLoadable } from 'recoil';
import { useParams } from 'react-router';
import { imageUrl } from '../services/axios';
import OtherLinks from '../componentParts/otherLinks';
// import { ArrowRightOutlined } from '@ant-design/icons';
// import { Divider } from 'antd';

function WayaChat() {
  // const data = useRecoilValueLoadable(getProducts)
  const dataC = useRecoilValueLoadable(getCategories)
  // const products = data.state === "hasValue" && data.contents ? data.contents.data : []
  const categories = dataC.state === "hasValue" && dataC.contents ? dataC.contents.data : []
  let { cat } = useParams();
  const categoryData = categories.find(category => category.url === cat) || {}
  // const gridData = categoryData && products.filter(product => product.product_category_id === categoryData.id)
  // console.log("data", categoryData.category_name, cat)


  const features = [
    {
      img: '/images/chaticon.png',
      title: 'VOICE CALL',
      description: 'Make secured VOIP calls with friends or business associates using SPONSORED INTERENET DATA on Wayagram, it’s all FREE'
    },
    {
      img: '/images/video-call.png',
      title: 'VIDEO CALL',
      description: 'Use Wayagram’s video call features to make end-to-end video calls with any of your contacts using SPONSORED INTERNET DATA'
    },
    {
      img: '/images/sharer.png',
      title: 'SEND MEDIA',
      description: 'Send multimedia files; Video, GIF, Images, Voice Notes to your contacts at super speed to enhance your communication on Wayagram'
    },
    {
      img: '/images/chats.png',
      title: 'CHAT',
      description: 'Wayagram is an instant messaging tool that allows you to chat with friends and family. Send secure short messages to personal contacts or within groups. Messaging is fun with Wayagram'
    },
    {
      img: '/images/sharing.png',
      title: 'SHARE FILES',
      description: 'Wayagram allows you to share documents like PDF, Docx, links, JPGE, PNG, SVG, MP4... share files on the go with Wayagram'
    },
    {
      img: '/images/groupcall.png',
      title: 'GROUP VOICE CALL AND VIDEO',
      description: 'Initiate or join group voice and video calls with friends and family or with business associates and make group voice and video calls with Wayagram. All chats on Wayagram are end-to-end encrypted with the most robust encryption technology'
    },
  ]

  return (
    <div >
      <TopNav />
      <div id="wayaPayPage" className="">
        <div className="jumbotron wayagramJumbotron py-1 mb-1" style={{ backgroundImage: 'url(/images/Ellipse.png)' }}>
          <Fade right>
            <div className="pb-1 row">
              <div className='col-md-8 col-sm-12 p-6 justify-content-center'>
                <h2 className="">
                  {categoryData.category_page_title ? categoryData.category_page_title : "Simple. Secure. Reliable Messaging."}
                </h2>
                <p className='pt-2'>
                  {categoryData.category_description?categoryData.category_description : "With Wayagram, you’ll get fast, simple, secure messaging and calling for free, available on andriod phones all over the world"}
                </p>
                <p className='lighter'>
                  {categoryData.category_description2 ? categoryData.category_description2 : "Data Charges may apply. Contact your provider for details"}
                </p>
              </div>
              <div className="d-none d-sm-none col-md-4 col-sm-12 justify-content-center d-md-flex">
                <img src={categoryData.category_image_url? `${imageUrl}${categoryData.category_image_url}`: '/images/chat.svg'} alt='Socialize Jumbotron' />
              </div>
            </div>
          </Fade>
        </div>
        <Fade bottom cascade>
          <div className='theGrids py-4' style={{ backgroundColor: '#F9F8F7' }}>
            {features && features.map(el => {
              return <SingleBox key={Math.random()} bgColor={'white'}
                title={el.title}
                body={el.description}
                givenId={el.url}
                imageName={el.img}
              />
            })}
          </div>
        </Fade>
        <OtherLinks />
        <PageFooter />
      </div>
    </div>
  )
}

export default WayaChat
