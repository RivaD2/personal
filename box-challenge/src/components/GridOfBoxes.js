import React, {useState} from 'react'
import Box from './Box';
import './GridOfBoxes.css';

const GridOfBoxes = props => {
  const [selectedBox, setSelectedBox] = useState(0);

  const onBoxClicked = index => {
    if(selectedBox === index) {
      setSelectedBox(-1);
    } else {
      setSelectedBox(index);
      console.log('who is selected', index)
    }
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
