$("#editBtn").click(function (e) { 
    e.preventDefault();

  const data = {
    userId : $("#userId").val(),
    username: $("#username").val(),
    password: $("#password").val(),
    firstname: $("#firstname").val(),
    lastname: $("#lastname").val(),
    gender: $("#gender").val()
  };

  console.log(data);
  
  //validate inputs
  if (!(validateInputs())) {
      console.log("invaild");
    return;
  }
  console.log('valid');

  $.ajax({
    type: "PUT",
    url: "http://localhost:5000/profile/" + `${data.username}`,
    data,
    success: function (response) {
      console.log(response);
      // location.reload(true);
      window.location.href = "http://localhost:5000/profile/" + `${data.username}`;
    },
    error: function(xhr, status, error) {
        alert(xhr.responseText);
      },
  });

    
});


$("#delBtn").click(function (e){
  e.preventDefault();

  const data = {
    username: $("#username").val(),
  };

  $.ajax({
    type: "DELETE",
    url: "http://localhost:5000/profile/" + `${data.username}`,
    data,
    success: function (response) {
      console.log(response);
      // location.reload(true);
      window.location.href = "http://localhost:5000/login";
    },
    error: function(xhr, status, error) {
        alert(xhr.responseText);
      },
  });

})