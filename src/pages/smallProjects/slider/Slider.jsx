import React from 'react';
import './styles.scss';
import ImageSlider from './ImageSlider';

export const Slider = () => {
  const slides = [
    {
      url: 'https://get.pxhere.com/photo/beach-sea-coast-sand-ocean-shore-wave-vacation-lagoon-bay-island-nikon-body-of-water-caribbean-tropics-cape-d300-polinesia-fakarava-413763.jpg',
      title: 'Beach',
      words: ['Cat', 'Dog', 'Cow', 'Pig'],
      translate: ['Кошка', 'Собака', 'Корова', 'Свинья'],
    },
    {
      url: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614645722_64-p-fon-plyazha-dlya-fotoshopa-86.jpg',
      title: 'Beach',
      words: ['Cat', 'Dog', 'Cow', 'Pig'],
      translate: ['Кошка', 'Собака', 'Корова', 'Свинья'],
    },
    {
      url: 'https://мойпляж.рф/wp-content/uploads/2011/05/foto-plyazhey-tailanda-3.jpg',
      title: 'Beach',
      words: ['Cat', 'Dog', 'Cow', 'Pig'],
      translate: ['Кошка', 'Собака', 'Корова', 'Свинья'],
    },
    {
      url: 'https://kartinkin.net/pics/uploads/posts/2022-08/1659574676_27-kartinkin-net-p-chistii-plyazh-priroda-krasivo-foto-27.jpg',
      title: 'Beach',
      words: ['Cat', 'Dog', 'Cow', 'Pig'],
      translate: ['Кошка', 'Собака', 'Корова', 'Свинья'],
    },
    {
      url: 'https://w-dog.ru/wallpapers/4/18/356726828105723/zhltyj-peschanyj-plyazh-u-goluboj-vody.jpg',
      title: 'Beach',
      words: ['Cat', 'Dog', 'Cow', 'Pig'],
      translate: ['Кошка', 'Собака', 'Корова', 'Свинья'],
    },
  ];

  const containerStyles = {
    width: '500px',
    height: '280px',
    margin: '0 auto',
  }

  return (
    <div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};
