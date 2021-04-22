// ## EXO 1
// let multiplicateur = 5;

// for (let i = 1; i < 10; i++) {
//     console.log(`${multiplicateur} X ${i} = ${multiplicateur * i}`);
// }


// ## EXO 2
// let multiplicateur = 5;

// for (let i = 2; i < 11; i+=2) {
//     console.log(`${multiplicateur} X ${i} = ${multiplicateur * i}`);
// }


// ## EXO 3
// let soustraire = 2;

// for (let i = 22; i > 1; i-=2) {
//     console.log(`${i - soustraire}`);
// }


// ## EXO 4
// let array = ["Farhad", "Yassin", "Alexis", "Kevin", "Junior", "Andy", "Tania", "Issam", "Mohammed","Mihai", "Loïc", "Charles", "William", "Oussama", "Ilyas", "Anthony", "Dorian", "Alain"];
// let longPrenoms = [];

// for (let i = 0; i < array.length; i++) {
//     if (i > 5) {
//         longPrenoms.push(array[i]);
//         array.splice(i, 1);
//         i = i - 1;
//     }
// }

// array.forEach(i => {
//     if (i.length > 5) {
//         longPrenoms.push(i);
//         array.splice(i, 1);
//         i = i - 1;
//     }
// });

// console.log(array, longPrenoms);


// ## 5
// let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];
// let grossesSommes = [];

// for (let i = 0; i < sommes.length; i++) {
//     if (sommes[i] > 60) {
//         grossesSommes.push(sommes[i]);
//         sommes.splice(i, 1)
//         i = i - 1;
//     }
// }

// sommes.forEach(i => {
//     if (i > 60) {
//         grossesSommes.push(i);
//         sommes.splice(i, 1)
        
//     }
// });
// console.log(sommes, grossesSommes);


// ## 6
let donnees = [14, 7, 97, {}, "247", 67, 101, true, 34, 78, [], "coding school", 0, 11, 32, "italie", 61, null, "cent", 100];
let typeString = [];
let typeNumber = [];
let typeObject = [];
let typeAutres = [];

for (let i = 0; i < donnees.length; i++){
    if (typeof donnees[i] === 'number') {
        typeNumber.push(donnees[i]);
        donnees.splice(i, 1);
        i = i - 1;

    } else if (typeof donnees[i] === 'string') {
        typeString.push(donnees[i]);
        donnees.splice(i, 1);
        i = i - 1;

    } else if (typeof donnees[i] === 'object') {
        typeObject.push(donnees[i]);
        donnees.splice(i, 1);
        i = i - 1;
    } else {
        typeAutres.push(donnees[i]);
        donnees.splice(i, 1);
        i = i - 1;
    }
};

console.log(donnees, typeString, typeNumber, typeObject, typeAutres);