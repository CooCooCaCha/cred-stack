import React from 'react';
import mui, {Paper, TextField, List, ListItem} from 'material-ui';
import {connect} from 'react-redux';
import {load, add, del} from '../actions/TodoActions';

let ThemeManager = new mui.Styles.ThemeManager();

@connect(state => ({todos: state.todos}))
class Home extends React.Component {
    static childContextTypes = {
        muiTheme: React.PropTypes.object
    }

    constructor(props, contexts) {
        super(props);
        props.dispatch(load());
        this.state = {newTodo: ''};
    }

    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    }

    handleInputChange = (event) => {
        this.setState({
            newTodo: event.target.value
        });
    }

    handleInputEnter = (event) => {
        if( event.key !== 'Enter' )
            return;

        this.props.dispatch(add(this.state.newTodo));
        this.setState({newTodo: ''});
    }

    handleDeleteTodo = (id) => {
        return (event) => {
            this.props.dispatch(del(id));
        }
    }

    render() {
        var todos = this.props.todos.map((todo) =>
            <ListItem primaryText={todo.body} 
                      rightIcon={
                          <div onClick={this.handleDeleteTodo(todo._id)}>X</div>
                      }
            />
        );

        return (
            <Paper style={styles.paper}>
                <TextField hintText="New Todo" 
                           value={this.state.newTodo} 
                           onChange={this.handleInputChange}
                           onKeyDown={this.handleInputEnter}
                />
                <List>
                    {todos}
                </List>
            </Paper>
        );
    }
}

var styles = {
    paper: {
        width: '300px',
        margin: "0 auto",
        padding: "20px"
    }
}

export default Home;
