const x = document.querySelector(".age1").value
console.log(x)
const y = document.querySelector(".age2").value
console.log(y)
const z = document.querySelector(".age3").value
console.log(z)

console.log(Number(x)+Number(y)+Number(z))

if (Number(x)>18){
    document.querySelector(".age1").style.backgroundColor = "green";
}
else {
    document.querySelector(".age1").style.backgroundColor = "red";
};

if (Number(y)>18){
    document.querySelector(".age2").style.backgroundColor = "green";
}
else {
    document.querySelector(".age2").style.backgroundColor = "red";
};

if (Number(z)>18){
    document.querySelector(".age3").style.backgroundColor = "green";
}
else {
    document.querySelector(".age3").style.backgroundColor = "red";
};

