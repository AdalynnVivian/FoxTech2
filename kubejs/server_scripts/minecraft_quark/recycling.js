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

    function stone(material, gt) {
        gt = gt == undefined ? material : gt
        recycle('#foxtech:blocks/'+material, ['90x '+gt])
        recycle('#foxtech:stairs/'+material, ['67.5x '+gt])
        recycle('#foxtech:slabs/'+material, ['45x '+gt])
        recycle('#foxtech:vertical_slabs/'+material, ['45x '+gt])
        recycle('#foxtech:walls/'+material, ['90x '+gt])
    }
    function four(material, gt) {
        recycle('#foxtech:blocks/'+material, ['360x '+gt])
        recycle('#foxtech:stairs/'+material, ['270x '+gt])
        recycle('#foxtech:slabs/'+material, ['180x '+gt])
        recycle('#foxtech:vertical_slabs/'+material, ['180x '+gt])
        recycle('#foxtech:walls/'+material, ['360x '+gt])
    }
    stone('stone')
    stone('granite')
    stone('diorite')
    stone('andesite')
    stone('limestone')
    stone('jasper')
    stone('shale')
    stone('myalite')
    stone('permafrost')
    stone('calcite')
    stone('dripstone', 'clay')
    stone('tuff', 'ash')
    stone('deepslate')
    four('bricks', 'brick')
})