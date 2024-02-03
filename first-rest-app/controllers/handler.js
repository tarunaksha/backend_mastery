const { User } = require("../models/user");

async function getAllUsers(req, res) {
  const allUsers = await User.find({});
  return res.json(allUsers);
}
async function getUserById(req, res) {
  const user = await User.findById(req.params.id);
  return res.json(user);

}
async function updateUserById(req, res) {
  await User.findByIdAndUpdate(req.params.id, { lastName: req.body.last_name });
  return res.status(200).json({ msg: "success" });
}
async function deleteUserById(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.status(200).json({ msg: "success" });
}
async function createNewUser(req, res) {
  const body = req.body;
  await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    jobTitle: body.job_title,
    gender: body.gender,
  });
  return res.status(201).json({ msg: "success" });
}

module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  createNewUser,
}
