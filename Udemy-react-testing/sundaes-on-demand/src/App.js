import React from 'react';
import Container from 'react-bootstrap/Container';
import OrderEntry from './pages/entry/OrderEntry';
import { OrderDetailsProvider } from './context/OrderDetails';

const App = () => {
  return (
    <Container >
      <OrderDetailsProvider>
        {/* Summary page and entry page need provider */}
        <OrderEntry />
      </OrderDetailsProvider>
    </Container>
  );
}

export default App;
