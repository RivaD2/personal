import React from 'react'

const Spinner = props => {
    return (
      <div class="ui active dimmer">
        <div class="ui big text loader">{props.userMessage}</div>
      </div>
    )
};

Spinner.defaultProps = {
    message: 'Loading...'
};

export default Spinner;