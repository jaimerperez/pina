<?php

namespace App\Controller;

use Symfony\Component\Config\Definition\Exception\Exception;
use App\Controller\CRUDController;

class HelperController
{

	private static function validate_token($tk): Array
    {
        $token_CRUD = new CRUDController('tokens','value');
        $token = $token_CRUD->one($tk);
        //var_dump($token);
        if($token === null || $token == false)
            return [false,"ERROR: Token no valido"];

        return [true,$token['id_user']];
    }

	public static function validate_req($req, $param, $token=true, $permits=3)
	{
		foreach ($param as $p) {
            if( ! $req->has($p))
                return [false,'ERROR: Falta el campo ' . $p];
        }

        if($token){
            $tk = $req->get('token');
            $validation = HelperController::validate_token($tk);
            if( ! $validation[0] ){
                return [false,$validation[1]];
            }

            $CRUD = new CRUDController('users','id');
            $user = $CRUD->one($validation[1]);

            if($permits < 3){
                if($user["id_rol"] > $permits ){ // 1 = admin
                    return [false,'ERROR: No tiene permisos para ejecutar esta accion'];
                }
            }
            return [true,$user];
        }

        return [true];
	}

	public static function push_notification(int $id_user, int $id_user_create, string $message="", int $mension=0, int $assign=0)
	{
		$notification = array(
            'id_user' => $id_user
			,'id_user_create' => $id_user_create
			,'message' => $message
			,'mension' => $mension
			,'assign' => $assign
        );
		$CRUD_notifications = new CRUDController('notifications','id');
		try {
			$CRUD_notifications->add( $notification );
		} catch (\Throwable $th) {
			throw $th;
		}
	}

	public static function push_event(int $id_user, string $name="")
	{
		$event = array(
            'id_user' => $id_user
			,'name' => $name
        );
		$CRUD_events = new CRUDController('events','id');
		try {
			$CRUD_events->add( $event );
		} catch (\Throwable $th) {
			throw $th;
		}
	}


	public static function upload_file($id)
	{
		$uploads_dir = "../public/assets/files/";
        //Imagen
        
		if( ! isset($_FILES["image"]))
			return;
		$file =$_FILES["image"];
		$name = "";

        if( ! $file["error"])
            try {
                $tmp_name = $file["tmp_name"];
				$path = $_FILES['image']['name'];
				$ext = pathinfo($path, PATHINFO_EXTENSION);
                $name = $id. '.' . $ext;

                move_uploaded_file($tmp_name, "$uploads_dir/$name");
            } catch (\Throwable $th) {
                throw $th;
            }

		return $name;
	}

	public static function upload_img($dir="",$id=null)
	{
		#$uploads_dir = "build/images/uploads/" . $dir;
		$uploads_dir = "../public/assets/images/" . $dir;
        //Imagen
        
		if( ! isset($_FILES["image"]))
			return;
		$image =$_FILES["image"];

        if( ! $image["error"])
            try {
                $tmp_name = $image["tmp_name"];
                $name = $id.'.png' ?? basename($image["name"]);

                move_uploaded_file($tmp_name, "$uploads_dir/$name");
            } catch (\Throwable $th) {
                throw $th;
            }

		return false;
	}

    public static function random_string(int $len = 8, string $type = 'alnum'): string
	{
		switch ($type)
		{
			case 'alnum':
			case 'numeric':
			case 'nozero':
			case 'alpha':
				switch ($type)
				{
					case 'alpha':
						$pool = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
						break;
					case 'alnum':
						$pool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
						break;
					case 'numeric':
						$pool = '0123456789';
						break;
					case 'nozero':
						$pool = '123456789';
						break;
				}

				return substr(str_shuffle(str_repeat($pool, ceil($len / strlen($pool)))), 0, $len);
			case 'md5':
				return md5(uniqid(mt_rand(), true));
			case 'sha1':
				return sha1(uniqid(mt_rand(), true));
			case 'crypto':
				return bin2hex(random_bytes($len / 2));
		}
		// 'basic' type treated as default
		return (string) mt_rand();
	}

	function SpanishDate($separador="-",$time=null)
	{

		$ano = date('Y',$time);
		$mes = date('n',$time);
		$dia = date('d',$time);
		$diasemana = date('w',$time);
		$diassemanaN= array("Domingo","Lunes","Martes","Miércoles",
						"Jueves","Viernes","Sábado");
		$mesesN=array(1=>"Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio",
					"Agosto","Septiembre","Octubre","Noviembre","Diciembre");
		return $diassemanaN[$diasemana].", $dia de ". $mesesN[$mes] ." de $ano";
	}  
}