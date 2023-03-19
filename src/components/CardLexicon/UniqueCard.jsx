import React from 'react';
import './styles.scss';
import ImageSlider from './ImageSlider';
import QuizCard from '../../pages/smallProjects/slider/QuizCard';

export const UniqueCard = ({ title, description, image, words, translate, questions }) => {
  // console.log(words[0]);

  const [open, setOpen] = React.useState(false);
  const [test, setTest] = React.useState(false);

  const Modal = ({ open, setOpen }) => (
    <div className={`overlay animated ${open ? 'show' : ''}`}>
      <div className="modal">
        <div className="modal__top">
          <svg onClick={() => setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
          <span className="modal__top-choose" onClick={() => {setTest(!test)}}>{test ? "WORDS" : "TEST"}</span>
        </div>
        <div className='modal__content'>
          <div className={test ? 'containerStyles closed' : 'containerStyles'}>
            <ImageSlider slides={words} translate={translate} />
          </div>

          {test && <QuizCard questions={questions} />}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div onClick={() => setOpen(true)} className="card">
        {/* <div className="card_text"> */}
        <p className="card_title">{title}</p>
        <p className="card_description">{description}</p>
        {/* </div> */}
        {/* <div className="card_description">
        </div> */}
      </div>
      <Modal open={open} setOpen={setOpen} />
    </>
  );
};
