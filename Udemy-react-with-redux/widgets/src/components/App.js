import React, {useState} from 'react'
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';
import Route from './Route';
import Header from './Header';

const items = [
    {
        title: 'What is React?',
        content: 'React is a frontend JS framework.'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS libary'
    },
    {
        title: 'How do you use React',
        content: 'You use React by creating components.' 
    }
];

const options =[
    {
       label: 'The color Red',
       value: 'red'
    },
    {
        label: 'The color Green',
        value: 'green'
    },
    {
        label: 'A shade of Blue',
        value: 'blue'
    }
];

const App = () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
          <Header />
          <Route path="/">
            <Accordion items={items}/>
          </Route>
          <Route path="/list">
            <Search />
          </Route>
          <Route path="/dropdown">
            <Dropdown 
              label="Select a color"
              options={options}
              selected={selected}
              onSelectedChange={setSelected}/>
          </Route>
          <Route path="/translate">
            <Translate />
          </Route>
        </div>
    )
};
export default App;