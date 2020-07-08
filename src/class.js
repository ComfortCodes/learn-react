import React from 'react';

class InputForm extends React.Component{
    UpdateText(){
        document.getElementById('output').innerText = document.getElementById('InputText').nodeValue;
    }
    render(){
        return(
        <div>
        <input id="InputText"></input>
        <button type="button" 
        onClick={this.UpdateText}>
        Update
        </button>
        <br/>
        <label id="output"></label>
        </div>
    );
    }
}
export default InputForm;