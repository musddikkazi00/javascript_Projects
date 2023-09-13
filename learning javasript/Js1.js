console.log("hello jee");

for(let i = 0 ;i<10 ; i++){
    console.log( i + "   I am MK the best programmer")
}

// *******  objects *******

let circle = {
    radius : 3 ,
    circle : 5 ,
               
    draw : function(){
        console.log(" drawing the circle ")
    }
}; 

// ********object creation in factory function*******

function createCircle(r) {
  return   circle = {
        area : (3.14)*(r**2),   
        radius : r ,
        circum : 2*(3.14) * r, 
        draw : function(){
            console.log("drawing the function");
        }
      }  
     
}



//**********object creation using constructor ****/
 
function rectangle(len, bre){
  this.length = len,
  this.breadth = bre;

  this.drow = function(){
    console.log("drawing the rectangle");
  }
}

// creation object through the constructor
 
     let rect1 = new rectangle(4,5);


// creation object through the factory function
     let c1 = createCircle(10);

console.log(c1.area);

function 
hello() {
  console.log('hi');  
};  


//  dynamic nature of objects 

// adding property in object 
c1.color =" yellow";

console.log(c1);

console.log(c1.color)

// deleting property from the object 
 delete c1.color;

console.log(c1);


//*********!!!!! fuctions are object in javasript !!!!!*************



//the loop which traverse the object
for(let i in circle){
  console.log(i,circle[i]);
}
