// priority: 1

import {toTags_, toTag_, tagItems_, replace_, replaceAll_, recycle_, recipe} from "../globalFns.js"
const $GTCEuFluidIngredient = Java.loadClass("com.gregtechceu.gtceu.api.recipe.ingredient.FluidIngredient")

ServerEvents.recipes(event => {
    function cutter(id, inputs, outputs, lubeDuration, c) { //Register cutting recipes.
        //var FLUIDS = [ftag("forge:lubricant", 1), ftag("distilled_water", 3), Fluid.of('minecraft:water', 4)]
        var FLUIDS = ['1x #forge:lubricant', '3x #forge:distilled_water', '4x minecraft:water']
        var NAMES = ['', '_distilled_water', '_water'] 
        for(var i in FLUIDS) {
            /*event.recipes.gtceu.cutter(id+NAMES[i])
                .itemInputs(inputs)
                .inputFluids(FLUIDS[i])
                .itemOutputs(outputs)
                .duration((1+.5*i)*lubeDuration)
                .EUt(7)
                .circuit(c)*/
            recipe('gtceu:cutter')(event)(id+NAMES[i], inputs, [FLUIDS[i]], outputs, [], (1+.5*i)*lubeDuration, 7, c)
        }
    }
    function vanillaWood(material) {
        event.remove('gtceu:lathe/strip_'+material+'_log') //Remove the stripped log recipe...
        event.recipes.gtceu.lathe('foxtech:stripped_' + material + '_log') //So we can add a version with a circuit. 
            .itemInputs('1x minecraft:' + material + '_log')
            .itemOutputs('1x quark:stripped_' + material + '_log', '1x gtceu:wood_dust')
            .duration(8*20)
            .EUt(7)
            .circuit(1)
        event.recipes.gtceu.lathe('foxtech:hollow_' + material + '_log') //Hollow log recipe
            .itemInputs('1x minecraft:' + material + '_log')
            .itemOutputs('1x quark:hollow_' + material + '_log', '1x gtceu:wood_dust')
            .duration(8*20)
            .EUt(7)
            .circuit(2)
        event.recipes.gtceu.lathe('foxtech:' + material + '_post') //Post recipe
            .itemInputs('1x minecraft:' + material + '_log')
            .itemOutputs('1x quark:' + material + '_post', '3x gtceu:wood_dust')
            .duration(8*20*3)
            .EUt(7)
            .circuit(3)

        //Remove plank recipes, add a circuit version (both normal, and vertical, planks)
        event.remove('gtceu:cutter/' + material + '_planks_distilled_water')
        event.remove('gtceu:cutter/' + material + '_planks_water')
        event.remove('gtceu:cutter/' + material + '_planks')
        cutter('foxtech:' + material + '_planks', ['1x minecraft:'+ material +'_log'], ['6x minecraft:' + material + '_planks', '2x gtceu:wood_dust'], 200, 1)
        cutter('foxtech:vertical_' + material + '_planks', ['1x minecraft:'+ material +'_log'], ['6x quark:vertical_' + material + '_planks', '2x gtceu:wood_dust'], 200, 2)
        
        event.recipes.gtceu.lathe('foxtech:stripped_' + material + '_post_from_post') //Quark post recipes
            .itemInputs('1x quark:' + material + '_post')
            .itemOutputs('1x quark:stripped_' + material + '_post', '1x gtceu:wood_dust')
            .duration(8*20)
            .EUt(7)
        event.recipes.gtceu.lathe('foxtech:stripped_' + material + '_post_from_log') 
            .itemInputs('1x minecraft:stripped_' + material + '_log')
            .itemOutputs('1x quark:stripped_' + material + '_post', '3x gtceu:wood_dust')
            .duration(8*20*3)
            .EUt(7)
            .circuit(3)
        
        event.remove('gtceu:cutter/' + material + '_slab_distilled_water') //Slbs, both vertical and horizontal
        event.remove('gtceu:cutter/' + material + '_slab_water')
        event.remove('gtceu:cutter/' + material + '_slab')
        cutter('foxtech:' + material + '_slab', ['1x minecraft:' + material + '_planks'], ['2x minecraft:' + material + '_slab'], 10*20, 1)
        cutter('foxtech:' + material + '_vertical_slab', ['1x minecraft:' + material + '_planks'], ['2x quark:' + material + '_vertical_slab'], 10*20, 2)

    }
    vanillaWood('oak')
    vanillaWood('spruce')
    vanillaWood('birch')
    vanillaWood('jungle')
    vanillaWood('acacia')
    vanillaWood('dark_oak')
    vanillaWood('mangrove')
    vanillaWood('cherry')

    event.recipes.gtceu.centrifuge('foxtech:soul_quartz_sand')
        .itemInputs('2x gtceu:soul_quartz_sand_dust')
        .itemOutputs('1x gtceu:quartz_sand_dust', '1x mysticalagriculture:nether_essence')
        .duration(60)
        .EUt(30)
    event.recipes.gtceu.centrifuge('foxtech:clay_loam')
        .itemInputs('3x gtceu:dirt_dust')
        .itemOutputs('3x gtceu:tiny_clay_dust', '1x minecraft:sand', '1x twigs:silt') //Todo: make these dusts
        .duration(80)
        .EUt(30)
    event.recipes.gtceu.centrifuge('foxtech:mud')
        .inputFluids(Fluid.of('gtceu:mud', 1000))
        .chancedOutput('minecraft:sand', 2500, 250)
        .chancedOutput('minecraft:gravel', 2500, 250)
        .chancedOutput('minecraft:clay', 2500, 250)
        .chancedOutput('gtceu:limestone_dust', 2500, 250)
        .duration(20)
        .EUt(30)
    event.recipes.gtceu.centrifuge('foxtech:dark_prismarine')
        .itemInputs('9x gtceu:dark_prismarine_dust')
        .itemOutputs('8x minecraft:prismarine_shard', '1x gtceu:chemical_black_dye')
        .duration(20)
        .EUt(30)
})