import {toTags_, toTag_, tagItems_, replace_, replaceAll_, recycle_} from "../globalFns.js"

ServerEvents.recipes(event => {
    function cutter(id, inputs, outputs, lubeDuration, c) {
        var FLUIDS = [Fluid.of('gtceu:lubricant'), Fluid.of('gtceu:distilled_water', 2), Fluid.of('minecraft:water', 4)]
        var NAMES = ['', '_distilled_water', '_water'] 
        // 1 + .5*i
        for(var i in FLUIDS) {
            event.recipes.gtceu.cutter(id+NAMES[i])
                .itemInputs(inputs)
                .inputFluids(FLUIDS[i])
                .itemOutputs(outputs)
                .duration((1 + 0.5*i)*lubeDuration)
                .EUt(7)
                .circuit(c)
        }
    }
    function vanillaWood(material) {
        event.remove('gtceu:lathe/strip_'+material+'_log')
        event.recipes.gtceu.lathe('foxtech:stripped_' + material + '_log')
            .itemInputs('1x minecraft:' + material + '_log')
            .itemOutputs('1x quark:hollow_' + material + '_log', '1x gtceu:wood_dust')
            .duration(8*20)
            .EUt(7)
            .circuit(1)
        event.recipes.gtceu.lathe('foxtech:hollow_' + material + '_log')
            .itemInputs('1x minecraft:' + material + '_log')
            .itemOutputs('1x quark:hollow_' + material + '_log', '1x gtceu:wood_dust')
            .duration(8*20)
            .EUt(7)
            .circuit(2)
        event.recipes.gtceu.lathe('foxtech:' + material + '_post')
            .itemInputs('1x minecraft:' + material + '_log')
            .itemOutputs('1x quark:' + material + '_post', '3x gtceu:wood_dust')
            .duration(8*20*3)
            .EUt(7)
            .circuit(3)
        cutter('foxtech:vertical_' + material + '_planks', ['1x minecraft:'+material+'_log'], ['6x quark:vertical_' + material + '_planks', '2x gtceu:wood_dust'], 200, 2)
        
    }
    vanillaWood('oak')
    event.forEachRecipe([{type: 'gtceu:lathe'}, {type: 'gtceu:cutter'}], recipe => {
        var json = JSON.parse(recipe.json.toString())
        console.log(json)
    })
    /* Replace the vanilla lathe recipes with a circuit version */
    /* Replace the vanilla cutter recipes with a circuit version */
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