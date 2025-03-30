function back() {
    window.history.back();
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

function no() {
    alert("No, you won't \nJoin the D3V++ team now!");
    document.getElementById("good").style.display = "block";
    console.log("Chop rice");
}

function paynow() {
    let pay = prompt('Do you really want to pay this money?');
    alert(`Your response was ${pay}`);
    if (pay === "No") {
        alert('You go cry nor worry');
    }
    if (pay === "Yes") {
        alert('Please Navigate to the support page to continue this query.');
    } else {
        alert("Contact the developers for more info on how to pay");
    }

    document.getElementById("walink").style.display = "block";
    document.getElementById("actionpay").style.display = "none";
}

// New function to convert timestamp to human-readable format
function timeAgo(timestamp) {
    const now = Math.floor(Date.now() / 1000);
    const seconds = now - timestamp;

    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) return interval + " years ago";
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) return interval + " months ago";
    interval = Math.floor(seconds / 86400);
    if (interval > 1) return interval + " days ago";
    interval = Math.floor(seconds / 3600);
    if (interval > 1) return interval + " hours ago";
    interval = Math.floor(seconds / 60);
    if (interval > 1) return interval + " minutes ago";
    return seconds + " seconds ago";
}


