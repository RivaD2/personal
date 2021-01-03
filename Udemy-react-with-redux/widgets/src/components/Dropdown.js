import React , {useState, useEffect, useRef} from 'react'

const Dropdown = ({options, selected, onSelectedChange, label}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = event => {
        // Logic to close the dropdown menu based on what element is clicked
        // If element is in Dropdown, don't do anything with addEventListener
        if(ref.current && ref.current.contains(event.target)) return;
        setOpen(false);
    };

    document.body.addEventListener('click', onBodyClick);
    // Cleanup function invoked when Dropdown component is about to be removed entirely
    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  const renderedOptions = options.map(option => {
    if(option.value === selected.value) return null;
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
        <div ref={ref} className="ui form">
          <div className="field">
            <label className="label">{label}</label>
            <div 
              onClick={() => setOpen(!open)} 
              className={`ui selection dropdown ${open ? 'visible active' : ''}`}
            >
              <i className="dropdown icon"></i>
              <div className="text">{selected.label}</div>
              <div className={`menu ${open ? 'visible transition' : ''}`}>
                {renderedOptions}
              </div>
            </div>
          </div> 
        </div>
    )
};
export default Dropdown;