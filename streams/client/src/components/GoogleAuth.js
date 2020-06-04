import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut} from '../actions';

class GoogleAuth extends React.Component {
    
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId : '261599307455-0gq88leoqpnrv25tpjk7q2abtfbveruf.apps.googleusercontent.com',
                scope : 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        }); 
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn) {
            console.log(this.auth.currentUser.get());
            this.props.signIn(this.auth.currentUser.get().getId());
            
        } else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn({prompt: 'select_account'});
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if(this.props.isSignedIn === null) {
            return <div>I dont know if signed in </div>;
        } else if(this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon"/>
                    Sign Out
                </button>
            );
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon"/>
                    Sign In with Google
                </button>
            );
        }
    }

    render() {
        return(
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {isSignedIn : state.auth.isSignedIn};
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);