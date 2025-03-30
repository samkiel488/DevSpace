<?php
session_start();
include("connect.php");
?>

<!DOCTYPE html>
<html lang="en"
<link rel="icon" type="image/jpg" href="images/D3V++.png">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>D3V++ - Profile</title>
<link rel="stylesheet" href="Styles/styles.css">
<link rel="stylesheet" href="css/all.min.css">
<script src="script.js"></script>
    <script src="https://cdn.counter.dev/script.js" data-id="c9f5bb36-7890-4d6a-92ff-48c2f87c1d6a" data-utcoffset="1"></script>
</head>

<body>
<a href="index.html">
    <div class="big">
        D3V++ 
    </div>
                 <br>
            <p class="small">
                Since 2025
            </p>
</a>
    <div class="back" onclick="back()">
        &LongLeftArrow;
    </div>

     <div class="nav" onclick="nav()" >
        ▦
     </div>
    <p>
        <marquee> Coffee  
             &RightArrowLeftArrow; Code  
              &RightArrowLeftArrow; Debug</marquee>
    </p>

    <div class="realnav" id="realnav">
        <hr id="nav">
        <a href="index.html">Home</a> <hr>
        <a href="profile.php">Profile</a> <hr>
        <a href="samkiel.php">Chatroom </a> <hr>
        <a href="members.html">Members</a> <hr>        <a href="ourEvents.html">Events</a> <hr>
        <a href="ourProjects.html"> Projects</a> <hr>
        <a href="Privacy Policy.html">Privacy Policy</a> <hr>
        <a href="aboutus.html">About Us</a> <hr>
        <a href="contactus.html">Contact us</a> <hr>
        <a href="join.html">Join D3V++ Team</a> <hr>
        <a href="login.html">Login</a> <hr>
        <a href="register.html">Register</a> <hr>
        <a href="logout.php">Logout</a> <hr>
    </div>

    <div class="profilehead">
        <?php
        if (isset($_SESSION['user_id'])) {
            $user_id = $_SESSION['user_id'];
            $query = mysqli_query($conn, "SELECT * FROM users WHERE id = '$user_id'");
            while ($row = mysqli_fetch_array($query)) {
                echo $row['fname'] . ' ' . $row['lname'];
            }
        }
    ?>'s  Profile
    </div>


    <div class="inprogress">
        This page is still on development <br>
        Check back later
    </div>

    <footer>
        All rights reserved. <a href="tel:+2348087357158">ѕαмкιєℓ.∂єν</a>
        <br>
        Made with 🤍 by D3V++ Team © 2025
    </footer>

</body>
</html>