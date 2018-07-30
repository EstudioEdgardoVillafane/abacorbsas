<?php

	include '../class/abacor.php';
	include '../class/connect.php';

	$NewConnect = new Abacor();
	
		$sql="SELECT * FROM productos WHERE p_status = 1";	
		$NewConnect->CreateJson($sql);
	

?>