import React, {useState, useEffect} from 'react';
import Carousel from './components/Carousel';
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
    </div>
  );
}

export default App;
