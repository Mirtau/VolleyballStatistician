
// 'use strict'
//
// const express = require('express')
// const knex = require('../knex')
// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')
// const JWT_KEY = process.env.JWT_KEY
// const router = express.Router()
//
// router.post('/users', (req, res, next) => {
//   const {email, password} = req.body
//   if(!email) {
//     res.setHeader('content-type', 'text/plain')
//     return res.status(400).send('Email must not be blank')
//   }
//   if(!password) {
//     res.setHeader('content-type', 'text/plain')
//     return res.status(400).send('Password must be at least 8 characters long')
//   }
//
//   knex('users')
//     .where('email', email)
//     .first()
//     .then((user) => {
//       if (user) {
//         res.setHeader('content-type', 'text/plain')
//         return res.status(400).send('Email already exists')
//       }else {
//         const thePassword = req.body.password
//         bcrypt.hash(thePassword, 12)
//
//
//       }
//     })
// })
//
// module.exports = router
