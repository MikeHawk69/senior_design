<html>
    <head>
        <title>Login</title>
    </head>
    <body>
        <form name="login" method="post" action="login.php">
            <p><label for="un">Username:</label>
                <input type="text" name="un" id="un"></p>
            <p><label for="pw1">Password:</label>
                <input type="password" name="pw1" id="pw1"></p>
            <p><label for=""rm">Remember Me:</label></p>
                <input type="checkbox" name="rm" value = "1">
            <p><input type="submit" value="Create User" name="s"></p>
        </form>

        <?php
            if(isset($_POST["s"])) {
                $conn = mysqli_connect("localhost","root","root","survey");
                if ($conn) {
                    $un = $_POST["un"];
                    $query = "SELECT * FROM users WHERE username = '$un'";
                    $result = $conn->query($query);
                    $row = $result->fetch_array(MYSQLI_ASSOC);
                    if($row == NULL) {
                        echo "Username and password not found.";
                    } else {
                        //echo "Username and password found";
                        $salt = "$2a$15$21h2i3s4i5s6a7s8a9l0t1";
                        $ps = crypt($_POST["pw"], $salt);
                            if($row["password"] == $ps) { ?>
                                <form method="post" action="finishlogin.php" >
                                    <input type="hidden" name="un", value="<?php echo $un; ?>" />
                                    <input type="submit" value="Finish Login"/>
                                </form>
                            <?php } else {
                                echo "Username and password not found.";
                            }
                    }
                    $result->free();
                    $mysqli->close();
                } else {
                    print "Database not Found";
                }
            }
        ?>
    </body>
</html>