
let teamnameinput = document.getElementById('teamnameinput').value;
let teamcatogeryinput = document.getElementById('teamcatogeryinput').value;
let memberemailinput = document.getElementById('memberemailinput').value;

let editteambutton = document.getElementById('editteambutton');
let addteambutton = document.getElementById('addteambutton');

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

createteam();
addteambutton.addEventListener('click', function () {

    let teamnameinput = document.getElementById('teamnameinput').value;
    let teamcatogeryinput = document.getElementById('teamcatogeryinput').value;
    let memberemailinput = document.getElementById('memberemailinput').value;

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
function addmember() {
    let memberemailinput = document.getElementById('memberemailinput').value;
    console.log(memberemailinput);
    document.getElementById('memberemailinput').value = ""
}




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
                            <i onclick="editteam(${index})" data-bs-toggle="modal" data-bs-target="#staticBackdrop"  style="cursor: pointer;" class="bi bi-pencil-square"></i>
                        </div>
                        <p class="teammember"><b>Category:</b> ${item.category}</p>
                    </div>
                </fieldset>`
    });

    createElement.innerHTML = html;

}

// editteam
function editteam(index) {
    let teamdata = JSON.parse(localStorage.getItem("addteam")) || [];

    document.getElementById('teamnameinput').value = teamdata[index].name;
    document.getElementById('teamcatogeryinput').value = teamdata[index].category;
    document.getElementById('memberemailinput').value = teamdata[index].email;
    // console.log(teamdata[index].email);
    addteambutton.style.display = "none"
    editteambutton.style.display = "block"

    let hiddeninput = document.getElementById('hiddeninput');
    // console.log(index);
    hiddeninput.value = index;
}

function saveeditteam() {
    let teamnameinput = document.getElementById('teamnameinput').value;
    let teamcatogeryinput = document.getElementById('teamcatogeryinput').value;
    let memberemailinput = document.getElementById('memberemailinput').value;

    let person = {
        name: teamnameinput,
        category: teamcatogeryinput,
        email: memberemailinput,
    };

    let hiddeninput = document.getElementById('hiddeninput').value;
    let teamdata = JSON.parse(localStorage.getItem("addteam")) || [];
    teamdata[hiddeninput] = person;

    localStorage.setItem("addteam", JSON.stringify(teamdata));
    createteam();
}






let cancelbutton = document.getElementById('cancelbutton');
cancelbutton.addEventListener("click", function () {
    document.getElementById('teamnameinput').value = "";
    document.getElementById('teamcatogeryinput').value = "";
    document.getElementById('memberemailinput').value = "";
})

let showinputmodalbox = document.getElementById('showinputmodalbox');
showinputmodalbox.addEventListener('click', function () {
    editteambutton.style.display = "none"
    addteambutton.style.display = "block"
})