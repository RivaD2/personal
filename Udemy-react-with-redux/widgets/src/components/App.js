import React, {useState} from 'react'
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';

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
    return (
        <div>
           {/* <Accordion items={items} /> */}
           {/* <Search /> */}
            <Translate />
        </div>
    )
};
export default App;