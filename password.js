let password = "123456789#";
let hashtag = "#";

if (password.length < 16) {
  console.log(
    "Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo."
  );
} else if (!password.includes(hashtag)) {
  console.log("Slaptažodis privalo turėti grotažymes.");
} else if (password.length < 21) {
  console.log(
    "Slaptažodis yra tinkamas. Tačiau rekomenduojama, jog jis būtų bent 21 simbolio ilgumo."
  );
} else {
  console.log("Slaptažodis yra tinkamas.");
}
