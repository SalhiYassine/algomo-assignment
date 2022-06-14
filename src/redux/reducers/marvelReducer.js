import {
    CHARACTER_SEARCH_REQUEST,
    CHARACTER_SEARCH_SUCCESS,
    CHARACTER_SEARCH_FAIL
} from '../constants/marvelConstants'


export const marvelSearchReducer = (state = {}, action) => {
    switch (action.type) {
      case CHARACTER_SEARCH_REQUEST:
        return { loading: true };
      case CHARACTER_SEARCH_SUCCESS:
        return {
          loading: false,
          search_results: action.payload,
        };
      case CHARACTER_SEARCH_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };