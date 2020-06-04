import React from 'react';
import UserCreate from './UserCreate';
//import LanguageContext from '../context/LanguageContext';
import { LanguageStore } from '../context/LanguageContext';
import ColourContext from '../context/ColourContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {


    //When using Context as  type of Redux and providing  away to change the state in any component instead of App(i.e.Parent) Component itself
    render() {
        return(
            <div className="ui container">
                <LanguageStore>
                    <LanguageSelector />
                    <ColourContext.Provider value="red">
                        <UserCreate />  
                    </ColourContext.Provider>
                </LanguageStore>  
            </div>
        );
    }


    //when using Context to pass on Props from Any parent(App component may be where it manages state) to any child
    /*
    state = {language : 'english'};

    onSelectLanguage = (language) => {
        this.setState({language : language});
    }

    render() {
        return(
            <div className="ui container">
                <LanguageSelector OnLanguageChange={this.onSelectLanguage}/>
                <ColourContext.Provider value="red">
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate />  
                    </LanguageContext.Provider>
                </ColourContext.Provider>
            </div>
        );
    }*/
    
}

export default App;