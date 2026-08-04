NativeEvents.onEvent('net.neoforged.neoforge.event.furnace.FurnaceFuelBurnTimeEvent', event => {
    let itemID = String(event.getItemStack().id)

    if (itemID === 'woodenbucket:wooden_bucket' || itemID === 'geore:coal_shard') {
        event.setBurnTime(0)
    }
})