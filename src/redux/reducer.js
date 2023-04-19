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
    HANDLE_NUMBER,
    GET_FAV,
} from "./actiontypes";

const initialState = {
    editFav:[],
    favorites: [],
    editChar: [],
    characters: [],
    removeds: [],
    status: "",
    gender: "",
    location: [],
    numPageChar: 1,
    numPageFav: 1,
};

export default function rootReducer (state=initialState,{type, payload}) {
    switch (type){
        case ADD_CHAR:
            if (Array.isArray(payload)) {
                const favoriteIds = state.favorites.map((fav) => fav.id); // obtienes un array con los ids de los personajes favoritos
                const updatedChars = payload.map((char) => {
                  if (favoriteIds.includes(char.id)) {
                    return { ...char, isFav: true }; // actualizas la propiedad 'isFav' del personaje
                  }
                  return char;
                });
                return {
                    ...state,
                    editChar: updatedChars,
                    characters: updatedChars,
                };
            }
        case ACT_CHAR:
            return {
                ...state,
                editChar: state.editChar.map((char) => {
                    if (char.id === payload.id) {
                        return {
                            ...char,
                            isFav: payload.isFav,
                        };
                    }
                    return char;
                }),
            };
        case SEARCH_CHARACTER:
            return {
                ...state,
                editChar: [...payload],
            };
        case GET_FAV:
            const startIndex = (state.numPageFav - 1) * 20;
            const endIndex = state.numPageFav * 20;
            const slicedPayload = payload.slice(startIndex, endIndex);
            return {
              ...state,
              editFav: slicedPayload,
              favorites: payload,
            };
        case ADD_FAV:
            if (state.editFav.length < 20) {
                return {
                    ...state,
                    editFav: payload,
                    favorites: payload,
                };
            }
            return {
                ...state,
                favorites: payload,
            };
        case REMOVE_FAV:
            return {
                ...state,
                editFav: payload,
                favorites: payload,
            };
        case FILTER:
            const { id, value, checked } = payload;
            const key = id === "switch1" || id === "switch2" || id === "switch3" ? "status" : "gender";
            state[key] = checked ? value : "";
            const filterChar = state.characters.filter((ch)=> {
                if (state.status && ch.status !== state.status) {
                  return false;
                }
                if (state.gender && ch.gender !== state.gender) {
                  return false;
                }
                return true;
              })
            const filterFav = state.favorites.filter((ch)=> {
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
                editChar: filterChar,  
                editFav: filterFav,        
            };
        case ORDER:
            const newOrder1 = state.characters.sort((a, b)=>{
                if(a.id > b.id) {
                    return "Ascendente" === payload ? 1 : -1;
                }
                if(a.id < b.id) {
                    return "Descendente" === payload ? 1 : -1;
                }
                return 0;
            });
            const newOrder2 = state.favorites.sort((a, b)=>{
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
                editChar: newOrder1,  
                editFav: newOrder2,        
            };
        case RESET:
            return {
                ...state,
                status:"",
                gender:"",
                editChar: [...state.characters],
                editFav: [...state.favorites],        
            };
        case NEXT_PAGE:
            if(payload === "Favoritos") {
                return {
                    ...state,
                    numPageFav: state.numPageFav + 1,
                };
            }
            return {
            ...state,
            numPageChar: state.numPageChar + 1,
            };
        case PREV_PAGE:
            if(payload === "Favoritos") {
                return {
                    ...state,
                    numPageFav: state.numPageFav - 1,
                };
            }
            return {
            ...state,
            numPageChar: state.numPageChar - 1,
            };
        default:
            return state;
    };
};