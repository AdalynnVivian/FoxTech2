GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    GTRecipeTypes.CUTTER_RECIPES.setMaxIOSize(2, 2, 1, 0)
    GTRecipeTypes.LATHE_RECIPES.setMaxIOSize(2, 2, 0, 0)
})