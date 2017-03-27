import { connect } from 'react-redux';
import { Home } from '../components/home';

const mapStateToProps = (state) => {
    return {
        state: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);