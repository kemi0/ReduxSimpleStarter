import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
    // const video = props.vdieo; identical 
    // looking for the props with video
    console.log(video);
    // grabbing the information of the thumbnail and url 
    const imageUrl = video.snippet.thumbnails.default.url;
    //drill down to the information you need, nothing has changed 
    return (
        <li className="list-group-item"> 
            <div className="video-list media">
                <div className="media-left">
                   <img className="media-object" src={imageUrl}/>
                </div>


                <div className="media-body">
                    <div className="media-heading">
                    {video.snippet.title}
                    </div>
                </div>
            </div>
         </li>
    ) 
}
export default VideoListItem; 