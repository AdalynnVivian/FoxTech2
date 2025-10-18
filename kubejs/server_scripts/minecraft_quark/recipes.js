// priority: 1

import FoxTechAddon from "../addon.js"

ServerEvents.recipes(event => {
    var $ = FoxTechAddon(event)

    function cutter(id, inputs, outputs, lubeDuration, c) { //Register cutting recipes.
        var FLUIDS = ['1x #forge:lubricant', '3x #forge:distilled_water', '4x minecraft:water']
        var NAMES = ['', '_distilled_water', '_water'] 
        for(var i in FLUIDS) {
            $.cutter(id+NAMES[i], inputs, [FLUIDS[i]], outputs, [], (1+.5*i)*lubeDuration, 7, c)
        }
    }
    function vanillaWood(material) { //Create the recipes for vanilla wood types
        event.remove('gtceu:lathe/strip_'+material+'_log') //Remove the stripped log recipe...
        event.recipes.gtceu.lathe('foxtech:stripped_' + material + '_log') //So we can add a version with a circuit. 
            .itemInputs('1x minecraft:' + material + '_log')
            .itemOutputs('1x minecraft:stripped_' + material + '_log', '1x gtceu:wood_dust')
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
        //Replace the long stick recipe with a circuit version.
        event.recipes.gtceu.lathe('foxtech:stripped_' + material + '_post_from_log') 
            .itemInputs('1x minecraft:stripped_' + material + '_log')
            .itemOutputs('1x quark:stripped_' + material + '_post', '3x gtceu:wood_dust')
            .duration(8*20*3)
            .EUt(7)
            .circuit(2)
        
        event.remove('gtceu:cutter/' + material + '_slab_distilled_water') //Slbs, both vertical and horizontal
        event.remove('gtceu:cutter/' + material + '_slab_water')
        event.remove('gtceu:cutter/' + material + '_slab')
        cutter('foxtech:' + material + '_slab', ['1x minecraft:' + material + '_planks'], ['2x minecraft:' + material + '_slab'], 10*20, 1)
        cutter('foxtech:' + material + '_vertical_slab', ['1x minecraft:' + material + '_planks'], ['2x quark:' + material + '_vertical_slab'], 10*20, 2)

        //Stripping Posts with IE.
    }

    vanillaWood('oak')
    vanillaWood('spruce')
    vanillaWood('birch')
    vanillaWood('jungle')
    vanillaWood('acacia')
    vanillaWood('dark_oak')
    vanillaWood('mangrove')
    vanillaWood('cherry')

    event.remove('botania:mana_infusion/cherry_log_to_oak_log')
    function quarkWood(material) {
        //Log -> Hollow log + 1 Wood Dust. GT Lathe 8s @ 7EU/t [2]
        //4x Log -> 3x Wood. MI Packer 5s @ 2EU/t <<Cherry isn't there for some reason???>>
        //Log -> Stripped Log + 1 Wood Dust. GT Lathe 8s @ 7EU/t [1]
        //Log, 81mB Lubricant -> Stripped Log. MI Cutting Machine 5s @ 2EU/t
        //Log -> Stripped Log + Sawdust. IE Sawmill
        //Wood -> Stripped Wood + 1 Wood dust. GT Lathe 8s @ 7EU/t
        //Wood, 81mB Lubricant -> Stripped Wood. MI Cutting Machine 5s @ 2EU/t
        //4x Stripped Log -> 3x Stripped Wood. MI Packer 5s @ 2EU/t
        //Wood -> Sripped Wood + Sawdust. IE Sawmill.
        //Log, Saw -> 6 Planks. Crafting
        //Log, [1mB, 3mB, 4mB] $Lube -> 6 Planks + 2 Wood Dust. GT Cutter [10, 15, 20]s @ 7EUt. [1]
        //Log, 81mB Lubricant -> 6 Planks. MI Cutting Machine 5s @ 2EU/t
        //Door -> Plank + Sawdust. IE Sawmill
        //Stairs -> Plank + Sawdust. IE Sawmill
        //Stripped [Log/Wood] -> 6 Planks + Sawdust
        //Trapdoor -> 3 Planks. Mek Precision Sawmill
        //Door -> 2 Planks. Mek PS
        //Pressure Plate -> Plank + 2 Sawdust@25%. Mek PS
        //Log -> 6 Planks + Sawdust@25%. Mek PS
        //Hanging Sign -> 2 Planks + Sawdust@50%. Mek PS.
        //Fence Gate -> 2 Planks + 4 Sticks@100%. Mek PS.
        //Boat -> 5 Planks
        //Log (the tag) -> 6 Planks + Sawdust + 0.15XP, Thermal Sawmill 1000RF
        //Log, [1mB, 3mB, 4mB] $Lube -> 6 Vertical Planks + 2 Wood Dust. GT Cutter [10, 15, 20]s @ 7EUt. [2]
        //3 Planks -> 4 Stairs. GT Assembler 5s @ 1EU/t
        //Planks, [1mB, 3mB, 4mB] $Lube -> 2 Slabs. GT Cutter [10, 15, 20]s @ 7EUt. [1]
        //Planks, 81mB Lubricant -> 2 Slabs. MI Cutting Machine 5s @ 2EU/t
        //Planks -> 2 Slabs. IE Sawmill
        //Planks, Saw -> 2 Slabs. Crafting
        //Planks, [1mB, 3mB, 4mB] $Lube -> 2 Vertical Slabs. GT Cutter [10, 15, 20]s @ 7EUt. [2]
        //Post -> Stripped Post, Sawdust. GT Lathe 8s @ 7EU/t
        //Stripped Log -> Stripped Post, 3 Sawdust. GT Lathe 24s @ 7EU/t [2]
        //Planks -> Fence. GT Assember 5s @ 4EU/t [13]
        //2 Planks, 2 #forge:rods/wooden -> Fence Gate. GT Assembler 5s @ 4EU/t [2]
        //6 Planks -> 3 Doors. GT Assembler 30s @ 4EU/t [6]
        //6 Planks -> 4 Trapdoors. GT Assembler 5s @ 4EU/t [3]
        //Slab, [1mB, 4mB, 5mB] $Lbe -> 8 Pressure Plates. GT Cutter [12.5, 18.75, 25]s @ 7EU/t
        //Pressure Plate, [1mB, 4mB, 5mB] $Lube -> 12 Buttons. GT Cutter [12.5, 18.75, 25]s @ 7EU/t
        
        //Stripping Posts with IE
    }
    $.alchemy('foxtech:cherry_log_to_ancient_log', 'minecraft:cherry_log', 'quark:ancient_log', 40, "botania:log_cycle")
    $.alchemy('foxtech:ancient_log_to_azalea_log', 'quark:ancient_log', 'quark:azalea_log', 40, "botania:log_cycle")
    $.alchemy('foxtech:azalea_log_to_blossom_log', 'quark:azalea_log', 'quark:blossom_log', 40, "botania:log_cycle")

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