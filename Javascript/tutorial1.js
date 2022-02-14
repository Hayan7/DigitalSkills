/*  */

/*function printerService(callBack){
    return callBack
}
function getUser(username){
    return username
}
let result = printerService(getUser('admin'))
console.log(result)
function student(object){

}*/
/* function askPermission(name,age){
    return age < 18 ? `${name}! you are not allowed to drink alcohol`:`${name}!  Enjoy your drink!`
}
console.log(askPermission('Mark',20))
console.log(askPermission('John',16)) */

var person = {
    "firstName": "Abdeljalil",
    "secondName": "El Hayani Marzoqi",
    "dateOfBirth": 1977,
    "email" : "hayan@abdel#gmail.com",
    "studies": ["history","Maths","Japanese"],
    "hobbies" : {
        "sport" : ["jogging","football"],
        "leisure": "reading"
    },
    fullName:function(){
        return this.firstName +" "+ this.secondName;
    }
}
console.log(person.hobbies.sport[1])
console.log(person.studies[1])
console.log("I am " + person.fullName() +","+ "I was born in " + 
person.dateOfBirth+ "." + " My email address is: "+ person.email+ "My hobbies are "+ 
person.hobbies.sport[0] +" and "+ person.hobbies.leisure[0])