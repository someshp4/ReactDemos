import React from 'react';
import ReactDOM from 'react-dom';

function nameText() {
    return 'Enter Name:';
}

const App = function() {
    //return <div>Hola!!</div>
    const butText = "Submit";
    return (
        <div>
            <label className="custom" htmlFor="name">{nameText()}</label>
            <input id ="name" type="text"/>
            <button style={{backgroundColor:'blue', color:'black'}}>{butText}</button>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));