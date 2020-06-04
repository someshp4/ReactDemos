import {useState, useEffect} from 'react';
import axios from 'axios';

const useResources = resource => {
    const [resources, setResources] = useState([]);

    //either can call a helper function inside firts param arrow function or can create an IIF as an innerfunction
    useEffect(() =>  { 
        (async resource => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
            setResources(response.data);
        })(resource);
     } ,[resource] );

    return resources;

};

export default useResources;