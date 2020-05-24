import axios from 'axios';

export const controlRadioButtonClick = (text) => ({type:"CONTROL_RADIO_BUTTON_CLICK", text});
export const categoriesClick = (text) => ({type:"CATEGORIES_CLICK", text});
export const searchTextChange = (text) => ({type:"SEARCH_TEXT_CHANGE", text});

export const getJoke = (searchType, category, searchText) => async (dispatch) => {
    let result;
    let data;

    switch (searchType) {
        case 'random':
            result = await axios.get('https://api.chucknorris.io/jokes/random');
            data = [ result.data ];
            break;
        case 'category':
            result = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`);
            data = [ result.data ];
            break;
        case 'search':
            result = await axios.get(`https://api.chucknorris.io/jokes/search?query=${searchText}`);
            data = result.data.result;
            break;
    }
    return dispatch({ type:"GET_JOKE", data });
};

export const heartClick = (joke) => ({ type:"HEART_CLICK", joke });
export const closeFavouriteClick = () => ({ type:"CLOSE_FAVOURITE_CLICK", showModal: false });
export const openFavouriteClick = () => ({ type:"OPEN_FAVOURITE_CLICK", showModal: true });