import { connect } from 'react-redux';
import { back } from '../actions/home';
import Home from '../components/Home';

const mapStateToProps = (state) => ({
    weather: state.searchBar.cityInfos,
    city: state.searchBar.city,
});

const mapDispatchToprops = (dispatch) => ({
    back: () => {
       dispatch(back())
    }
});

export default connect(mapStateToProps, mapDispatchToprops)(Home);