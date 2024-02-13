//function somme(a, b){
//    return a + b;
//}

//let sm = somme(3,6)

//function expression
let somme = function(a,b){
    return a +b
}

let sm = somme (5,4)

// console.log(sm)

//Les fonctions flechee (Arrow functions)

// let a = function(){
//     return console.log("hello isfo!!!")
// }


// let greet = () =>{
//     console.log("hello world!!!")
// }

function nomComplet(nom, prenom) {
    let fullname = nom + " " + prenom;
    return fullname;
}

// console.log(nomComplet("Sidqui","Zakaria"))

// greet();

//Les expressions lambas

let jours = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanch"]

// jours.map(function(item){
//     return console.log(item)
// })

// jours.map((item) => {
//     return console.log(item)
// })

jours.map((item) => {
    if (item === "Jeudi"){
        item = item + "* jour ferier"
    }
    return console.log(item);
})

console.log(jours)

const stagiaires = [
    {nom: "Sidqui", prenom : "Zakaria", age:22},
    {nom: "Mouhimi", prenom : "Yousra", age:18},
    {nom: "Merzoug", prenom : "Khalid", age:17},
    {nom: "Ouafiqu", prenom : "Mohamed", age:19}
]

//*map: c'est une methode qui retourne un nouveau tableau (array)

let nomStagiaires;
nomStagiaires = stagiaires.map((info) => {
    fullName = info['nom']+" "+info['prenom'];
    return fullName
})

console.log(stagiaires)
console.log(nomStagiaires)

//dom: document object modelling

