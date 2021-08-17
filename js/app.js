signup = () => {
    const signupfullname = document.getElementById('signupfullname').value;
    const signupemailid = document.getElementById('signupemailid').value;
    const signuppassword = document.getElementById('signuppassword').value;

    // Push Data Usin Object
    var person = {
        name: signupfullname,
        email: signupemailid,
        password: signuppassword
    };
    // Push Data Usin Array 
    // var person = [signupfullname, signupemailid, signuppassword]

    if ((signupfullname.length && signupemailid.length && signuppassword.length) > 0 && signupemailid.indexOf("@") > -1) {
        var drophistory = JSON.parse(localStorage.getItem("persons")) || [];
        drophistory.push(person);
        localStorage.setItem("persons", JSON.stringify(drophistory));
    };

}

login = () =>{
    let 
}

var aaa = JSON.parse(localStorage.getItem("ameen"))
console.log(aaa.name)
