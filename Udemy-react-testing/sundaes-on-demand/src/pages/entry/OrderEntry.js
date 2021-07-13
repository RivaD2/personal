import React from 'react'
import Options from './Options';
import Button from 'react-bootstrap/Button';
import { useOrderDetails } from '../../context/OrderDetails';

const OrderEntry = ({setOrderPhase}) => {
  const [orderDetails] = useOrderDetails();

  // Disable order button if there are aren't any scoops to order
  const orderDisabled = orderDetails.totals.scoops === '$0.00';

  return (
    <div>
      <h1>Design Your Sundae!</h1>
      <Options optionType="scoops"/>
      <Options optionType="toppings" />
      <h2>Grand total: {orderDetails.totals.grandTotal}</h2>
      <Button disabled={orderDisabled} onClick={() => setOrderPhase('review')}>Order Sundae!</Button>
    </div>
  );
}
export default OrderEntry;