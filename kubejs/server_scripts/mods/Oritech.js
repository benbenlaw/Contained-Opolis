// Oritech Recipe

OritechEvents.particleInjected(event => {

  // disable the special interactions that create portals
  event.disableNetherPortal()
  event.disableEndPortal()

})

ServerEvents.recipes(event => {

  // Shaped Recipes
  event.shaped('oritech:machine_fluid_addon', [' A ', 'ABA', ' A '], { A: 'minecraft:lapis_lazuli', B: 'oritech:machine_core_1', }).id('oritech:crafting/addon/fluid')
  event.shaped('oritech:bio_generator_block', ['AAA', 'ABA', 'CDC'], { A: '#contained:steel_ingots', B: 'oritech:packed_wheat', C: 'oritech:magnetic_coil', D: 'powah:magmator_starter' }).id('oritech:crafting/biogen')
  event.shaped('3x oritech:biomass', ['ABA', 'BAB', 'ABA'], { A: 'contained:organic_powder', B: 'opolisutilities:mini_charcoal' }).id('oritech:crafting/biomass')
  event.shaped('oritech:powered_furnace_block', ['AAA', 'ABA', 'CDC'], { A: '#contained:steel_ingots', B: 'minecraft:blast_furnace', C: 'oritech:magnetic_coil', D: 'powah:magmator_starter' }).id('contained:powered_furnace')
  event.shaped('3x oritech:machine_core_1', ['CAC', 'A A', 'CAC'], { C: '#contained:steel_ingots', A: 'colors:light_gray_asteroid' }).id('oritech:crafting/core1')
  event.shaped('oritech:pulverizer_block', ['AAA', 'ABA', 'CCC'], { A: 'justdirethings:ferricore_ingot', B: 'oritech:machine_core_1', C: '#contained:steel_ingots' }).id('oritech:crafting/pulverizeralt')
  event.shaped('3x oritech:raw_silicon', ['AA', 'BB'], { A: 'ae2:certus_quartz_dust', B: '#c:sands' }).id('oritech:crafting/alloy/rawsiliconalt')
  event.shaped('oritech:small_storage_block', ['AAA', 'CBC', 'AAA'], { A: '#contained:steel_ingots', B: 'oritech:machine_core_1', C: '#contained:steel_dusts' }).id('oritech:crafting/smallstorage')
  event.shaped('oritech:big_solar_panel_block', ['AAA', 'BCB', 'BBB'], { A: 'contained:solar_panel', B: 'justdirethings:ferricore_ingot', C: '#contained:steel_ingots' }).id('oritech:crafting/solar')

  //Remove Recipes
  event.remove({ id: 'oritech:assembler/enderlens' })
  event.remove({ id: `oritech:assembler/compat/geore/buddingancient_debris` })
  event.remove({ id: `oritech:assembler/compat/geore/buddingblack_quartz` })
  event.remove({ id: 'oritech:atomicforge/reinfdeepslate' })
  event.remove({ id: 'oritech:crafting/pulverizer' })
  event.remove({ id: 'oritech:crafting/alloy/adamant' })
  event.remove({ id: 'oritech:crafting/alloy/electrum' })
  event.remove({ id: 'oritech:crafting/electricfurnace' })
  event.remove({ id: 'oritech:crafting/electricfurnacealt' })
  event.remove({ id: 'oritech:grinder/coal' })
  event.remove({ id: 'oritech:grinder/stone_enderic' })
  event.remove({ id: 'oritech:grinder/pearl_enderic' })
  event.remove({ id: 'oritech:grinder/dust/pearl_enderic' })
  event.remove({ id: 'oritech:grinder/dust/stone_enderic' })
  event.remove({ id: 'oritech:grinder/compat/geore/quartzdust' })
  event.remove({ id: 'oritech:pulverizer/dust/pearl_enderic' })
  event.remove({ id: 'oritech:foundry/alloy/inverse/electrum' })
  event.remove({ id: 'oritech:foundry/alloy/electrum' })
  event.remove({ id: 'oritech:pulverizer/coal' })
  event.remove({ id: 'oritech:pulverizer/pearl_enderic' })
  event.remove({ id: 'oritech:pulverizer/compat/geore/quartzdust' })
  event.remove({ id: 'oritech:centrifuge/endericsculk' })
  event.remove({ id: 'oritech:centrifuge/fluid/biopolymer_biomass' })
  event.remove({ id: 'oritech:centrifuge/fluid/biopolymer_bioblock' })
  event.remove({ id: 'oritech:centrifuge/fluid/plasticoil' })
  event.remove({ id: 'oritech:centrifuge/fluid/plasticoilbetter' })
  event.remove({ id: 'oritech:centrifuge/fluid/clay' })
  event.remove({ id: 'oritech:centrifuge/compat/ae2/endericcompound' })
  event.remove({ id: 'oritech:laser/fluxite' })
  event.remove({ id: 'oritech:laser/compat/ae2/chargedquartz' })
  event.remove({ id: `oritech:laser/compat/geore/plutoniumdust` })
  event.remove({ id: `oritech:laser/plutoniumdust` })
  event.remove({ id: 'oritech:compat/powah/energizing/fluxite' })
  event.remove({ id: 'oritech:compat/powah/energizing/uranite' })
  event.remove({ id: 'oritech:compat/powah/energizing/uranite' })
  event.remove({ id: 'oritech:compat/ae2/charger/fluxite' })
  event.remove({ id: 'oritech:particle/diamond' })
  event.remove({ id: 'oritech:particle/enderic_compound' })

  //Replace Recipes
  event.replaceInput({ id: 'oritech:crafting/laserarm' }, '#c:ingots/electrum', 'oritech:processing_unit')
  event.replaceInput({ id: 'oritech:crafting/centrifugealt' }, '#c:ingots/copper', '#c:ingots/nickel')
  event.replaceInput({ id: 'oritech:crafting/refinery' }, '#c:ingots/steel', '#c:ingots/electrum')
  event.replaceInput({ id: 'oritech:crafting/magnet' }, '#c:ingots/steel', '#contained:steel_ingots')
  event.replaceInput({ id: 'oritech:motor/motorcraft' }, '#c:ingots/steel', '#contained:steel_ingots')
  event.replaceInput({ id: 'oritech:crafting/stank' }, 'oritech:fluid_pipe', 'pipez:fluid_pipe')
  event.replaceInput({ id: 'oritech:crafting/crusher' }, 'oritech:flux_gate', '#contained:shard_blocks')
  event.replaceInput({ id: 'oritech:crafting/pump' }, 'oritech:silicon', 'minecraft:iron_ingot')
  event.replaceInput({ id: 'oritech:crafting/particlecontroller' }, 'minecraft:dropper', 'draconicevolution:chaotic_core')
  event.replaceInput({ id: 'oritech:crafting/extender' }, 'oritech:duratium_ingot', 'powah:steel_energized')
  event.replaceInput({ id: 'oritech:crafting/atomicforge' }, 'oritech:plastic_sheet', 'oritech:superconductor')
  event.replaceInput({ id: 'oritech:motor/dubios' }, 'oritech:enderic_compound', 'minecraft:ender_pearl')

  //Fragement Recipes
  addFragmentRecipe('contained:impressional_gem', 'minecraft:amethyst_block', 3, 60)
  addFragmentRecipe('contained:small_quartz_dust', 'geore:quartz_block', 1, 60)
  addFragmentRecipe('contained:small_certus_quartz_dust', 'contained:certus_quartz_block', 1, 60)
  addFragmentRecipe('contained:small_diamond_dust', 'geore:diamond_block', 1, 60)
  addFragmentRecipe('contained:small_emerald_dust', 'geore:emerald_block', 1, 60)
  addFragmentRecipe('oritech:small_platinum_dust', 'geore:platinum_block', 1, 60)
  addFragmentRecipe('contained:small_uraninite_dust', 'geore:uraninite_block', 1, 60)
  addFragmentRecipe('contained:small_crystalline_dust', 'contained:raw_crystalline_stone', 3, 60)

  //Deep Drill Recipes
  addDeepDrillRecipe('alltheores:copper_dust', 'contained:mysterious_orange_asteroid')
  addDeepDrillRecipe('alltheores:iron_dust', 'contained:mysterious_light_gray_asteroid')
  addDeepDrillRecipe('alltheores:nickel_dust', 'contained:mysterious_yellow_asteroid')
  addDeepDrillRecipe('minecraft:redstone', 'contained:mysterious_red_asteroid')
  addDeepDrillRecipe('contained:lapis_dust', 'contained:mysterious_blue_asteroid')
  addDeepDrillRecipe('oritech:quartz_dust', 'contained:mysterious_gray_asteroid')
  addDeepDrillRecipe('alltheores:silver_dust', 'contained:mysterious_white_asteroid')
  addDeepDrillRecipe('oritech:coal_dust', 'contained:mysterious_black_asteroid')
  addDeepDrillRecipe('minecraft:amethyst_shard', 'contained:mysterious_purple_asteroid')
  addDeepDrillRecipe('ae2:certus_quartz_dust', 'contained:mysterious_cyan_asteroid')
  addDeepDrillRecipe('alltheores:diamond_dust', 'contained:mysterious_light_blue_asteroid')
  addDeepDrillRecipe('contained:emerald_dust', 'contained:mysterious_green_asteroid')
  addDeepDrillRecipe('alltheores:gold_dust', 'contained:mysterious_brown_asteroid')
  addDeepDrillRecipe('alltheores:platinum_dust', 'contained:mysterious_lime_asteroid')
  addDeepDrillRecipe('draconicevolution:draconium_dust', 'contained:mysterious_pink_asteroid')
  addDeepDrillRecipe('woot_revived:stygian_dust', 'contained:mysterious_magenta_asteroid')
  addDeepDrillRecipe('contained:cindrath_core_fragment', 'contained:cindrath_core_deposit')
  addDeepDrillRecipe('contained:raw_crystalline_stone', 'contained:crystalline_deposit')
  addDeepDrillRecipe('contained:ancient_ashes', 'contained:ancient_ashes_deposit')

  //Simple Pulverizer Recipes
  addPulverizerRecipe('contained:bio_spores', 'oritech:biomass_block', 1, 200)
  addPulverizerRecipe('contained:organic_powder', 'contained:bio_sapling', 1, 200)
  addPulverizerRecipe('minecraft:cobblestone', 'minecraft:stone', 1, 200)
  addPulverizerRecipe('contained:organic_powder', 'contained:dry_drop', 1, 200)
  addPulverizerRecipe('minecraft:black_dye', 'minecraft:charcoal', 1, 200)
  addPulverizerRecipe('opolisutilities:ender_pearl_fragment', 'minecraft:sculk', 1, 200)
  addPulverizerRecipe('alltheores:silver_dust', 'alltheores:silver_ingot', 1, 200)
  addPulverizerRecipe('contained:ferricore_dust', 'justdirethings:ferricore_ingot', 1, 200)
  addPulverizerRecipe('contained:primal_steel_dust', 'contained:primal_steel_ingot', 1, 200)
  addPulverizerRecipe('oritech:coal_dust', 'minecraft:coal', 1, 200)
  addPulverizerRecipe('draconicevolution:draconium_dust', 'draconicevolution:draconium_ingot', 1, 200)
  addPulverizerRecipe('draconicevolution:awakened_draconium_dust', 'draconicevolution:awakened_draconium_ingot', 1, 200)
  addPulverizerRecipe('ae2:ender_dust', 'minecraft:ender_pearl', 1, 200)
  addPulverizerRecipe('minecraft:green_dye', 'oritech:raw_biopolymer', 1, 200)

  //Asteroid Dusts
  colors.forEach(color => {
    addPulverizerRecipe(`contained:${color}_asteroid_dust`, `colors:${color}_asteroid`, 1, 100)
  })

  //Foundry Recipes 
  addFoundryRecipe('minecraft:quartz', 'oritech:quartz_dust', 'contained:impressional_gem', 1, 200)
  addFoundryRecipe('ae2:certus_quartz_crystal', 'ae2:certus_quartz_dust', 'contained:impressional_gem', 1, 200)
  addFoundryRecipe('minecraft:diamond', 'alltheores:diamond_dust', 'contained:impressional_gem', 1, 200)
  addFoundryRecipe('minecraft:emerald', 'contained:emerald_dust', 'contained:impressional_gem', 1, 200)
  addFoundryRecipe('powah:uraninite', 'contained:uraninite_dust', 'contained:impressional_gem', 1, 200)
  addFoundryRecipe('powah:dielectric_paste', 'minecraft:blaze_powder', 'oritech:silicon', 8, 200)
  addFoundryRecipe('alltheores:electrum_ingot', 'minecraft:gold_ingot', 'alltheores:silver_ingot', 2, 400)
  addFoundryRecipe('contained:budding_heart', 'contained:budding_core', 'contained:wardens_heart', 1, 400)
  addFoundryRecipe('contained:ancient_ingot', 'minecraft:netherite_ingot', 'contained:ancient_ashes', 1, 500)
  addFoundryRecipe('justdirethings:eclipsealloy_ingot', 'justdirethings:raw_eclipsealloy', 'draconicevolution:draconium_dust', 1, 500)

  // Assembler Recipes
  addAssemblerRecipe('draconicevolution:draconium_dust', ['contained:ancient_ingot', 'contained:crystalline_quartz', 'contained:blazing_cinderstone', 'mysticalagriculture:supremium_essence'], 3, 240)
  addAssemblerRecipe('oritech:enderic_lens', ['oritech:adamant_ingot', 'oritech:carbon_fibre_strands', 'minecraft:glass', 'minecraft:glass'], 1, 240)
  addAssemblerRecipe('oritech:enderic_lens', ['oritech:adamant_ingot', 'oritech:carbon_fibre_strands', 'oritech:enderic_compound', 'oritech:enderic_compound'], 4, 240)
  addAssemblerRecipe('colors:cyan_asteroid', ['colors:light_blue_asteroid', 'colors:light_blue_asteroid', 'colors:green_asteroid', 'colors:green_asteroid'], 1, 200)
  addAssemblerRecipe('colors:purple_asteroid', ['colors:blue_asteroid', 'colors:blue_asteroid', 'colors:red_asteroid', 'colors:red_asteroid'], 1, 200)
  addAssemblerRecipe('colors:pink_asteroid', ['colors:red_asteroid', 'colors:red_asteroid', 'colors:white_asteroid', 'colors:white_asteroid'], 1, 200)
  addAssemblerRecipe('colors:magenta_asteroid', ['colors:purple_asteroid', 'colors:purple_asteroid', 'colors:red_asteroid', 'colors:red_asteroid'], 1, 200)
  addAssemblerRecipe('colors:green_asteroid', ['colors:blue_asteroid', 'colors:blue_asteroid', 'colors:yellow_asteroid', 'colors:yellow_asteroid'], 1, 200)
  addAssemblerRecipe('colors:light_blue_asteroid', ['colors:blue_asteroid', 'colors:blue_asteroid', 'colors:white_asteroid', 'colors:white_asteroid'], 1, 200)
  addAssemblerRecipe('colors:lime_asteroid', ['colors:green_asteroid', 'colors:green_asteroid', 'colors:white_asteroid', 'colors:white_asteroid'], 1, 200)

  // Atomic Forge Recipes
  addAtomicForgeRecipe("contained:crystalline_quartz", ["contained:impressional_gem", "contained:crystalline_dust", "contained:crystalline_dust"], 1, 100)
  addAtomicForgeRecipe("contained:exotic_crystalline_quartz", ["minecraft:nether_star", "contained:crystalline_quartz_block", "contained:crystalline_quartz_block"], 1, 2000)

  // Laser Recipes
  addLaserRecipe('ae2:mysterious_cube', 'ae2:sky_stone_chest', 1, 200)
  addLaserRecipe('ae2:sky_stone_block', 'minecraft:calcite', 1, 200)
  addLaserRecipe('ae2:charged_certus_quartz_crystal', 'ae2:quartz_block', 1, 200)

  // Fluxite
  addFoundryRecipe('contained:gray_asteroid_dust', 'contained:white_asteroid_dust', 'contained:black_asteroid_dust', 2, 200)
  addFoundryRecipe('oritech:fluxite', 'ae2:fluix_crystal', 'ae2:charged_certus_quartz_crystal', 1, 200)

  // Better than strainers 
  addImprovedDustRecipe('oritech:small_copper_dust', 'contained:orange_asteroid_dust')
  addImprovedDustRecipe('oritech:small_iron_dust', 'contained:light_gray_asteroid_dust')
  addImprovedDustRecipe('contained:small_silver_dust', 'contained:white_asteroid_dust')
  addImprovedDustRecipe('oritech:small_nickel_dust', 'contained:yellow_asteroid_dust')
  addImprovedDustRecipe('contained:small_coal_dust', 'contained:black_asteroid_dust')
  addImprovedDustRecipe('contained:small_redstone_dust', 'contained:red_asteroid_dust')
  addImprovedDustRecipe('contained:small_lapis_dust', 'contained:blue_asteroid_dust')
  addImprovedDustRecipe('oritech:small_gold_dust', 'contained:brown_asteroid_dust')

  // Particle Accelerator Recipes
  addParticleAcceleratorRecipe('contained:overworld_crystal', ['draconicevolution:chaotic_core', 'contained:exotic_resource_cluster'], 1, 1000)
  addParticleAcceleratorRecipe('contained:completed_mini_resource_cluster', ['contained:mini_resource_cluster_1', 'contained:mini_resource_cluster_2'], 1, 1000)

  //Stew recipes
  addStewRecipe('justdirethings:gooblock_tier1', 'contained:goo_stew_t1', 'contained:goo_bowl_t1')
  addStewRecipe('justdirethings:gooblock_tier2', 'contained:goo_stew_t2', 'contained:goo_bowl_t2')
  addStewRecipe('justdirethings:gooblock_tier3', 'contained:goo_stew_t3', 'contained:goo_bowl_t3')
  addStewRecipe('justdirethings:gooblock_tier4', 'contained:goo_stew_t4', 'contained:goo_bowl_t4')

  //Additional Silicon
  event.recipes.oritech.centrifuge_fluid().fluidInput("1000x oritech:still_naphtha").itemInputs("minecraft:clay").fluidOutputs("500x oritech:still_silicon_wash").time(200).id(`contained:oritech/centrifuge/silicon_wash`)

  //Soaked Paper
  event.recipes.oritech.centrifuge_fluid().itemInputs("opolisutilities:log_sheet").fluidInput("1000x #c:water").itemOutputs("opolisutilities:soaked_paper").time(200).id(`contained:oritech/centrifuge/soaked_paper`)

  //Gunpowder
  event.recipes.oritech.centrifuge_fluid().fluidInput("50x oritech:still_sulfuric_acid").itemInputs("contained:organic_powder").itemOutputs("minecraft:gunpowder").time(200).id(`contained:oritech/centrifuge/gunpowder`)

  // Blazing cinderstone
  event.recipes.oritech.centrifuge_fluid().fluidInput("1000x oritech:still_sheol_fire").itemInputs("contained:cindrath_core_fragment").itemOutputs("contained:blazing_cinderstone").time(40).id(`contained:oritech/centrifuge/blazing_cinderstone`)

  // blazing turbofuel
  event.recipes.oritech.centrifuge_fluid().fluidInput("200x oritech:still_fuel").itemInputs("contained:blazing_cinderstone").fluidOutputs("200x contained:blazing_turbofuel").time(40).id(`contained:oritech/centrifuge/blazing_turbofuel`)

  // Fuel generator: burns blazing turbofuel for energy
  event.recipes.oritech.fuel_generator().fluidInput("100x contained:blazing_turbofuel").time(1280).id(`contained:oritech/fuel_generator/blazing_turbofuel`)

  // Lava generator: burns molten blaze for energy
  event.recipes.oritech.lava_generator().fluidInput("100x casting:molten_blaze").time(400).id(`contained:oritech/lava_generator/molten_blaze`)

  // exotic blazing cinderstone (Industrial Chiller / cooler)
  event.recipes.oritech.cooler().fluidInput("1000x contained:blazing_turbofuel").itemOutputs("contained:exotic_blazing_cinderstone").time(2000).id(`contained:oritech/cooler/exotic_blazing_cinderstone`)

  //Water Bottle from Centrifuge
  event.recipes.oritech.centrifuge_fluid().fluidInput("250x minecraft:water").itemInputs("minecraft:glass_bottle").itemOutputs('minecraft:potion[potion_contents={potion:"minecraft:water"}]').time(200).id(`contained:oritech/centrifuge/water_bottle`)

  //Dirt from Centrifuge
  event.recipes.oritech.centrifuge_fluid().fluidInput("250x minecraft:water").itemInputs("contained:organic_powder").itemOutputs("4x contained:dirt_pile").time(200).id(`contained:oritech/centrifuge/dirt_pile`)

  //Dirt from Centrifuge 2
  event.recipes.oritech.centrifuge_fluid().fluidInput("1000x minecraft:water").itemInputs("contained:organic_powder_block").itemOutputs("4x minecraft:dirt").time(200).id(`contained:oritech/centrifuge/dirt`)

  //Water from Centrifuge
  event.recipes.oritech.centrifuge_fluid().itemInputs("contained:water_drop").itemOutputs("contained:dry_drop").fluidOutputs("250x minecraft:water").time(200).id(`contained:oritech/centrifuge/water`)

  //Lava from Centrifuge
  event.recipes.oritech.centrifuge_fluid().itemInputs("contained:lava_drop").itemOutputs("contained:dry_drop").fluidOutputs("250x minecraft:lava").time(200).id(`contained:oritech/centrifuge/lava`)

  //Blaze Powder from Centrifuge
  event.recipes.oritech.centrifuge_fluid().fluidInput("500x minecraft:lava").itemInputs("#contained:steel_dusts").itemOutputs("minecraft:blaze_powder").time(200).id(`contained:oritech/centrifuge/blaze_powder`)

  //Echo shard from Centrifuge
  event.recipes.oritech.centrifuge().itemInputs("minecraft:sculk").itemOutputs("minecraft:echo_shard").time(200).id(`contained:oritech/centrifuge/echo_shard`)

  //Slime ball from Centrifuge
  event.recipes.oritech.centrifuge_fluid().itemInputs("minecraft:magma_cream").itemOutputs("minecraft:slime_ball").fluidOutputs("45x casting:molten_blaze").time(200).id(`contained:oritech/centrifuge/slime_ball`)

  //Oil from Centrifuge
  event.recipes.oritech.centrifuge_fluid().itemInputs("contained:oil_drop").itemOutputs("contained:dry_drop").fluidOutputs("250x oritech:still_oil").time(200).id(`contained:oritech/centrifuge/oil`)

  //Pulverizer Function
  function addPulverizerRecipe(output, input, count, time) {

    event.recipes.oritech.pulverizer().itemInputs(input).itemOutputs(`${count}x ${output}`).time(time).id(`contained:pulverizer/${input.split(":")[1]}_to_${output.split(":")[1]}`)
  }

  //Foundry Function
  function addFoundryRecipe(output, input1, input2, count, time) {

    event.recipes.oritech.foundry().itemInputs([input1, input2]).itemOutputs(`${count}x ${output}`).time(time).id(`contained:oritech/foundry/${input1.split(":")[1]}_and_${input2.split(":")[1]}_to_${output.split(":")[1]}`)

  }

  function addLaserRecipe(output, input, count, time) {

    event.recipes.oritech.laser().itemInputs(input).itemOutputs(`${count}x ${output}`).time(time).id(`contained:oritech/laser/${input.split(":")[1]}_to_${output.split(":")[1]}`)

  }

  function addAssemblerRecipe(output, inputs, count, time) {

    event.recipes.oritech.assembler().itemInputs(inputs).itemOutputs(`${count}x ${output}`).time(time)
  }

  function addParticleAcceleratorRecipe(output, inputs, count, time) {

    event.recipes.oritech.particle_collision().itemInputs(inputs).itemOutputs(`${count}x ${output}`).time(time).id(`contained:oritech/particle_accelerator/${output.split(":")[1]}`)

  }

  function addDeepDrillRecipe(output, input) {

    event.recipes.oritech.deep_drill().itemInputs(input).itemOutputs(output).time(100).id(`contained:oritech/deep_drill/${input.split(":")[1]}_to_${output.split(":")[1]}`)

  }

  function addImprovedDustRecipe(output, input) {

    event.recipes.oritech.centrifuge_fluid().itemInputs(input).fluidInput("25x oritech:still_sulfuric_acid").itemOutputs(`2x ${output}`).time(120).id(`contained:oritech/centrifuge/improved_dust/${input.split(":")[1]}_to_${output.split(":")[1]}`)

  }

  //Stew Recipes
  function addStewRecipe(item, fluid, stew) {

    event.recipes.oritech.centrifuge_fluid().fluidInput("300x minecraft:water").itemInputs(item).fluidOutputs(`300x ${fluid}`).time(200)
    event.recipes.oritech.centrifuge_fluid().fluidInput(`100x ${fluid}`).itemInputs("contained:stone_bowl").itemOutputs(stew).time(20)

  }

  //Fragment Recipes
  function addFragmentRecipe(output, input, count, time) {

    event.recipes.oritech.grinder().itemInputs(input).itemOutputs(`${count}x ${output}`).time(time).id(`contained:oritech/fragment/${input.split(":")[1]}_to_${output.split(":")[1]}`)
  }

  // Atomic Forge Recipes
  function addAtomicForgeRecipe(output, inputs, count, time) {

    event.recipes.oritech.atomic_forge().itemInputs(inputs).itemOutputs(`${count}x ${output}`).time(time)

  }

})