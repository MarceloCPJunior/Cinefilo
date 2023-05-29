import jwt from 'jsonwebtoken'
import databaseConnection from '../utils/database'
import User from '../models/user'

const SECRET = 'as35dh46sd8j46wsr8t4w684bes'

function createToken(user) {
    try {
        const token = jwt.sign({ name: user.name, email: user.email }, SECRET)
        return token
    } catch (err) {
        console.log(err.message)
        return ''
    }
    
}

function readToken(token) {
    try {
        return jwt.verify(token, SECRET)
    } catch (err) {
        throw new Error('Token inválido')
    }
}

export function verifyToken(token) {
    return readToken(token)
}

export const listUsers = async () => {
    await databaseConnection()
    const users = await User.find()
    return users
}

export const register = async (body) => {
    await databaseConnection()
    const createUser = await User.create(body)
    const token = createToken(body)
    console.log(token)
    return createUser
}

export const deleteUser = async (id) => {
    await databaseConnection()
    await User.findByIdAndDelete(id)
}

export const updateUser = async (id, newBody) => {
    await databaseConnection()
    await User.findByIdAndUpdate(id, newBody)
}

export function login(body) {
    const user = users.find(({ email }) => email === body.email)
    if(!user) throw new Error('Usuário não encontrado')
    if(user.password !== body.password) throw new Error('Senha incorreta')

    const token = createToken(body)
    return token
}