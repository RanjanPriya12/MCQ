const User = require("../models/users.model");
const bcrypt = require("bcryptjs");

const registerUser = (user) => {
  return user.save();
};
const returnUserObj = (user) => {
  return new User(user);
};

const getUserByEmail = (email) => {
  return User.findOne({ email: email });
};

const comaprePassword = async (password, enteredPassword) => {
  const valid = await bcrypt.compare(password, enteredPassword);
  if (valid) {
    return true;
  }
  return false;
};

const getUserById = async (id) => {
  let user = await User.findById(id).select("-password");
  if (user) {
    return user;
  } else {
    return false;
  }
};

const getAllUsers = async () => {
  let users = await User.find().select('-password');
  if (users) {
    return users;
  } else {
    return false;
  }
};

const filterUsersByRole = async (allUsers, roleId) => {
  const requiredRoleId = [`${roleId[0]?._id.toString()}`];
  const allrequiredUsers = allUsers.filter(function (item) {
    return requiredRoleId.indexOf(item.role.toString()) === -1;
  });
  if (allrequiredUsers) {
    return allrequiredUsers;
  } else {
    return false;
  }
};


const userService = {
  registerUser,
  getUserByEmail,
  returnUserObj,
  comaprePassword,
  getUserById,
  getAllUsers,
  filterUsersByRole
};
module.exports = userService;
