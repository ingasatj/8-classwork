// #1

let birthday = 1973;
let currentYear = 2025;

console.log(currentYear - birthday);

//  #2
// შეკითხვები prompt-ში
let age = Number(prompt("1.Enter your age:"));
let movieType = prompt("2.Enter movie type (regular or 3D):");
let timeOfDay = prompt("3.Enter time of day (matinee or evening):");

// ბილეთის ფასი ასაკის მიხედვით
let basePrice = 0;

if (age < 10) {
  basePrice = 5;
} else if (age <= 65) {
  basePrice = 15;
} else {
  basePrice = 10;
}

// 3D-ის დამატება
if (movieType === "3d") {
  basePrice += 5;
}

// საღამოს სეანსის დამატება
if (timeOfDay === "evening") {
  basePrice += 5;
}

// Bonus: ფასდაკლების ბილეთი
let hasDiscount = prompt("Do you have a discount ticket? (yes or no):");

if (hasDiscount === "yes") {
  // არჩევითია ან 25%-ით ფასდაკლება ან 5 ლარით (ამაზე ვიწვალე :( )
  let discountType = prompt(
    "Do you want 25% discount or 5 GEL off? (type '25%' or '5'):"
  );

  if (discountType === "25%") {
    basePrice = basePrice * 0.75;
  } else if (discountType === "5") {
    basePrice -= 5;
  }
}
// console.log-ში შედეგის გამოტანა
console.log("ბილეთის ფასი თქვენთვის არის: " + basePrice + " ლარი.");
