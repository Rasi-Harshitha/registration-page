// Validation Function
function validateRegistration() {
    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const contactNumber = document.getElementById("contact").value;
    const email = document.getElementById("email").value;

    // Regular expressions
    const usernameRegex = /^[A-Za-z][A-Za-z0-9]{7,15}$/; // Starts with alphabet, 8-16 characters, alphabets and numbers
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,16}$/;


    const dobRegex = /^\d{2}-\d{2}-\d{4}$/; // dd-mm-yyyy
    const contactRegex = /^\d+$/; // Numbers only
    const emailRegex = /^[A-Za-z0-9._%+-]+@(gmail|hotmail|rediffmail)\.com$/; // Ends with @xxx.com

    // Validation checks
    if (!usernameRegex.test(username)) {
        alert("Invalid Username: It must be 8-16 characters long, start with an alphabet, and contain only alphabets and numbers.");
        return false;
    }

    if (!passwordRegex.test(password)) {
        alert("Invalid Password: It must be 8-16 characters long, contain at least one alphabet, one number, and exactly one special character.");
        return false;
    }

    if (!dobRegex.test(dob)) {
        alert("Invalid Date of Birth: It must be in the format dd-mm-yyyy.");
        return false;
    }

    if (!contactRegex.test(contactNumber)) {
        alert("Invalid Contact Number: It must contain numbers only.");
        return false;
    }

    if (!emailRegex.test(email)) {
        alert("Invalid Email: It must end with @gmail.com, @hotmail.com, or @rediffmail.com.");
        return false;
    }

    alert("Registration Successful!");
    return true;
}
