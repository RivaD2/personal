import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import OrderEntry from './pages/entry/OrderEntry';
import OrderConfirmation from './pages/confirmation/OrderConfirmation';
import OrderSummary from './pages/summary/OrderSummary';
import { OrderDetailsProvider } from './context/OrderDetails';

const App = () => {
const [orderPhase, setOrderPhase] = useState('in Progress');

// Stores which top level page is displayed
let Component = OrderEntry;
  switch (orderPhase) {
    case 'inProgress':
      Component = OrderEntry;
      break;
    case 'review':
      Component = OrderSummary;
      break;
    case 'completed':
      Component = OrderConfirmation;
      break;
      default:
  }
  return (
    <OrderDetailsProvider>
      <Container >
        {<Component setOrderPhase={setOrderPhase}/>}
      </Container>
    </OrderDetailsProvider>
  );
}

export default App;
