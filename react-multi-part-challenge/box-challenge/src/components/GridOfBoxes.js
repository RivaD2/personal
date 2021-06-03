import React, {useState, useEffect} from 'react'
import './GridOfBoxes.css';

const GridOfBoxes = props => {
const [boxColorChange, setBoxColorChange] = useState('');
useEffect(() => {
  setBoxColorChange("white");
},[boxColorChange]);

  let boxes = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let boxesColumn = [];
  boxes.forEach((box, index) => {
    boxesColumn.push(
    <div 
      key={index} 
      className="new-box"
      style={{backgroundColor:boxColorChange}} 
      onClick={()=>setBoxColorChange("green")}>{"Box " + box}</div>)
    return box;
  });

 let firstColumn = boxesColumn.slice(0,3);
 let secondColumn = boxesColumn.slice(3,6);
 let thirdColumn = boxesColumn.slice(6,9);

  return (
    <div className="box-container">
      <div className="grid-container">
        <div className="box-1">{firstColumn}</div>
        <div className="box-2">{secondColumn}</div>
        <div className="box-3">{thirdColumn}</div>
      </div>
    </div>
  )
}

export default GridOfBoxes;
