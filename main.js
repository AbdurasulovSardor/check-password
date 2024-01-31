const passwordShow = document.querySelector(".show"),
  createPassword = document.querySelector("#createPassword"),
  confirmPassword = document.querySelector("#confirmPassword"),
  alertIcon = document.querySelector(".errorIcon"),
  alertText = document.querySelector(".text"),
  submitBtn = document.querySelector("#button");

passwordShow.addEventListener("click", () => {
  if ((createPassword.type === "password") && (confirmPassword.type === "password")) {
    createPassword.type = "text"
    confirmPassword.type = "text"
    passwordShow.classList.replace("fa-eye-slash", "fa-eye")
  } else {
    createPassword.type = "password"
    confirmPassword.type = "password"
    passwordShow.classList.replace("fa-eye", "fa-eye-slash")
  }
})

createPassword.addEventListener("input", () => {
  let inputValue = createPassword.value.trim()

  if (inputValue.length >= 8) {
    confirmPassword.removeAttribute("disabled")
    submitBtn.removeAttribute("disabled")
    submitBtn.classList.add("active")
  } else {
    confirmPassword.setAttribute("disabled")
    submitBtn.setAttribute("disabled")
    submitBtn.classList.remove("active")
    confirmPassword.value = ""
    alertText.innerHTML = "Enter at least 8 characters"
    alertText.style.color = "#a6a6a6"
  }
})

submitBtn.addEventListener("click", () => {
  if (createPassword.value === confirmPassword.value) {
    alertText.innerHTML = "Password matched"
    alertIcon.style.display = "none"
    alertText.style.color = "#4070f4"
  } else {
    alertText.innerHTML = "Password didn't matched"
    alertIcon.style.display = "block"
    alertText.style.color = "#d93025"
  }
})