import React, { Component } from 'react';
import Search from '../components/Search';
import youtube from '../API/youtube';

const KEY = 'AIzaSyAU7KBz7GXto3hi5KckYtx7Ycgsy4fFXaY';

class App extends Component {
    state = {
        videos: []
    }

    onSearchSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                part: 'snippet',
                maxResuls: 10,
                q: term,
                safeSearch: 'none',
                type: 'video',
                key: KEY
            }
        })
        console.log(response.data.items)
        this.setState({ videos: response.data.items })
    }

    render() {
        return (
            <div className="ui container">
                <h1 className="ui header">Search YouTube Videos</h1>
                <Search onSearchSubmit={ this.onSearchSubmit } />
            </div>
        )
    }
}

export default App;
