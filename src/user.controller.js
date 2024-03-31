const User = require("../Models/user.js");

async function getUser() {
  const user = await User.find();
  return user;
}

async function addUser(email, password) {
  const user = { email, password };
  await User.create(user);
  console.log(`User ${user.email} was created with password ${user.password}`);
}

async function loginUser(email, password) {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Пользователь не найден");
  }
  const isMatched = user.password === password;

  if (!isMatched) {
    throw new Error("Неверный пароль");
  }

  return user;
}

module.exports = {
  getUser,
  addUser,
  loginUser,
};
