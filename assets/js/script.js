const usernameInput = document.querySelector(".user-input");
const passwordInput = document.querySelector(".pass-input");
const signinBtn = document.querySelector(".signin-button");
const userMsg = document.querySelector(".username-msg");
const passMsg = document.querySelector(".password-msg");
const signinStatus = document.querySelector(".signin-status");

signinBtn.addEventListener("click", validation);

function validation() {
  const userValue = usernameInput.value;
  const passValue = passwordInput.value;
  let status = true;

  if (
    !userValue.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    userMsg.innerHTML = "Please Enter a valid email";
    status = false;
    signinStatus.innerHTML = "";
  } else {
    userMsg.innerHTML = "";
  }

  if (
    !passValue.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)
  ) {
    passMsg.innerHTML = "Please Enter a valid password";
    status = false;
    signinStatus.innerHTML = "";
  } else {
    passMsg.innerHTML = "";
  }

  if (status) {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        username: userValue,
        password: passValue,
      }),
      headers: {
        "Content-type": "Application/json",
      },
    }).then((res) => {
      if (res.ok) {
        signinStatus.innerHTML = "You have successfully signed up";
      }
    });
  }
}
