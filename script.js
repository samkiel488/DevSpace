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
