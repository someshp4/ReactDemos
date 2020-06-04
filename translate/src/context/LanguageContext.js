import React from 'react';

const LanguageContext = React.createContext('english');


//the below class is implemented to use context as type of redux store(i.e., to replace redux)
export class LanguageStore extends React.Component {

    state = {language : 'english'};

    onSelectLanguage = (language) => {
        this.setState({language : language});
    }

    render() {
        return (
            <LanguageContext.Provider value={{...this.state, onLanguageChange:this.onSelectLanguage}}>
                {this.props.children}
            </LanguageContext.Provider>
        );
    }

}


export default LanguageContext;