
import UserModel from "../models/userModel.js";



export const getAllUsers = async () => {
  try {
    return await UserModel.find();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getUserById = async (userId) => {
  try {
    return await UserModel.findById(userId);
  } catch (error) {
    throw new Error(error.message);
  }
};



export const createUser = async (userData) => {
  try {
    const user = new UserModel(userData);
    return await user.save();
  } catch (error) {
    throw new Error(error.message);
  }
};



export const updateUser = async (userId, userData) => {
  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    Object.assign(user, userData);
    return await user.save();
  } catch (error) {
    throw new Error(error.message);
  }
};



export const deleteUser = async (userId) => {
  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    await UserModel.deleteOne({ _id: userId });
    return { message: "User deleted" };
  } catch (error) {
    throw new Error(error.message);
  }
};