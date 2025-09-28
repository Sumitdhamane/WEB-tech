function register() {
  let uid = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  let pass1 = document.getElementById("confirmPassword").value;

  if (pass !== pass1) {
    window.alert("Enter both passwords the same");
  } else {
    let prod = {
      username: uid,
      password: pass,
    };
    let prodJson = JSON.stringify(prod);

    let xmlObj = new XMLHttpRequest();
    xmlObj.onload = function () {
      window.alert("Registration done Successfully");

      // redirect to signin.html (same folder)
      window.location.href = "http://127.0.0.1:5500/signInAjax/sign.html";

      // clear form fields
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
      document.getElementById("confirmPassword").value = "";
    };

    xmlObj.open("POST", "http://localhost:4545/users");
    xmlObj.setRequestHeader("Content-Type", "signin/json");
    xmlObj.send(prodJson);
  }
}
