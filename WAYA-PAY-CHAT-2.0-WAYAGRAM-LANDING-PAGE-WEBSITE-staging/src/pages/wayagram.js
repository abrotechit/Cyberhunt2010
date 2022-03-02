import '../styles/wayagram.scss'
import SingleBox from '../componentParts/singleBox'
import Fade from 'react-reveal/Fade';
import PageFooter from '../componentParts/footer'
import TopNav from '../componentParts/topNav'
import OtherLinks from '../componentParts/otherLinks';

function WayaGram(){
    const longText = 'Connect with friends, share what you’re uo to, or see what’s new from others all over the world. Explore our community where you can feel free to be yourself and share everything from your daily moments to life’s hignlights.';
    const gridData = [
        {
            title: 'make post',
            image: '/images/post.png',
            id: 'post',
            text: 'Make short posts and share across moments with friends and families'
        },
        {
            title: 'join group',
            image: '/images/Group.png',
            id:'group',
            text: 'Join group, follow events, like and follow personal and business pages'
        },
        {
            title: 'Socialize',
            image: '/images/socializeIcon.png',
            id:'socialize',
            text: 'Socialise with the power of a growing community on WayaGram, express yourself within the limits of boundless freedom'
        },
        {
            title: 'Vote',
            image: '/images/vote.png',
            id:'vote',
            text: 'Participate in poll on WayaGram, vote for friends and families with WayaGram'
        },
        {
            title: 'enjoy moments',
            image: '/images/smileys.png',
            id: 'moments',
            text: 'Watch short clips of your followers or any other WayaGram user. enjoy momemts, like and share with others in your timeline'
        },
        {
            title: 'advertise',
            id: 'advertise',
            image: '/images/marketing.png',
            text: 'Advertise and sell your product on the fastest growing social media platfrom growing from Nigeria and spreading throughout Africa'
        },
        {
            title: 'share live screen',
            image: '/images/live.png',
            id: 'live',
            text: 'Share live screen with anyone to follow and watch you on the move and as you host events. distance is not a barrier with the live screen feature of WayaGram. Share precious moments as they are happening live.'
        },
        {
            title: 'campaign',
            image: '/images/coms.png',
            id: 'campaign',
            text: 'Launch campaigns, anyone or entity can launch campaigns on WayaGram for personal, corporate, public and non-governmental events. WayaGram is the perfect tool for social momets'
        },
        {
            title: 'donation',
            image: '/images/donation.png',
            id: 'donation',
            text: 'Create Donation, anyone or entity can create donations on WayaGram for personal, corporate, public and non-governmental events. WayaGram is the perfect tool for social momets'
        }
    ]
  return (     
      <div>
      <TopNav/>
      <div className="jumbotron wayagramJumbotron py-4 mb-0" style={{backgroundImage: 'url(/images/Ellipse.png)'}}>
        <Fade right>
          <div className="py-1 row justify-content-center">
            <div className='col-md-5 pt-4 pr-2'>
              <h2 className="">Socialize</h2>
              <p className='pt-2'>{longText}</p>
            </div>
            <div className="col-md-4">
              <img src='/images/socialize.png' alt='Socialize Jumbotron'/>
            </div>
          </div>
        </Fade>
      </div>
      <Fade bottom cascade>
        <div className='theGrids pt-4 pb-4' style={{backgroundColor:'#F9F8F7'}}>
          {gridData.map(el => {
            return <SingleBox bgColor={'white'}
            title={el.title}
            body={el.text}
            givenId={el.id}
              imageName={el.image}/>
          })}           
        </div>
      </Fade>
      <OtherLinks />
      <PageFooter/>
    </div>
  )
}

export default WayaGram
