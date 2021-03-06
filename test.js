const { deepEqual, ok } = require('assert')

const database = require('./database')

const DEFAULT_ITEM_REGISTER = {
    name: 'Flash',
    power: 'Speed',
    id: 1
}

describe('Suite of manipilation of heros', () => {

    before(async () => {
        await database.register(DEFAULT_ITEM_REGISTER)
    })

    it('should search a hero, using file', async () => {
        const expected = DEFAULT_ITEM_REGISTER

        // Destruct return first position
        const [result] = await database.list(expected.id)

        deepEqual(result, expected)
    })

    it('should register a hero using file', async () => {
        const expected = DEFAULT_ITEM_REGISTER

        const resultRegister = await database.register(DEFAULT_ITEM_REGISTER)

        const [actual] = await database.list(DEFAULT_ITEM_REGISTER.id)

        deepEqual(actual, expected)
    })

    it('should remove a hero', async () => {
        const expected = true

        const result = await database.remove(DEFAULT_ITEM_REGISTER.id)

        deepEqual(result, expected)
    })
})
