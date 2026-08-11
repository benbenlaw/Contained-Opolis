ItemEvents.modification(event => {
    event.modify('oritech:small_tank_block', item => {
        item.maxStackSize = 1
    })
})