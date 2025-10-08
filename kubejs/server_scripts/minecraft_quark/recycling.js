import {toTags_, toTag_, tagItems_, replace_, replaceAll_, recycle_} from "../globalFns.js"

ServerEvents.recipes(event => {
    var recycle = recycle_(event)
    recycle('#quark:logs', ['90x wood'])
    recycle('#quark:hollow_logs', ['90x wood'])
    recycle('#minecraft:planks', ['90x wood'])
    recycle('#minecraft:wooden_slabs', ['45x wood'])
    recycle('#quark:wooden_vertical_slabs', ['45x wood'])
    recycle('#quark:posts', ['270x wood'])
    recycle('#forge:fences/wooden', ['90x wood'])
    recycle('#forge:fence_gates/wooden', ['90x wood'])
    recycle('#minecraft:wooden_doors', ['180x wood'])
    recycle('#minecraft:wooden_trapdoors', ['135x wood'])
    recycle('#minecraft:wooden_buttons', ['10x wood'])

    function stone(material) {
        recycle('#foxtech:blocks/'+material, ['90x '+material])
        recycle('#foxtech:stairs/'+material, ['67.5x '+material])
        recycle('#foxtech:slabs/'+material, ['45x '+material])
        recycle('#foxtech:vertical_slabs/'+material, ['45x '+material])
        recycle('#foxtech:walls/'+material, ['90x '+material])
    }
    stone('stone')
    stone('granite')
    stone('diorite')
    stone('andesite')
    stone('limestone')
    stone('jasper')
    stone('shale')
    stone('myalite')
    //stone('permafrost')
    //stone('calcite')
    //stone('tuff')
    //stone('deepslate')
    // I am in immense pain

})