const db = require('../../dbConfig');

// get all recipes
async function getAllRecipes() {
    try {
        return await db('recipes');
    } catch (error) {
        return { error };
    }
}

async function getRecipeById(id) {
    const recipe = await db('recipes').where({ recipe_id: id }).first();
    const steps = await db('steps').where({ recipe_id: id }).orderBy('step_number');
    const ingredients = await db('ingredients');
    recipe.steps = steps.map(step => {
        step.ingredients = ingredients.filter(ingredient => ingredient.ingredient_id === step.ingredient_id);
        return step;
    })
    recipe.steps = steps;
    return recipe;
};

module.exports = {
    getAllRecipes,
    getRecipeById
};
