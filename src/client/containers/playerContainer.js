import { connect } from 'react-redux';
import { Player } from '../components/player';

const mapStateToProps = (state) => {
    return {
        state: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        playAudio: (event) => {
            const music = document.getElementById('music');
            if (music.paused) {
                music.play();
            } else {
                music.pause();
            }
        },
    };
};

export const PlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);