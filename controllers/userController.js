// userController.js

import  {getAllUsers , getUserById , createUser , updateUser , deleteUser} from '../services/userService.js';



export const createUserctrl = async (req, res) => {
    try {
      const newUser = await createUser(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };


export const getAllUsersctrl = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json({
        success : true,
        users : users
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export const getUserByIdctrl = async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    if (user) {
        res.status(200).json({
            success : true,
            user : user
        });
    } else {
      res.status(404).json({ message: "User not found" });
    }

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export const updateUserctrl = async (req, res) => {
  try {
    const updatedUser = await updateUser(req.params.id, req.body );
    res.status(200).json({
        success : true,
        message : "user updated successfully",
        updatedUser : updatedUser
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


export const deleteUserctrl = async (req, res) => {
  try {
    const result = await deleteUser(req.params.id);
    res.status(200).json({
        success : true,
        message : "user deleted successfully"
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};