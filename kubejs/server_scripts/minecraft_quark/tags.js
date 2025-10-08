import {toTags_, toTag_, tagItems_, replace_, replaceAll_, recycle_} from "../globalFns.js"

ServerEvents.tags('item', event => {
    var toTags = toTags_(event)
    var toTag = toTag_(event)
    var tagItems = tagItems_(event)

    toTags(['forge:normal_stone', 'foxtech:blocks', 'foxtech:blocks/stone'], ['minecraft:stone', 'minecraft:cobblestone', 'minecraft:mossy_cobblestone',
        'quark:cobblestone_bricks', 'quark:mossy_cobblestone_bricks', 'minecraft:smooth_stone',
        'minecraft:stone_bricks', 'minecraft:cracked_stone_bricks', 'minecraft:chiseled_stone_bricks',
        'minecraft:mossy_stone_bricks'])
    toTags(['minecraft:stairs', 'foxtech:stairs/stone'], ['minecraft:stone_stairs', 'minecraft:cobblestone_stairs', 'minecraft:cobblestone_bricks_stairs', 
        'minecraft:mossy_cobblestone_stairs', 'quark:mossy_cobblestone_bricks_stairs', 'minecraft:stone_bricks_stairs',
        'minecraft:mossy_stone_bricks_stairs'])
    toTags(['minecraft:slabs', 'foxtech:slabs/stone'], ['minecraft:stone_slab', 'minecraft:cobblestone_slab', 'quark:cobblestone_bricks_slab',
        'minecraft:mossy_cobblestone_slab', 'quark:mossy_cobblestone_bricks_slab', 'minecraft:smooth_stone_slab',
        'minecraft:stone_brick_slab', 'minecraft:mossy_stone_brick_slab'])
    toTags(['quark:vertical_slabs', 'foxtech:vertical_slabs/stone'], ['quark:stone_vertical_slab', 'quark:cobblestone_vertical_slab', 'quark:cobblestone_bricks_vertical_slab',
        'quark:mossy_cobblestone_vertical_slab', 'quark:mossy_cobblestone_bricks_vertical_slab', 'quark:smooth_stone_vertical_slab',
        'quark:stone_brick_vertical_slab', 'quark:mossy_stone_brick_vertical_slab'])
    toTags(['minecraft:walls', 'foxtech:walls/normal_stone'], ['minecraft:cobblestone_wall', 'quark:cobblestone_bricks_wall', 'minecraft:mossy_cobblestone_wall',
        'quark:mossy_cobblestone_bricks_wall', 'minecraft:stone_brick_wall', 'minecraft:mossy_stone_brick_wall'])

    toTag('foxtech:blocks/granite', ['minecraft:granite', 'minecraft:polished_granite', 'quark:granite_bricks',
        'quark:chiseled_granite_bricks', 'quark:granite_pillar'])
    toTag('foxtech:stairs/granite', ['minecraft:granite_stairs', 'minecraft:polished_granite_stairs', 'quark:granite_bricks_stairs'])
    toTag('foxtech:slabs/granite', ['minecraft:granite_slab', 'quark:granite_bricks_slab', 'minecraft:polished_granite_slab'])
    toTag('foxtech:vertical_slabs/granite', ['quark:granite_vertical_slab', 'quark:granite_bricks_vertical_slab', 'quark:polished_granite_vertical_slab'])
    toTag('foxtech:walls/granite', ['minecraft:granite_wall', 'quark:granite_bricks_wall'])

    toTag('foxtech:blocks/diorite', ['minecraft:diorite', 'minecraft:polished_diorite', 'quark:diorite_bricks',
        'quark:chiseled_diorite_bricks', 'quark:diorite_pillar'])
    toTag('foxtech:stairs/diorite', ['minecraft:diorite_stairs', 'minecraft:polished_diorite_stairs', 'quark:diorite_bricks_stairs'])
    toTag('foxtech:slabs/diorite', ['minecraft:diorite_slab', 'quark:diorite_bricks_slab', 'minecraft:polished_diorite_slab'])
    toTag('foxtech:vertical_slabs/diorite', ['quark:diorite_vertical_slab', 'quark:diorite_bricks_vertical_slab', 'quark:polished_diorite_vertical_slab'])
    toTag('foxtech:walls/diorite', ['minecraft:diorite_wall', 'quark:diorite_bricks_wall'])

    toTag('foxtech:blocks/andesite', ['minecraft:andesite', 'minecraft:polished_andesite', 'quark:andesite_bricks',
        'quark:chiseled_andesite_bricks', 'quark:andesite_pillar'])
    toTag('foxtech:stairs/andesite', ['minecraft:andesite_stairs', 'minecraft:polished_andesite_stairs', 'quark:andesite_bricks_stairs'])
    toTag('foxtech:slabs/andesite', ['minecraft:andesite_slab', 'quark:andesite_bricks_slab', 'minecraft:polished_andesite_slab'])
    toTag('foxtech:vertical_slabs/andesite', ['quark:andesite_vertical_slab', 'quark:andesite_bricks_vertical_slab', 'quark:polished_andesite_vertical_slab'])
    toTag('foxtech:walls/andesite', ['minecraft:andesite_wall', 'quark:andesite_bricks_wall'])

    toTag('foxtech:blocks/limestone', ['quark:limestone', 'quark:polished_limestone', 'quark:limestone_bricks',
        'quark:chiseled_limestone_bricks', 'quark:limestone_pillar'])
    toTag('foxtech:stairs/limestone', ['quark:limestone_stairs', 'quark:polished_limestone_stairs', 'quark:limestone_bricks_stairs'])
    toTag('foxtech:slabs/limestone', ['quark:limestone_slab', 'quark:limestone_bricks_slab', 'quark:polished_limestone_slab'])
    toTag('foxtech:vertical_slabs/limestone', ['quark:limestone_vertical_slab', 'quark:limestone_bricks_vertical_slab', 'quark:polished_limestone_vertical_slab'])
    toTag('foxtech:walls/limestone', ['quark:limestone_wall', 'quark:limestone_bricks_wall'])

    toTag('foxtech:blocks/jasper', ['quark:jasper', 'quark:polished_jasper', 'quark:jasper_bricks',
        'quark:chiseled_jasper_bricks', 'quark:jasper_pillar'])
    toTag('foxtech:stairs/jasper', ['quark:jasper_stairs', 'quark:polished_jasper_stairs', 'quark:jasper_bricks_stairs'])
    toTag('foxtech:slabs/jasper', ['quark:jasper_slab', 'quark:jasper_bricks_slab', 'quark:polished_jasper_slab'])
    toTag('foxtech:vertical_slabs/jasper', ['quark:jasper_vertical_slab', 'quark:jasper_bricks_vertical_slab', 'quark:polished_jasper_vertical_slab'])
    toTag('foxtech:walls/jasper', ['quark:jasper_wall', 'quark:jasper_bricks_wall'])

    toTag('foxtech:blocks/shale', ['quark:shale', 'quark:polished_shale', 'quark:shale_bricks',
        'quark:chiseled_shale_bricks', 'quark:shale_pillar'])
    toTag('foxtech:stairs/shale', ['quark:shale_stairs', 'quark:polished_shale_stairs', 'quark:shale_bricks_stairs'])
    toTag('foxtech:slabs/shale', ['quark:shale_slab', 'quark:shale_bricks_slab', 'quark:polished_shale_slab'])
    toTag('foxtech:vertical_slabs/shale', ['quark:shale_vertical_slab', 'quark:shale_bricks_vertical_slab', 'quark:polished_shale_vertical_slab'])
    toTag('foxtech:walls/shale', ['quark:shale_wall', 'quark:shale_bricks_wall'])

    toTag('foxtech:blocks/myalite', ['quark:myalite', 'quark:polished_myalite', 'quark:myalite_bricks',
        'quark:chiseled_myalite_bricks', 'quark:myalite_pillar'])
    toTag('foxtech:stairs/myalite', ['quark:myalite_stairs', 'quark:polished_myalite_stairs', 'quark:myalite_bricks_stairs'])
    toTag('foxtech:slabs/myalite', ['quark:myalite_slab', 'quark:myalite_bricks_slab', 'quark:polished_myalite_slab'])
    toTag('foxtech:vertical_slabs/myalite', ['quark:myalite_vertical_slab', 'quark:myalite_bricks_vertical_slab', 'quark:polished_myalite_vertical_slab'])
    toTag('foxtech:walls/myalite', ['quark:myalite_wall', 'quark:myalite_bricks_wall'])

    toTag('foxtech:blocks/permafrost', ['quark:permafrost', 'quark:permafrost_bricks'])
    toTag('foxtech:stairs/permafrost', ['quark:permafrost_stairs', 'quark:permafrost_bricks_stairs'])
    toTag('foxtech:slabs/permafrost', ['quark:permafrost_slab', 'quark:permafrost_bricks_slab'])
    toTag('foxtech:vertical_slabs/permafrost', ['quark:permafrost_vertical_slab', 'quark:permafrost_vertical_bricks_slab'])
    toTag('foxtech:walls/permafrost', ['quark:permafrost_wall', 'quark:permafrost_bricks_wall'])

    toTag('foxtech:blocks/calcite', ['minecraft:calcite', 'quark:polished_calcite', 'quark:calcite_bricks',
        'quark:chiseled_calcite_bricks', 'quark:calcite_pillar'])
    toTag('foxtech:stairs/calcite', ['quark:calcite_bricks_stairs', 'quark:calcite_stairs', 'quark:polished_calcite_stairs'])
    toTag('foxtech:slabs/calcite', ['quark:calcite_slab', 'quark:polished_calcite_slab', 'quark:calcite_bricks_slab'])
    toTag('foxtech:vertical_slabs/calcite', ['quark:calcite_vertical_slab', 'quark:polished_calcite_vertical_slab', 'quark:calcite_bricks_vertical_slab'])
    toTag('foxtech:walls/calcite', ['quark:calcite_bricks_wall', 'quark:calcite_wall'])

})