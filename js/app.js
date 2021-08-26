// let teamnameinput = document.getElementById('teamnameinput').value;
// let teamcatogeryinput = document.getElementById('teamcatogeryinput').value;
// let memberemailinput = document.getElementById('memberemailinput').value;

let editteambutton = document.getElementById('editteambutton');
let createteamid = document.getElementById('createteamid');

// FOr Adding Data on local storage
createteam();
createteamid.addEventListener('click', function () {

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

    if ((teamnameinput.length && memberemailinput.length) > 0) {
        if (memberemailinput.indexOf(" ") == -1) {
            let teamdata = JSON.parse(localStorage.getItem("addteam")) || [];
            teamdata.push(person);
            localStorage.setItem("addteam", JSON.stringify(teamdata));
            swal("Team Created", "Add more member If you want", "success");
            createteam();
            document.getElementById("teamnameinput").value = "";
            document.getElementById("teamcatogeryinput").value = "";
            document.getElementById("memberemailinput").value = "";
        } else {
            swal("Member Filed Cannot contain Any Empty Space")
        }
    } else {
        swal("Please Input first");
    }
})

// adding member 
// function addmember() {
//     let memberemailinput = document.getElementById('memberemailinput').value;
//     console.log(memberemailinput);
//     document.getElementById('memberemailinput').value = "";
// }




// Create Team 
// Todo: print email where I added
function createteam() {
    let teamdata = JSON.parse(localStorage.getItem("addteam")) || [];
    let html = '';
    let memberhtml = '';
    let createElement = document.getElementById('createElement');
    teamdata.forEach((item, index) => {
        let email = item.email
        let teamname = item.name
        let capitializaTeamname = (teamname.charAt(0).toUpperCase() + teamname.slice(1));
        email.forEach((emailitem, ii) => {
            memberhtml += `<li>
                              ${emailitem}  
                        </li>`
        })
        html += `<fieldset class="myteam fw-normal text-start">
                    <div class="myteamcontent">
                        <p class="teamname">${capitializaTeamname}</p>
                        <hr>
                        <i> <p class="member">Members:</p></i>
                        <div class="d-flex justify-content-between">
                            <ul class="teammember" id="memberlist">
                            ${memberhtml}
                            </ul>
                            <i onclick="editteam(${index})" data-bs-toggle="modal" data-bs-target="#staticBackdrop"  style="cursor: pointer;" class="bi bi-pencil-square"></i>
                        </div>
                        <hr>
                        <p class="teammember"><b>Category:</b> ${item.category}</p>
                    </div>
                </fieldset>`
    });

    createElement.innerHTML = html;
    // if (memberhtml.length > 0) {
    //     document.getElementById('memberlist').innerHTML = memberhtml;
    // } else {
    //     console.log("Empty");
    // }
    console.log(memberhtml.length);
}

// function memberlist() {
//     let teamdata = JSON.parse(localStorage.getItem("addteam")) || [];
//     let html = '';

//     teamdata.forEach((item, index) => {
//         var teameamil = (item.email);
//         console.log(item.email);

//         html += `<ul>
//                     <li>
//                     ${item.email}
//                     </li>
//                 </ul>`
//     });
//     // memberlist.innerHTML = html

// }

// editteam
function editteam(index) {
    let teamdata = JSON.parse(localStorage.getItem("addteam")) || [];

    document.getElementById('teamnameinput').value = teamdata[index].name;
    document.getElementById('teamcatogeryinput').value = teamdata[index].category;
    document.getElementById('memberemailinput').value = teamdata[index].email;
    // console.log(teamdata[index].email);
    createteamid.style.display = "none"
    editteambutton.style.display = "block"

    let hiddeninput = document.getElementById('hiddeninput');
    // console.log(index);
    hiddeninput.value = index;
}

function saveeditteam() {
    let hiddeninput = document.getElementById('hiddeninput').value;

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

    if ((teamnameinput.length && memberemailinput.length) > 0) {
        if (memberemailinput.indexOf(" ") == -1) {
            let teamdata = JSON.parse(localStorage.getItem("addteam")) || [];
            teamdata[hiddeninput] = person;
            localStorage.setItem("addteam", JSON.stringify(teamdata));
        } else {
            swal("Member Filed Cannot contain Any Empty Space")
        }
    } else {
        swal("Empty Field Not Allowed")
    }


    createteam();
}

// Deleteall
function deleteall() {
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
    createteamid.style.display = "block"
})



