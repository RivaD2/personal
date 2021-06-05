import React from 'react'

const Box = props => {

  const {selectedBoxIndex, index} = props;

  const onClickedBox = () => {
    console.log('which box is clicked?', index);
  }

  return (
    <div className="box-container" onClick={onClickedBox}>
      <div className="box">I AM A BOX</div>
    </div>
  )
}

export default Box;