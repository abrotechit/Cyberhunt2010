import "../styles/genericjumbotron.scss";
import Fade from "react-reveal/Fade";

function GenericJumbotron(props) {
  return (
    <div className="about-jumbotron pl-lg-4">
      <div className="mx-auto">
        <div className="pt-4 ml-lg-4 pl-lg-4 row">
          <Fade right cascade>
            <div
              className="col-md-12 pt-4 pl-lg-4 mt-4 textArea"
              style={{
                backgroundImage: "url(/chat.png)",
                backgroundSize: "300px",
              }}
            >
              <div className="col-lg-10">
                <h1 className="m-0 p-0 lh-sm">{props.titleText}</h1>
                <p
                  className="m-0 p-0"
                  dangerouslySetInnerHTML={{ __html: props.desc }}
                />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default GenericJumbotron;
