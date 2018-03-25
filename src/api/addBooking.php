<?php
 require 'database_connection.php';

 $connect = database_connection();// Add the new data to the database.
 $postdata = file_get_contents("php://input");
 if(isset($postdata) && !empty($postdata))
 {
     $request     = json_decode($postdata);
     
     $newName  = preg_replace('/[^a-zA-Z ]/','',$request->newName);
     $newMobileNo = preg_replace('/[^0-9 ]/','',$request->mobileNo);
     $newEmail = preg_replace('/[^a-zA-Z ]/','',$request->ewEmail);
     $newLocationFrom = preg_replace('/[^a-zA-Z ]/','',$request->newLocationFrom);
     $newLocationTo = preg_replace('/[^a-zA-Z ]/','',$request->newLocationTo);
     $newFromAddress = preg_replace('/[^a-zA-Z ]/','',$request->newFromAddress);
     $newToAddress = preg_replace('/[^a-zA-Z ]/','',$request->newToAddress);receiver
     $newReceiver = preg_replace('/[^a-zA-Z ]/','',$request->newReceiver);
     $newSender = preg_replace('/[^a-zA-Z ]/','',$request->newSender);
     $newGoodsType = preg_replace('/[^a-zA-Z ]/','',$request->newGoodsType);
     $newPickUpDate = preg_replace('/[^a-zA-Z ]/','',$request->newPickUpDate);
     $newPickUpTime = preg_replace('/[^a-zA-Z ]/','',$request->newPickUpTime);
     
     if($newName  == '' || $newPhone == '') return;
 
     $sql = "INSERT INTO `booking_details`(`user_name`, `display_name`) VALUES ('$newName','$newEmail')";
 
     mysqli_query($connect,$sql);
 }
 exit;
 
?>