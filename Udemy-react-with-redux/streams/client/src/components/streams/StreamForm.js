import React from 'react'
import {Field, reduxForm} from 'redux-form';

class StreamForm extends React.Component {

  renderError = ({error, touched}) => {
    // Touched is a property on meta. It tells me if user has touched field input and it returns a boolean
    if(touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  };

  renderInput = ({input, label, meta}) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
         {/* Take input object and properties and add them as props to input element */}
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    )
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      // handleSubmit is called and then callback is invoked with formValues
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        {/* Have to assign prop of component to Field */}
        <Field 
          name="title" 
          component={this.renderInput} 
          label="Enter Title" 
        />
        <Field 
          name="description" 
          component={this.renderInput} 
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    )
  }
}

const validate = formValues => {
  // This function has to be passed to reduxForm below
  /* If a field has same name as property inside object of validate, 
  Redux will pass error message to renderInput for each field created*/
  const errors = {};
  if(!formValues.title) {
    errors.title = 'Please enter a title';
  }
  if(!formValues.description) {
    errors.description = 'Please enter a description';
  }
  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate
})(StreamForm);


