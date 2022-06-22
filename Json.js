 // compare two JSON have the some properties without order.
 var obj1={"name":"person1","age":5};
    
 var obj2={"age":5,"name":"person"};

 var a=true; 
 if(Object.keys(obj1).length==Object.keys(obj2).length){
   for(key in obj1){
       if(obj1[key]==obj2[key]){

           continue;

       }
       else {
       
           b=false;
           break;
       }
   }
 }
 else{
   a=true;
 }
   console.log(a);