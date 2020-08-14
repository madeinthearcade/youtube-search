import React from 'react';

const VideoPlayer = (props) => {
    if (!props.selectedVideo) return null;
    const { title, channelTitle, description } = props.selectedVideo.snippet;
    return (
        <div className="ui segment">
            <div className="ui embed">
                <iframe src={`https://www.youtube.com/embed/${ props.selectedVideo.id.videoId }`} frameBorder="0" />
            </div>
            <div className="content">
                <div className="header">{ title }</div>
                <div className="meta">
                    <span className="date">{ channelTitle }</span>
                </div>
                <div className="description">
                    { description }
                </div>
            </div>
        </div>
    )
}

export default VideoPlayer;
