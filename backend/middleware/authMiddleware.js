import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
import AsyncHandler from 'express-async-handler'

//middleware for checking user authorization by token
export const protect = AsyncHandler(async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]

      //this "decoded" variable is going to have the Id which we have provided as a payload at the time of token generation
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      //we will use this req.user to check user authorization for the protected routes
      req.user = await User.findById(decoded.id).select('-password')
    } catch (err) {
      res.status(401)
      throw new Error('Unauthorized, token not valid')
    }
  }
  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
  next()
})

export const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next()
  } else {
    res.status(401)
    throw new Error('Not Authorized as an Admin')
  }
}
