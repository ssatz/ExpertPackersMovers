<?php
 require 'database_connection.php';

 $connect = database_connection();// Add the new data to the database.
 $postdata = file_get_contents("php://input");
 if(isset($postdata) && !empty($postdata))
 {
     $request     = json_decode($postdata);
     
     $newName  = preg_replace('/[^a-zA-Z ]/','',$request->newName);
     $newPhone = preg_replace('/[^0-9 ]/','',$request->newPhone);
     
     if($newName  == '' || $newPhone == '') return;
 
     $sql = "INSERT INTO `user_details`(`user_name`, `display_name`) VALUES ('$newName','$newPhone')";
 
     mysqli_query($connect,$sql);
 }
 exit;
 
?>