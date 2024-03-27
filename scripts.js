document.querySelector("#userForm").addEventListener("submit", (e)=>{
    let errors = [];
    let password = document.querySelector("#password").value;
    let passConfirm = document.querySelector("#confirm_password").value;
    let errorDisplay = document.querySelector("#errorElement");
    
    if(document.querySelector("#password").value != document.querySelector("#confirm_password").value){
        errors.push("Entered passwords must match");
    }

    if(errors.length > 0){
        e.preventDefault();
        errorDisplay.innerText = errors.join(', ');
    }
    
});
