import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';
import VideoList from './components/Video-list';
import SearchBar from './components/Search-bar';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/Video-detail';

const YOUTUBE_KEY = 'YOUR_YOUTUBE_API_KEY';

class App extends Component {

  constructor(props){
    super(props);
    this.state = { 
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('programming');

  
  }

  videoSearch(term){

    YTSearch({key: YOUTUBE_KEY, term: term}, (data) => {
      this.setState({ videos: data, 
                    selectedVideo: data[0]})
    })
      
  }

  render() {

    const videoSearch = _.debounce((term) => this.videoSearch(term), 300);

    return (
      <div className="App">
        <SearchBar onSearchTerm={videoSearch} />
        <div className="wrapper">
          <div className="row">
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
              onVideoSelect={selectedVideo => this.setState({selectedVideo})}
              videos={this.state.videos} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
