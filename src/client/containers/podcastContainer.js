import { connect } from 'react-redux';
import { Podcast } from '../components/podcast';
import { selectEps } from '../actions/podcastActions';

const mapStateToProps = (state) => {
    return {
        state: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectEpisode: (event) => {
            const idx = event.target.getAttribute('data-key');
            dispatch(selectEps(idx));
        },
    };
};

export const PodcastContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Podcast);