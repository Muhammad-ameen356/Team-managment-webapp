function settingteamGetData() {
    let teamdata = JSON.parse(localStorage.getItem("addteam")) || [];
    let index = sessionStorage.getItem("index")
    let emailfromindex = teamdata[index].email
    let html = '';
    emailfromindex.forEach((item, ii) => {
        html += `<div class="col-md-4" >
                    <li class="mainmemberli">
                       <span class="memberli"> ${item}  <span><i onclick="removeonemember(${ii})" class="bi bi-x-circle-fill"></i></span></span>
                    </li> 
                </div>`
    });
    document.getElementById('memberownerview').innerHTML = html;
}

function removeonemember(ii) {
    let teamdata = JSON.parse(localStorage.getItem("addteam")) || [];
    let index = sessionStorage.getItem("index")
    teamdata[index].email.splice(ii, 1)
    localStorage.setItem("addteam", JSON.stringify(teamdata));
    settingteamGetData();
}

function deleteteam() {
    let teamdata = JSON.parse(localStorage.getItem("addteam")) || [];
    let index = sessionStorage.getItem("index")
    teamdata.splice(index, 1);
    localStorage.setItem("addteam", JSON.stringify(teamdata));
    window.location.href = "./teams.html"
}

function addmembers() {
    let teamdata = JSON.parse(localStorage.getItem("addteam")) || [];
    let addmembersinput = document.getElementById('addmembersinput').value;
    let index = sessionStorage.getItem("index");
    if (addmembersinput.length > 0) {
        teamdata[index].email.push(addmembersinput);
        localStorage.setItem("addteam", JSON.stringify(teamdata));
        document.getElementById('addmembersinput').value = ""
        settingteamGetData();
    } else {
        swal("Please Input First")
    }

}
