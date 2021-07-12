import { useEffect, useState } from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useOrderDetails } from '../../context/OrderDetails';

const OrderConfirmation = ({setOrderPhase}) => {
  // setOrderPhase is setter from App
  // resetOrder is the third item in array from OrderDetails, I ignore the first two items
  const [, , resetOrder] = useOrderDetails();
  const [orderNumber, setOrderNumber] = useState(null);

  useEffect(() => {
    // This app will not actually submit an order
    (async() => {
      try {
        const response =  await axios.post(`http://localhost:3030/order`)
        setOrderNumber(response.data.orderNumber);
      } catch (err)  {
        console.error(err);
      } 
    })();
  } ,[])


  const handleClick = () => {
    resetOrder();
    setOrderPhase('in Progress');
  }

  if(orderNumber) {
    return (
    <div style={{textAlign:'center'}}>
      <h1> Thank you</h1>
      <p style={{fontSize: '25%'}}>
        as per our terms and conditions, nothing will happen now
      </p>
      <Button onClick={handleClick}>
        Create new order
      </Button>
    </div>
  )
  } else {
    return <div>Loading</div>;
  }
}


export default OrderConfirmation;