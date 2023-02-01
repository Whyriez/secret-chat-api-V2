import Users from "../models/UserModel.js";
import argon2 from "argon2";

export const Login = async (req, res) => {
  const user = await Users.findOne({
    where: {
      email: req.body.email,
    },
  });
  if (!user) return res.status(404).json({ message: "User Not Found" });
  const match = await argon2.verify(user.password, req.body.password);
  if (!match) return res.status(400).json({ message: "Wrong Password" });
  req.session.userId = user.uuid;
  const uuid = user.uuid;
  const name = user.name;
  const email = user.email;
  const role = user.role;
  res.status(200).json({ uuid, name, email, role });
};

export const Me = async (req, res) => {
  if (!req.session.userId) {
    return res
      .status(401)
      .json({ message: "Please login with your account!!" });
  }else{
    const user = await Users.findOne({
    attributes: ["uuid", "name", "email", "role"],
    where: {
      uuid: req.session.userId,
    },
  });
  if (!user) return res.status(404).json({ message: "User Not Found" });
  res.status(200).json(user);
  }
  
};

// export const Me = async (req, res) => {
//   if (!req.session.userId) {
//     return res.status(401).json({ msg: "Mohon login ke akun Anda!" });
//   }
//   const user = await Users.findOne({
//     attributes: ["uuid", "name", "email", "role"],
//     where: {
//       uuid: req.session.userId,
//     },
//   });
//   if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
//   res.status(200).json(user);
// };

export const LogOut = (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(400).json({ message: "Cannot Logout" });
    res.status(200).json({ message: "You Are Logout" });
  });
};
