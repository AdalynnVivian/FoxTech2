// Priority: 0

import {toTags_, toTag_, tagItems_, replace_, replaceAll_, recycle_} from "../globalFns.js"

ServerEvents.recipes(event => {
    var replace = replace_(event)
    replace('gtceu:distilled_water', 'forge:distilled_water')
    replace('gtceu:lubricant', 'forge:lubricant')
})