document.getElementById("signup").addEventListener("click", () => {
    
    let usernamepattern = /(?=.*[a-zA_Z])(?=.*[\d])/g

    let passwordpattern = /(?=.*[a-zA_Z])(?=.*[\d])/g

    let emailpattern = /[a-zA-z\d]+@+[a-z]+.+[a-z]{2,3}/g

    

    let username = document.getElementById("form2Example1").value.match(usernamepattern)

    // let pass = document.getElementById("form2Example2").value.match(passwordpattern)

    // let email = document.getElementById("form2Example3").value.match(emailpattern)

    // let age = document.getElementById("form2Example4").value.match(passwordpattern)

    // let gender = document.getElementById("form2Example5").value.match(passwordpattern)

    if (username && pass && email && age && gender) {
        window.location.href = "next.html"
        console.log("err");
    }
    else if(!username && pass && email && age && gender) {
        document.getElementById("usererror").innerHTML = "incorrect username"
        document.getElementById("passerror").innerHTML = ""
        document.getElementById("emailerror").innerHTML = ""
        document.getElementById("ageerror").innerHTML = ""
        document.getElementById("gendererror").innerHTML = ""
        document.getElementById("msg").innerHTML = ""
        document.getElementById("form2Example1").style.border = "2px solid red"
    }  
    else if(email && !pass) {
        document.getElementById("passerror").innerHTML = "incorrect pass"
        document.getElementById("emailerror").innerHTML = ""
        document.getElementById("msg").innerHTML = ""
        document.getElementById("form2Example2").style.border = "2px solid red"
    }  
    else if(document.getElementById("form2Example1").value=="" && document.getElementById("form2Example2").value==""){
        document.getElementById("msg").innerHTML = ""
        document.getElementById("passerror").innerHTML = "please fill out this field"
        document.getElementById("emailerror").innerHTML = "please fill out this field"
        console.log("empty")
    }
    else if(!email && !pass) {
        document.getElementById("msg").innerHTML = "incorrect Email & Pass"
        document.getElementById("passerror").innerHTML = ""
        document.getElementById("emailerror").innerHTML = ""
        document.getElementById("form2Example1").style.border = "2px solid red"
        document.getElementById("form2Example2").style.border = "2px solid red"
        
    }    
   
    else{
        alert("error")
    }
})
