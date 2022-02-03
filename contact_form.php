<?php


$firstName = htmlspecialchars(isset($_POST['firstName'])? $_POST['firstName'] : NULL);
$lastName = htmlspecialchars(isset($_POST['lastName'])? $_POST['lastName'] : NULL);
$message = htmlspecialchars(isset($_POST['message'])? $_POST['message'] : NULL);
$mail = htmlspecialchars(isset($_POST['mail'])? $_POST['mail'] : NULL);
$url = htmlspecialchars(isset($_POST['url'])? $_POST['url'] : NULL);
$url = $url == '' ? null : $url;

try{
	$pdo = new PDO('sqlite:'.dirname(__FILE__).'/database.db');
	$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE,PDO::FETCH_ASSOC);
	$pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

	$pdo->query(
		'CREATE TABLE IF NOT EXISTS message (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			first_name VARCHAR(50) NOT NULL,
			last_name VARCHAR(50) NOT NULL,
			message TEXT NOT NULL,
			mail VARCHAR(150) NOT NULL
		)'
	);

	if(preg_match('/^[\S]{1,50}$/',$firstName) && 
	preg_match('/^[\S]{1,50}$/',$lastName) && 
	$message !== '' &&
	($url == null || preg_match('/^(?:http|https|ftp):\/\/[\S]{,92}$/',$url))&&
	preg_match('/^[a-z0-9-_.]+@[a-z0-9-_.]+\.[a-z]{2,}$/',$mail)){

		$statement = $pdo->prepare(
			'INSERT INTO message(first_name,last_name,message,mail,url) VALUES (:first_name,:last_name,:message,:mail,:url)'
		);

		$statement->bindValue('first_name',$firstName,PDO::PARAM_STR);
		$statement->bindValue('last_name',$lastName,PDO::PARAM_STR);
		$statement->bindValue('message',$message,PDO::PARAM_STR);
		$statement->bindValue('mail',$mail,PDO::PARAM_STR);
		$statement->bindValue('url',$url,PDO::PARAM_STR);
		$statement->execute();
	}
}catch(PDOException $exception){
	var_dump($exception);
}
