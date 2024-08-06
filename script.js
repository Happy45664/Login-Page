function validateForm() {
    var returnval = true;
    var name = document.forms['myForm']['username'].value;
    var password = document.forms['myForm']['Password'].value;
    var errorContainer = document.getElementById('errorContainer');
    
    errorContainer.innerHTML = ''; // Clear previous error messages
    
    if (name.length < 5) {
        errorContainer.innerHTML = "<p>*Length of name is too short</p>";
        returnval = false;
    }
    var password = document.forms['myForm']["Password"].value;
    if(password.length<6){
        errorContainer.innerHTML="<p>*Password should be atleast 6 characters long!</p>";
        returnval = false;
    }
    return returnval;
}
