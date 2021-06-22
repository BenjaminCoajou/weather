import { connect } from 'react-redux';
import { back, more } from '../actions/home';
import Home from '../components/Home';

const mapStateToProps = (state) => ({
    weather: state.searchBar.cityInfos,
    city: state.searchBar.city,
    more: state.home.more

});

const mapDispatchToprops = (dispatch) => ({
    back: () => {
       dispatch(back())
    },
    moreInfos: () => {
        dispatch(more())
    }
});

export default connect(mapStateToProps, mapDispatchToprops)(Home);