import React from 'react';

export default function Accordion({accordionData}) {
  return (
    <div className="accordion-container">
      <h1>My favorite cooking staples</h1>
       {accordionData.map(item => (
         <div className="accordion-item">
           <h2 className="accordion-item-header"> {item.header}</h2>
         <div className="accordion-item-body">
           <div className="accordion-item-content">
            {item.content}
           </div>
         </div>
       </div>
       ))}
    </div>
  )
}
