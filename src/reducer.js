const getFromLocalStorage = () => {
    const favourites = localStorage.getItem('favourites');
    if(favourites) {
        return new Map(JSON.parse(localStorage.getItem('favourites')));
    }
    return new Map();
};

const initialState = {
    searchType: 'random',
    category: 'animal',
    searchText: '',
    jokes: [],
    favourites: getFromLocalStorage(),
    showModal: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "OPEN_FAVOURITE_CLICK":
            return {
                ...state,
                showModal: action.showModal,
            }
        case "CLOSE_FAVOURITE_CLICK":
            return {
                ...state,
                showModal: action.showModal,
            }
        case "CONTROL_RADIO_BUTTON_CLICK":
            return {
                ...state,
                searchType: action.text,
            }
        case "CATEGORIES_CLICK":
            return {
                ...state,
                category: action.text,
            }
        case "SEARCH_TEXT_CHANGE":
            return {
                ...state,
                searchText: action.text,
            }
        case "GET_JOKE":
            return {
                ...state,
                jokes: action.data,
            }
        case "HEART_CLICK":
            const favouritesMap = new Map(state.favourites);
            favouritesMap.set(action.joke.id, action.joke);
            localStorage.setItem('favourites', JSON.stringify(Array.from(favouritesMap.entries())));
            return {
                ...state,
                favourites: favouritesMap,
            }
        default:
            return state;
    }
}

export default reducer;