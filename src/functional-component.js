import React from 'react';
import { render } from '@testing-library/react';

function Functional(){
return(
    <div>
    <input id="InputText"></input>
    <button type="submit" 
    onClick={UpdateText}>
    Update
    </button>
    <br/>
    <label id="output"></label>
    </div>
);
}

function UpdateText(){
    document.getElementById('output').innerText = document.getElementById('InputText').nodeValue;
}

export default Functional;

// Same code as class component

class InputForm extends React.Component{
    UpdateText(){
        document.getElementById('output').innerText = document.getElementById('InputText').nodeValue;
    }
    render(){
        return(
        <div>
        <input id="InputText"></input>
        <button type="submit" 
        onClick={UpdateText}>
        Update
        </button>
        <br/>
        <label id="output"></label>
        </div>
    );
    }
}
export default InputForm; // only one default export allowed per module!!!

