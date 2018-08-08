<?php



session_start();

echo "esta es la version de ".phpversion();

if($_SESSION["usuario"]==""){
    echo "puto";
}else{
    echo "toto";
}


?>