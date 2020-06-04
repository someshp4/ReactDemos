import React from 'react';
import LanguageContext from '../context/LanguageContext';
import ColourContext from '../context/ColourContext';

class Button extends React.Component {
    static contextType = LanguageContext;

    renderButton(color) {
        const text = this.context.language === 'english'? 'Submit' : 'voorleggin';
        return (
            <button className={`ui button ${color}`}>{text}</button>
        );
    } 

    render() {
        
        return (
            <ColourContext.Consumer>
                {color => this.renderButton(color)}
            </ColourContext.Consumer>
        );
    }
}

export default Button;