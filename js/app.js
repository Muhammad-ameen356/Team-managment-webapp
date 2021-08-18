signup = () => {
    const signupfullname = document.getElementById('signupfullname').value;
    const signupemailid = document.getElementById('signupemailid').value;
    const signuppassword = document.getElementById('signuppassword').value;

    // Push Data Usin Object
    var person = {
        name: signupfullname,
        email: signupemailid,
        password: signuppassword,
    };
    // Push Data Usin Array 
    // var person = [signupfullname, signupemailid, signuppassword]

    // if ((signupfullname.length && signupemailid.length && signuppassword.length) > 0 && ((signupemailid.indexOf("@") + 1) !== signupemailid.length) && signupemailid.indexOf("@") > -1) {
        
        var signupdata = JSON.parse(localStorage.getItem("persons")) || [];
        signupdata.push(person);
        localStorage.setItem("persons", JSON.stringify(signupdata));
        // return window.location = "./login.html";
        
    // }
    //// testing
    // console.log(signupemailid.indexOf("@") + 1);
    // console.log(signupemailid.length);
}


login = () => {
    let i = 0;var aaa = JSON.parse(localStorage.getItem("persons"))
    // console.log(aaa[0].email)

    for (i; i<=aaa.length - 1; i++){
        console.log(aaa[i].name)
    }
}

// var aaa = JSON.parse(localStorage.getItem("persons"))
// console.log(aaa[0].email)
