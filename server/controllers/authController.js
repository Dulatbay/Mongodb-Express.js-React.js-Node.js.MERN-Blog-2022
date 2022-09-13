import User from "../models/user.js";
import bcrypt from "bcryptjs";
export const register = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const isUsed = await User.findOne({ userName });

    if (isUsed != null) {
      return res.status(400).json({
        message: "Данное имя пользователя уже занято",
      });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      userName,
      password: hash,
    });

    await newUser.save();

    res.status(200).json({
      newUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({message:"Ошибка при создании пользователя", error: error})
  }
};

export const login = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

export const check = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
