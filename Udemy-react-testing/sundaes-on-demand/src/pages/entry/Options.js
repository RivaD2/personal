import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ScoopOption from './ScoopOption';
import ToppingOption from './ToppingOption';
import Row from 'react-bootstrap/Row';

const Options = ({optionType}) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    // OptionType is 'scoops' or 'toppings'
    (async () => {
      try{
        const response = await axios.get(`http://localhost:3030/${optionType}`);
        setItems(response.data);
      } catch (err) {
        console.err();
      }
    })();
  },[optionType]);

  // Replace null with topping option once available
  const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption;
  const arrayOfOptions = items.map(item => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ))

  return (
    <Row>
      {arrayOfOptions}
    </Row>
  )
}
export default Options;