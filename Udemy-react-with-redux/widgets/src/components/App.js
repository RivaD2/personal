import React from 'react'
import Accordion from './Accordion';
import Search from './Search';

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
]
const App = () => {
    return (
        <div>
           {/* <Accordion items={items} /> */}
           <Search />
        </div>
    )
}
export default App;