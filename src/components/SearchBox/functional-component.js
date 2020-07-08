import React from 'react';


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
    document.getElementById('output').innerText = document.getElementById('InputText').value;
}

export default Functional;

// Same code as class component

 // only one default export allowed per module!!!

