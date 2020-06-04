import React from 'react';
import LanguageContext from '../context/LanguageContext';

class Field extends React.Component {
    static contextType = LanguageContext;

    //When using Context as  type of Redux and providing  away to change the state in any component instead of App(i.e.Parent) Component itself
    //one way
    // render() {
    //     const text = this.context.language === 'english' ? 'Name' : 'Naam';
    //     return (
    //         <div className="ui field">
    //             <label>
    //                 {text}
    //             </label>
    //             <input />
    //         </div>
    //     );
    // }

    //2nd way
    rendertext(language) {
        return language === 'english' ? 'Name' : 'Naam';
   }
    

    render() {
        //const text = () => this.context === 'english' ? 'Name' : 'Naam';
        return (
            <div className="ui field">
                <label>
                    <LanguageContext.Consumer>
                        {({ language }) => this.rendertext(language)}
                    </LanguageContext.Consumer>
                </label>
                <input />
            </div>
        );
    }

    //when using Context to pass on Props from Any parent(App component may be where it manages state) to any child
    /*
   // static contextType = LanguageContext;
   rendertext(value) {
        return value === 'english' ? 'Name' : 'Naam';
   }
    

    render() {
        //const text = () => this.context === 'english' ? 'Name' : 'Naam';
        return (
            <div className="ui field">
                <label>
                    <LanguageContext.Consumer>
                        {value => this.rendertext(value)}
                    </LanguageContext.Consumer>
                </label>
                <input />
            </div>
        );
    }*/
}

export default Field;