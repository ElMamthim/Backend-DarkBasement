const request = require('supertest')
const app = require('./../index')
const mongoose = require('mongoose')
const User = require('./../models/user.model')

describe('User controller test', () =>{
    beforeEach(async() => {
        await User.deleteMany()
    }, 10000)

    afterAll(async() => {
        await User.deleteMany()
        await mongoose.connection.close()
    })
    it('Deberia registrar al usuario en la base de datos', async() => {
        const username = 'mathias4@mathias.com'
        const name = 'mathias'
        const discord_username = 'mathias'
        const password = '12345678'

        const response = await request(app)
                            .post('/api/auth/register')
                            .send({ username, name, discord_username, password })

        expect(response.statusCode).toBe(200)
    })

    it('No deberia registrar a un usuario que ya existe en la base de datos', async() => {
        const username = 'mathias4@mathias.com'
        const name = 'mathias'
        const discord_username = 'mathias'
        const password = '12345678'

        const dbUser = new User({
        username: username,
        name: name,
        discord_username: discord_username,
        password: password})
        await dbUser.save()

        const response = await request(app)
                            .post('/api/auth/register')
                            .send({ username, name, discord_username, password })

        expect(response.statusCode).toBe(500)
        expect(response.body).toHaveProperty('msg', 'Ha ocurrido una excepcion al registrar un usuario')
    })

    it('Deberia encontrar al usuario registrado por medio de su id', async() => {
        const username = 'mathias4@mathias.com'
        const name = 'mathias'
        const discord_username = 'mathias'
        const password = '12345678'
        
        const dbUser = new User({
            username: username,
            name: name,
            discord_username: discord_username,
            password: password})
            await dbUser.save()

        const userId = new mongoose.mongo.ObjectId()

        const response = await request(app)
                            .post('/api/auth/get')
                            .send({userId})

        console.log(response.body)
    })
})