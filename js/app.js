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

    if ((signupfullname.length && signupemailid.length && signuppassword.length) > 0 && ((signupemailid.indexOf("@") + 1) !== signupemailid.length) && signupemailid.indexOf("@") > -1) {
        var drophistory = JSON.parse(localStorage.getItem("persons")) || [];
        drophistory.push(person);
        localStorage.setItem("persons", JSON.stringify(drophistory));
    };

    //// testing
    // console.log(signupemailid.indexOf("@") + 1);
    // console.log(signupemailid.length);

}

login = () => {
    let
}

var aaa = JSON.parse(localStorage.getItem("persons"))
console.log(aaa[1].email)
