MoreJS.villagerTrades((event) => {

    event.removeVanillaTypedTrades()
    event.removeModdedTypedTrades()

})
NativeEvents.onEvent('net.neoforged.neoforge.event.village.WandererTradesEvent', event => {

    event.getGenericTrades().clear()
    event.getRareTrades().clear()
})