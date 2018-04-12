<?php
	include '../class/abacor.php';
	include '../class/connect.php';

	$NewConnect = new Abacor();
	
	if($_GET["data"]==1){
		$sql="SELECT u_id,u_titulo,u_subtitulo,u_parrafo,u_imagen,u_idproducto,u_status,p_id,p_nombre FROM uso,productos WHERE u_status=1 and p_id=u_idproducto";	
		$NewConnect->CreateJson($sql);
	}elseif($_GET["data"]==2){
		$sqld = "UPDATE uso SET u_status = 0 WHERE u_id = '".$_GET["id"]."'";
		$NewConnect->Borrar($sqld);
	}elseif($_GET["data"]==4){
		$sql="UPDATE uso SET
		u_titulo = '".$_GET["titulo"]."',
		u_subtitulo = '".$_GET["subtitulo"]."',
		u_parrafo = '".$_GET["descripcion"]."'
		u_idproducto = '".$_GET["idproducto"]."'
		WHERE u_id = '".$_GET["id"]."'";
		$NewConnect->ExecuteSql($sql);

	}

?>