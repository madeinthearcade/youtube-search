import React from 'react';

const VideoItem = (props) => {
    const { channelTitle, thumbnails, title } = props.video.snippet
    return (
        <div className="ui item" onClick={ () => props.onVideoSelect(props.video) }>
            <img src={ thumbnails.default.url } className="ui image"/>
            <div className="content">
                <div className="header">{ title }</div>
                <div className="description">{ channelTitle }</div>
            </div>
        </div>
    )
}

export default VideoItem;
