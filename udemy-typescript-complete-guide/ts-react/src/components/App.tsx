import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Todo, fetchTodos } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

// Need to: make sure component has access to fetchTodos action creator so I can fetch list of todos
// Have a mapStateToProps() function that takes list of todos out of react store and provides
// them to component as props
class _App extends Component<AppProps> {

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
     <div>
       Hi there
     </div>
    )
  }
}

// Called with entire redux store
const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return { todos: state.todos };
}

export const App = connect(
  mapStateToProps, { fetchTodos }
)(_App)

