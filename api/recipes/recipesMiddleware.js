const db = require('../../dbConfig');

async function checkRecipeExists(req, res, next) {
    try {
        const recipe = await db('recipes').where({ recipe_id: req.params.id }).first();
        if (!recipe) {
            return res.status(404).send({ error: 'Recipe not found' });
        }
        next();
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

module.exports = {
    checkRecipeExists
}
