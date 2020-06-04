import React  from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}) => {

    if(!song) {
        return <div> Please select a song</div>
    }
        return(
            <div>
                <h4>
                    Selected song :
                </h4>
                <p>
                    {song.title}
                    <br/>
                    {song.duration}
                </p>

            </div>
        );

}

const mapStateToProps = (state) => {
    return {song : state.selectedSong};
};

export default connect(mapStateToProps)(SongDetail);

