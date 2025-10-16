GTCEuStartupEvents.registry('gtceu:material', event => {
    const $OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty');
    const $DustProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty');
    const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty');


    event.create('andesite_alloy')
        .ingot()
        .color(0xC6CDB9).iconSet(GTMaterialIconSet.METALLIC)
        .components('2x andesite', '1x iron', '1x zinc')
        .flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING)
        .fluid()
    
    //GTMaterials.Andesite.setProperty(PropertyKey.DUST, new $DustProperty());
    GTMaterials.Ash.setProperty(PropertyKey.INGOT, new $IngotProperty())
    //GTMaterials.Prismarine.setProperty(PropertyKey.DUST, new $DustProperty())
    //GTMaterials.Dirt.setProperty(PropertyKey.DUST, new $DustProperty())

    event.create('limestone')
        .dust()
        .color(0x8E8B78).iconSet(GTMaterialIconSet.DULL)
        //.components().flags().fluid()
    event.create('jasper')
        .dust()
        .color(0x5B2F2C).iconSet(GTMaterialIconSet.DULL)
        //.components().flags().fluid()
    event.create('shale')
        .dust()
        .color(0x364C57).iconSet(GTMaterialIconSet.DULL)
        //.components().flags().fluid()
    event.create('myalite')
        .dust()
        .color(0x401D5F).iconSet(GTMaterialIconSet.DULL)
        //.components().flags().fluid()
    event.create('permafrost')
        .dust()
        .color(0x9999FF).iconSet(GTMaterialIconSet.DULL)
        .components('1x clay', '1x ice', '1x stone')
        .flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING)
    //GTMaterials.SoulSand.setProperty(PropertyKey.DUST, new $DustProperty())
    event.create('soul_quartz_sand')
        .dust()
        .formula('?((SiO2)(SiO2))')
        .color(0x36261D).iconSet(GTMaterialIconSet.DULL)
    event.create('dirt')
        .dust()
        .color(0x8C6446).iconSet(GTMaterialIconSet.DULL)
    event.create('mud')
        .liquid(293)
        .color(0x393A3C)
    event.create('prismarine')
        .dust()
        .color(0x72968D).iconSet(GTMaterialIconSet.DULL)
    event.create('dark_prismarine')
        .dust()
        .color(0x214A3A).iconSet(GTMaterialIconSet.DULL)


})