// let teamnameinput = document.getElementById('teamnameinput').value;
// let teamcatogeryinput = document.getElementById('teamcatogeryinput').value;
// let memberemailinput = document.getElementById('memberemailinput').value;

let editteambutton = document.getElementById('editteambutton');
let addteambutton = document.getElementById('addteambutton');

// FOr Adding Data on local storage
createteam();
addteambutton.addEventListener('click', function () {

    let teamnameinput = document.getElementById('teamnameinput').value;
    let teamcatogeryinput = document.getElementById('teamcatogeryinput').value;
    let memberemailinput = document.getElementById('memberemailinput').value;
    let commaseprate = memberemailinput.split(',')
    console.log(commaseprate);
    let person = {
        name: teamnameinput,
        category: teamcatogeryinput,
        email: commaseprate,
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
        alert("Please Input first");
    }
})

// adding member 
// function addmember() {
//     let memberemailinput = document.getElementById('memberemailinput').value;
//     console.log(memberemailinput);
//     document.getElementById('memberemailinput').value = "";
// }




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
    let commaseprate = memberemailinput.split(',')
    // console.log(commaseprate);
    let person = {
        name: teamnameinput,
        category: teamcatogeryinput,
        email: commaseprate,
    };

    let hiddeninput = document.getElementById('hiddeninput').value;
    let teamdata = JSON.parse(localStorage.getItem("addteam")) || [];
    teamdata[hiddeninput] = person;

    localStorage.setItem("addteam", JSON.stringify(teamdata));
    createteam();
}

// Deleteall
function deleteall(){
    // clear localStorage
    localStorage.removeItem('addteam');
    let createElement = document.getElementById('createElement');
    createElement.innerHTML = ""
}



let cancelbutton = document.getElementById('cancelbutton');
cancelbutton.addEventListener("click", function () {
    document.getElementById('teamnameinput').value = "";
    document.getElementById('teamcatogeryinput').value = "";
    document.getElementById('memberemailinput').value = "";
})

let showinputmodalbox = document.getElementById('showinputmodalbox');
showinputmodalbox.addEventListener('click', function () {
    document.getElementById('teamnameinput').value = "";
    document.getElementById('teamcatogeryinput').value = "";
    document.getElementById('memberemailinput').value = "";
    editteambutton.style.display = "none"
    addteambutton.style.display = "block"
})