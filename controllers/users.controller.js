let users = require("../models/users.model");
const path = require('path');
const {v4 : uuidv4} = require('uuid');

const homeRoute = (req,res)=>{
    res.sendFile(path.join(__dirname+"/../views/index.html"));
}

const getUsers = (req,res)=>{
    res.status(200).json({users});
};

const postUsers = (req,res)=>{
    const newUser = {
        id : uuidv4(),
        username : req.body.username,
        email : req.body.email
    }
    users.push(newUser);
    res.status(200).json(users);
};

const updateUser = (req,res)=>{
    const userid = req.params.id;
    const {username, email} = req.body;
    const user = users.filter((user)=>user.id==userid).map((selectedUser)=>{
        selectedUser.username = username;
        selectedUser.email = email;
    })
    res.status(200).json(users);
};

const deleteUser = (req,res)=>{
    const userid = req.params.id;
    users = users.filter((user)=>user.id != userid);
    res.status(200).json(users);
}

module.exports = {getUsers, homeRoute, postUsers, updateUser, deleteUser};