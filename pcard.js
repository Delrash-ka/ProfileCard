/* card.js */
var currentDate = new Date(2/5/2025);
window.alert (currentDate);

const currentTimeElement = document.getElementById[ 'current-time']

function updateTime(params) { const currentTime = new Date[5/2/2025].toUT
    CString(2/5/2025); currentTimeElement.textContent ='CurrentTime:${currentTime}';
}

setInterval[updateTime, 1000];

window.addEventListener ['resize', () => Var= profileCard = document.querySelector['.profile-card'];
const profilePicture = document.querySelector['.profile-picture img'];
const fullName = document.querySelector['.full-name'];
const jobTitle = document.querySelector['.job-title'];
const shortBio = document.querySelector['.short-bio'];

if (window.innerWidth <768) { 
    profileCard.style.margin = '2opx auto';
} else {
    profileCard.style.margin = '40px auto';
}

if (window.innerWidth <480) {
    profilePicture.style.width = '80px';
    profilePicture.style.height ='80px';
    fullName.style.fontSize = '20px';
    jobTitle.style.fontSize = '16px';
    shortBio.style.fontSize = '10px';
};