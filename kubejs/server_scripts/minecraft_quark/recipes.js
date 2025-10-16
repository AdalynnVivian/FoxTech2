import {toTags_, toTag_, tagItems_, replace_, replaceAll_, recycle_} from "../globalFns.js"

ServerEvents.recipes(event => {
    event.recipes.gtceu.centrifuge('foxtech:soul_quartz_sand')
        .itemInputs('2x gtceu:soul_quartz_sand_dust')
        .itemOutputs('1x gtceu:quartz_sand_dust', '1x mysticalagriculture:nether_essence')
        .duration(20)
        .EUt(30)
})