import React from 'react';

class SearchBar extends React.Component {
    state = {term : ''};
    //onInputChange(event) {
        //console.log(event.target.value);
        //this.setState({term : event.target.value.toUpperCase});
    //}
    onFormSubmit = event => {
        event.preventDefault();
        //console.log(this.state.term);
        this.props.onSubmitFn(this.state.term);
    }

    render() {
        return (
            <div className="ui segment" >
                <form onSubmit={this.onFormSubmit} className="ui form"> 
                    <div className="field">
                        <label>Enter image name for search</label>
                        <input type="text" value={this.state.term} onChange={e => this.setState({term : e.target.value})}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;