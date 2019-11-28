import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from './store';
import {PersistGate} from 'redux-persist/integration/react';
import Todo from './components/Todo/Todo';
import styled from './assets/scss/app.module.scss';

const {persistor, store} = configureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={<h1>Loading</h1>} persistor={persistor}>
                    <div className={styled.app}>
                        <h1>App todo</h1>
                        <Todo/>
                    </div>
                </PersistGate>
            </Provider>
        )
    }
}

export default App;
