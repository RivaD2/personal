import React from 'react'
import Alert from 'react-bootstrap/Alert';

const AlertBanner = ({message, variant}) => {
  const alertMessage = message || 'An unexpected error occurred. Please try again later.';
  const alertVariant = variant || 'danger';
  return (
    <div>
      <Alert style={{backgroundColor: 'red'}} variant={alertVariant}>
        {alertMessage}
      </Alert>
    </div>
  )
}

export default AlertBanner;
