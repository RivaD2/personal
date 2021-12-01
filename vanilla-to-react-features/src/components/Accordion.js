import React, { useState } from 'react';
import './Accordion.css';

export default function Accordion({accordionData}) {
  const [openPanel, setOpenPanel] = useState(false);

  const onOpenIconClicked = () => {
    setOpenPanel(!openPanel);
  }

  return (
    <div className="accordion-container">
      <h1 className="accordion-title">My favorite cooking staples</h1>
       {accordionData.map(accordionItem => (
        <div className="accordion-item">
          <div className="accordion-item-title" onClick={onOpenIconClicked}>
            <h2 className="accordion-item-header">
              {accordionItem.header}
            </h2>
            <div className="accordion-open">{openPanel ? '-' : '+'}</div>
          </div>
         <div className="accordion-item-panel">
           <div className="accordion-panel-content">
            {accordionItem.content}
           </div>
         </div>
        </div>
       ))}
    </div>
  )
}
