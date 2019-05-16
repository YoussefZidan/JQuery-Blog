$(document).ready(function () {

    //hiding the span msg errors
    $("#email-error-msg").hide();
    $("#password-error-msg").hide();

    let emailError = false;
    let passwordError = false;

    //validate after focus out the fields
    $("#inputEmail").focusout(function () {
        checkEmail()
    })
    $("#inputPassword").focusout(function () {
        checkPassword()
    })

    //email validation function
    function checkEmail() {
        let patt = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        let emailVal = $("#inputEmail").val();

        if (patt.test(emailVal)) {

            $("#email-error-msg").hide();

        } else if (emailVal === "") {

            $("#email-error-msg").hide();
            emailError = true;

        } else {

            $("#email-error-msg").html("Invalid Email Adress");
            $("#email-error-msg").show();
            emailError = true;
        }
    }

    //password validation function
    function checkPassword() {
        let patt = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/;

        let passVal = $("#inputPassword").val();

        if (patt.test(passVal)) {

            $("#password-error-msg").hide();

        } else if (passVal === "") {

            $("#password-error-msg").hide();
            passwordError = true;

        } else if (passVal.length < 6) {

            $("#password-error-msg").html("password must be more than 6 charachters");
            $("#password-error-msg").show();
            passwordError = true;

        } else if (passVal.length > 12) {

            $("#password-error-msg").html("password must be less than 12 charachters");
            $("#password-error-msg").show();
            passwordError = true;

        } else {

            $("#password-error-msg").html("password must contain upper and lowercase, numbers\
            & special characters");
            $("#password-error-msg").show();
            passwordError = true;
        }
    }

    $("#login-form").submit(function () {

        emailError = false;
        passwordError = false;

        checkEmail();
        checkPassword();

        if (emailError === false && passwordError === false) {

            $("#login-form").attr("action", "manage.html")

        } else {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'There is something wrong with your Email or Password, Please try again',
            })
            return false;
        }
    })


    
    //checkbox

    // check if the ckeck box is ckecked function
    function ckeckBox() {
        if ($("#remember-me").prop("checked")) {
            localStorage.setItem("email", $("#inputEmail").val())
            localStorage.setItem("password", $("#inputPassword").val())
        }
    }

    // calling the function when ckecked
    $("#remember-me").click(function () {
        ckeckBox()
    })

    $("#inputEmail").val(localStorage.getItem("email"))
    $("#inputPassword").val(localStorage.getItem("password"))


})
