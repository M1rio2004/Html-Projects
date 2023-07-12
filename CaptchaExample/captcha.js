    function generaCaptcha() {
        var captcha = "";
        var possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 6; i++) {
            captcha += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
        }

        document.getElementById("captchaText").innerHTML = captcha;
    }

    function validaCaptcha() {
        var userCaptcha = document.getElementById("userCaptcha").value;
        var generatedCaptcha = document.getElementById("captchaText").innerHTML;

        if (userCaptcha === generatedCaptcha) {
            alert("Captcha verificato con successo!");
            alert("Complimenti!");
        } else {
            alert("CAPTCHA Incorretto!");
        }
    }