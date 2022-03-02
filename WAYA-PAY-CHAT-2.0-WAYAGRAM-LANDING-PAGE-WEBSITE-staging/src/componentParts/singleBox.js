// import { imageUrl } from "../services/axios"

function SingleBox(props) {
  return (
    <div
      className="singleBox"
      id={props.givenId}
      style={{ backgroundColor: `${props.bgColor}` }}
    >
      <img src={props.imageName} height={110} />
      <h6>{props.title}</h6>
      <p>{props.body}</p>
    </div>
  );
}

export default SingleBox;
