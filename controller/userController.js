import users from "../models/users.js"

export const getUsers = async (req, res) => {
  try {
    await users.findAll()
    
  } catch (error) {
    
  }
}