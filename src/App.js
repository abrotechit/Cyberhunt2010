import Blog from "./pages/blog";
import ContactPage from "./pages/contact";
import SolutionPage from "./pages/solution";
import MerchantPage from "./pages/merchant";
import CommercePage from "./pages/commerce";
import SignIn from "./pages/signIn";
import WayaGram from "./pages/wayagram";
import WayaPay from "./pages/wayapay";
import Home from "./pages/home";
import About from "./pages/about";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./styles/App.scss";
import WayaChat from "./pages/wayachat";
import Agent from "./pages/agent";
import HowItWorks from "./pages/how-it-works";
import SinglePost from "./pages/single-post";
import TermsOfUse from "./pages/terms";
import PrivacyPage from "./pages/privacy";
import PricingPage from "./pages/pricing";
import DeveloperPage from "./pages/developer";
import WayaPos from "./pages/product/wayapos";
// import SignUp from './pages/signup';
import Login from "./pages/Auth/login";
import Signup from "./pages/Auth/signup";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/blogs">
            <Blog />
          </Route>
          <Route exact path="/agent">
            <Agent />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
          <Route exact path='/solution'>
            <SolutionPage />
          </Route>
          <Route exact path='/merchant'>
            <MerchantPage />
          </Route>
          <Route exact path="/commerce">
            <CommercePage />
          </Route>
          <Route exact path="/product/:cat">
            <WayaChat />
          </Route>
          <Route exact path="/waya-pos">
            <WayaPos />
          </Route>
          <Route exact path="/developer/:cat">
            <DeveloperPage />
          </Route>
          <Route exact path="/wayapay">
            <WayaPay />
          </Route>
          <Route exact path="/wayagram">
            <WayaGram />
          </Route>
          <Route exact path="/wayachat">
            <WayaChat />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          {/* <Route exact path='/signup'>
            <SignUp />
          </Route> */}
          <Route exact path="/pricing-page">
            <PricingPage />
          </Route>
          <Route exact path="/how-it-works">
            <HowItWorks />
          </Route>
          <Route exact path="/terms-of-use">
            <TermsOfUse />
          </Route>
          <Route exact path="/privacy-page">
            <PrivacyPage />
          </Route>
          <Route path={`/blogs/:topicId`}>
            <SinglePost />
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
