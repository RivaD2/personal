import React, {useState, useEffect} from 'react'
import Box from './Box';
import './GridOfBoxes.css';

const GridOfBoxes = props => {
  const [selectedBox, setSelectedBox] = useState(0);

  const onBoxClicked = index => {
    setSelectedBox(index);
  }
  
  const boxes = [];
  const boxCount = 9;
  for(let i = 0; i < boxCount; i++) {
    boxes.push(<Box selectedBoxIndex={selectedBox} index={i} />);
  }

  return (
    <div className="box-container">
      <div className="grid-container">
        {boxes}
      </div>
    </div>
  )
}

export default GridOfBoxes;
