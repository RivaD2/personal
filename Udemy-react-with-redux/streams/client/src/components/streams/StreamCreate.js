import React from 'react'
import {Field, reduxForm} from 'redux-form';

class StreamCreate extends React.Component {
  renderInput({input, label}) {
    // Take input object and properties and add them as props to input element
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    )
  }
  render() {
    return (
      <form className="ui form">
        {/* Have to assign prop of component to Field */}
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description"/>
      </form>
    )
  }
}

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate);

