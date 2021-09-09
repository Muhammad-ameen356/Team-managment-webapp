function printquestion() {
    let userindex = localStorage.getItem("userindex");
    let teamdata = JSON.parse(localStorage.getItem("persons")) || [];
    let ptsindex = sessionStorage.getItem("ptsindex")

    // for user login info
    let profilename = document.getElementById('profilename');
    let username = document.getElementById('username');
    let profileemail = document.getElementById('profileemail');
    let profilefirstword = document.getElementById('profilefirstword');
    profilename.innerHTML = `${teamdata[userindex].name}`
    username.innerHTML = `@${teamdata[userindex].username}`
    profileemail.innerHTML = `${teamdata[userindex].email}`
    profilefirstword.innerHTML = `${teamdata[userindex].username.charAt(0)}`
    // _____________________________________________________

    let showquestionid = document.getElementById("showquestionid");
    let quesForAnswerhtml = "";

    var question = teamdata[userindex].partteam[ptsindex].question;

    if (question.length > 0) {
        question.forEach((quesForAnswer) => {
            quesForAnswerhtml += `<div class="col-md-8 my-5">
                                    <div class="form-outline">
                                        <label for="teamnameinput" class="form-label"><b>Q:${quesForAnswer.ques}</b></label>
                                        <input type="email" class="form-control shadow-remove borderradius-remove"
                                        placeholder="Answer" aria-describedby="emailHelp">
                                    </div>
                                </div>`
        });
        showquestionid.innerHTML = quesForAnswerhtml
    } else {
        showquestionid.innerHTML = `<p class="my-5 text-center">You have not yet received any question's from Admin. <u><b>${teamdata[userindex].name}</b></u></p>`
    }


}