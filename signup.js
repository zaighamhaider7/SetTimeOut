
document.getElementById("signup").addEventListener("click", () => {
    
    // let name = document.getElementById("form2Example1");
    // let password = document.getElementById("form2Example2");
    // let mail = document.getElementById("form2Example3");
    // let agefill = document.getElementById("form2Example4");


    let usernamepattern = /(?=.*[a-zA_Z])/g

    let passwordpattern = /(?=.*[a-zA_Z])(?=.*[\d])/g

    let emailpattern = /[a-zA-z\d]+@+[a-z]+.+[a-z]{2,3}/g

    let agepattern = /(?=.*[\d])/

    

    let username = document.getElementById("form2Example1").value.match(usernamepattern)

    let pass = document.getElementById("form2Example2").value.match(passwordpattern)

    let email = document.getElementById("form2Example3").value.match(emailpattern)

    let age = document.getElementById("form2Example4").value.match(agepattern)


    if (username && pass && email && age) {
        window.location.href = "next.html"
        console.log("run");
        // document.getElementById("usererror").innerHTML = ""
        // document.getElementById("passerror").innerHTML = ""
        // document.getElementById("emailerror").innerHTML = ""
        // document.getElementById("ageerror").innerHTML = ""
        // document.getElementById("gendererror").innerHTML = ""
        document.getElementById("errormsg").innerHTML = ""
    }
    
    // else if(!username && pass && email && age) {
    //     document.getElementById("usererror").innerHTML = "incorrect username"
    //     document.getElementById("passerror").innerHTML = ""
    //     document.getElementById("emailerror").innerHTML = ""
    //     document.getElementById("ageerror").innerHTML = ""
    //     document.getElementById("gendererror").innerHTML = ""
    //     document.getElementById("errormsg").innerHTML = ""
    // }  
    // else if(username && !pass && email && age) {
    //     document.getElementById("usererror").innerHTML = ""
    //     document.getElementById("passerror").innerHTML = "incorrect pass"
    //     document.getElementById("emailerror").innerHTML = ""
    //     document.getElementById("ageerror").innerHTML = ""
    //     document.getElementById("gendererror").innerHTML = ""
    //     document.getElementById("errormsg").innerHTML = ""
    // }
    // else if(username && pass && !email && age) {
    //     document.getElementById("usererror").innerHTML = ""
    //     document.getElementById("passerror").innerHTML = ""
    //     document.getElementById("emailerror").innerHTML = "incorrect email"
    //     document.getElementById("ageerror").innerHTML = ""
    //     document.getElementById("gendererror").innerHTML = ""
    //     document.getElementById("errormsg").innerHTML = ""
    // } 
    // else if(username && pass && email && !age) {
    //     document.getElementById("usererror").innerHTML = ""
    //     document.getElementById("passerror").innerHTML = ""
    //     document.getElementById("emailerror").innerHTML = ""
    //     document.getElementById("ageerror").innerHTML = "Enter age in digits"
    //     document.getElementById("errormsg").innerHTML = ""
    // }   
    // else if(name.value == "" && password.value == "" && mail.value == "" && agefill.value == ""){
    //     document.getElementById("usererror").innerHTML = "please fill out this field"
    //     document.getElementById("passerror").innerHTML = "please fill out this field"
    //     document.getElementById("emailerror").innerHTML = "please fill out this field"
    //     document.getElementById("ageerror").innerHTML = "please fill out this field"
    //     console.log("empty")
    // }
    else{
        document.getElementById("errormsg").innerHTML = "Error"
    }
})
