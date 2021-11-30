const express = require('express');
const router = express.Router();
const recipesModel = require('./recipesModel');
const { checkRecipeExists } = require('./recipesMiddleware');

router.get('/', async (req, res) => {
    try {
        const recipes = await recipesModel.getAllRecipes();
        res.status(200).send(recipes);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
})

router.get('/:id', checkRecipeExists, async (req, res) => {
    try {
        const recipe = await recipesModel.getRecipeById(req.params.id);
        res.status(200).send(recipe);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
})

module.exports = router;
