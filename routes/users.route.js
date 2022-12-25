const router = require('express').Router();
const { getUsers, homeRoute, postUsers, updateUser, deleteUser } = require('../controllers/users.controller');

router.get("/", homeRoute);
router.get("/users", getUsers);
router.post("/users", postUsers);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;