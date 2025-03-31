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
    <title>Chatroom</title>
    <link rel="stylesheet" href="Styles/styles.css">
    <link rel="stylesheet" href="css/all.min.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> <!-- Added jQuery -->
    <script src="script.js"></script>
</head>

<body>
    <a href="index.html">
        <div class="big">D3V++</div>
        <br>
        <p class="small">Since 2025</p>
    </a>

    <div class="back" onclick="back()">&LongLeftArrow;</div>
    <div class="nav" onclick="nav()">▦</div>
    <p>
        <marquee> Coffee &RightArrowLeftArrow; Code &RightArrowLeftArrow; Debug </marquee>
    </p>

    <div class="realnav" id="realnav">
        <hr id="nav">
        <a href="index.html">Home</a> <hr>
        <a href="profile.php">Profile</a> <hr>
        <a href="chatroom.php">Chatroom </a> <hr>
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
    <div class="user">
        Hello, 

        <?php
if (isset($_SESSION['user_id'])) {
    $row = mysqli_fetch_assoc(mysqli_query($conn, "SELECT nick, lname FROM users WHERE id = '{$_SESSION['user_id']}'"));
    echo $row['nick'];
}
?>

    </div>

    <div class="chatroom">
    <span id="chatroomhead">Chat Room</span>  
        <div class="msgcontainer"><div id="messages"></div></div>
            <div class="fixed">
            <textarea type="text" id="message" placeholder="Na here you go type..." autocomplete="off" autofocus></textarea>
            <button type="submit" id="send">Send</button>
            </div>
    </div>

    <footer>
        All rights reserved. <a href="tel:+2348087357158">ѕαмкιєℓ.∂єν</a>
        <br>
        Made with 🤍 by D3V++ Team © 2025
    </footer>

    <script>
    // Function to format timestamp as "time ago"
    function timeAgo(timestamp) {
        const date = new Date(timestamp);
        const now = new Date();
        const seconds = Math.floor((now - date) / 1000);

        let interval = Math.floor(seconds / 31536000);
        if (interval > 1) {
            return interval + " years ago";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + " months ago";
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + " days ago";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + " hours ago";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + " minutes ago";
        }
        return Math.floor(seconds) + " seconds ago";
    }

    // Send message function
    function sendMessage() {
        const message = document.getElementById('message').value;

        if (message.trim() === '') {
            alert('Message cannot be empty na.');
            return;
        }

        fetch('sendmessage.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `message=${encodeURIComponent(message)}`,
        })
        .then(response => response.text())
        .then(data => {
          document.getElementById('message').value = ''; // Clear input
            fetchMessages(); // Refresh messages
        })
        .catch(error => console.error('Error:', error));
    }

    // Handle keydown for Enter and Shift+Enter
    document.getElementById('message').addEventListener('keydown', function(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault(); // Prevent default Enter behavior
            sendMessage(); // Send the message on Enter
        }
    });

    // Send message on button click
    document.getElementById('send').addEventListener('click', sendMessage);

    // Fetch messages function
    function fetchMessages() {
        fetch('fetchmessage.php')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(messages => {
                const messagesDiv = document.getElementById('messages');
                messagesDiv.innerHTML = ''; // Clear previous messages
                if (messages.length > 0) {
                    messages.forEach((msg, index) => {
                        const formattedTime = timeAgo(msg.created_at);
                        const messageElement = document.createElement('p');
                        if (index === messages.length - 1) {
                            messageElement.id = "last-msg"
                        }
                        messageElement.innerHTML = `<span id="chatpicspan"> <img src="images/default.jpeg" id="chatpic" alt="ѕαмкιєℓ.∂єν" title="ѕαмкιєℓ.∂єν"/></span><strong>  ${msg.username} <br> </strong> ${msg.message} <span id="msgtime" style="color: grey; padding-top:55%; margin-left:5px;" >${formattedTime}</span>`;
                        messagesDiv.appendChild(messageElement);
                    });
                } else {
                    messagesDiv.innerHTML = '<p>No messages yet. Be the first to send a message! ☺</p>';
                }
            })
            .catch(error => {
                console.error('Error fetching messages:', error);
                const messagesDiv = document.getElementById('messages');
                messagesDiv.innerHTML = '<p>Error loading messages. Please reload page.</p>';
            });

        const lastMsg = document.getElementById("last-msg")
        lastMsg?.scrollIntoView()
    }

    // Fetch messages immediately and then every 3 seconds
    fetchMessages(); // Initial fetch
    setInterval(fetchMessages, 3000); // Refresh messages every 3 seconds
    </script>

</body>
</html>
