import React, { Component } from 'react';

class Search extends Component {
    state = {
        term: ''
    }

    onInputChange = (event) => {
        this.setState({ term: event.target.value })
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onSearchSubmit(this.state.term)
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={ this.onFormSubmit }>
                    <div className="field">
                        <label htmlFor="search">Enter search term</label>
                        <input type="text" id="search" value={ this.state.term } onChange={ this.onInputChange } />
                    </div>
                </form>
            </div>
        )
    }
}

export default Search;
