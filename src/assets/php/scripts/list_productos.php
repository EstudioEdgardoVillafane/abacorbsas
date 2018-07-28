<?php

	include '../class/abacor.php';
	include '../class/connect.php';

	$NewConnect = new Abacor();
	
	$sql="SELECT * FROM usos WHERE u_status = 1";	
	$NewConnect->CreateJson($sql);

?>