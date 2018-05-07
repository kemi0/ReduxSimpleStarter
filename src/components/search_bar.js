import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };
    }
    render() {
        return(
            <div className="search-bar">
                <input 
                 value={this.state.term}
                onChange={e => this.onInputChange(e.target.value)} />
                                        {/* // grabs that input and terms it into an output  */}
            </div>
        );

    }
    // you must have the correct props from the state
    onInputChange(term) {
        this.setState({term})
        this.props.onSearchTermChange(term);
    }
// es5 way of setting the event handler 
// onInputChange(e) {
//     console.log(e.target.value)
// }


}

export default SearchBar;