function back() {
    window.history.back();
   //prompt('Do you really want to go back?')
}

function no() {
    alert('No, you would Never Regret Joining The D3V++ Team');
}

function paynow() {
    let pay = prompt('Do you really want to pay this money?');
    alert(`So you submitted ${pay}`);
    alert('You go cry nor worry');
}

function nav() { 
    var realNav = document.getElementById('realnav');
    if (realNav.style.display === "none") {
        realNav.style.display = "block";
    }    else {
        realNav.style.display = "none";
    }
    
}

const urlParams = new URLSearchParams(window.location.search);
const errorMessage = urlParams.get('error');
if (errorMessage) {
    alert(errorMessage); // Show error as an alert
}

// script.js
document.addEventListener('DOMContentLoaded', () => {
  fetch('https://devspace-ten.vercel.app/api/connect.php')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error('Error fetching data:', error));
});
