let age = prompt("Įveskite amžių");

if (isNaN(age)) {
  console.log("Netinkamai nurodytas amžius, amžius privalo būti skaičius");
} else if (age < 0) {
  console.log("Įvestas amžius yra per mažas");
} else if (age == 6) {
  console.log("Į mokyklą tikriausiai neina, bet gali būti ir pirmokas");
} else if (age < 7) {
  console.log("Neina į mokyklą");
} else if (age == 10) {
  console.log("Tikriausiai mokosi pradinėje, bet gali būti ir penktokas");
} else if (age >= 7 && age < 11) {
  console.log("Eina į pradinę klasę");
} else if (age >= 11 && age < 14) {
  console.log("Eina į pagrindinę");
} else if (age == 14) {
  console.log("Tikriausiai mokosi pagrindinėje, bet gali būti ir devintokas");
} else if (age == 18) {
  console.log(
    "Tikriausiai mokosi gimnazijoje, bet gali būti ir baigęs mokyklą"
  );
} else if (age >= 14 && age < 19) {
  console.log("Eina į gimnaziją");
} else if (age > 120) {
  console.log("Įvestas amžius yra per didelis");
} else {
  console.log("Mokyklą baigė");
}
