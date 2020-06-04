import React from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = {videos : [], selectedVideo : null};

    componentDidMount() {
        this.onTermSubmit('poems');
    }

    onTermSubmit = async term => {

        const res = await youtube.get('/search', {
                    params: {
                        q: term
                    }
                });

        this.setState({videos : res.data.items});
        this.setState({selectedVideo : res.data.items[0]});

    };

    onSelectVideo = video => {

        this.setState({selectedVideo : video});

    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail selectedVideo={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onSelectVideo={this.onSelectVideo}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;