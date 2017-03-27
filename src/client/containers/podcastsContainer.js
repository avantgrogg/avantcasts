import { connect } from 'react-redux';
import { Podcasts } from '../components/podcasts';
import { showPodcast } from '../actions/podcastActions';

const mapStateToProps = (state) => {
    return {
        state: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        showPodcast: (event) => {
            const idx = event.target.getAttribute('data-key');
            dispatch(showPodcast(idx));
        },
    };
};

export const PodcastsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Podcasts);