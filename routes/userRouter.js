// const router = require('express').Router()
import express from 'express';
import { register, login, logout, refreshToken, getUser, addCart, history, getUsers, addWishToBuy, addConfirmedVendors, addConfirmedWeddingPlans, addWishToBuyWeddingPlans } from '../controllers/userCtrl.js'
import auth from '../middleware/auth.js'
import authAdmin from '../middleware/authAdmin.js'

var router = express.Router();

router.post('/register', register)

router.post('/login', login)

router.get('/logout', logout)

router.get('/refresh_token', refreshToken)

router.get('/infor', auth,  getUser)

router.patch('/addcart', auth, addCart)

router.get('/history', auth, history)

//////////////////////////////////////////////////////////////////////////////
////////////////////////// get User's info to front-end routing //////////////
//////////////////////////////////////////////////////////////////////////////
router.route('/users')
    .get(getUsers)
//////////////////////////////////////////////////////////////////////////////
////////////////////////// get User's info to front-end routing //////////////
//////////////////////////////////////////////////////////////////////////////

router.patch('/addwish_to_buy', auth, addWishToBuy)

router.patch('/addconfirmed_vendors', auth, addConfirmedVendors)

router.patch('/addwish_to_buy_wedding_plans', auth, addWishToBuyWeddingPlans)

router.patch('/addconfirmed_wedding_plans', auth, addConfirmedWeddingPlans)

export default router