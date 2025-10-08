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

})