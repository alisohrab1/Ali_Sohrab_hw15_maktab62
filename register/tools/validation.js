var msg = [];

function checkEmptyInput(obj) {
  if (!obj.firstname || !obj.lastname || !obj.username || !obj.password) {
    return false;
  }
  return true;
}

function checkUsername(obj) {
  if (!obj.hasOwnProperty('username')) {
    return false;
  }
  if (obj.username.length < 2) return false;
  return true;
}

function checkPassword(obj) {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g;
  if (!obj.hasOwnProperty("password")) {
    return false;
  }
  const result = obj.password.match(regex);
  if (result === null) {
    return false;
  }
  return true;
}

function checkName(obj) {
  if (
    obj.firstname.length < 2 ||
    obj.firstname.length > 30 ||
    obj.lastname.length < 2 ||
    obj.lastname.length > 30
  ) {
    return false;
  }
  return true;
}

exports.validateRegister = (obj) => {
  if (
    checkEmptyInput(obj) &&
    checkUsername(obj) &&
    checkPassword(obj) &&
    checkName(obj)
  ) {
    return true;
  }
  return false;
};
