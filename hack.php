<?php
$data = file_get_contents('php://input');
$data = json_decode($data);
htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
print_r($data);
print "aaa";
if(false){
    $noodle = $data['noodle'];
    $taste = $data[''];
    $thickness = $data['thickness'];
    include 'aaa.html';
}else{
    include 'main.html';
    print_r($data);
}


function validate_form() {
    $input = array();
    $input['name'] = $_POST['id'];
    echo $input['name'];

}

?>
