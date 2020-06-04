import React from 'react';
import { connect } from 'react-redux';
//import { fetchUser } from '../actions';

class UserHeader extends React.Component {
    //commented to prevent duplicate call of fetch user
    //componentDidMount() {
      //  this.props.fetchUser(this.props.id);
    //}

    render() {
        const { user } = this.props;
        if(!user) {
            return null;
        }
        return(
            <div className="header">
                {user.name}
            </div>
        );
    }

}

const mapStateToProps = (state, props) => {
    return { user : state.users.find(user => user.id === props.id)};
};

//export default connect(mapStateToProps, { fetchUser })(UserHeader);
export default connect(mapStateToProps)(UserHeader);