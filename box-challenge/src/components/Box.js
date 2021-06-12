import React from 'react'
import './Box.css';

const Box = props => {
  // Index is the index of THIS box, selectedBoxes is the index of a box selected
  const {selectedBoxes, index, onBoxClicked} = props;

  const onClickedBox = () => {
    onBoxClicked(index);
  }
 
  // If box 5 is selected, that is the selectBoxes index, but not the index
  // If index is box 5, and box 5 is the selectedBoxes index, then THIS box is selected!
  // If index not equal -1, then I know I have a box selected
  const isSelected = selectedBoxes.indexOf(index) !== -1;


  // Choose a class based on whether this box is selected 
  // If a box is selected, I will show green based off class of .selected-box else, white
  const containerClass = isSelected ? 'selected-box' :'not-selected-box';

  return (
    <div className={`box-container ${containerClass}`} onClick={onClickedBox} >
      <div className="box">Box {index}</div>
    </div>
  )
}

export default Box;