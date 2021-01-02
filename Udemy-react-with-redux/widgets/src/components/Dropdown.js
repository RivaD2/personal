import React from 'react'

const Dropdown = ({options, selected, onSelectedChange}) => {
  const renderedOptions = options.map(option => {
    return (
        <div 
          key={option.value} 
          className="item"
          onClick={() => onSelectedChange(option)}
        >
        {option.label}
        </div>
    )
  });

    return (
        <div className="ui form">
          <div className="field">
            <lavel className="label">Select a color</lavel>
            <div className="ui selection dropdown visible active">
              <i className="dropdown icon"></i>
              <div className="text">{selected.label}</div>
              <div className="menu visible transition">
                {renderedOptions}
              </div>
            </div>
          </div> 
        </div>
    )
};
export default Dropdown;