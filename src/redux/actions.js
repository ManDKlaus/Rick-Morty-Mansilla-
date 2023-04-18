import { 
    SEARCH_CHARACTER,
    ADD_FAV,
    ACT_CHAR, 
    REMOVE_FAV, 
    FILTER, 
    ORDER, 
    RESET, 
    ADD_CHAR,
    NEXT_PAGE,
    PREV_PAGE,
    GET_FAV,
} from "./actiontypes";

import axios from "axios";

export function addChar (chars) {
    return {
        type: ADD_CHAR,
        payload: chars,
    };
};

export function actChar (chars) {
    return {
        type: ACT_CHAR,
        payload: chars,
    };
}

export function searchCharacter(character) {
  return {
    type: SEARCH_CHARACTER,
    payload: character,
  };
}

export function getFav() {
    return async function (dispatch) {
      try {
        const { data } = await axios.get(
          `http://localhost:3001/rickandmorty/favorites/all`
        );
        return dispatch({
          type: GET_FAV,
          payload: data,
        });
      } catch (error) {
        console.log("getFav not found", error);
      }
    };
  }

export function addFav (props) {
    return async function (dispatch) {
        try {
            const {data} = await axios.post(
                `http://localhost:3001/rickandmorty/favorites`,
                props
            );
            return dispatch({
                type: ADD_FAV,
                payload: data,
            });
        } catch (error) {
            console.log("addFav not found", error);
        };
    };
};

export function removeFav (id) {
    return async function (dispatch) {
        try {
            const {data} = await axios.delete(
                `http://localhost:3001/rickandmorty/favorites/${id}`
            );
            return dispatch({
                type: REMOVE_FAV,
                payload: data, // myFavorites
            });
        } catch (error) {
            console.log("removeFav not found", error);
        };
    };
};

export function filterCards (gender) {
    return {
        type: FILTER,
        payload: gender,
    };
};

export function orderCards (order) {
    return {
        type: ORDER,
        payload: order,
    };
};

export function reset () {
    return {
        type: RESET,
    };
};

export function prevPage(cOf) {
    return {
      type: PREV_PAGE,
      payload: cOf,
    };
  }
  
  export function nextPage(cOf) {
    return {
      type: NEXT_PAGE,
      payload: cOf,
    };
  }
  