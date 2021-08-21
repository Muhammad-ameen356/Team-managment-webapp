
// Show Password
function showsignuppassword() {
    var signuppassword = document.getElementById("signuppassword");
    if (signuppassword.type === "password") {
        signuppassword.type = "text";
    } else {
        signuppassword.type = "password";
    }
}

function showloginpassword() {
    var loginpassword = document.getElementById("loginpassword")
    if (loginpassword.type === "password") {
        loginpassword.type = "text";
    } else {
        loginpassword.type = "password";
    }
}

// For Signup and save Data in localStorage
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

    // Validation for empty value and email
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

// Retrive Data From localStorage and Match email and password.
// if email and password matched user go on the team page 
login = () => {

    let loginnameoremail = document.getElementById('loginnameoremail').value;
    let loginpassword = document.getElementById('loginpassword').value;

    const dataforlogin = JSON.parse(localStorage.getItem("persons"))
    // console.log(dataforlogin[0].password);
    let found = false;
    // Loop for searching data in Array
    for (let i = 0; i <= dataforlogin.length - 1; i++) {
        if ((dataforlogin[i].email == loginnameoremail || dataforlogin[i].name == loginnameoremail) && dataforlogin[i].password == loginpassword) {
            found = true;
            console.log("Login email and password matched");
            window.location.href = "./teams.html"
        }
    }
    if (found == false) {
        console.log("Not Found");
    }
    // var aaa = JSON.parse(localStorage.getItem("persons"))
    // console.log(aaa[0].email)  
}

// FOr Adding Data on local storage

let addteambutton = document.getElementById('addteambutton');
createteam();
addteambutton.addEventListener('click', function () {

    let teamnameinput = document.getElementById('teamnameinput').value;
    let teamcatogeryinput = document.getElementById('teamcatogeryinput').value;
    let memberemailinput = document.getElementById('memberemailinput').value;
    let addmember = document.getElementById('addmember');
    addmember.addEventListener(function(){
        console.log("ameen");
    })
    let arr = [];
    let person = {
        name: teamnameinput,
        category: teamcatogeryinput,
        email: memberemailinput,
    };

    if ((teamnameinput.length && memberemailinput.length) > 0) {
        let teamdata = JSON.parse(localStorage.getItem("addteam")) || [];
        teamdata.push(person);
        localStorage.setItem("addteam", JSON.stringify(teamdata));
        createteam();
        document.getElementById("teamnameinput").value = "";
        document.getElementById("teamcatogeryinput").value = "";
        document.getElementById("memberemailinput").value = "";
    } else {
        alert("Please Input first")
    }
})

// adding member 





// Create Team 
function createteam() {

    let teamdata = JSON.parse(localStorage.getItem("addteam")) || [];
    let html = '';
    let createElement = document.getElementById('createElement');

    teamdata.forEach((item, index) => {
        var Teamname = (item.name);

        html += `<fieldset class="myteam fw-normal text-start">
                    <div class="myteamcontent">
                        <p class="teamname">${Teamname}</p>
                        <div class="d-flex justify-content-between">
                            <p class="teammember"><b>Member: </b>${item.email}</p>
                            <button class="btn btn-dark shadow-remove">
                            <i class="bi bi-pencil-fill"></i>
                            </button>
                        </div>
                        <p class="teammember"><b>Category:</b> ${item.category}</p>
                    </div>
                </fieldset>`
    });

    createElement.innerHTML = html;

}


