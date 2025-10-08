import {toTags_, toTag_, tagItems_, replace_, replaceAll_, recycle_} from "../globalFns.js"

ServerEvents.tags('item', event => {
    var toTags = toTags_(event)
    var toTag = toTag_(event)
    var tagItems = tagItems_(event)
    /*function toTags(tags, item) {
        tags.forEach(tag => {
           event.add(tag, item)
        })
    }
    function toTag(tag, items) {
        items.forEach(item => {
            event.add(tag, item)
        })
    }
    function tagItems(tags, items) {
        tags.forEach(tag => {
            items.forEach(item => {
                event.add(tag, item)
            })
        })
    }*/
    var crushed = (material, ogMaterial) => toTags(['forge:crushed_ores', 'forge:crushed_ores/'+material], 'create:crushed_raw_'+(ogMaterial === undefined ? material : ogMaterial))
    
    event.add('forge:ingots/andesite_alloy', 'create:andesite_alloy')
    toTags(['forge:dusts', 'forge:dusts/flour', 'forge:dusts/wheat'], 'create:wheat_flour')
    //REPLACE DOUGH
    toTags(['forge:raw_materials', 'forge:gems/rose_quartz'], 'create:rose_quartz')
    toTags(['forge:ingots', 'forge:ingots/rose_quartz'], 'create:polished_rose_quartz')
    //REPLACE STURDY SHEET
    toTags(['forge:rotors', 'forge:rotors/iron'], 'create:propeller')
    event.add('forge:electron_tube', 'create:electron_tube')

    crushed('iron')
    crushed('gold')
    crushed('copper')
    crushed('zinc')
    crushed('osmium')
    crushed('platinum')
    crushed('silver')
    crushed('tin')
    crushed('lead')
    crushed('aluminium', 'aluminum')
    crushed('uranium')
    crushed('nickel')
})

ServerEvents.recipes(event => {
    var replace = replace_(event)
    var replaceAll = replaceAll_(event)

    var crushed = (material, ogMaterial) => replace('create:crushed_raw_'+(ogMaterial === undefined ? material : ogMaterial), 'forge:crushed_ores/'+material)
    replace('create:andesite_alloy', 'forge:ingots/andesite_alloy')
    replace('create:wheat_flour', 'forge:dusts/wheat')
    replace('create:dough', 'forge:dough/wheat')
    replace('create:rose_quartz', 'forge:gems/rose_quartz')
    replace('create:polished_rose_quartz', 'forge:ingots/rose_quartz')
    replace('create:sturdy_sheet', 'forge:plates/obsidian')
    replace('create:propeller', 'forge:rotors/iron')
    replace('create:electron_tube', 'forge:electron_tube')

    crushed('iron')
    crushed('gold')
    crushed('copper')
    crushed('zinc')
    crushed('osmium')
    crushed('platinum')
    crushed('silver')
    crushed('tin')
    crushed('lead')
    crushed('aluminium', 'aluminum')
    crushed('uranium')
    crushed('nickel')
})