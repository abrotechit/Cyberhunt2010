import "../styles/genericjumbotron.scss";
import Fade from "react-reveal/Fade";

function GenericJumbotron(props) {
  return (
    <div
      className="about-jumbotron px-lg-5 pl-4 pt-4"
      style={{ backgroundImage: "url(/grain.png)" }}
    >
      <div className="container">
        <div className="px-4 row align-items-center">
          <div className="col-12 px-lg-5 px-md-5">
            <Fade right cascade>
              <div
                className="px-lg-5 px-md-5 pt-4 m-lg-4 m-md-4 mt-4 textArea"
                style={{
                  backgroundImage: "url(/chat.png)",
                  backgroundSize: "300px",
                }}
              >
                <h1 className="lh-sm">{props.titleText}</h1>
                <p
                  className="text-center"
                  dangerouslySetInnerHTML={{ __html: props.desc }}
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenericJumbotron;
