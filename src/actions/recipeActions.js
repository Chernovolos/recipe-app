import axios from "axios";
import * as ACTION from "../actions/types";
// import Recipe from "../models/recipe";

export const getCurrentRecipeStart = () => ({type: ACTION.GET_CURRENT_RECIPE_START});
export const getCurrentRecipeSuccess = (recipes) => ({type: ACTION.GET_CURRENT_RECIPE_SUCCESS, payload: recipes});
export const getCurrentRecipeError = (error) => ({type: ACTION.GET_CURRENT_RECIPE_ERROR, payload: error});
export const filterRecipes = (filter) => ({type: ACTION.FILTER_CURRENT_RECIPES, payload: filter});

export const changeRecipeSearch = (querySearch) => ({type: ACTION.CHANGE_RECIPE_SEARCH, payload: querySearch});
export const getChangeNumber = (number) => ({type: ACTION.GET_CHANGE_NUMBER, payload: number});
export const changePage = (page) => ({type: ACTION.CHANGE_PAGE, payload: page});



export const getRecipes = ({number, page, querySearch}) => (dispatch) => {
    const params = {
        apiKey: 'ecf5ca8b2ac344949abadb86df9db77c',
        number: number,
        offset: page * number,
        query: querySearch
    };
    console.log("getRecipes query params", params);
    dispatch(getCurrentRecipeStart());
    axios.get("https://api.spoonacular.com/recipes/search?", {params})
        .then(({data}) => {
            // let recipes = data.results.map(recipe => new Recipe(recipe));
            // TODO replace with model constructing
            let recipes = data.results;
            dispatch(getCurrentRecipeSuccess(recipes));
        })
        .catch(error => dispatch(getCurrentRecipeError(error)));
};





// const APP_ID = "9f916a76";
// const APP_KEY = "0238c735e3086c64ed9f1ffe7945bcf6";

// export const getRecipes = (search = "") => (dispatch) => {
//     dispatch(getCurrentRecipeStart());
//
//
//     axios.get(`https://api.edamam.com/search?q="chicken"&app_id=${APP_ID}&app_key=${APP_KEY}`)
//         .then(({data}) => {
//             console.log(data);
//             let recipes = data.hits.map(recipe => (new Recipe(recipe)));
//             dispatch(getCurrentRecipeSuccess(recipes, search));
//             console.log(recipes)
//         })
//         .catch(error => dispatch(getCurrentRecipeError(error)));
// };





// let params = new URLSearchParams({
//         apiKey: 'ecf5ca8b2ac344949abadb86df9db77c',

// }).toString();


// const APP_ID = "9f916a76";
// const APP_KEY = "0238c735e3086c64ed9f1ffe7945bcf6";
// `https://api.edamam.com/search?q="chicken"&app_id=${APP_ID}&app_key=${APP_KEY}`