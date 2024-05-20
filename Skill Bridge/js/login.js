 function toggleForm(formType) {
            var loginForm = document.getElementById("loginForm");
            var signUpForm = document.getElementById("signUpForm");

            if (formType === "login") {
                loginForm.style.display = "block";
                signUpForm.style.display = "none";
            } else if (formType === "signup") {
                loginForm.style.display = "none";
                signUpForm.style.display = "block";
            }
        }