import React from 'react';
import './Accordion.css';

export default function Accordion({accordionData}) {
  return (
    <div className="accordion-container">
      <h1 className="accordion-title">My favorite cooking staples</h1>
       {accordionData.map(accordionItem => (
        <div className="accordion-item">
          <div className="accordion-item-title">
            <h2 className="accordion-item-header">
              {accordionItem.header}
            </h2>
            <div className="accordion-open">+</div>
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
