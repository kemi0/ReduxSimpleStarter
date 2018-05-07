import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: ''
        };
    }
    render() {
        return(
            <div>
               
                <input 
                 value={this.state.search}
                onChange={e => this.setState({search: e.target.value})} />
                                        {/* // grabs that input and terms it into an output  */}
            </div>
        );
    }
// es5 way of setting the event handler 
// onInputChange(e) {
//     console.log(e.target.value)
// }


}

export default SearchBar;