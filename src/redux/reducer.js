import { 
    ADD_FAV, 
    REMOVE_FAV, 
    FILTER, 
    ORDER, 
    RESET, 
    ADD_CHAR, 
    REMOVE_CHAR, 
    ADD_REMOVED 
} from "./actiontypes";

const initialState = {
    myFavorites:[],
    allFavorites: [],
    characters: [],
    allCharacters: [],
    removeds: [],
    status: "",
    gender: "",
};

export default function rootReducer (state=initialState,{type, payload}) {
    switch (type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, payload],
                allFavorites: [...state.allFavorites, payload],
            };
        case REMOVE_FAV:
            const returnChar1 = state.myFavorites.filter((ch)=> ch.id !== payload);
            const returnChar2 = state.allFavorites.filter((ch)=> ch.id !== payload);
            return {
                ...state,
                myFavorites: returnChar1,
                allFavorites: returnChar2,
            };
        case FILTER:
            const { id, value, checked } = payload;
            const key = id === "switch1" || id === "switch2" || id === "switch3" ? "status" : "gender";
            state[key] = checked ? value : "";
            const filterChar = state.allCharacters.filter((ch)=> {
                if (state.status && ch.status !== state.status) {
                  return false;
                }
                if (state.gender && ch.gender !== state.gender) {
                  return false;
                }
                return true;
              })
            const filterFav = state.allFavorites.filter((ch)=> {
                if (state.status && ch.status !== state.status) {
                  return false;
                }
                if (state.gender && ch.gender !== state.gender) {
                  return false;
                }
                return true;
              })
            return {
                ...state,
                characters: filterChar,  
                myFavorites: filterFav,        
            };
        case ORDER:
            const newOrder1 = state.allCharacters.sort((a, b)=>{
                if(a.id > b.id) {
                    return "Ascendente" === payload ? 1 : -1;
                }
                if(a.id < b.id) {
                    return "Descendente" === payload ? 1 : -1;
                }
                return 0;
            });
            const newOrder2 = state.allFavorites.sort((a, b)=>{
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
                characters: newOrder1,  
                myFavorites: newOrder2,        
            };
        case RESET:
            return {
                ...state,
                status:"",
                gender:"",
                characters: [...state.allCharacters],
                myFavorites: [...state.allFavorites],        
            };
        case ADD_CHAR:
            return {
                ...state,
                characters: [...state.characters, payload],
                allCharacters:[...state.allCharacters, payload],     
            };
        case REMOVE_CHAR:
            const newCh1 = state.characters.filter((ch)=> ch.id !== payload);
            const newCh2 = state.allCharacters.filter((ch)=> ch.id !== payload);
            return {
                ...state,
                characters: newCh1,
                allCharacters: newCh2,
            };
        case ADD_REMOVED:
            return {
                ...state,
                removeds: [...state.removeds, payload],
            };
        default:
            return state;
    };
};