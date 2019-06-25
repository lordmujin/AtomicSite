<?php

$conn = mysqli_connect("localhost", "root", "", "newsletter");
 
if($conn === false){
    die("ERROR:. " . mysqli_connect_error());
}

$nome = $_POST['nome'];
$email = $_POST['email'];
 
$sql = "INSERT INTO users (nome, email) VALUES ('$nome', '$email')";
if(mysqli_query($conn, $sql)){
    header('Location: '. 'index.html');
} else{
    echo "ERROR: $sql. " . mysqli_error($conn);
}
 
mysqli_close($conn);
?>
