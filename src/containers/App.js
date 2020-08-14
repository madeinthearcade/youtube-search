import React, { Component } from 'react';
import Search from '../components/Search';
import VideoList from '../components/VideoList';
import VideoPlayer from '../components/VideoPlayer';
import youtube from '../API/youtube';

const KEY = 'API_KEY';

class App extends Component {
    state = {
        videos: [],
        selectedVideo: null
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
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    }

    render() {
        return (
            <div className="ui container">
                <h1 className="ui header">Search YouTube Videos</h1>
                <Search onSearchSubmit={ this.onSearchSubmit } />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="column ten wide">
                            <VideoPlayer selectedVideo={ this.state.selectedVideo } />
                        </div>
                        <div className="column six wide">
                            <VideoList videos={ this.state.videos } onVideoSelect={ this.onVideoSelect } />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
