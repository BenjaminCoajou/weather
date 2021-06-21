  
import { connect } from 'react-redux';
import { searchCity, submitCity } from '../actions/serachBar';
import SearchBar from '../components/SearchBar';

const mapStateToProps = (state) => ({
    city: state.searchBar.city
});

const mapDispatchToprops = (dispatch) => ({
    inputChange: (city) => {
        dispatch(searchCity(city))
    },
    formSubmit: () => {
        dispatch(submitCity())
    },
});

export default connect(mapStateToProps, mapDispatchToprops)(SearchBar);