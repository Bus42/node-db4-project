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
    return await db('recipes').where({ recipe_id: id }).first();
};

module.exports = {
    getAllRecipes,
    getRecipeById
};
