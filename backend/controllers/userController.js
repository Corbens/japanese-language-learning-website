const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

// status codes: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

// _id is what mongo calls it
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '2d' })
}

// login user
const loginUser = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.login(email, password)
        const username = user.username

        const token = createToken(user._id)
        
        res.status(200).json({email, token, username})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// signup user
const signupUser = async (req, res) => {
    const {email, password, username} = req.body

    try {
        const user = await User.signup(email, password, username)

        const token = createToken(user._id)
        
        res.status(201).json({email, token, username})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const addHistory = async (req, res) => {
    const {email, type, score} = req.body

    try {
        const game = await User.addGame(email, type, score)
        res.status(200).json({"game": game})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getHistory = async (req, res) => {
    const { email } = req.body

    try { 
        const history = await User.getGames(email)
        res.status(200).json({"history": history})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { loginUser, signupUser, addHistory, getHistory }