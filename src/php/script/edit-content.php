<?php
require_once '../class/abacor.php';
require_once '../class/connect.php';

$NewConnect = new Abacor();
	
	$Titulo = $_POST["titulo-ed"];
	$Titulo = str_replace(" ","-",$Titulo);
	$ID = $_POST["id-e"];
	$Subtitulo = $_POST["subtitulo-ed"];
	$Parrafo = $_POST["parrafo-ed"];
	$idproducto=$_POST["producto-ed"];
	$tipo = $_FILES['uploadedfile']['type'];
	$tamano = $_FILES['uploadedfile']['size'];
	$tmp = $_FILES['uploadedfile']['tmp_name'];
	$file_name = $_FILES['uploadedfile']['name'];


	$ancho_fijo=1920;
	$alto_fijo=1080;
	$ext=explode('/',$tipo);
	$aleatorio=rand(0,999999999);
	$nuevo_nombre="port-".$aleatorio.'.'.$ext[1];
	$ruta="../../uploads";
	$URL = "uploads/".$nuevo_nombre;
	if($tamano){
		if($tipo == "image/pjpeg" || $tipo == "image/jpeg"){
			$nueva_img = imagecreatefromjpeg($tmp);
		}elseif($tipo == "image/x-png" || $tipo == "image/png"){
			$nueva_img = imagecreatefrompng($tmp);
		}elseif($tipo == "image/gif"){
			$nueva_img = imagecreatefromgif($tmp);
		}
	}

	list($ancho, $alto) = getimagesize($tmp);
	$proporcion = $ancho/$alto;
	if($proporcion >1){
		$nuevo_ancho=$ancho_fijo;
		$nuevo_alto=$ancho_fijo/$proporcion;
	}else{
		//este no se va a cumplir porque todas las portadas van a ser apaisadas
		$nuevo_ancho=$alto_fijo*$proporcion;
		$nuevo_alto=$alto_fijo;
	}	

	$img_redimensionada = imagecreatetruecolor($nuevo_ancho,$nuevo_alto);
	imagecopyresampled($img_redimensionada, $nueva_img, 0, 0, 0, 0, $nuevo_ancho, $nuevo_alto, $ancho, $alto);
	
if($tipo == "image/x-png" || $tipo == "image/png"){
    imagepng ($img_redimensionada,"$ruta/$nuevo_nombre");
}else{
	imagejpeg ($img_redimensionada,"$ruta/$nuevo_nombre",80);
}	
imagedestroy ($img_redimensionada);
imagedestroy ($nueva_img);
if($tamano == 0){
    $sql = "UPDATE uso SET u_titulo = '".$Titulo."', u_subtitulo = '".$Subtitulo."', u_parrafo = '".$Parrafo."', u_idproducto= '".$idproducto."' WHERE u_id ='".$ID."'";
}else{
    $sql = "UPDATE uso SET u_titulo = '".$Titulo."', u_subtitulo = '".$Subtitulo."', u_parrafo = '".$Parrafo."', u_imagen = '".$URL."', u_idproducto= '".$idproducto."' WHERE u_id ='".$ID."'";
}
echo $tamano; 
         $NewConnect->ExecuteSql($sql);

 ?>