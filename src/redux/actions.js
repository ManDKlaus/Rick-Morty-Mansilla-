import { 
    ADD_FAV, 
    REMOVE_FAV, 
    FILTER, 
    ORDER, 
    RESET, 
    ADD_CHAR, 
    REMOVE_CHAR, 
    ADD_REMOVED, 
} from "./actiontypes";


export function addFav (character) {
    return {
        type: ADD_FAV,
        payload: character,
    };
};

export function removeFav (id) {
    return {
        type: REMOVE_FAV,
        payload: id,
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

export function addChar (id) {
    return {
        type: ADD_CHAR,
        payload: id,
    };
};

export function removeChar (id) {
    return {
        type: REMOVE_CHAR,
        payload: id,
    };
};

export function addRemoved (id) {
    return {
        type: ADD_REMOVED,
        payload: id,
    };
};