
export default class Recipe {
    constructor(hits) {
        this.calories = hits.recipe.calories;
        this.cautions = hits.recipe.cautions;
        this.dietLabels = hits.recipe.dietLabels;
        this.digest = hits.recipe.digest;
        this.healthLabels = hits.recipe.healthLabels;
        this.image = hits.recipe.image;
        this.ingredientLines = hits.recipe.ingredientLines;
        this.ingredients = hits.recipe.ingredients;
        this.label = hits.recipe.label;
        this.shareAs = hits.recipe.shareAs;
        this.source = hits.recipe.source;
        this.totalDaily = hits.recipe.totalDaily;
        this.totalNutrients = hits.recipe.totalNutrients;
        this.totalNutrients = hits.recipe.totalNutrients;
        this.totalWeight = hits.recipe.totalWeight;
        this.yield = hits.recipe.yield;
    }
}