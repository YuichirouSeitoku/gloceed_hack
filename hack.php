<?php
$data = file_get_contents('php://input');
$data = json_decode($data, true);
error_log(print_r($data,true),"3","./error.log");
$data = array(
    [soup] => 'miso',
);

if($data['soup'] == 'miso'){
    include 'aaa.html';
}else{
    include 'main.html';
    echo "<pre>";
    var_dump($data["soup"]);
    echo "</pre>";
}

if($data["soup"] == 'shouyu'){;}

/*
function validate_form() {
    $input = array();
    $input['name'] = $_POST['id'];
    echo "<pre>";
    var_dump($data);
    echo "</pre>";

}
*/
?>
