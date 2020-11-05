import * as ACTION from "../actions/types";

const initialState = {
    recipes: [],
    number: 10,
    page: 0,
    querySearch: "",
    preloader: false,
    error: null,
};

export default (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case ACTION.GET_CURRENT_RECIPE_START:
            return {
                ...state,
                preloader: true
            };

        case ACTION.GET_CURRENT_RECIPE_SUCCESS:
            console.log("ACTION.GET_CURRENT_RECIPE_SUCCESS", payload);

            return {
                ...state,
                preloader: false,
                recipes: payload,
                error: null,
            };

        case  ACTION.CHANGE_RECIPE_SEARCH:
            return {
                ...state,
                preloader: false,
                querySearch: payload,
                error: null,
            };

        case ACTION.GET_CURRENT_RECIPE_ERROR:
            return {
                ...state,
                preloader: false,
                recipes: [],
                error: payload,
            };

        case ACTION.FILTER_CURRENT_RECIPES:
            return {
                ...state,
            };

        case ACTION.CHANGE_PAGE:
            return {
                ...state,
                page: payload
            };

        case ACTION.GET_CHANGE_NUMBER:
            return {
                ...state,
                number: payload
            };

        default:
            return state;
    }
}

// function filterRecipes (recipes, filter) {
//     return recipes.filter((recipe) => {
//         return recipe.label.toLowerCase().indexOf(filter.search.toUpperCase()) >= 0;
//     })
// }
