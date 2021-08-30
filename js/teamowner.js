function settingteamGetData(){
    
    let seca = JSON.parse(sessionStorage.getItem("email"));
    let html = '';
    seca.forEach((item) => {
        html += `<div class="col-md-4" >
                    <li>
                        ${item}
                    </li>
                </div>`
    });
    document.getElementById('memberownerview').innerHTML = html;
}

function deleteteam(){
    let teamdata = JSON.parse(localStorage.getItem("addteam")) || [];
    let index = sessionStorage.getItem("index")
    teamdata.splice(index, 1);   
    localStorage.setItem("addteam", JSON.stringify(teamdata));
    window.location.href = "./teams.html"
}