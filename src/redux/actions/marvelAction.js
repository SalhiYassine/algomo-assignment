import axios from 'axios'
import env from "react-dotenv";
import {
    CHARACTER_SEARCH_REQUEST,
    CHARACTER_SEARCH_SUCCESS,
    CHARACTER_SEARCH_FAIL
} from '../constants/marvelConstants'


export const getSearchResults = (text) => async (dispatch, getState) => {
    try {
        dispatch({ type: CHARACTER_SEARCH_REQUEST });
        const { data } = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${text}&apikey=${env.API_KEY}`);
        dispatch({ type: CHARACTER_SEARCH_SUCCESS, payload: {results: data.data.results, total: data.data.total}});
    } catch (error) {
        dispatch({
        type: CHARACTER_SEARCH_FAIL,
        payload: 'Failed to retrieve results!',
      });
    }
  };
