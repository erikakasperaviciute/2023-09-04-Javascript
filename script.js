console.groupCollapsed("Basics of javascript"); //sugrupuojam konsole
// Kintamieji
// 1. Inicijavimo žodis (var, let, const)
// 2. Kintamojo pavadinimas
// 3. Lygybės ženklas
// 4. Kintamojo vertė

var vardas = "John"; // String(tekstas) duomenų tipas - tai kas tarp kabučių yra stringas
let pavarde = "Smith"; //string
let miestas = `Kaunas`; //kitokios kabutės //string
let amzius = 25; //number duomenų tipas, nėra kabučių
let yraStudentas = true; //boolean duomenų tipas: true or false
const asmensKodas = 39005142222; //const neleidžia keisti reikšmių.

console.log(vardas, pavarde);
console.log(vardas);
console.log(miestas);
console.log(yraStudentas);

//Kintamojo pakeitimas
pavarde = "Steve";
console.log(pavarde);

console.log(vardas, typeof vardas);

console.log("Hello, " + vardas);
console.log("Hello, " + vardas + ".");
console.log(`Hello, ${vardas}`); //tik su back tick kabutėm

console.log(
  vardas +
    " " +
    pavarde +
    " (amžius " +
    amzius +
    "m.), asmens kodas: " +
    asmensKodas +
    ", gyvenamasis miestas: " +
    miestas +
    "."
);
console.log(
  `${vardas} ${pavarde} (amžius ${26}m.), asmens kodas: ${asmensKodas} gyvenamasis miestas: ${miestas}`
);

console.log('John `said`: "That\'s my car".'); // \-kad ignoruotų kabutę

console.log('John \\`said\\`: "That\'s my car".');
console.log('John \\`said\\`: "That\'s my car".');
console.log(`John \\\`said\\\`: "That's my car".`);

let sentence = "Lorem ipsum dolor";
console.log(sentence);
console.log(sentence.length); // simbolių skaičius
console.log(sentence[0]); //pirmas simbolis
console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());
console.log(sentence.replace("Lorem", "ipsum")); //pakeičia vieną žodį
console.log(sentence.replaceAll("o", "i")); //pakeičia VISAS o raides į i raides

console.groupEnd(); //užbaigiam grupę

console.groupCollapsed("Math operators");
//Matematiniai operatoriai

let num1 = 22;
let num2 = 10;
let num3 = "10";

console.log(num1);
console.log(num2);
console.log(num3);

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2); //liekana

console.log((num1 + num2) * num2);

console.log(num1 + num3); // matematinių vaiksmu su stringu neatliekame
console.groupEnd();

console.group("Conditions");
//Sąlygos (Conditions)

//dviguba lygybė - tikrina tik vertę ir nekreipia dėmėsio į duomenų tipus
console.log(10 == 10);
console.log("10" == "10");
console.log(10 == "10");
//pirmiausiai tikrina ar sutampa duomenų tipai, o po to tikrina reikšmes
console.log(10 === 10); //true
console.log("10" === "10"); //true
console.log(10 === "10"); //false

console.log(10 > 10); //false
console.log(10 < 10); //false
console.log(10 >= 10); //true
console.log(10 <= 10); //true

console.log(10 == 10);
console.log(10 !== 10);

console.log(10 === 10);
console.log(10 !== 10);

// ! - yra priešingybė
console.log(true);
console.log(!true);
console.log(false);
console.log(!false);
console.log(!!true);

//IF, else if, else

// if (sąlyga) {
//   veiksmas;
// }
let originalLight = "GREEN";
let light = originalLight.toLowerCase();

if (light === "green") {
  console.log("Galima eiti");
} else if (light === "yellow") {
  console.log("Pasiruošk");
} else if (light === "red") {
  console.log("Negalima eiti");
} else {
  console.log("Sugedo :(");
}

// let word = "tree".toLowerCase();
let originalWord = "House";
let word = originalWord.toLowerCase();
// console.log(word[0]);
// console.log(word[1]);
// console.log(word[2]);
// console.log(word[3]);

// if (word[0] === "t") {
//   console.log("Žodis prasideda raide t");
// } else {
//   console.log("Žodis neprasideda raide t");
// }

let firstLetter = word[0];
let thirdLetter = word[2];

if (firstLetter === "t") {
  console.log(`Žodis ${word} prasideda raide t`);
} else {
  console.log(`Žodis ${word} neprasideda raide t`);
}

//AND operator - &&
if (firstLetter === "t" && thirdLetter === "p") {
  console.log("good");
} else {
  console.log("Bad");
}

// OR operator

if (firstLetter === "t" || thirdLetter === "p") {
  console.log("pirma raidė t arba trečia raidė p");
} else {
  console.log("pirma raidė nėra t ir trečia raidė nėra p");
}

let personAge = 16;
//Jei dirbam su sveikais skaičiais tai lygybė nebūtina
if (personAge >= 18) {
  console.log("pirkti gali");
} else {
  console.log("Pirkti negalima");
}

if (personAge > 17) {
  console.log("pirkti gali");
} else {
  console.log("Pirkti negalima");
}

if (personAge < 18) {
  console.log("pirkti negali");
} else {
  console.log("Pirkti galima");
}

if (personAge < 16) {
  console.log("pirkti negalima");
} else if (personAge >= 16 && personAge < 18) {
  console.log("Pirkti galima su sutikimu");
} else if (personAge >= 18) {
  console.log("Pirkti galima");
}

if (personAge < 16) {
  console.log("pirkti negalima");
} else if (personAge < 18) {
  console.log("Pirkti galima su sutikimu");
} else {
  console.log("Pirkti galima");
}

if (personAge >= 18) {
  console.log("pirkti galima");
} else if (personAge >= 16) {
  console.log("Pirkti galima su sutikimu");
} else {
  console.log("Pirkti negalima");
}

//Nesting

if (personAge >= 16) {
  if (personAge >= 18) {
    console.log("Gali pirkti");
  } else {
    console.log("Gali pirkti su sutikimu");
  }
} else {
  console.log("Pirkti negalima");
}

console.groupEnd();
