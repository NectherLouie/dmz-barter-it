import { Container } from '@mui/material';
import * as React from 'react';
import ImageButton from '../image-button';

import './style.css';

const images = [
  {
    url: 'assets/al-mazrah-bg.jpeg',
    title: 'Al Mazrah'
  },
  {
    url: 'assets/ashika-island-bg.jpeg',
    title: 'Ashika Island'
  },
  {
    url: 'assets/building-21-bg.jpeg',
    title: 'Building 21'
  },
  {
    url: 'assets/koschei-complex-bg.jpeg',
    title: 'Koschei Complex'
  }
];

export default function ContentButtons() {

  const buttons = [];
  for (let i = 0; i < images.length; ++i) {
      const img = images[i];

      buttons.push(
        <ImageButton
          link="."
          imgSrc={img.url}
          title={img.title.toUpperCase()}
        ></ImageButton>);
  }

  return (
    <>
      <img className='page-img-bg' src='assets/dmz-bg.jpg' alt='dmz-bg'></img>
      <Container className="container">
        {/* <div class="maps-page__header">
          <h1 class="maps-page__title">
            <span class="subcolor-title">SELECT LOCATION</span>
          </h1>
        </div> */}
        {/* Buttons */}
        <section class="maps-page__list">
          {buttons}
        </section>
      </Container>
    </>
  );
}