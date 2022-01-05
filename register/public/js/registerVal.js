function checkEmptyInput() {
  if (
    $("#password").val() === "" ||
    $("#username").val() === "" ||
    $("#firstname").val() === "" ||
    $("#lastname").val() === ""
  ) {
    alert("empty input");
    return false;
  }
  // console.log("valid");
  return true;
}

function checkPassword() {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g;
  const result = $("#password").val().match(regex);
  //   console.log(`result of regex : ${result}`);
  if (result === null) {
    alert("invalid password");
    return false;
  }
  return true;
}

function checkLenght() {
  if ($("#username").val().length < 2) {
    alert("username lenght");
    return false;
  }
  if (
    $("#firstname").val().length < 2 ||
    $("#firstname").val().length > 30 ||
    $("#lastname").val().length < 2 ||
    $("#lastname").val().length > 30
  ) {
    alert("name lenght");
    return false;
  }
  return true;
}

function validateInputs() {
  if (checkEmptyInput() && checkPassword() && checkLenght()) {
    return true;
  }
  return false;
}
