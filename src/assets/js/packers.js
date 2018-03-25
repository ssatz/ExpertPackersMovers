function numbersonly(e, decimal) {
    var key;
    var keychar;

    if (window.event) {
        key = window.event.keyCode;
    }
    else if (e) {
        key = e.which;
    }
    else {
        return true;
    }
    keychar = String.fromCharCode(key);

    if ((key == null) || (key == 0) || (key == 8) || (key == 9) || (key == 13) || (key == 27)) {
        return true;
    }
    else if ((("0123456789.").indexOf(keychar) > -1)) {
        return true;
    }
    else if (decimal && (keychar == ".")) {
        return true;
    }
    else {
        return false;
    }
}

function Form2_Validator(theForm) {
    var alertsay = ""; // define for long lines
    if (theForm.S_name.value == "" || theForm.S_name.value.trim() == "") {
        alert("Please fill Name.");
        theForm.S_name.focus();
        return (false);
    }
    if (theForm.S_phone.value == "" || theForm.S_phone.value.trim() == "") {
        alert("Please fill Mobile.");
        theForm.S_phone.focus();
        return (false);
    }
    if (theForm.S_email.value == "" || theForm.S_email.value.trim() == "") {
        alert("Please fill Email.");
        theForm.S_email.focus();
        return (false);
    }
    var checkemail = "@.";
    var checkStr = theForm.S_email.value;
    var emailValid = false;
    var emailAt = false;
    var emailPeriod = false;
    for (i = 0; i < checkStr.length; i++) {
        ch = checkStr.charAt(i);
        for (j = 0; j < checkemail.length; j++) {
            if (ch == checkemail.charAt(j) && ch == "@")
                emailAt = true;
            if (ch == checkemail.charAt(j) && ch == ".")
                emailPeriod = true;
            if (emailAt && emailPeriod)
                break;
            if (j == checkemail.length)
                break;
        }
        if (emailAt && emailPeriod) {
            emailValid = true
            break;
        }
    }
    if (!emailValid) {
        alert("The email must contain an @ and a ..");
        theForm.S_email.focus();
        return (false);
    }

    if (theForm.Location_form.value == "" || theForm.Location_form.value.trim() == "") {
        alert("Please fill From Location.");
        theForm.Location_form.focus();
        return (false);
    }

    if (theForm.Location_to.value == "" || theForm.Location_to.value.trim() == "") {
        alert("Please fill To Location.");
        theForm.Location_to.focus();
        return (false);
    }
    return (true);
}