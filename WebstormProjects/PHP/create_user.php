<html>
    <head>
        <title>Create User</title>
    </head>
    <body>
        Create New User
        <form action="<?php echo htmlspecialchars ($_SERVER["PHP_SELF"]); ?>" method=""post">
            <p>Username: <input type=""text", name="un" /></p>
            <p>Password: <input type="password", name="pw1" /></p>
            <p>Confirm Password: <input type="password", name="pw2" /></p>
            <p><input type="submit" value="Create User" name="s" /></p>
        </form>
        <?php
            if(isset($_POST["s"])) {
                if($_POST["pw1"] != $_POST["pw2"]) {
                    echo "Passwords Don't Match.";
                } else {
                    echo "Connecting to Database...";
                    $servername = "localhost";
                    $username = "root";
                    $password = "root";
                    $dbname = "SURVEY";
                    $conn = mysqli_connect($servername,$username,$password,$dbname);
                    if(!$conn) {
                        die("Could not connect: " . mysql_connect_error());
                    }
                    echo "Connected to Databse.";

                    $un = $_POST["un"];
                    $salt = "$2a$15$t1h2i3s4i5s6a7s8a9l0t1";
                    $ps = crypt($_POST["pw1"], $salt);
                    $ad = 0;
                    $sql = "INSERT INTO USERTABLE (username, pass admin) VALUES ('$un', '$ps', '$ad')";
                    echo "<script type='text/javascript'>alert('$sql');</script>";

                    if(mysqli_query($conn, $sql)) {
                        echo "New user successfully created.";
                        echo '<a href="login.php">Login</a>';
                    } else {
                        echo "Error creating user: " . $conn->error;
                    }
                }
            }
        ?>
    </body>
</html>