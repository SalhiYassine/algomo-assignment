import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { marvelSearchReducer } from './redux/reducers/marvelReducer';

const reducer = combineReducers({
    searchResults : marvelSearchReducer
});

const initialState = {
  searchResults: { loading : false }
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;