document.querySelector("#register").addEventListener("click", register);
var userdata = JSON.parse(localStorage.getItem("userdatabase")) || [];
function register() {
  console.log("here");
  var AcademicTitle = document.querySelector("#acad").value;
  var FirstName = document.querySelector("#first").value;
  var LastName = document.querySelector("#last").value;
  var Email = document.querySelector("#email").value;
  var Password = document.querySelector("#pass").value;
  var ConfPass = document.querySelector("#confpass").value;

  var usercred = {
    AcademicTitle: AcademicTitle,
    FirstName: FirstName,
    LastName: LastName,
    Email: Email,
    Password: Password,
    ConfPass: ConfPass,
  };
  userdata.push(usercred);
  if (Password != ConfPass) {
    console.log("no");
    alert("invalid input password");
  } else {
    console.log("yes");
    localStorage.setItem("userdatabase", JSON.stringify(userdata));
  }

  document.querySelector("#acad").value = "";
  document.querySelector("#first").value = "";
  document.querySelector("#last").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#pass").value = "";
  document.querySelector("#confpass").value = "";
}

document.querySelector("#login_btn").addEventListener("click", login);
function login() {
  console.log("yes");
  var regdUser = JSON.parse(localStorage.getItem("userdatabase"));
  var email = document.querySelector("#email").value;
  var password = document.querySelector("#pass").value;

  for (i = 0; i < regdUser.length; i++) {
    console.log("haan");
    if((regdUser[i].Email == email) && (regdUser[i].Password == password)) {
      window.location.href ="womenproduct.html"
    }
  }
}