import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  fetching: boolean;
}

// Need to: make sure component has access to fetchTodos action creator so I can fetch list of todos
// Have a mapStateToProps() function that takes list of todos out of react store and provides
// them to component as props
class _App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { fetching: false };
  }

  componentDidUpdate(prevProps: AppProps): void {
    if(!prevProps.todos.length && this.props.todos.length) {
      this.setState({
        fetching: false
      });
    }
  }

  onButtonClick = (): void => {
    this.props.fetchTodos();
    this.setState({
      fetching: true
    });
  }

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  }

  renderList = (): JSX.Element[] => {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div onClick={() => this.onTodoClick(todo.id)} key={todo.title}>{todo.title}</div>
      )
    });
  }

  render() {
    return (
     <div>
       <button onClick={this.onButtonClick}>Fetch</button>
       {this.state.fetching ? 'LOADING' : null}
       {this.renderList()}
     </div>
    )
  }
}

// Called with entire redux store
const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return { todos: state.todos };
}

export const App = connect(
  mapStateToProps, { fetchTodos, deleteTodo }
)(_App)

