console.log(typeof(5))
console.log(typeof("to be or not to be"))
console.log(typeof(true))

let a;
let b;
a=5;
b=a;
b=6;

console.log(a)
console.log(b)

//passage par referance ou par adresse
liste = [1,2,3]

let cliste = liste
cliste.push(5)

console.log(liste)
console.log(cliste)

cstg = {
    id : 1,
    prenom:"Ahmed"
}

let stagiaire;

cstg = stagiaire




let liste2 = [].concat(liste)

//spread operator
let liste3 = [...liste]





let ex = "3.14"

let ex2 = " "

let ex3 = ""

let ex4 = "99 98"

console.log(+ex)
console.log(+ex2)
console.log(+ex3)
console.log(+ex4)

console.log(typeof(ex))

console.log(String(100)+String(150))
console.log(ex.toString())
console.log((123).toString())
console.log(String(100+150))

let aD = new Date()
console.log(aD.getMonth())
let bD = new Date()
console.log(bD.getDate())
let cD = new Date()
console.log(cD.getMinutes())
let dD = new Date()
console.log(dD.getSeconds())

console.log(Date(aD).toString())
