const mongoose = require("mongoose");
const express = require("express");
const app = express();
const PORT = 8000;


// Connection
mongoose.connect("mongodb://127.0.0.1:27017/first-rest-app")
  .then(() => console.log("MongoDB connection successful"))
  .catch(err => console.log("Error : ", err));

// Schema & Model
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
  },
  jobTitle: {
    type: String,
  },

}, { timestamps: true }
)

// Model 
const User = mongoose.model("user", userSchema);

// Middlewares
app.use(express.urlencoded({ extended: false }));


// Routes
app.get("/users", async (req, res) => {
  const allUsers = await User.find({});
  return res.send(`
<ul>
${allUsers.map(user => `<li>${user.email}</li>`).join("")}
</ul >
`)
})
app.get("/api/users", async (req, res) => {
  const allUsers = await User.find({});
  return res.json(allUsers);
})
app.route("/api/users/:id")
  .get(async (req, res) => {
    const user = await User.findById(req.params.id);
    return res.json(user);
  })
  .patch(async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, { lastName: req.body.last_name });
  })
  .delete(async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
  })

app.post("/api/users", async (req, res) => {
  const body = req.body;
  await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    jobTitle: body.job_title,
    gender: body.gender,
  });
  return res.status(201).json({ msg: "success" })
})

app.listen(PORT, () => {
  console.log("server is running on port 8000");
})
