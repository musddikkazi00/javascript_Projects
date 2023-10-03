

let person = {
    fname:"musddik",
    lname:"Kazi",

    get fullname(){
      return `${person.fname}  ${person.lname}`;
    }  
         ,
    set fullname(value){  

        if(typeof(value) !== typeof"hi"){
           throw new Error("bhai string dal yaha pe ");
        }
       let name = value.split(' ');
       this.fname = name[0];
       this.lname = name[1];

    }
}


console.log(person.fullname);


try{

person.fullname = "Rijvan Kazi";


}
catch(e){
       alert(e);
}

console.log(person.fullname);


function ans () {
          var a = 5;
      console.log(a);
      } 


      ans();


      
