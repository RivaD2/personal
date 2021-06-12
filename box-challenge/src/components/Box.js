import React from 'react'
import './Box.css';

const Box = props => {
  // Index is the index of THIS box, selectedBoxIndex is the index of a box
  const {selectedBoxIndex, index, onBoxClicked} = props;

  const onClickedBox = () => {
    onBoxClicked(index);
  }
 
  // If box 5 is selected, that is the selectBox index, but not the index
  // If index is box 5, and box 5 is the selectedBox index, then THIS box is selected!
  // If selectedBox index is equal to the index, then THIS box is selected
  const isSelected = selectedBoxIndex === index;


  // Choose a class based on whether this box is selected 
  const containerClass = isSelected ? 'selected-box' :'not-selected-box';

  return (
    <div className={`box-container ${containerClass}`} onClick={onClickedBox} >
      <div className="box">Box {index}</div>
    </div>
  )
}

export default Box;