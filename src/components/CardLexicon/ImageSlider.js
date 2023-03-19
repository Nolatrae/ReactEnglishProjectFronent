import { useState } from 'react';

const ImageSlider = ({ slides, translate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: '100%',
    position: 'relative',
  };

  const slideStyle = {
    // backgroundImage: `url(${slides[currentIndex].url})`,
    // "box-shadow": "-10px -10px 0px rgba(255, 255, 255, 0.25), 10px 10px 0px rgba(0, 0, 0, 0.25)",
    // width: "100%",
    // height: "100%",
    // borderRadius: "10px",
    // backgroundPosition: "center",
    // backgroundSize: "cover",
  };

  let leftArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    right: '32px',
    fontSize: '45px',
    color: '#000',
    zIndex: 1,
    cursor: 'pointer',
  };

  let rightArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    left: '32px',
    fontSize: '45px',
    color: '#000',
    zIndex: 1,
    cursor: 'pointer',
  };

  let word = {
    fontSize: '40px',
    zIndex: '1',
    'text-align': 'center',
    margin: '0',
    position: 'absolute',
    top: '50%',
    left: '50%',
    'margin-right': '-50%',
    transform: 'translate(-50%, -50%)',
  };

  const mediaQuery = window.matchMedia('(max-width: 768px)');
  if (mediaQuery.matches) {
    leftArrowStyles = {
      position: 'absolute',
      top: '80%',
      transform: 'translate(0, -50%)',
      right: '20%',
      fontSize: '45px',
      color: '#000',
      zIndex: 1,
      cursor: 'pointer',
    };

    rightArrowStyles = {
      position: 'absolute',
      top: '80%',
      transform: 'translate(0, -50%)',
      left: '20%',
      fontSize: '45px',
      color: '#000',
      zIndex: 1,
      cursor: 'pointer',
    };

    word = {
      fontSize: '40px',
      zIndex: '1',
      'text-align': 'center',
      margin: '0',
      position: 'absolute',
      top: '40%',
      left: '50%',
      'margin-right': '-50%',
      transform: 'translate(-50%, -50%)',
    };
  }

  const mediaQuery1 = window.matchMedia('(max-width: 540px)');
  if (mediaQuery.matches) {
    word = {
      fontSize: '28px',
      zIndex: '1',
      'text-align': 'center',
      margin: '0',
      position: 'absolute',
      top: '40%',
      left: '50%',
      'margin-right': '-50%',
      transform: 'translate(-50%, -50%)',
    };
  }


  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToNext}>
        →
      </div>
      <div style={word}>
        {slides[currentIndex]}
        <br />
        {translate[currentIndex]}
      </div>
      <div style={rightArrowStyles} onClick={goToPrevious}>
        ←
      </div>
    </div>
  );
};
export default ImageSlider;
