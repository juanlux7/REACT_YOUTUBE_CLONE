import React from 'react';

//funtional component for an individual video

const VideoDetail = ( {video} ) => {

    if(!video){
        return <div>Loading...</div>
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`; 

    return (

        <div className="video-detail col-md-8">

            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
        
        <div className="details">

            <div className="videoTitle">
                <h5>{video.snippet.title}</h5>
                <span className="views-count">1.234 views</span>

                    <span className="sh-sv"><i className="fa fa-plus-square"></i>&nbsp;Save</span>
                    <span className="sh-sv"><i className="fa fa-share"></i>&nbsp;Share</span>
                    <div className="likes"><pre></pre></div>
                    <span className="likes"><i className="fa fa-thumbs-down"></i>&nbsp;33</span>
                    <span className="likes"><i className="fa fa-thumbs-up"></i>&nbsp;2.330</span>

            </div>

            <div className="videoDescription">
                <a href={`https://www.youtube.com/channel/`+video.snippet.channelId}>{video.snippet.channelTitle}</a>
                <div>published: JUAN LUNA LAMA</div>
                <div className="text-description">{video.snippet.description}</div>
            </div>
        </div>

        <div>
            <span>1.002 comments</span>
            <span className="ml-5">ORDER BY</span>

            {/* COMMENTS BLOCK SHOULD BE IN THIS PART OF THE CODE */}
        </div>

        </div>

    )

}

export default VideoDetail;