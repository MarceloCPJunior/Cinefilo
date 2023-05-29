import { Router } from "express";
import { deleteUser, listUsers, register, updateUser } from "../services/user";

const router = Router()

router.get('/', async (req, res) => {
    const userList = await listUsers(req.body)
    res.send(userList)
})

router.post('/', async (req, res) => {
    try {
        const user = await register(req.body)
        res.status(201).send(user)
    } catch (err) {
        res.status(400).send(err)
    }
})

router.delete('/:userId', async(req, res) => {
    await deleteUser(req.params.userId)
    res.send()
})

router.put('/:userId', async (req, res) => {
    await updateUser(req.params.userId, req.body)
    res.send()
})

router.delete('/', (req, res) => {
    res.send('DELETE USER')
})

export default router