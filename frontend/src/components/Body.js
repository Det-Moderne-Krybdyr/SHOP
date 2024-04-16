import "./Styling/Body.css";

function Body() {
  return (
    <div className="Body">
      <Box title="Products" link="/produkter" image="https://fastly.picsum.photos/id/570/200/400.jpg?hmac=Ka2C3Y0V0765SMQsKXw6d1-L7PKIMvluEQsO8EEL538"></Box>
      <Box title="Guides" link="/guides" image="https://fastly.picsum.photos/id/570/200/400.jpg?hmac=Ka2C3Y0V0765SMQsKXw6d1-L7PKIMvluEQsO8EEL538"></Box>
      <Box title="About Arne" link="/om-os" image="https://fastly.picsum.photos/id/570/200/400.jpg?hmac=Ka2C3Y0V0765SMQsKXw6d1-L7PKIMvluEQsO8EEL538"></Box>
    </div>
  );
}

function Box(props) {
  const { title, link } = props;
  const { image } = props;
  return (
    <div className="Box">
      <a href={link}>
        <img src={image} alt="Placeholder"></img>
      </a>
      <div className="TextOverlay">
        <a href={link}><p>{title}</p></a>
      </div>
    </div>
  );
}



export default Body;
