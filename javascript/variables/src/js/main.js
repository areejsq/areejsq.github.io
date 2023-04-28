let myName ="Quinten de clerck";
console.log("Naam(let):"+myName)
const permenant="Deze variable kan niet veranderen van waarde";
const yearOfBearth =1995;
console.log("geboorte jaar (const):"+ yearOfBearth)
var nationality = "Belgie";
console.log("nationaliteit (var):"+nationality);
let isMale = true;
console.log("gender:"+isMale); 
let hobbies = ["lezen","koken","wandelen"];
console.log("hobbies" , hobbies)

let person={
    firstname:"Areej",
    lastname:"Alsaqer",
    age:25,
    nationality:"Belgie",
    hobbies: ["lezen","koken","wandelen"]
}
console.log("person: ",person);
let persons = [  
    {
    firstname:"sam",
    lastname:"radi",
    age:26,
    nationality:"Belgie",
    hobbies:["lezen","koken","wandelen"]
    } ,
    {
        firstname:"noor",
        lastname:"diab",
        age:22,
        nationality:"Belgie",
        hobbies:["lopen","zingen","schilderen"]
    },
    {
        firstname:"haifa",
        lastname:"wehbi",
        age:60,
        nationality:"Belgie",
        hobbies:["dancen","zingen","reizen"]
    }
] 
console.log("person 1 voornaam :",persons[0].firstname);
console.log("person 1 hobbies :",persons[1].hobbies);

//var buiten een functie==> overal beschikbaar
 let age =27;
if (age>18)
{ var isAdult=true}
console.log("is adult: ",isAdult);

function demolet()
{
   
    if (age>18)
  { let isAdult2=true //let is enkel beschikbaar binnen de scope waar het gedifinieerd is
    console.log("(binnen de if) is adult2 : ",isAdult2);
  }
  //console.log("(buiten de if) is adult2: ",isAdult2);
}

demolet();

let notAnumber = "abc /5";
console.log("notAnumber:",notAnumber);

let numberOne =10;
let numberTwo=10;
let numberThree ="10";

console.log("numberOne == numberTwo",numberOne === numberTwo); //true
console.log("numberOne == numberThree",numberOne === numberThree); //false

