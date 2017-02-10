<html>
    <head>
        <title>Create User</title>
    </head>
    <body>
        Create New User
        <form action="<?php ($_SERVER["PHP_SELF"]); ?>" method="post">
            <p><label for="un">Username:</label> <input type="text" name="un" id="un"></p>
            <p><label for="pw1">Password:</label> <input type="password" name="pw1" id="pw1"></p>
            <p><label for="pw2">Confirm Password:</label> <input type="password" name="pw2" id="pw2"></p>
            <p><input type="submit" value="Create User" name="s"></p>
        </form>
        <?php
            if(isset($_POST["s"])) {
                if($_POST["pw1"] != $_POST["pw2"]) {
                    echo "Passwords Don't Match.";
                } else {
                    echo "Connecting to Database...";
                    $server_name = "localhost";
                    $username = "root";
                    $password = "root";
                    $dbname = "SURVEY";
                    $conn = mysqli_connect($server_name,$username,$password,$dbname);
                    if(!$conn) {
                        die("Could not connect: " . mysqli_connect_error());
                    }
                    echo "Connected to Database.";

                    $un = $_POST["un"];
                    $salt = sprintf("$2a$15$21h2i3s4i5s6a7s8a9l0t1"); //Using CRYPT_BLOWFISH
                    $ps = crypt($_POST["pw1"], $salt);
                    $cid = 1;
                    //$sql = "INSERT INTO usertable (username, pass admin) VALUES ('$un', '$ps', '$cid',0)";
                    $sql = "INSERT INTO usertable (username, pass, cid, admin) VALUES ('test', 'password', 1, 0)";
                    echo "<script type='text/javascript'>alert('$sql');</script>";

                    if(mysqli_query($conn, $sql)) {
                        echo "New user successfully created.";
                        //echo "<a href="login.php">Login</a>";
                    } else {
                        echo "Error creating user: " . $conn->error;
                    }
                }
            }
        ?>
    </body>
</html>