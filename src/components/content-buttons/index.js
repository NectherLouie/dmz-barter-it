import { Container, Slide, useMediaQuery, useTheme } from '@mui/material';
import * as React from 'react';
import ImageButton from '../image-button';

import './style.css';
import BarterDialog from '../barter-dialog';
import BarterConfig from '../barter-it/BarterConfig';

const images = [
  {
    url: 'assets/al-mazrah-bg.jpeg',
    title: 'Al Mazrah',
    recipes: BarterConfig().AL_MAZRAH
  },
  {
    url: 'assets/ashika-island-bg.jpeg',
    title: 'Ashika Island',
    recipes: BarterConfig().ASHIKA_ISLAND
  },
  {
    url: 'assets/building-21-bg.jpeg',
    title: 'Building 21',
    recipes: BarterConfig().BUILDING_21
  },
  {
    url: 'assets/koschei-complex-bg.jpeg',
    title: 'Koschei Complex',
    recipes: BarterConfig().KOSCHEI_COMPLEX
  }
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ContentButtons() {

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [dialogTitle, setDialogTitle] = React.useState("");
  const [dialogRecipes, setDialogRecipes] = React.useState([]);

  const handleClickOpen = (newValue) => {
    setDialogTitle(newValue.title.toUpperCase());
    setDialogRecipes(newValue.recipes);
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const buttons = [];
  for (let i = 0; i < images.length; ++i) {
      const img = images[i];

      buttons.push(
        <ImageButton
          key={i}
          btnKey={i}
          onClick={() => handleClickOpen(img) }
          imgSrc={img.url}
          title={img.title.toUpperCase()}
        >
        </ImageButton>);
  }

  return (
    <>
      <img className='page-img-bg' src='assets/dmz-bg.jpg' alt='dmz-bg'></img>
      <Container className="container">
        {/* <div className="maps-page__header">
          <h1 className="maps-page__title">
            <span className="subcolor-title">SELECT LOCATION</span>
          </h1>
        </div> */}
        {/* Buttons */}
        <section className="maps-page__list">
          {buttons}
        </section>
      </Container>
      <BarterDialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        transitionComponent={Transition}
        title={dialogTitle}
        recipes={dialogRecipes}
      ></BarterDialog>
    </>
  );
}