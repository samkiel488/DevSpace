<?php
session_start();
include("connect.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="icon" type="image/jpg" href="images/D3V++.png">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>D3V++ - Home</title>
    <link rel="stylesheet" href="css/all.min.css">
    <link rel="stylesheet" href="Styles/styles.css">
    <script src="script.js"></script>
    <script src="https://cdn.counter.dev/script.js" data-id="c9f5bb36-7890-4d6a-92ff-48c2f87c1d6a" data-utcoffset="1"></script>
</head>
<body>

    <a href="index.php">
        <div class="big">D3V++</div>
        <br>
        <p class="small">Since 2025</p>
    </a>
    <div class="logo">
        <img src="Church.jpg" alt="logo" title="Logo">
    </div>

    <div class="user">
        
    Hello, 
        <?php
            if (isset($_SESSION['user_id'])) {
                $user_id = $_SESSION['user_id'];
                $query = mysqli_query($conn, "SELECT * FROM users WHERE id = '$user_id'");
                while ($row = mysqli_fetch_array($query)) {
                    echo $row['nick'];
                }
            }
        ?>
    </div>

    <div class="nav" onclick="nav()">
        ▦
    </div>
    
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

    <div class="intro">
        <b>Welcome to D3V++!!!</b><br> We are a community committed to the promotion and development of technology even in this <b>T-pain Era</b>. We strive for excellence in everything we do.
    </div>

    <hr>
    <p class="founderss">Meet the Founders</p>
    <hr>
    <div class="meet">
        <div class="founders">
            <br>
            <a href="images/CyPRus.jpg">
                <img src="images/CyPRus.jpg" alt="CyPRus" title="CyPRus"/>
            </a>
            <p class="name">CyPRus</p>
        </div>

        <div class="founders">
            <br>
            <a href="images/ѕαмкιєℓ.∂єν.jpg">
                <img src="images/ѕαмкιєℓ.∂єν.jpg" alt="ѕαмкιєℓ.∂єν" title="ѕαмкιєℓ.∂єν"/>
            </a>
            <p class="name">ѕαмкιєℓ.∂єν</p>
        </div>
    </div>
    <hr>

    <p class="founderss">Other Distinguished Members</p>
    <hr>
    <div class="meet">
        <div class="others">
            <br>
            <a href="images/Fwesh.jpg">
                <img id="fwesh" src="images/Fwesh.jpg" alt="Fwesh"/>
            </a>
            <p class="name">Fwesh</p>
        </div>
        <div class="others">
            <br>
            <a href="images/Khallydah.jpg">
                <img src="images/Khallydah.jpg" alt="Khallydah"/>
            </a>
            <p class="name">Khallydah</p>
        </div>
        <div class="others">
            <br>
            <a href="images/Phillip.jpg">
                <img src="images/Phillip.jpg" alt="Phillip"/>
            </a>
            <p class="name">Phillip</p>
        </div>
        <div class="others">
            <br>
            <a href="images/Mayowa.jpg">
                <img id="mayowa" src="images/Mayowa.jpg" alt="Mayowa"/>
            </a>
            <p class="name">Mayowa</p>
        </div>

        <a href="members.html">
            <button class="viewmore">View more Members</button>
        </a>
    </div>

    <div class="join">
        Want to join us? <br>
        <a href="join.html">
            <button class="joinbtn">JOIN D3V++ TODAY</button>
        </a>
    </div>

    <hr>
    <footer>
        All rights reserved. <a href="tel:+2348087357158">ѕαмкιєℓ.∂єν</a>
        <br>
        Made with 🤍 by D3V++ Team © 2025
    </footer>

</body>
</html>
