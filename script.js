/*global$*/

$(document).ready(function(){
 
  function rolldice(x){
  //Place your code here 
 if(x==="Teacher") {
  var limit=3;
  
 
 }
 if (x==="Student"){
  var limit=4;
 }
  var num= Math.random();
  console.log(num);
   num= num*limit;
 
   return Math.floor(num);
    
  }
   
    var TeachersArray=[ "Josh", "Thai", "Micheal", "David"];
    console.log(TeachersArray[rolldice("Teacher")])
    
    var StudentsArray=["Barry", "Usman", "Jason", "Aldair", "Taufiq"]
    console.log(StudentsArray[rolldice("Student")])
  
  
    $("#tbutton").click(function(){
     $("#teacher").html(TeachersArray[rolldice("Teacher")]);
     
     
     
      
      
    });
    $("#sbutton").click(function(){
     $("#student").html(StudentsArray[rolldice("Student")])
     
    });
  
});
