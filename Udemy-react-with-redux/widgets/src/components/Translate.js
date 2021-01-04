import React, {useState} from 'react'
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
      label: 'German',
      value: 'de'
    },
    {
      label: 'Russian',
      value: 'ru'
    },
    {
      label: 'Swedish',
      value: 'sv'
    },
    {
      label: 'Japanese',
      value: 'ja'
    }
];
const Translate = () => {
const [language, setLanguage] = useState(options[0]);
const [text, setText] = useState('');

  return (
    <div>
        <div className="ui form">
          <div className="field">
            <label>Enter Text</label>
            <input 
              value={text} 
              onChange={(e) =>setText(e.target.value)} 
            />
          </div>
        </div>
        <Dropdown 
          selected={language} 
          onSelectedChange={setLanguage} 
          options={options} 
          label="select a language"
        /> 
        <hr />
        <h3 className="ui header">Output</h3>
        <Convert language={language} text={text} />
    </div>
  )
};
export default Translate;