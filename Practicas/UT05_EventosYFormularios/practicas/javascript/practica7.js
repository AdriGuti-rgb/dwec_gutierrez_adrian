let form = document.forms.login;
let email = form.elements.email;
let send = form.elements.send;
let firstPassword = form.elements.firstPassword;
let secondPassword = form.elements.secondPassword;
let spanEmail = document.createElement("span");
let spanFirstPassword = document.createElement("span");
let spanSecondPassword = document.createElement("span");
let possibleDifs = [
    {
        dif: 1,
        backgroundColor: "#b52500",
        textContent: "Muy poco segura"
    },
    {
        dif: 2,
        backgroundColor: "#ff0000",
        textContent: "Muy poco segura"
    },
    {
        dif: 3,
        backgroundColor: "#eb4b48",
        textContent: "Muy poco segura"
    },
    {
        dif: 4,
        backgroundColor: "#eb6d6d",
        textContent: "Poco segura"
    },
    {
        dif: 5,
        backgroundColor: "#eb8b5d",
        textContent: "Poco segura"
    },
    {
        dif: 6,
        backgroundColor: "#ffc181",
        textContent: "Poco segura"
    },
    {
        dif: 7,
        backgroundColor: "#ffd65d",
        textContent: "Segura"
    },
    {
        dif: 8,
        backgroundColor: "#ffd739",
        textContent: "Segura"
    },
    {
        dif: 9,
        backgroundColor: "#a8ff1d",
        textContent: "Segura"
    },
    {
        dif: 10,
        backgroundColor: "#00ff0a",
        textContent: "Muy segura"
    }
]
let canSubmit = false;
let canSubmitEmail = false;
let canSubmitFirstPass = false;
let canSubmitSecondPass = false;

spanEmail.textContent = 'Por favor introduzca un correo válido.';
spanFirstPassword.textContent = "Por favor introduzca una contraseña correcta";
spanSecondPassword.textContent = "Las contraseñas no coinciden";
email.addEventListener("blur", validationEmail);
email.addEventListener("focus", deleteValidationEmail);
firstPassword.addEventListener("input", validatePass);
firstPassword.addEventListener("blur", deleteValidationPass);
secondPassword.addEventListener("blur", checkTwiceBlur);
secondPassword.addEventListener("focus", checkTwiceFocus);
send.addEventListener("click", checkSubmit);

function validationEmail (email) {
    if (!(email.target.value.includes("@") && email.target.value.includes("."))) {
        spanEmail.id = "first";
        email.target.after(spanEmail);
        email.target.style.borderColor = "red";
    } else {
        canSubmitEmail = true;
    }
};

function deleteValidationEmail (email) {
    email.target.style.borderColor = "";
    spanEmail.remove();
}

function validatePass (e) {
    let diff = 1;
    let long = e.target.value.length;

    if (isUnsecurePass(e.target.value)) {
        diff = diff + 3;
    }
    
    switch (long) {
        case 1:
        case 2:
        case 3:
            diff++;
            break; 

        case 4:
        case 5:
        case 6:
            diff = diff + 2;
            break;
    
        case 7:
        case 8:
        case 9:
            diff = diff + 3;
            break;

        default:
            diff = diff + 4;
            break;
    }

    if ("!#$%&'()*+,-./:;<=>?@[]^_`{|}~".includes(e.target.value)) {
        // console.log(diff);
        diff++;
    }

    checkDiff(diff);

    if (diff > 7) {
        canSubmitFirstPass = true;
    }
}

function checkDiff (diff) {
    let level = possibleDifs.find( ({dif}) => diff == dif);

    spanFirstPassword.style.backgroundColor = level.backgroundColor;
    spanFirstPassword.textContent = level.textContent;
    spanFirstPassword.id = "second";
    firstPassword.after(spanFirstPassword);
}

function deleteValidationPass (e) {
    spanFirstPassword.remove();
}

function isUnsecurePass (pass) {
    let a = pass.split('');
    let mayus = false;
    let minus = false;
    let num = false;

    a.forEach( char => {
        minus ||= "abcdefghijklmnñopqrstuvwxyz".includes(char);
        mayus ||= "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".includes(char);
        num ||= "0123456789".includes(char);
        
    });
    
    return (mayus && minus && num)
}

function checkTwiceBlur (checkPass) {
    let secondPasswordValue = secondPassword.value;
    let contraseña = firstPassword.value;

    if (secondPasswordValue != contraseña) {
        checkPass.target.after(spanSecondPassword);
        spanSecondPassword.id = "third";
        checkPass.target.style.borderColor = "red";
    } else {
        canSubmitSecondPass = true;
    }
} 

function checkTwiceFocus (checkPass) {
    checkPass.target.style.borderColor = "";
    spanSecondPassword.remove();
}

function checkSubmit (e) {
    e.preventDefault();
    canSubmit = canSubmitEmail && canSubmitFirstPass && canSubmitSecondPass;
    // if (canSubmit) form.submit()
}