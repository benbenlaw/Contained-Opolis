//Woot

ServerEvents.recipes(event => {

    event.remove({ id: 'woot_revived:stygian_dust' })

    //Blaze Rod to Mob Tears Fluid
    event.recipes.woot_revived.fluid_infuser('1000x woot_revived:mob_tears_fluid', 1000, '1000x minecraft:water', ['minecraft:blaze_rod']).id('contained:fluid_infuser/mob_tears_fluid_from_blaze')

    //Chorus Fruit to Vitality Fuel Fluid
    event.recipes.woot_revived.fluid_infuser('1000x woot_revived:vitality_fuel_fluid', 1000, '1000x woot_revived:mob_tears_fluid', ['minecraft:chorus_fruit']).id('contained:fluid_infuser/vitality_fuel_fluid_from_chorus')

    //Raw Beef to Vitality Fuel Fluid
    event.recipes.woot_revived.fluid_infuser('100x woot_revived:mob_tears_fluid', 1000, '1000x minecraft:water', ['minecraft:beef']).id('contained:fluid_infuser/mob_tears_fluid_from_beef')

    //Cooked Beef to Vitality Fuel Fluid
    event.recipes.woot_revived.fluid_infuser('200x woot_revived:mob_tears_fluid', 1000, '1000x minecraft:water', ['minecraft:cooked_beef']).id('contained:fluid_infuser/mob_tears_fluid_from_cooked_beef')
})