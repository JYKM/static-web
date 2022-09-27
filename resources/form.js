/**
 * 
 */

function validate(){
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let comment = document.getElementById("comment").value;
    let isError = false;

    // Remove existing (obsolete) error msg elements
    Array.from(document.getElementsByClassName("error-msg")).forEach((e) => {
        e.parentNode.removeChild(e);
    })

    if(fname.length <= 0){
        let errorMsg = "Missing Crendentials: First Name";
        appendError("name-wrapper", errorMsg);
        isError = true;
    }

    if(lname.length <= 0){
        let errorMsg = "Missing Crendentials: Last Name";
        appendError("name-wrapper", errorMsg);
        isError = true;
    }

    if(email.length <= 0){
        let errorMsg = "Missing Crendentials: Email";
        appendError("email", errorMsg);
        isError = true;
    }

    if(email.length > 0 && email.indexOf("@") == -1){
        let errorMsg = "Error: Invalid Email Address";
        appendError("email", errorMsg);
        isError = true;
    }

    if(phone.length <= 0){
        let errorMsg = "Missing Crendentials: Contact Number";
        appendError("phone", errorMsg);
        isError = true;
    }

    if(comment.length <= 20){
		let errorMsg = "Error: Minimum 20 characters required";
        if(comment.length <= 0)
        	errorMsg = "Missing Crendentials: Message";
        appendError("comment-wrapper", errorMsg);
        isError = true;
    }

    if(isError)
        return false;
    else
        return true;
}

// Function to create a node that displays the error message
function appendError(id, text){
    let field = document.getElementById(id);
    let parent = document.querySelector(`.input-wrapper #${id}`).parentNode;
    if(!field.previousElementSibling){
        let element = document.createElement("span");
        element.classList.add("error-msg");
        element.innerText = text;
        parent.insertBefore(element, field);
    }else{
        if(id == "name-wrapper"){
            parent.querySelector(".error-msg").innerText = "Missing Crendentials: First Name, Last Name";
        }else{
            parent.querySelector(".error-msg").innerText = text;
        }
    }
}