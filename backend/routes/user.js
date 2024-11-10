
const express = require('express');
const router = express.Router();

const {
    getUsers,
    findUser,
    createUser,
    deleteUser
} = require('../controllers/user');

router.route('/')
    .get(getUsers)
    .post(createUser);

router.route('/:id')
    .get(findUser)
    .delete(deleteUser);

module.exports = router;
