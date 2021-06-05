import React, {useState} from 'react'
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
    boxes.push(
      <Box 
        selectedBoxIndex={selectedBox} 
        index={i} 
        key={i}
        onBoxClicked={onBoxClicked}
      />
    );
  }

  return (
    <div className="grid-container">
      <div className="grid-content">
        {boxes}
      </div>
    </div>
  )
}

export default GridOfBoxes;
