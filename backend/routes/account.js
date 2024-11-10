const express = require('express');
const router = express.Router();

const {
    createAccount,
    getAllAccounts,
    findAccount,
    deleteAccount
} = require('../controllers/account');

router.route('/')
    .get(getAllAccounts)
    .post(createAccount);

router.route('/:id')
    .get(findAccount)
    .delete(deleteAccount);
    
module.exports = router;