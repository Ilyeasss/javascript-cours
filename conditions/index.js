let a = 3;
let b = "3";
let x = "done";
let y = "not done"


if (a==b) {
    console.log("okay");
}
else{
    console.log("not okay");
};

if (a!=b){
    console.log("YES!")
}
else{
    console.log("NO!")
};

if (a==b && y==x){
    console.log("first example")
}
else if (a==b || y==x) {
    console.log("second example")
};

let jour;

switch (new Date().getDay()) {
    case 0:
        jour = "Sunday";
        break;
    case 1:
        jour = "Monday";
        break;
    case 2:
        jour = "Tuesday";
        break;
    case 3:
        jour = "Wednesday";
        break;
    case 4:
        jour = "Thursday";
        break;
    case 5:
        jour = "Friday";
        break;
    case 6:
        jour = "Saturday";
        break;
    default:
        jour = "Unknown Day";
}

console.log("Today is " + jour);

let dd = "developpement digitale";
let id = "id";

switch (dd) {
    case "developpement digitale":
        console.log("developpement digitale");
    break;
    case id:
        console.log("no");
    break;

}

let moyenne;
let mention;

switch(new moyenne){
    case moyenne < 10:
        mention = "repeter"
    case 10 <= moyenne < 12:
        mention = "passable"
    case 12 <= moyenne < 14:
        mention = "bien";
    case 14 <= moyenne < 16:
        mention = "A.bien"
    case 16 <= moyenne < 18:
        mention = "T.bien";
    case 18 < moyenne <= 20:
        mention = "Exelent"
}

