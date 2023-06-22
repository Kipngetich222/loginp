const person={
    firstName:"John",
    lastName:"Doe",
    language: "en",
    get lang(){
        return this.language.toUpperCase();
    }
};

//display data from the object using a method:
document.getElementById("demo").innerHTML=person.lang;


//using object method
// const person={
//     firstName:"John",
//     lastName:"Doe",
//     fullName: function(){
//         return this.firstName+ " "+this.lastName;
//     }
// };

// //display data from the object using a method:
// document.getElementById("demo").innerHTML=person.fullName();


//setter
const person1={
    firstName:"John",
    lastName:"Doe",
    language: "",
    set lang(lang){
        return this.language=lang.toUpperCase();
    }
};

//set an object using a setter
person1.lang="enn";

//display data from the object 
document.getElementById("demo").innerHTML=person1.language;

