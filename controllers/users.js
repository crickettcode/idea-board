const express = require('express')
const { User } = require('../db/schema')
const router = express.Router()

router.get('/', (req, res) => {
    User.find()
        .then(users => {
            console.log("SENDING USERS", users)
            res.json(users)
        })
        .catch((err) => console.log(err))
})

router.post('/', (req, res) => {
    console.log("CREATING USER", req.body.user)
    User.create(req.body.user)
        .then((data) => {
            res.json(data)
        })
        .catch(console.log)
})


router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .then((user) => {
            user.ideas = user.ideas.reverse()
            res.json(user)
        })
        .catch(console.log)
})


module.exports = router