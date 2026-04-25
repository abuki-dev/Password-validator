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
const form = document.getElementById("userForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  //garabig data form local storage
  const Usersdata = localStorage.getItem("Usersdta") || "[]";
  const prasedata = JSON.parse(Usersdata);
  //colllecting form datas
  //idtrick
  const Uid =
    prasedata.length > 0
      ? Math.max(...prasedata.map((user) => user.id)) + 1
      : 1;
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
      alert("The Email " + email + " is  already registered. Try logging in.");
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
      Islogined: false,
    };
    prasedata.push(curruntuser);
    localStorage.setItem("Usersdta", JSON.stringify(prasedata));
    form.reset();
    alert("Data Saved!");
  }
});
const login = document.getElementById("user-login-form");
login.addEventListener("submit", (e) => {
  e.preventDefault();
  const Usersdata = localStorage.getItem("Usersdta");
  const prasedata = Usersdata ? JSON.parse(Usersdata) : [];
  if (prasedata.length === 0) {
    alert("NO ACCOUNT INFO FOUND");
  } else {
    const useremal = document.getElementById("login-email");
    const userpaskey = document.getElementById("login-password");
    let loginSuccess = false;

    for (const user of prasedata) {
      // Fix: Removed the ; from the end of this line
      if (user.Email === useremal.value && userpaskey.value === user.Paskey) {
        alert("Hello " + user["Name"]);
        loginSuccess = true;
        break;
      }
    }

    if (!loginSuccess) {
      alert("Invalid email or password!");
    }
  }
});
