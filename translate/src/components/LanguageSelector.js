import React from 'react';
import LanguageContext from '../context/LanguageContext';

class LanguageSelector extends React.Component {

    static contextType = LanguageContext;

    //When using Context as  type of Redux and providing  away to change the state in any component instead of App(i.e.Parent) Component itself
    render() {
        return (
            <div>
                Select Language:
                <i className="flag us" onClick={() => this.context.onLanguageChange('english')}/>

                <i className="flag nl" onClick={() => this.context.onLanguageChange('dutch')}/>
                    
            </div>
        );
    }
    
    //when using Context to pass on Props from Any parent(App component may be where it manages state) to any child
    /*render() {
        return (
            <div>
                Select Language:
                <i className="flag us" onClick={() => this.props.OnLanguageChange('english')}/>

                <i className="flag nl" onClick={() => this.props.OnLanguageChange('dutch')}/>
                    
            </div>
        );
    }*/

}

export default LanguageSelector;