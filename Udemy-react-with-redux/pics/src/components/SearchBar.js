import React, { Component } from 'react'

export default class SearchBar extends React.Component {
    render() {
        return (
            <div className="ui segment">
              <form className="ui form">
                  <div className="field">
                      <label>Image Search</label>
                  <input type="text" />
                  </div>
             </form> 
            </div>
        )
    }
}
