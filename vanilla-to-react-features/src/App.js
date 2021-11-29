import React, {useState, useEffect} from 'react';
import Carousel from './components/Carousel';
import Accordion from './components/Accordion';
import accordionData from './accordion-data/accordion-data.json';
import {fetchImages} from './api/unsplash';
import './App.css';

const App = () => {
  const [images, setImages] = useState([]);

  const onImagesFetched = async () => {
    const imageDataArray = await fetchImages();
    setImages(imageDataArray);
  }

  useEffect(() => {
    onImagesFetched();
  }, []);

  return (
    <div className="app">
      <Carousel images={images} />
      <Accordion accordionData={accordionData}/>
    </div>
  );
}

export default App;
