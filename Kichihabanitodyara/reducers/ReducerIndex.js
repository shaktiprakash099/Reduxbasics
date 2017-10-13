
import {combineReducers} from 'redux';
import PeopleReducers from './PeopleReducers';

const AllReducer = combineReducers({
   people: PeopleReducers,
});

export default AllReducer;
