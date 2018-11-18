import React, {Component} from 'react';
import VideoListItem from './Video-list-item';


class VideoList extends Component {

    constructor(props){
        super(props);
        

    }

    render(){

        return (

            <div className="col-md-4">
                <ul className="list-group">
                    {this.props.videos.map((video) => {

                        return (

                        <VideoListItem 
                        onVideoSelect={this.props.onVideoSelect}
                        key={video.etag} 
                        video={video} />

                        )

                    })}
                </ul>

            </div>

        )

    }

}


export default VideoList;