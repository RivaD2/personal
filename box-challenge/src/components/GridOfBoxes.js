import React, {useState, useEffect} from 'react'
import Box from './Box';
import './GridOfBoxes.css';

const GridOfBoxes = props => {
  const [selectedBoxes, setSelectedBoxes] = useState([]);
  const [randomBackgroundColor, setRandomBackgroundColor] = useState([]);

  const onBoxClicked = index => {
    console.log('index for colors', index)
    // When I am dealing with indexes, -1 means that nothing is selected
    if (selectedBoxes.indexOf(index) !== -1) {
      // Creating a new arr to hold all new boxes selected 
      // Selected boxes is an arr of indexes, to get the indexes I want to remove, I can 
      // just return selectedBoxes that don't equal the index
     let newBoxesSelected = selectedBoxes.filter(selectedBox => {
       return selectedBox !== index;
     });
     // I tell React to remember the box that I want to deselect using the index from above
      setSelectedBoxes(newBoxesSelected);
     // If two boxes are selected, clicking on a new box will deselect the previous two boxes.
    } else if (selectedBoxes.length >= 2) {
      setSelectedBoxes([index]);
    } else {
      // Else, I want to select another box, and remember it's index, in addition to previous box(es) selected
      // and then store those additional box indexes in state
      let newBoxesSelected = [index, ...selectedBoxes];
      setSelectedBoxes(newBoxesSelected);
    }
  }
 
  // On page load, I need the random colors set at a different order each time
  useEffect(() => {
    let colors = [ 
      '#66ff66', 
      '#0099ff', 
      '#3333ff',
      '#00ffff',
      '#cc0099',
      '#ff3300',
    ];
    let newColors = [...colors,...colors]
    shuffleArray(newColors);
    setRandomBackgroundColor(newColors);
  }, [])

  // Shuffling my array of colors
  const shuffleArray = arr => {
    for (let i = arr.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  const boxes = [];
  const boxCount = 12;
  for(let i = 0; i < boxCount; i++) {
    boxes.push(
      <Box 
        selectedBoxes={selectedBoxes} 
        index={i} 
        key={i}
        onBoxClicked={onBoxClicked}
        randomColor={randomBackgroundColor[i]}
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
