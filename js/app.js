// whenpageload = () =>{
//     console.log()
// }

//Todo: For Signup and save Data in localStorage
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

////Todo: Retrive Data From localStorage and Match email and password.
////Todo: if email and password matched user go on the team page 
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

////Todo: FOr Adding Data on local storage

let addteambutton = document.getElementById('addteambutton');
// let teamnameget = prompt("Enter Team Name");
createteam();
addteambutton.addEventListener('click', function () {
    // let teamnameget = prompt("Enter Team Name");
    // let teammemberget = prompt("Enter Team member");
    let teamnameinput = document.getElementById('teamnameinput').value;
    let teamcatogeryinput = document.getElementById('teamcatogeryinput').value;
    let memberemailinput = document.getElementById('memberemailinput').value;

    let person = {
        name: teamnameinput,
        category: teamcatogeryinput,
        email: memberemailinput,
    };

    let teamdata = JSON.parse(localStorage.getItem("addteam")) || [];
    teamdata.push(person);
    localStorage.setItem("addteam", JSON.stringify(teamdata));
    createteam();

})


function createteam() {
    // let teamnameget = prompt("Enter Team Name");
    // let teammemberget = prompt("Enter Team member");

    // let person = {
    //     name: teamnameget,
    //     email: teammemberget,
    // };
    let teamdata = JSON.parse(localStorage.getItem("addteam")) || [];
    // teamdata.push(person);
    // localStorage.setItem("team", JSON.stringify(teamdata));

    let html = '';
    let createElement = document.getElementById('createElement');

    teamdata.forEach((item, index) => {
        var Teamname = (item.name);

        html += `<fieldset class="myteam fw-normal text-start">
                    <div class="myteamcontent">
                        <p class="teamname">${Teamname}</p>
                        <div class="d-flex justify-content-between">
                            <p class="teammember"><b>Member: </b>${item.email}</p>
                            <button class="btn btn-primary shadow-remove">edit</button>
                        </div>
                        <p class="teammember"><b>Category:</b> ${item.category}</p>
                    </div>
                </fieldset>`
    });
    createElement.innerHTML = html;


    // let field = document.createElement('fieldset');
    // let div = document.createElement("div");
    // let br = document.createElement("br")

    // const dataforteam = JSON.parse(localStorage.getItem("team"))
    // console.log(dataforteam[0].name);
    // var name = (dataforteam[0].name);

    // let fieldteamname = document.createTextNode(teamnameget);
    // let fieldteammember = document.createTextNode("Member: " + teammemberget);

    // field.setAttribute("class","scheduler-border1 fw-normal text-start");
    // div.setAttribute("class", "p-2")

    // field.appendChild(div);
    // div.appendChild(fieldteamname);
    // div.appendChild(br);
    // div.appendChild(fieldteammember)
    // createElement.appendChild(field);
}


