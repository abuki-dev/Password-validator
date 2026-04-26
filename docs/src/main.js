if (document.getElementById("login-container")) {
  const inputarea = document.getElementById("signin-password");
  const Status = document.getElementById("length-checkbox");
  const AllowedChar = document.getElementById("spectial-cacracters");
  const Uppercases = document.getElementById("uppercases");
  const Smalletters = document.getElementById("smalleters");
  const Numbers = document.getElementById("Numbers");
  const Allcheked = document.querySelectorAll(".abuki");
  const Symbols = document.getElementById("symbols");
  const signin = document.getElementById("sing-in");
  const successMessage = document.getElementById("success-message");
  const confirmpassword = document.getElementById("confirmed");
  const errorconfirm = document.getElementById("error");
  const passwordtoggle = document.querySelectorAll(".toggle-password");
  const togreen = document.querySelectorAll(".togreen");
  const showsignup = document.getElementById("show-signup");
  const signuppage = document.getElementById("signup-container");
  const loginpage = document.getElementById("login-container");
  const showlogin = document.getElementById("show-login");

  function updateField() {
    const select = document.getElementById("country-code");
    const input = document.getElementById("phone");
    const selected = select.options[select.selectedIndex];

    input.pattern = selected.getAttribute("data-pattern");
    input.placeholder = selected.getAttribute("data-placeholder");

    input.value = "";
  }
  function checklength(passsword) {
    if (passsword.length < 10) {
      Status.checked = false;
    } else {
      Status.checked = true;
    }
  }
  function Turneverytugngeren(yes) {
    for (const color of togreen) {
      if (yes === true) {
        color.setAttribute("stroke", "green");
      } else {
        color.setAttribute("stroke", "white");
      }
    }
  }
  function Chekconfirmedpassword(entered, confirmed) {
    if (entered === confirmed && entered !== "" && confirmed !== "") {
      errorconfirm.textContent = "you are ready to go";
      errorconfirm.classList.remove("text-red-400");
      errorconfirm.classList.add("text-green-400");
      Chekall(true);
      Turneverytugngeren(true);
    } else {
      errorconfirm.textContent = "password must be the same";
      errorconfirm.classList.remove("text-green-400");
      errorconfirm.classList.add("text-red-400");
      Chekall(false);
      Turneverytugngeren(false);
    }
  }

  function Checknonallowed(passsword) {
    let Domain = true;
    let upercasedetacted = false;

    for (let element of passsword) {
      let code = element.charCodeAt(0);
      if (code <= 32 || code >= 127) {
        Domain = false;
        break;
      }
    }

    AllowedChar.checked = Domain;

    for (let element of passsword) {
      let code = element.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        upercasedetacted = true;
        break;
      }
    }

    Uppercases.checked = upercasedetacted;
  }

  function Cheksmallletters(passsword) {
    let smalldetected = false;

    for (let element of passsword) {
      let code = element.charCodeAt(0);
      if (code >= 97 && code <= 122) {
        smalldetected = true;
        break;
      }
    }

    Smalletters.checked = smalldetected;
  }

  function Cheknummbers(passsword) {
    let Numberdetected = false;

    for (let element of passsword) {
      let code = element.charCodeAt(0);
      if (code >= 48 && code <= 57) {
        Numberdetected = true;
        break;
      }
    }

    Numbers.checked = Numberdetected;
  }

  function Cheksymbols(passsword) {
    let symboldetct = false;

    for (let element of passsword) {
      let code = element.charCodeAt(0);
      const exits =
        (code >= 33 && code <= 47) ||
        (code >= 58 && code <= 64) ||
        (code >= 91 && code <= 96) ||
        (code >= 123 && code <= 126);
      if (exits) {
        symboldetct = exits;
        break;
      }
    }

    Symbols.checked = symboldetct;
  }

  function Chekall(yes) {
    let allmarked = true;

    for (let element of Allcheked) {
      if (!element.checked) {
        allmarked = false;
        break;
      }
    }

    signin.disabled = !(allmarked && yes);
  }
  function Cekeverytgn() {
    checklength(inputarea.value);
    Checknonallowed(inputarea.value);
    Cheksmallletters(inputarea.value);
    Cheknummbers(inputarea.value);
    Cheksymbols(inputarea.value);
    Chekconfirmedpassword(inputarea.value, confirmpassword.value);
  }

  inputarea.addEventListener("input", () => {
    Cekeverytgn();
  });
  confirmpassword.addEventListener("input", () => {
    Cekeverytgn();
  });
  function toggled(toggle) {
    const grandparent = toggle.closest(".relative");
    const firstChild = grandparent.firstElementChild;
    if (
      toggle.getAttribute("stroke") === "white" &&
      firstChild.type === "password"
    ) {
      toggle.setAttribute("stroke", "green");
      firstChild.type = "text";
    } else {
      toggle.setAttribute("stroke", "white");
      firstChild.type = "password";
    }
  }
  for (let toggle of passwordtoggle) {
    toggle.addEventListener("click", () => {
      toggled(toggle);
    });
  }
  showsignup.addEventListener("click", () => {
    signuppage.classList.remove("hidden");
    loginpage.classList.add("hidden");
  });
  showlogin.addEventListener("click", () => {
    signuppage.classList.add("hidden");
    loginpage.classList.remove("hidden");
  });
  function LoginAllow(users, PendingArray) {
    const loginuser = localStorage.getItem("Logedin") || "[]";
    const array = JSON.parse(loginuser);
    const user = {
      Email: users["Email"],
      Passkey: users["Passkey"],
    };
    array.push(user);
    localStorage.setItem("Logedin", JSON.stringify(array));
    alert("account activated");
    let toberemoved = PendingArray.indexOf(users);
    PendingArray.splice(toberemoved, 1);
    localStorage.setItem("Pending", JSON.stringify(PendingArray));
    window.location.replace("../login");
  }
  const form = document.getElementById("userForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    //garabig data form local storage
    const Usersdata = localStorage.getItem("Usersdata") || "[]";
    const prasedata = JSON.parse(Usersdata);
    //colllecting form datas
    //idtrick
    const Uid =
      prasedata.length > 0 ? Math.max(...prasedata.map((u) => u.id)) + 1 : 1;
    const fullname = document.getElementById("Name").value;
    const email = document.getElementById("Signin-email").value;
    //coutycode spectial trik
    const select = document.getElementById("country-code");
    const subfix = document.getElementById("phone").value;
    const preficx = select.options[select.selectedIndex].value;
    const phone = preficx + subfix;
    let regstrationallowed = true;
    for (const data of prasedata) {
      if (data.Email === email) {
        alert(
          "The Email " + email + " is  already registered. Try logging in.",
        );
        regstrationallowed = false;

        form.focus();
        break;
      } else if (data.Phone === phone) {
        alert("This  number " + phone + " is already linked to an account.");
        regstrationallowed = false;
        form.focus();
        break;
      }
    }
    if (regstrationallowed) {
      const passsword = document.getElementById("signin-password").value;
      //object of currunt user
      const curruntuser = {
        id: Uid,
        Name: fullname,
        Email: email,
        Phone: phone,
        Paskey: passsword,
      };

      prasedata.push(curruntuser);
      localStorage.setItem("Usersdata", JSON.stringify(prasedata));
      const Pendinng = localStorage.getItem("Pending") || "[]";
      const PendigArray = JSON.parse(Pendinng);
      const user = {
        Email: email,
        Passkey: passsword,
        Status: "pending",
      };
      PendigArray.push(user);
      localStorage.setItem("Pending", JSON.stringify(PendigArray));
      form.reset();
      alert("account created sing up to activate it ");
    }
  });
  const signuser = document.getElementById("user-login-form");
  signuser.addEventListener("submit", (e) => {
    e.preventDefault();
    const Pendinng = localStorage.getItem("Pending") || "[]";
    const prasedata = JSON.parse(Pendinng);
    const singupemail = document.getElementById("singup-email").value;
    const singupapass = document.getElementById("singup-password").value;
    let exit = false;
    for (const users of prasedata) {
      if (singupemail === users["Email"]) {
        if (singupapass === users["Passkey"]) {
          LoginAllow(users, prasedata);
          exit = true;
          break;
        } else {
          alert("Incorrect password did  you changed password?");
          signuser.focus();
        }
      }
    }
    if (!exit) {
      alert("No account information pleas create acount first");
      signuser.reset();
    }
  });
}
//Only for login page
if (document.getElementById("login-page")) {
  const logingemail = document.getElementById("login-email").value;
  const loginpasword = document.getElementById("login-password").value;
  const login = document.getElementById("login-form");

  function trylogin() {
    let exit = false;
    const logdata = localStorage.getItem("Logedin") || "[]";
    if (logdata.length === 0) {
      alert("pleas create account first");
    } else {
      const users = JSON.parse(logdata);
      for (const user of users) {
        if (user["Email"] === logingemail) {
          if (user["Passkey"] === loginpasword) {
            gotouserpage();
            exit = true;
          } else {
            alert("password incorrct");
            login.focus();
          }
        }
      }
    }
    if (!exit) {
      alert("No acount information create account first");
    }
  }
  login.addEventListener("submit", () => {
    trylogin(login);
  });
  function gotouserpage() {
    window.location.replace("../Users");
  }
  function togglePassword() {
    const passwordInput = document.getElementById("login-password");
    const eyeIcon = document.getElementById("eye-icon");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeIcon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path>
          `;
    } else {
      passwordInput.type = "password";
      eyeIcon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
          `;
    }
  }
}

//Only userpage
if (document.getElementById("user-page")) {
  const goback = document.getElementById("back-to-home");
  goback.addEventListener("click", () => {
    window.location.replace("../login");
  });
}
