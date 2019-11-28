import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as TodoActions from '../../store/actions';
import styled from './todo.module.scss';

/**
 *
 * @param todos
 * @param addTodo
 * @returns {*}
 * @constructor
 */
const Todo = ({todos, addTodo}) => (
    <ul>
        <button onClick={() => addTodo('Fazer café')}>Novo Todo</button>
        {
            todos.map(todo => (
                <li key={todo.id} className={styled.list}>{todo.text}</li>
            )).reverse()
        }
    </ul>
);

/**
 *
 * @param state
 * @returns {{todos: todos}}
 */
const mapStateToProps = state => {
    return {
        todos: state.default.todos,
    }
};

/**
 *
 * @param dispatch
 * @returns {*}
 */
const mapDispatchToProps = (dispatch) => bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Todo)