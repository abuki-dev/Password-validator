const inputarea = document.getElementById("passsword");
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
function checklength(passsword) {
  if (passsword.length < 10) {
    Status.checked = false;
  } else {
    Status.checked = true;
  }
}
function Chekconfirmedpassword(entered, confirmed) {
  if (entered === confirmed && entered !== "" && confirmed !== "") {
    errorconfirm.textContent = "you are ready to go";
    Chekall(true);
    errorconfirm.classList.remove("text-red-400");
    errorconfirm.classList.add("text-green-400");
  } else {
    errorconfirm.textContent = "password must be the same";
    errorconfirm.classList.remove("text-green-400");
    errorconfirm.classList.add("text-red-400");
    Chekall(false);
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
    toggle.getAttribute("stroke") === "red" &&
    firstChild.type === "password"
  ) {
    toggle.setAttribute("stroke", "green");
    firstChild.type = "text";
  } else {
    toggle.setAttribute("stroke", "red");
    firstChild.type = "password";
  }
}
for (let toggle of passwordtoggle) {
  toggle.addEventListener("click", () => {
    toggled(toggle);
  });
}
