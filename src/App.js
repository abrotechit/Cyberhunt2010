import SignIn from "./pages/signIn";
import WayaGram from "./pages/wayagram";
import About from "./pages/about";
import Contact from "./pages/contact";
import WayaChat from "./pages/wayachat";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./styles/App.scss";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/wayagram">
            <WayaGram />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/">
            <WayaChat />
          </Route>
          <Route exact path="/privacy-policy">
            <Privacy />
          </Route>
          <Route exact path="/terms-of-use">
            <Terms />
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
