import React, { useState } from 'react';
import './Accordion.css';

export default function Accordion({accordionData}) {
  // Set accordion index to -1 because accordion by default is not open
  // so index can't start at 0
  const [openPanelIndex, setOpenPanelIndex] = useState(-1);

  const onOpenIconClicked = index => {
    openPanelIndex === index ? setOpenPanelIndex(-1) : setOpenPanelIndex(index);
  }

  return (
    <div className="accordion-container">
      <h1 className="accordion-title">COOKING STAPLES</h1>
       {accordionData.map((accordionItem, index) => (
        <div className="accordion-item">
          <div className="accordion-item-title" onClick={() => onOpenIconClicked(index)}>
            <h2 className="accordion-item-header">
              {accordionItem.header}
            </h2>
            <div className="accordion-open">{openPanelIndex === index ? '-' : '+'}</div>
          </div>
          <div className="accordion-item-panel">
            {openPanelIndex === index &&
              <div className="accordion-panel-content">
                {accordionItem.content}
              </div>}
         </div>
        </div>
       ))}
    </div>
  )
}
