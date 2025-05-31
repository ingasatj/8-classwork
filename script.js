let birthday = 1973;
let currentYear = 2025;

console.log(currentYear - birthday);

//  #2
let ticketPrice = 5;
let age = Number(prompt("ჩაწერეთ თქვენი ასაკი"));
let film3d = prompt("ჩაწერეთ რომელი მეთოდით გინდათ ფილმის ნახავა D3 | REGULAR");

if (age < 10) {
  console.log(ticketPrice);
} else if (age < 10 && film3d === D3) {
  console.log(ticketPrice + 5);
} else if (age < 65) {
  console.log(ticketPrice + 5);
} else if (age >= 65) {
  console.log(ticketPrice + 10);
} else if (age < 10 && film3d === 1) {
  console.log(ticketPrice + 5);
} else {
  ("გთხოვთ ასაკი ჩაწეროთ ციფრებით");
}
