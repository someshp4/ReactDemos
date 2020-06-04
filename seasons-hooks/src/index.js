import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

const App = () => {

    const [latitude, setLatitude] = useState(null);
    const [errMsg, setErrorMessage] = useState('');

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            (position) => setLatitude(position.coords.latitude),
            (err) => setErrorMessage(err.message)
        );
    });

    let content;
    if(latitude) {
        content = <SeasonDisplay lat={latitude}/>;
    } else if(errMsg) {
        content = <div>Error : {errMsg}</div>;
    } else {
        content = <Spinner loaderMsg="please accept location request to proceed"/>;
    }

    return (<div>{content}</div>);
};




ReactDOM.render(<App/>, document.querySelector('#root'));