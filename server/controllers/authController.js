import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
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
    return res
      .status(400)
      .json({ message: "Ошибка при создании пользователя", error: error });
  }
};

export const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = User.findOne({ userName });
    if (user == null) {
      return res
        .status(400)
        .json({ message: "Такого пользователя не существует!" });
    }
    const isCorrectedPassword = await bcrypt.compare(password, user.password);
    if (isCorrectedPassword == false) {
      return res.status(400).json({ message: "Пароли не совпадают!" });
    }
    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET,
      {expiresIn: '30d'}
    );
    return res.json({
      token,
      user,
      message: "Вы вошли в систему"
    })
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
