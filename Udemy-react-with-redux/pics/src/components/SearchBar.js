import React from 'react'

export default class SearchBar extends React.Component {
   state = { term: ''};
   onFormSubmit = event =>{
       event.preventDefault();
   }

    render() {
        return (
            <div className="ui segment">
                {/* Defining arrow function, when form is submitted, it will call arrow function */}
              <form onSubmit={this.onFormSubmit} className="ui form">
                  <div className="field">
                    <label>Image Search</label>
                    <input type="text" value={this.state.term} onChange={e => this.setState({term: e.target.value})}/>
                  </div>
             </form> 
            </div>
        )
    }
}
