import React from 'react';
import getResources from './useResources';


//function based component and code reuse using useResources component
const ResourceList = ({ resource }) => {
    const resources = getResources(resource);

    return (
        <div>
            <ul> {resources.map(record => (<li key={record.id}>{record.title}</li>))}
            </ul>
        </div>
        );

};

//converted class based to function based component using hooks
/*const ResourceList = ({ resource }) => {

    const [resources, setResources] = useState([])

    const fetchResources = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        setResources(response.data);
    };

    useEffect(() =>  { fetchResources() } ,[resource] );

    return (
        <div>
            <ul> {resources.map(record => (<li key={record.id}>{record.title}</li>))}
            </ul>
        </div>
        );
};*/

//As a class component
/*class ResourceList extends React.Component {
    state = {resources : []};

    async componentDidMount() {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
        this.setState({resources : response.data});
    }

    async componentDidUpdate(prevProps) {
        if(prevProps.resource !== this.props.resource) {
             const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
             this.setState({resources : response.data});
        }
        
    }

    render() {
        return (
        <div>
            <ul> {this.state.resources.map(record => (<li key={record.id}>{record.title}</li>))}
            </ul>
        </div>
        );
    }
}*/

export default ResourceList;