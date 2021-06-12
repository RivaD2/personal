import React, {useState , useEffect} from 'react'
import Box from './Box';
import './GridOfBoxes.css';

const GridOfBoxes = props => {
  const [selectedBoxes, setSelectedBoxes] = useState([]);
  const onBoxClicked = index => {
    // When I am dealing with indexes, -1 means that nothing is selected
    if (selectedBoxes.indexOf(index) !== -1) {
      // Creating a new arr to hold all new boxes selected 
      // Selected boxes is an arr of indexes, to get the indexes I want to remove, I can 
      // just return selectedBoxes that don't equal the index
      // Removing a box index will unselect it and make it white again
     let newBoxesSelected = selectedBoxes.filter(selectedBox => {
       return selectedBox !== index;
     });

     // I tell React to remember the box that I want to deselect using thte index from above
      setSelectedBoxes(newBoxesSelected);
     // If two boxes are selected, clicking on a new box will deselect the previous two boxes.
    } else if (selectedBoxes.length >= 2) {
      setSelectedBoxes([index]);
    } else {
      // Else, I want to select another box, and remember it's index, in addition to previous box(es) selected
      // and then store those additional box indexes in state
      let newBoxesSelected = [index, ...selectedBoxes];
      console.log('selectedBoxes is', selectedBoxes)
      setSelectedBoxes(newBoxesSelected);
      console.log('who is selected', newBoxesSelected)
    }
  }
 
  const boxes = [];
  const boxCount = 9;
  for(let i = 0; i < boxCount; i++) {
    boxes.push(
      <Box 
        selectedBoxes={selectedBoxes} 
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
