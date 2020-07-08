// craete react elements : using javascript
import React from 'react';
import ReactDOM from 'react-dom';
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
