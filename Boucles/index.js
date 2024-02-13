let jours =["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanch"]


//* i loop
for (let i=0 ; i<=6 ; i++) {
    //console.log(jours[i])
}

for (let jr in jours){
    //console.log(jr)
    //console.log(jours[jr])
}

for (let days of jours){
    //console.log(days)
}


//*While loop
let n;
n = 10
while(n>=0){
    //console.log(n)
    n -= 1
}

let m = -1;
do {
    //console.log(m)
    m -= 1
}
while (m >= 0)

//*ForEach 


let txtJours= "";

jours.forEach(myFunction)
function myFunction(value, index, array){
    txtJours += " " + value;
}

//console.log(txtJours)


//*Break 
for (let j=0; j<= (jours.length -1);j++){
    if (j === 3){
        console.log("stop");
        break;
    }
    console.log(jours[j])
}

//*Continue
for (let j=0; j<= (jours.length -1);j++){
    if(j === 3){
        console.log("stop");
        continue;
    }
    console.log(jours[j])
}