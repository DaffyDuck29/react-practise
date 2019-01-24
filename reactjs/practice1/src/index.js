import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import Practiseali from './Practiseali';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Practiseali name="ali haider" />,document.getElementById('ali'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
