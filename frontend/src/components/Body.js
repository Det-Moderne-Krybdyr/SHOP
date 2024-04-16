import React, { useState, useEffect } from 'react';
import "./Styling/Body.css";

function Body() {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
      const interval = setInterval(() => {
          plusSlides(1);
      }, 10000); // Change slide every 5 seconds

      return () => clearInterval(interval);
  }, [slideIndex]);

  function plusSlides(n) {
      setSlideIndex((prevSlideIndex) => {
          let newIndex = prevSlideIndex + n;
          if (newIndex > 3) newIndex = 1;
          else if (newIndex < 1) newIndex = 3;
          return newIndex;
      });
  }

  function currentSlide(n) {
      setSlideIndex(n);
  }

  return (
      <div className="slideshow-container">
          <div className="slidesFade" style={{ display: slideIndex === 1 ? 'block' : 'none' }}>
              <img src="/produkter.png" style={{ width: '100%' }} />
          </div>

          <div className="slidesFade" style={{ display: slideIndex === 2 ? 'block' : 'none' }}>
              <img src="/guides.png" style={{ width: '100%' }} />
          </div>

          <div className="slidesFade" style={{ display: slideIndex === 3 ? 'block' : 'none' }}>
              <img src="/about.png" style={{ width: '100%' }} />
          </div>

          <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
          <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>

          <span className="dot" onClick={() => currentSlide(1)}></span>
          <span className="dot" onClick={() => currentSlide(2)}></span>
          <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>
  );
}

/*function Body() {
  return (
    <div className="Body">
      <Box title="Products" link="/produkter" image="https://fastly.picsum.photos/id/570/200/400.jpg?hmac=Ka2C3Y0V0765SMQsKXw6d1-L7PKIMvluEQsO8EEL538"></Box>
      <Box title="Guides" link="/guides" image="https://fastly.picsum.photos/id/570/200/400.jpg?hmac=Ka2C3Y0V0765SMQsKXw6d1-L7PKIMvluEQsO8EEL538"></Box>
      <Box title="About Arne" link="/about_us" image="https://fastly.picsum.photos/id/570/200/400.jpg?hmac=Ka2C3Y0V0765SMQsKXw6d1-L7PKIMvluEQsO8EEL538"></Box>
    </div>
  );
}*/

function Box(props) {
  const { title, link, image } = props;
  return (
      <div className="Box">
          <a href={link}>
              <img src={image} alt="Placeholder" />
          </a>
          <div className="TextOverlay">
              <a href={link}><p>{title}</p></a>
          </div>
      </div>
  );
}



export default Body;
