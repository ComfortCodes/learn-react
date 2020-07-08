// craete react elements : using javascript
import React from 'react';
import ReactDOM from 'react-dom';

import Functional from './components/SearchBox/functional-component';
import PropClass from './components/SearchBox/class';


let reactElement = React.createElement(
'p',
{'id':'el'},
'React element using javascript'
);

ReactDOM.render(reactElement,document.getElementById('root'));

// using jsx
const ParaText = 'React Element Using JSX';
const jsxElement = <p id ='jsx'>{ParaText}</p>;

ReactDOM.render(jsxElement, document.getElementById('root'));

ReactDOM.render(<Functional/>, document.getElementById('root'));

// Function vs Class Component.
// Fuctional : javascript function takes input parameter of props and returns a component in a div.
// Class uses javascript class syntax and extends React.Component
// Task: create a component with input box, button and label to test the two ways.

// Functional- no need for state!
// Means the component is for presentation and no need to change.
ReactDOM.render(<PropClass text='Passing props in class components'/>, document.getElementById('root'));

