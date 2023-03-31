import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET } from "./actiontypes";

const initialState = {
    myFavorites:[],
    allFavorites: [],
};

export default function rootReducer (state=initialState,{type, payload}) {
    switch (type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.allFavorites, payload],
                allFavorites:[...state.allFavorites, payload],
            };
        case REMOVE_FAV:
            const newFavorites = state.allFavorites.filter((ch)=> ch.id !== payload);
            return {
                ...state,
                myFavorites: newFavorites,
                allFavorites: newFavorites,
            };
        case FILTER:
            const newFilter = state.allFavorites.filter((ch)=> ch.gender === payload);
            return {
                ...state,
                myFavorites: newFilter,        
            };
        case ORDER:
            const newOrder = state.allFavorites.sort((a, b)=>{
                if(a.id > b.id) {
                    return "Ascendente" === payload ? 1 : -1;
                }
                if(a.id < b.id) {
                    return "Descendente" === payload ? 1 : -1;
                }
                return 0;
            });
            return {
                ...state,
                myFavorites: newOrder,        
            };
        case RESET:
            return {
                   ...state,
                myFavorites: [...state.allFavorites],        
            };
        default:
            return state;
    };
};