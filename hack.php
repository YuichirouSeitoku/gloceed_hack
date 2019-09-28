<?php
$url = "http://sample.com/jsondata.json";
$json = file_get_contents($url);
$json = mb_convert_encoding($json, 'UTF8','ASCII,JIS,UTF-8,EUC-JP,SJIS-WIN');
$arr = json_decode($json,true);

//データベースに接続
try{
    $db = new PDO('');
    $db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXEPTION);
    //テーブルの作成
    $q = $db->exec("CREATE TABLE ramens (
    ramen_id INT,
    ramen_url VARCHAR(255),
    ramen_width VARCHAR(255),
    ramen_taste VARCHAR(255),
    ramen_atmos VARCHAR(255);
    )")
    //データの挿入
    $affectedRows = $db->exec("INSERT INTO ramens (ramen_id, ramen_url, ramen_width, ramen_taste,ramen_atmos")
}catch(PDOException $e){
    print "Can't connect: " . $e->getMessage();
    exit();
}



//データを送信されたかどうか
if('POST' == $_SERVER['REQUEST_METHOD']){
    list($errors, $input) = validate_form();
    if($errors){
        show_form($errors);
    }
    else{
        process_form($input);
    }
}else{
    show_form();
}

function show_form($errors = array()){
    $defaults = array();
    $form = new FormHelper($defaults);
    include 'complete-form.php';
}

function validate_form(){

}

function process_form($input){
    global $db;

    $sql = 'SELECT '
}



?>