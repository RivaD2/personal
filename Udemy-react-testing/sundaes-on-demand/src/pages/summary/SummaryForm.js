import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const SummaryForm = ({setOrderPhase}) => {
  const [checked, setChecked] = useState(false);

  const handleSubmit = e => {
    // Pass along next phase
    // The next page will handle submitting order from context
    e.preventDefault();
    setOrderPhase('completed');
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Content>
        No ice cream will actually be delivered
      </Popover.Content>
    </Popover>
  )

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{color: 'blue'}}> Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  const onCheckboxChanged = e => {
    setChecked(e.target.checked);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={checked}
          onChange={onCheckboxChanged}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        disabled={!checked}>
          Confirm Order
      </Button>
    </Form>
  )
}

export default SummaryForm;
