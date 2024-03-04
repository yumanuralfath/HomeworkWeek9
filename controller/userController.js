import users from "../models/users.js";

export const getUsers = async (req, res) => {
  try {
    const allUser = await users.findAll();
    res.status(200).json(allUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "User not found" });
  }
};

export const getUsersById = async (req, res) => {
  try {
    //check if user is already in the database
    const { id } = req.params;
    const UserID = await users.findByPk(id);
    if (!UserID) {
      return res.status(404).json({ msg: "User not found" });
    }
    //if user is already in the database
    res.status(200).json(UserID);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "internal server error" });
  }
};

export const createUsers = async (req, res) => {
  try {
    const { email, gender, password, role } = req.body;
    const CreateUser = await users.create({
      email,
      gender,
      password,
      role,
    });
    res.status(201).json({ msg: "User created successfully" });
  } catch (error) {
    res.status(500).json({ msg: "internal server error" });
  }
};

export const updateUsers = async (req, res) => {
  try {
    //check if user already exists
    const { id } = req.params;
    const { email, gender, password, role } = req.body;
    const existingUsers = await users.findByPk(id);
    if (!existingUsers) return res.status(404).json({ msg: "User not found" });

    //if user is already exist
    await existingUsers.update({
      email: email || existingUsers.title,
      gender: gender || existingUsers.gender,
      password: password || existingUsers.password,
      role: role || existingUsers.role,
    });

    //send response if update is successful
    res.status(200).json({ msg: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Error updating" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    //check if user already exists
    const { id } = req.params;
    const existingUsers = await users.findByPk(id);
    if (!existingUsers) return res.status(404).json({ msg: "User not found" });

    // if user already exists
    await existingUsers.destroy();
    res.status(200).json({ msg: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Error while deleting" });
    console.log(error);
  }
};
