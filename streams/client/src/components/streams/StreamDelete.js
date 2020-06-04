import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderContent() {
        if(this.props.stream) {
            return `Are you sure you want to delete a stream with title: ${this.props.stream.title}?`;
        }

        return "Are you sure you want to delete a stream?";
    }
    
    renderActions() { 
        const { id } = this.props.match.params;
        return (
            <div>
                <button onClick={() => this.props.deleteStream(id)} className="ui button negative">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </div>
        );
    }

    render() {
        return(
            <Modal 
                header="Delete Stream"
                content={this.renderContent()}
                actions= {this.renderActions()}
                onDismiss={() => history.push("/")}
            />
        );
    }

}

const mapStateToProps = (state, ownProps) => {

    return {stream : state.streams[ownProps.match.params.id]};
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);