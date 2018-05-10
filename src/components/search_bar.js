import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: 'hola' };
    }
    render() {
        return (
        <div>
                <input 
                value = {this.state.term}
                onChange={event => this.setState({ term: event.target.value })} />
        </div>
        );
    }
}
// here it is what you choose is the answer when importing SearchBar form other places
export default SearchBar;