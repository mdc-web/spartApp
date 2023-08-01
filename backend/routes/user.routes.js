const express = require('express');
//const { setPosts } = require('../controllers/post.controller');
const router = express.Router();
const authController = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");

//auth
router.post("/register", authController.signUp);
router.post('/login', authController.signIn);
router.get('/logout', authController.logout);

//user
router.get("/", userController.getAllUsers);
router.get("/:id", userController.userInfo);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser)








// router.get("/", (req, res) => {
//     res.json({ message: "voici les données"});
// });

// router.post("/", setPosts);

// router.put("/:id", (req, res) => {
//     res.json({ messageId: req.params.id });
// });

// router.delete("/:id", (req, res) => {
//     res.json({ messageId:"post supprimé id : " + req.params.id });
// });

// router.put

module.exports = router;