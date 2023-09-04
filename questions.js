//Pirmas lygis
console.groupCollapsed("Pirmas lygis");
let correctAnswer11 = "1";
let playerAnswer11 = "0";

let correctAnswer12 = "1";
let playerAnswer12 = "0";

if (correctAnswer11 === playerAnswer11 && correctAnswer12 == playerAnswer12) {
  console.log("Patekai į kitą lygį. Abu atsakymas teisingi");
} else if (
  correctAnswer11 !== playerAnswer11 &&
  correctAnswer12 === playerAnswer12
) {
  console.log(
    "Patekai į kitą lygį. Pirmas atsakymas buvo neteisngas, bet antras teisingas."
  );
} else if (
  correctAnswer11 === playerAnswer11 &&
  correctAnswer12 !== playerAnswer12
) {
  console.log(
    "Patekai į kitą lygį. Pirmas atsakymas buvo teisngas, bet antras neteisingas."
  );
} else {
  console.log("Nepatekai į kitą lygį. Abu atsakymai neteisingi.");
}
console.groupEnd();

//Antras lygis

console.groupCollapsed("Antras lygis");
let correctAnswer21 = "1";
let playerAnswer21 = "1";

let correctAnswer22 = "1";
let playerAnswer22 = "1";

if (correctAnswer21 !== playerAnswer21 && correctAnswer22 === playerAnswer22) {
  console.log(
    "Nepatekai į kitą lygį. Pirmas atsakymas buvo neteisngas, bet antras teisingas."
  );
} else if (
  correctAnswer21 === playerAnswer21 &&
  correctAnswer22 !== playerAnswer22
) {
  console.log(
    "Nepatekai į kitą lygį. Pirmas atsakymas buvo teisngas, bet antras neteisingas."
  );
} else if (
  correctAnswer21 !== playerAnswer21 &&
  correctAnswer22 !== playerAnswer22
) {
  console.log("Nepatekai į kitą lygį. Abu atsakymai neteisingi.");
} else {
  console.log("Patekai į kitą lygį.");
}
console.groupEnd();

//Trečias lygis
console.groupCollapsed("Trečias lygis");

let correctAnswer31 = "1";
let playerAnswer31 = "1";

let correctAnswer32 = "1";
let playerAnswer32 = "1";

let correctAnswer33 = "1";
let playerAnswer33 = "0";

if (
  correctAnswer31 !== playerAnswer31 &&
  correctAnswer32 === playerAnswer32 &&
  correctAnswer33 === playerAnswer33
) {
  console.log("Patekai į kitą lygį. Pirmas atsakymas buvo neteisingas.");
} else if (
  correctAnswer31 === playerAnswer31 &&
  correctAnswer32 !== playerAnswer32 &&
  correctAnswer33 === playerAnswer33
) {
  console.log("Patekai į kitą lygį. Antras atsakymas buvo neteisngas.");
} else if (
  correctAnswer31 === playerAnswer31 &&
  correctAnswer32 === playerAnswer32 &&
  correctAnswer33 !== playerAnswer33
) {
  console.log("Patekai į kitą lygį. Trečias atsakymas neteisingas.");
} else if (
  correctAnswer31 !== playerAnswer31 &&
  correctAnswer32 !== playerAnswer32 &&
  correctAnswer33 !== playerAnswer33
) {
  console.log("Nepatekai į kitą lygį. Visi atsakymai neteisngi.");
} else if (
  correctAnswer31 !== playerAnswer31 &&
  correctAnswer32 !== playerAnswer32 &&
  correctAnswer33 === playerAnswer33
) {
  console.log("Neptekai į kitą lygį. Pirmas ir antras atsakymai neteisngi.");
} else if (
  correctAnswer31 !== playerAnswer31 &&
  correctAnswer32 === playerAnswer32 &&
  correctAnswer33 !== playerAnswer33
) {
  console.log("Neptekai į kitą lygį. Pirmas ir trečias atsakymai neteisngi.");
} else if (
  correctAnswer31 === playerAnswer31 &&
  correctAnswer32 !== playerAnswer32 &&
  correctAnswer33 !== playerAnswer33
) {
  console.log("Neptekai į kitą lygį. Antras ir trečias atsakymai neteisngi.");
} else {
  console.log("Patekai į kitą lygį.Visi atsakymai teisingi.");
}
console.groupEnd();
