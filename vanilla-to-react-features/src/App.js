import React, {useState, useEffect} from 'react';
import Carousel from './components/Carousel';
import CarouselButtonLeft from './components/CarouselButtonLeft'
import CarouselButtonRight from './components/CarouselButtonRight';
import {fetchImages} from './api/unsplash';
import './App.css';

const App = () => {
  const [images, setImages] = useState([]);

  const onImagesFetched = async () => {
    const smallImagesArr = await fetchImages();
    setImages(smallImagesArr);
  }

  useEffect(() => {
    onImagesFetched();
  }, []);

  return (
    <div className="app">
      <CarouselButtonRight />
      <Carousel images={images}/>
      <CarouselButtonLeft />
    </div>
  );
}

export default App;
