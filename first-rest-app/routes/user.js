const express = require("express");
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  createNewUser
} = require("../controllers/handler");
const router = express.Router();

// Routes
// router.get("/users", async (req, res) => {
//   const allUsers = await User.find({});
//   return res.send(`
// <ul>
// ${allUsers.map(user => `<li>${user.email}</li>`).join("")}
// </ul >
// `)
// })

router.route("/")
  .get(getAllUsers)
  .post(createNewUser);

router.route("/:id")
  .get(getUserById)
  .patch(updateUserById)
  .delete(deleteUserById);

module.exports = router;

