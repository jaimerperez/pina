<?php

namespace App\Controller;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

class EmailController
{
    public $mail = null;

    function __construct() {
        $mail = new PHPMailer(true);
        //Server settings
        $mail->isSMTP();                                        // Set mailer to use SMTP
        $mail->Host = 'smtp.gmail.com';                         // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                                 // Enable SMTP authentication
        $mail->Username = 'pina@gestiondeformacion.es';//'pina@gestiondeformacion.es';         // SMTP username
        $mail->Password = 'iaezjjlggrjxiave';//'cristian>jaime';                     // SMTP password
        $mail->SMTPSecure = 'tls';                              // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 587;                                      // TCP port to connect to
        $mail->setLanguage('es');
        $mail->CharSet = 'UTF-8';
        //Recipients
        $mail->setFrom('pina@gestiondeformacion.es', 'Piña');

        $this->mail = $mail;
    }

    public function send_email($address,$body,$subject)
    {
        $mail = $this->mail;
        $mail->addAddress($address);     // Add a recipient
        
        //Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = $subject;
        $mail->Body    = $body;
        $mail->AltBody = 'Lo sentimos, utilice un cliente de correo que soporte HTML';
        
        try {
            $mail->send();
        } catch (Exception $e) {
            return [false,'Mailer Error: ' . $mail->ErrorInfo];
        }
        
        return true;
    }
}